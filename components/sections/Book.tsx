"use client";

import { useState } from "react";

type BookSectionProps = {
  inPersonEmbed: string;
  onlineEmbed: string;
};

export function Book({ inPersonEmbed, onlineEmbed }: BookSectionProps) {
  const [tab, setTab] = useState<"inperson" | "online">("inperson");
  const [loaded, setLoaded] = useState(false);

  const src = tab === "inperson" ? inPersonEmbed : onlineEmbed;
  const hasEmbed = Boolean(src);

  return (
    <section
      id="book"
      className="scroll-mt-20 px-6 py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="book-heading"
    >
      <div className="mx-auto max-w-[880px] rounded-xl border border-line bg-bg-elevated p-6 shadow-[var(--shadow-panel)] md:p-12">
        <h2
          id="book-heading"
          className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
        >
          Book a session
        </h2>
        <p className="mt-3 max-w-xl text-ink-muted">
          Choose a time that works for you—you&apos;ll get a confirmation and
          calendar details right away.
        </p>

        <div
          className="mt-8 inline-flex rounded-full border border-line bg-bg p-1"
          role="tablist"
          aria-label="Lesson type"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === "inperson"}
            className={`rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-colors duration-150 ${
              tab === "inperson"
                ? "bg-accent-subtle text-ink"
                : "text-ink-muted hover:text-ink"
            }`}
            onClick={() => {
              setTab("inperson");
              setLoaded(false);
            }}
          >
            In person
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "online"}
            className={`rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-colors duration-150 ${
              tab === "online"
                ? "bg-accent-subtle text-ink"
                : "text-ink-muted hover:text-ink"
            }`}
            onClick={() => {
              setTab("online");
              setLoaded(false);
            }}
          >
            Online
          </button>
        </div>

        <div className="relative mt-8 min-h-[640px] overflow-hidden rounded-lg bg-line/40">
          {!hasEmbed && (
            <div className="flex min-h-[640px] flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="max-w-md text-ink-muted">
                Scheduling will appear here once your calendar is connected.
                Add{" "}
                <code className="rounded bg-line px-1.5 py-0.5 text-sm text-ink">
                  NEXT_PUBLIC_CAL_EMBED_INPERSON
                </code>{" "}
                and{" "}
                <code className="rounded bg-line px-1.5 py-0.5 text-sm text-ink">
                  NEXT_PUBLIC_CAL_EMBED_ONLINE
                </code>{" "}
                to your environment (iframe embed URLs from Cal.com, Calendly,
                or Acuity).
              </p>
              <a
                href="#contact"
                className="text-sm font-medium text-accent hover:text-accent-hover"
              >
                Questions? Get in touch
              </a>
            </div>
          )}

          {hasEmbed && !loaded && (
            <div
              className="absolute inset-0 flex flex-col justify-center gap-3 p-8"
              aria-hidden
            >
              <div className="h-3 w-3/5 max-w-md animate-pulse rounded bg-line" />
              <div className="h-3 w-4/5 max-w-lg animate-pulse rounded bg-line" />
              <div className="h-3 w-2/5 max-w-sm animate-pulse rounded bg-line" />
            </div>
          )}

          {hasEmbed && (
            <iframe
              title="Schedule a lesson"
              src={src}
              className={`h-[640px] w-full rounded-lg border-0 transition-opacity duration-150 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoaded(true)}
              allow="payment"
            />
          )}
        </div>

        <p className="mt-4 text-center text-[0.8125rem] text-ink-faint">
          Secure booking · Calendar invite included
        </p>
      </div>
    </section>
  );
}
