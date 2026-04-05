"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";

const ITEMS = [
  {
    q: "How do I reschedule or cancel?",
    a: "Use the link in your confirmation email, or reach out directly. A clear policy window (e.g. 24 hours) keeps slots fair for everyone—set yours and we’ll mirror it here.",
  },
  {
    q: "What ages and levels do you coach?",
    a: "From beginners building a foundation to advanced pitchers refining speed and spin. Join the waitlist and we’ll match you when a spot fits.",
  },
  {
    q: "Do parents stay for lessons?",
    a: "You’re welcome to observe quietly. Many athletes focus best with a quick handoff—whatever works for your family.",
  },
  {
    q: "How does payment work?",
    a: "When you’re offered a spot off the waitlist, you’ll get clear pricing and payment options before anything is confirmed.",
  },
] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-line bg-bg px-6 py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <h2
            id="faq-heading"
            className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
          >
            FAQ
          </h2>
        </Reveal>
        <ul className="mt-10 space-y-0">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <li key={item.q} className="border-b border-line">
                <Reveal delayMs={i * 60}>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-sans text-base font-medium text-ink transition-colors hover:text-ink-muted"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {item.q}
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-lg leading-none text-ink-muted"
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-12 text-ink-muted leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
