import { NextResponse } from "next/server";
import { z } from "zod";

import { industryOptions, budgetOptions } from "@/lib/content";
import { supabasePublic as supabase } from "@/lib/supabase/public";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  business: z.string().min(2),
  industry: z.enum(industryOptions),
  budget: z.enum(budgetOptions),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { error } = await supabase.from("leads").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    business: parsed.data.business,
    industry: parsed.data.industry,
    budget: parsed.data.budget,
    message: parsed.data.message,
  });

  if (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to save lead:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to save submission" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
