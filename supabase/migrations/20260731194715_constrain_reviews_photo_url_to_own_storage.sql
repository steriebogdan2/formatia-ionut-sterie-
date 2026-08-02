/*
  # Restrict reviews.photo_url to this project's own review-photos storage

  photo_url was taken verbatim from the request body, so a submitter could point
  a review avatar at any URL they controlled and collect the IP address and user
  agent of every visitor once the review was approved. The column now only
  accepts NULL or a public object URL inside this project's review-photos
  bucket, which is exactly what the review form produces via getPublicUrl().
*/

ALTER TABLE reviews DROP CONSTRAINT IF EXISTS reviews_photo_url_own_storage;

ALTER TABLE reviews ADD CONSTRAINT reviews_photo_url_own_storage CHECK (
  photo_url IS NULL
  OR photo_url LIKE 'https://jivgjcbcyizznjppjthz.supabase.co/storage/v1/object/public/review-photos/%'
) NOT VALID;
