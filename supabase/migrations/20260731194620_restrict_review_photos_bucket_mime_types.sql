/*
  # Restrict review-photos bucket to image MIME types

  The public review form only ever uploads an image, but the storage INSERT
  policy checked bucket identity only, so a direct API call with the anon key
  could store any file type (HTML, executables) and get a permanent public URL.
  Enforcing the type list on the bucket makes the storage API reject anything
  that is not one of the image types the form actually sends.
*/

UPDATE storage.buckets
SET allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic', 'image/heif']
WHERE id = 'review-photos';
