/*
  # Stop enumeration of the review-photos bucket

  The SELECT policy on storage.objects granted anon and authenticated row
  visibility over the whole review-photos bucket, which is what backs the
  storage list endpoint. That let anyone enumerate every uploaded file,
  including photos belonging to reviews still pending moderation or rejected,
  defeating the intent of the reviews.status workflow.

  review-photos is a public bucket, so object URLs are served without consulting
  this policy: approved review avatars continue to render exactly as before.
  Uploads are unaffected (the INSERT policy is untouched and the client uploads
  with upsert: false, which does not require SELECT).
*/

DROP POLICY IF EXISTS "public_read_review_photos" ON storage.objects;
