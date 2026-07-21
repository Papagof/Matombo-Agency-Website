import { NextResponse } from "next/server";

import { contactSchema } from "@/backend/validation/contact";
import { insertLead } from "@/backend/services/leads";

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

  const { error } = await insertLead(parsed.data);

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
