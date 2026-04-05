import { NextResponse } from "next/server";

import { appendWaitlistToSheet } from "@/lib/waitlist-sheet";

export const runtime = "nodejs";

const MAX_EMAIL = 254;
const MAX_NAME = 200;
const MAX_PHONE = 32;

function isValidEmail(email: string): boolean {
  if (email.length > MAX_EMAIL) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Allows common phone formatting; requires at least 10 digits. */
function isValidPhone(phone: string): boolean {
  if (phone.length < 10 || phone.length > MAX_PHONE) return false;
  if (!/^[\d+().\s-]+$/.test(phone)) return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;

  if (typeof b.company === "string" && b.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof b.email === "string" ? b.email.trim() : "";
  const name =
    typeof b.name === "string" ? b.name.trim().slice(0, MAX_NAME) : "";
  const phoneRaw = typeof b.phone === "string" ? b.phone.trim() : "";
  const phone = phoneRaw.slice(0, MAX_PHONE);

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid phone number (include area code)." },
      { status: 400 },
    );
  }

  try {
    await appendWaitlistToSheet({ email, name, phone });
  } catch (err) {
    console.error("[waitlist]", err);
    return NextResponse.json(
      {
        error:
          "We couldn’t save your signup right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
