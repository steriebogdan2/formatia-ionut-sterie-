/*
  # Pin the search_path of set_updated_at

  The trigger function resolved names through a mutable search_path, so a name it
  references could be shadowed by an object in an earlier schema on that path.
  Behaviour is unchanged: it still stamps updated_at on every row update.
*/

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
