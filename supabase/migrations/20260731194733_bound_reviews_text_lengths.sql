/*
  # Bound review name and message length server-side

  The submission form limits the name to 100 and the message to 1000 characters
  with HTML maxLength attributes only, so a direct insert with the anon key could
  store arbitrarily large text and flood the moderation queue. These constraints
  enforce the same bounds the form already advertises, and require both fields to
  be non-empty after trimming (the form trims before sending).
*/

ALTER TABLE reviews DROP CONSTRAINT IF EXISTS reviews_full_name_length;
ALTER TABLE reviews ADD CONSTRAINT reviews_full_name_length CHECK (
  char_length(btrim(full_name)) BETWEEN 1 AND 100
) NOT VALID;

ALTER TABLE reviews DROP CONSTRAINT IF EXISTS reviews_message_length;
ALTER TABLE reviews ADD CONSTRAINT reviews_message_length CHECK (
  char_length(btrim(message)) BETWEEN 1 AND 1000
) NOT VALID;
