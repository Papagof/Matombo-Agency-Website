"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { createClient } from "@/backend/supabase/server";

const statusSchema = z.enum(["new", "contacted", "qualified", "won", "lost"]);

export async function updateLeadStatus(id: string, status: string) {
  const parsed = statusSchema.safeParse(status);
  if (!parsed.success) throw new Error("Invalid status");

  const supabase = createClient();
  const { error } = await supabase
    .from("leads")
    .update({ status: parsed.data })
    .eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/leads");
}
