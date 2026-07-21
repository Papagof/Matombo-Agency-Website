import { supabasePublic } from "@/backend/supabase/public";
import { createClient } from "@/backend/supabase/server";
import type { ContactInput } from "@/backend/validation/contact";

export async function insertLead(data: ContactInput) {
  return supabasePublic.from("leads").insert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    business: data.business,
    industry: data.industry,
    budget: data.budget,
    message: data.message,
  });
}

export async function listLeads() {
  const supabase = createClient();
  return supabase.from("leads").select("*").order("created_at", { ascending: false });
}
