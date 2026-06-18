import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/site";

const FLYER_SRC = encodeURI(CLINIC.flyerSrc);

export function Clinic() {
  return (
    <section
      id="clinic"
      className="scroll-mt-20 border-y border-line bg-bg px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="clinic-heading"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-xl border border-line border-t-4 border-t-[#04B9CD] bg-bg-elevated shadow-[var(--shadow-panel)]">
            <Image
              src={FLYER_SRC}
              alt={CLINIC.flyerAlt}
              width={1080}
              height={1620}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="flex flex-col">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
              Upcoming clinic
            </p>
            <h2
              id="clinic-heading"
              className="mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
            >
              {CLINIC.title}
            </h2>
            <p className="mt-3 font-sans text-lg text-ink-muted">
              {CLINIC.date} · {CLINIC.location}
            </p>

            <ol className="mt-8 list-none space-y-4">
              {CLINIC.steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-subtle font-sans text-sm font-semibold text-ink"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 font-sans text-base leading-relaxed text-ink-muted">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <a
              href={CLINIC.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-[52px] min-h-[44px] w-full items-center justify-center rounded-md bg-[#04B9CD] px-7 font-sans text-base font-medium text-white transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-[#039aad] active:translate-y-0 sm:w-auto"
            >
              Register for the clinic
            </a>
            <p className="mt-4 font-sans text-sm text-ink-faint">
              Limited spots — register early
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
