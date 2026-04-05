"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";

const ITEMS = [
  {
    q: "Does my daughter need a catcher?",
    a: "Yes—unless I specify otherwise, she will need someone to catch for her or to bring her own net if she doesn’t have a catcher.",
  },
  {
    q: "What ages do you coach?",
    a: "I coach as young as 8 years old and through high school. Exceptions can be made—just reach out.",
  },
  {
    q: "What is your cancellation policy?",
    a: "I don’t require a booking fee, but I ask that you cancel at least 24 hours in advance. I understand extenuating circumstances.",
  },
  {
    q: "Do you travel?",
    a: "Right now I stay in Utah County. I have done team practices and traveled to those; travel fees and team pricing are different—reach out to discuss.",
  },
] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-line bg-bg px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
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
                    className="flex min-h-14 w-full items-start justify-between gap-3 py-4 text-left font-sans text-base font-medium text-ink transition-colors hover:text-ink-muted sm:min-h-0 sm:items-center sm:gap-4 sm:py-5"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="min-w-0 flex-1 text-pretty pr-2">
                      {item.q}
                    </span>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-lg leading-none text-ink-muted sm:h-8 sm:w-8"
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
                      <p className="pb-6 pr-2 text-pretty leading-relaxed text-ink-muted sm:pr-12">
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
