"use client";

import { FormEvent, useLayoutEffect, useState } from "react";

const SUCCESS_HASH = "#waitlist-success";

type WaitlistProps = {
  formAction: string;
};

export function Waitlist({ formAction }: WaitlistProps) {
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    setError(null);
    if (!formAction) {
      e.preventDefault();
      setError(
        "Waitlist isn’t configured yet. Set NEXT_PUBLIC_WAITLIST_FORM_ACTION to your Google Apps Script Web App URL (see .env.example).",
      );
    }
  }

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash !== SUCCESS_HASH) return;

    setShowSuccess(true);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );

    requestAnimationFrame(() => {
      document.getElementById("waitlist")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  if (showSuccess) {
    return (
      <section
        id="waitlist"
        className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
        aria-labelledby="waitlist-success-heading"
      >
        <div className="mx-auto max-w-[880px] rounded-xl border border-line bg-bg-elevated p-5 shadow-[var(--shadow-panel)] sm:p-6 md:p-12">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
            Waitlist confirmed
          </p>
          <h2
            id="waitlist-success-heading"
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink"
          >
            Thank you for signing up
          </h2>
          <div
            className="mt-6 max-w-xl space-y-4 text-pretty text-base leading-relaxed text-ink-muted"
            role="status"
            aria-live="polite"
          >
            <p>
              Your details have been saved. You&apos;ll be among the first to
              know when new lesson spots open.
            </p>
            <p>
              We&apos;ll only contact you when it&apos;s relevant to scheduling
              or availability—never spam.
            </p>
          </div>
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
              className="mt-2 w-full rounded-md border border-line bg-bg px-4 py-3 font-sans text-base text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none focus:ring-2 focus:ring-[#04B9CD]/35"
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
              className="mt-2 w-full rounded-md border border-line bg-bg px-4 py-3 font-sans text-base text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none focus:ring-2 focus:ring-[#04B9CD]/35"
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
              className="mt-2 w-full rounded-md border border-line bg-bg px-4 py-3 font-sans text-base text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none focus:ring-2 focus:ring-[#04B9CD]/35"
            />
          </div>

          {error && (
            <p className="break-words text-sm text-red-600" role="alert">
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
