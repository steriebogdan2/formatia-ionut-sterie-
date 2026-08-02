/*
  # Limit review-photos uploads to 5MB

  The review form advertises and checks a 5MB limit in the browser only, so a
  direct upload with the anon key could store objects of unbounded size.
  Setting file_size_limit enforces the same bound server-side.
*/

UPDATE storage.buckets
SET file_size_limit = 5242880
WHERE id = 'review-photos';
