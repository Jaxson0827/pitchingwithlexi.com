"use client";

import { FormEvent, useState } from "react";

type WaitlistProps = {
  formAction: string;
};

export function Waitlist({ formAction }: WaitlistProps) {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    if (!formAction) {
      e.preventDefault();
      setError(
        "Add NEXT_PUBLIC_WAITLIST_FORM_ACTION to your environment (e.g. a Formspree or Tally form URL) to collect signups.",
      );
    }
  }

  return (
    <section
      id="waitlist"
      className="scroll-mt-20 px-6 py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto max-w-[880px] rounded-xl border border-line bg-bg-elevated p-6 shadow-[var(--shadow-panel)] md:p-12">
        <h2
          id="waitlist-heading"
          className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
        >
          Join my waitlist
        </h2>
        <p className="mt-3 max-w-xl text-ink-muted">
          Get first access when new lesson spots open. I&apos;ll only email you
          when it matters—no spam.
        </p>

        <form
          className="mt-10 space-y-6"
          action={formAction || undefined}
          method={formAction ? "POST" : undefined}
          onSubmit={onSubmit}
        >
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
              className="mt-2 w-full rounded-md border border-line bg-bg px-4 py-3 font-sans text-base text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none focus:ring-2 focus:ring-accent/30"
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
              className="mt-2 w-full rounded-md border border-line bg-bg px-4 py-3 font-sans text-base text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          {error && (
            <p className="text-sm text-accent" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="inline-flex h-[52px] min-h-[44px] w-full items-center justify-center rounded-md bg-accent px-7 font-sans text-base font-medium text-white transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-accent-hover active:translate-y-0 sm:w-auto"
          >
            Join my waitlist
          </button>
        </form>

        <p className="mt-6 text-center text-[0.8125rem] text-ink-faint">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
