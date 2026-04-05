"use client";

import type { WaitlistSubmitMode } from "@/lib/site";
import { FormEvent, useState } from "react";

type WaitlistProps = {
  submitMode: WaitlistSubmitMode;
  externalFormAction: string;
};

export function Waitlist({ submitMode, externalFormAction }: WaitlistProps) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);

  async function submitBuiltin(form: HTMLFormElement) {
    const fd = new FormData(form);
    const company = fd.get("company");
    if (typeof company === "string" && company.trim() !== "") {
      setSuccess(true);
      form.reset();
      return;
    }

    const email = fd.get("email");
    const name = fd.get("name");
    const phone = fd.get("phone");
    const payload = {
      email: typeof email === "string" ? email : "",
      name: typeof name === "string" ? name : "",
      phone: typeof phone === "string" ? phone : "",
      company: typeof company === "string" ? company : "",
    };

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await res.json().catch(() => ({}))) as {
      error?: string;
      ok?: boolean;
    };

    if (!res.ok) {
      setError(data.error || "Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    setError(null);
    form.reset();
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    setError(null);

    if (submitMode === "unset") {
      e.preventDefault();
      setError(
        "Waitlist isn’t configured yet. Add Google Sheet env vars (see .env.example) or set NEXT_PUBLIC_WAITLIST_FORM_ACTION.",
      );
      return;
    }

    if (submitMode === "builtin") {
      e.preventDefault();
      setPending(true);
      try {
        await submitBuiltin(e.currentTarget);
      } finally {
        setPending(false);
      }
      return;
    }

    if (!externalFormAction) {
      e.preventDefault();
      setError("Waitlist form URL is missing.");
    }
  }

  if (success) {
    return (
      <section
        id="waitlist"
        className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
        aria-labelledby="waitlist-heading"
      >
        <div className="mx-auto max-w-[880px] rounded-xl border border-line bg-bg-elevated p-5 shadow-[var(--shadow-panel)] sm:p-6 md:p-12">
          <h2
            id="waitlist-heading"
            className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
          >
            You&apos;re on the list
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-ink-muted" role="status">
            Thanks for signing up. I&apos;ll email you when new lesson spots
            open.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto max-w-[880px] rounded-xl border border-line bg-bg-elevated p-5 shadow-[var(--shadow-panel)] sm:p-6 md:p-12">
        <h2
          id="waitlist-heading"
          className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
        >
          Join my waitlist
        </h2>
        <p className="mt-3 max-w-xl text-pretty text-ink-muted">
          Get first access when new lesson spots open. I&apos;ll only email you
          when it matters—no spam.
        </p>

        <form
          className="mt-10 space-y-6"
          action={
            submitMode === "external" ? externalFormAction || undefined : undefined
          }
          method={submitMode === "external" ? "POST" : undefined}
          onSubmit={onSubmit}
        >
          {submitMode === "builtin" ? (
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="waitlist-company">Company</label>
              <input
                id="waitlist-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          ) : null}
          <div>
            <label
              htmlFor="waitlist-email"
              className="block font-sans text-sm font-medium text-ink"
            >
              Email
            </label>
            <input
              id="waitlist-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              disabled={pending}
              className="mt-2 w-full rounded-md border border-line bg-bg px-4 py-3 font-sans text-base text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
            />
          </div>
          <div>
            <label
              htmlFor="waitlist-name"
              className="block font-sans text-sm font-medium text-ink"
            >
              Name <span className="font-normal text-ink-faint">(optional)</span>
            </label>
            <input
              id="waitlist-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Athlete or parent name"
              disabled={pending}
              className="mt-2 w-full rounded-md border border-line bg-bg px-4 py-3 font-sans text-base text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
            />
          </div>
          <div>
            <label
              htmlFor="waitlist-phone"
              className="block font-sans text-sm font-medium text-ink"
            >
              Phone
            </label>
            <input
              id="waitlist-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="(555) 123-4567"
              disabled={pending}
              className="mt-2 w-full rounded-md border border-line bg-bg px-4 py-3 font-sans text-base text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
            />
          </div>

          {error && (
            <p className="break-words text-sm text-accent" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-[52px] min-h-[44px] w-full items-center justify-center rounded-md bg-accent px-7 font-sans text-base font-medium text-white transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-accent-hover active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
          >
            {pending ? "Sending…" : "Join my waitlist"}
          </button>
        </form>

        <p className="mt-6 text-center text-[0.8125rem] text-ink-faint">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
