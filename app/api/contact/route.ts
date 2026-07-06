import { NextResponse } from "next/server";
import { z } from "zod";

import { industryOptions, budgetOptions } from "@/lib/content";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
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

  // Placeholder: log the submission. In production, forward to a CRM,
  // send an email (Resend/SendGrid), or persist to a database here.
  // eslint-disable-next-line no-console
  console.log("📨 New contact submission:", {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
