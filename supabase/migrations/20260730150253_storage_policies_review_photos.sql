/*
# Storage policies for the review-photos bucket

## Purpose
The public website lets visitors upload an optional profile photo with their
review submission. Photos are stored in the `review-photos` Supabase Storage
bucket (created separately as a public bucket).

## Security
- SELECT (read): public — anyone can view uploaded review photos so they
  render for all visitors. Scoped to the `review-photos` bucket only.
- INSERT (upload): any anon or authenticated user can upload a photo to the
  `review-photos` bucket. This is a public, no-auth website, so uploads come
  from the anon-key client.
- UPDATE / DELETE: no public policies. Only the service role can modify or
  remove stored photos (used by an admin moderation flow, not the public site).

## Notes
1. Policies are scoped to the `review-photos` bucket via `bucket_id = 'review-photos'`.
2. No `auth.uid()` ownership checks because there is no sign-in flow; uploads
   are intentionally public (moderated after the fact via the reviews.status
   workflow, and photos only surface once the linked review is approved).
*/

DROP POLICY IF EXISTS "public_read_review_photos" ON storage.objects;
CREATE POLICY "public_read_review_photos"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'review-photos');

DROP POLICY IF EXISTS "public_upload_review_photos" ON storage.objects;
CREATE POLICY "public_upload_review_photos"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'review-photos');
