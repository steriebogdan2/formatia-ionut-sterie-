/*
# Create reviews table with photo support and moderation workflow

## Purpose
Stores client testimonials submitted via the public website. Reviews go through
a moderation workflow: new submissions default to "pending" and are never shown
publicly. Only reviews with status = "approved" are displayed to visitors.

## New Tables
- `reviews`
  - `id`            (uuid, primary key)
  - `full_name`     (text, required) — submitter's full name
  - `event_type`    (text, required) — one of: wedding, baptism, birthday,
                    anniversary, private_party, other
  - `rating`        (smallint, required, 1–5) — star rating
  - `message`       (text, required) — the review text
  - `photo_url`     (text, nullable) — public URL of uploaded profile photo
                    stored in Supabase Storage (bucket: review-photos)
  - `status`        (text, required, default 'pending') — moderation status:
                    'pending' | 'approved' | 'rejected'
  - `created_at`    (timestamptz, default now()) — submission timestamp
  - `updated_at`    (timestamptz, default now()) — last modification timestamp

## Indexes
- `idx_reviews_status` on `status` — the public list query filters by status
- `idx_reviews_created_at_desc` on `created_at DESC` — newest-first ordering

## Security (Row Level Security)
This is a public, no-auth website. The anon-key client must be able to:
  - INSERT new reviews (status forced to 'pending' by the INSERT policy).
  - SELECT only approved reviews (pending/rejected are hidden from the public).

RLS policies:
  - `public_select_approved_reviews`  — SELECT where status = 'approved'
    (TO anon, authenticated) so visitors see moderated content only.
  - `public_insert_pending_reviews`   — INSERT with status = 'pending'
    (TO anon, authenticated). Forces the pending status so a submitter can
    never self-publish a review; approval must happen server-side.

UPDATE and DELETE are intentionally left without policies: only the service
role (used server-side / in the admin moderation flow) can modify or remove
reviews. The public client cannot alter status or delete submissions.

## updated_at trigger
A trigger `set_updated_at` auto-updates `updated_at` on every row update so
the modification timestamp always reflects the last change (e.g. when an
admin approves a review).

## Notes
1. No `user_id` / `auth.users` foreign key — this site has no sign-in flow.
2. Rating is constrained to 1–5 via a CHECK constraint.
3. Event type is constrained to the allowed enum-like set via a CHECK
   constraint, keeping the column a plain text (not a native enum) so it
   remains easy to extend without a migration.
4. No seed/demo data is inserted — the table starts empty.
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  event_type text NOT NULL CHECK (
    event_type IN ('wedding', 'baptism', 'birthday', 'anniversary', 'private_party', 'other')
  ),
  rating smallint NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message text NOT NULL,
  photo_url text,
  status text NOT NULL DEFAULT 'pending' CHECK (
    status IN ('pending', 'approved', 'rejected')
  ),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews (status);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at_desc ON reviews (created_at DESC);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_select_approved_reviews" ON reviews;
CREATE POLICY "public_select_approved_reviews"
ON reviews FOR SELECT
TO anon, authenticated
USING (status = 'approved');

DROP POLICY IF EXISTS "public_insert_pending_reviews" ON reviews;
CREATE POLICY "public_insert_pending_reviews"
ON reviews FOR INSERT
TO anon, authenticated
WITH CHECK (status = 'pending');

-- Auto-maintain updated_at on row updates
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_set_updated_at ON reviews;
CREATE TRIGGER trg_set_updated_at
BEFORE UPDATE ON reviews
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
