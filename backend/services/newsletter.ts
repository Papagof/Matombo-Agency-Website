import { supabasePublic } from "@/backend/supabase/public";

export async function insertSubscriber(email: string) {
  return supabasePublic.from("newsletter_subscribers").insert({ email });
}
