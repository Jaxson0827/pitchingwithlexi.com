import { NextResponse } from "next/server";

const MAX = { email: 254, name: 200, phone: 40 } as const;

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(request: Request) {
  const upstream = process.env.NEXT_PUBLIC_WAITLIST_FORM_ACTION?.trim();
  if (!upstream) {
    return NextResponse.json(
      { error: "Waitlist is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, name, phone } = body as Record<string, unknown>;
  if (typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  if (typeof phone !== "string" || !phone.trim()) {
    return NextResponse.json({ error: "Phone is required." }, { status: 400 });
  }

  const emailTrim = email.trim().slice(0, MAX.email);
  const phoneTrim = phone.trim().slice(0, MAX.phone);
  const nameTrim =
    typeof name === "string" ? name.trim().slice(0, MAX.name) : "";

  if (!isValidEmail(emailTrim)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 },
    );
  }

  const fd = new FormData();
  fd.append("email", emailTrim);
  fd.append("phone", phoneTrim);
  fd.append("name", nameTrim);

  try {
    const res = await fetch(upstream, {
      method: "POST",
      body: fd,
      redirect: "follow",
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not save your signup. Please try again." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Could not reach the signup service. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
