/*
  # Revoke UPDATE and DELETE on reviews from the public roles

  The schema intends moderation (changing status) and deletion to be service-role
  only, and relies solely on the absence of UPDATE/DELETE policies for that. The
  underlying table grants still gave anon and authenticated full write privileges,
  so any permissive policy added later would immediately allow self-publishing or
  deletion of reviews.

  The site only reads approved reviews and inserts pending ones, so SELECT and
  INSERT are preserved and no application behaviour changes.
*/

REVOKE UPDATE, DELETE ON TABLE public.reviews FROM anon;
REVOKE UPDATE, DELETE ON TABLE public.reviews FROM authenticated;
