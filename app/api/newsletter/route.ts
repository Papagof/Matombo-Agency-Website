import { NextResponse } from "next/server";
import { z } from "zod";

import { supabasePublic as supabase } from "@/lib/supabase/public";

const newsletterSchema = z.object({
  email: z.string().email(),
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

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email: parsed.data.email });

  // Ignore duplicate-email conflicts — the visitor is already subscribed.
  if (error && error.code !== "23505") {
    // eslint-disable-next-line no-console
    console.error("Failed to save newsletter signup:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to save signup" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
