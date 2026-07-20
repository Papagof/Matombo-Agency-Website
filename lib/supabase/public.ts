import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY env vars"
  );
}

// Plain anon client with no session/cookies. Used for public reads (blog
// posts) and public inserts (contact + newsletter forms) where RLS grants
// the anon role exactly the access it needs.
export const supabasePublic = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});
