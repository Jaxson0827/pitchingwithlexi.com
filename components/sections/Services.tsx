import { Reveal } from "@/components/Reveal";

const CARDS = [
  {
    eyebrow: "Private · In person",
    title: "In-person lesson",
    bullets: [
      "Full hour, just you (or athlete + parent)",
      "Hands-on cueing and live feedback",
      "Plan to practice between sessions",
    ],
    duration: "60 minutes",
    cta: "Choose times",
    hash: "#book",
  },
  {
    eyebrow: "Private · Online",
    title: "Online lesson",
    bullets: [
      "Video call from your space",
      "Mechanics breakdown and drill prescriptions",
      "Ideal for distance or busy schedules",
    ],
    duration: "60 minutes",
    cta: "Choose times",
    hash: "#book",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-bg px-6 py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[40rem] text-center md:mb-14">
            <h2
              id="services-heading"
              className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
            >
              How we work together
            </h2>
            <p className="mt-4 text-ink-muted">
              Same coach, same standard—whether you&apos;re on the field with
              me or dialing in from home.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delayMs={i * 100}>
              <article className="group flex h-full flex-col rounded-lg border border-line bg-bg-elevated p-7 transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1 hover:border-accent/35 hover:shadow-[var(--shadow-card-hover)] md:p-10">
                <p className="font-sans text-[0.75rem] font-medium uppercase tracking-[0.12em] text-ink-faint">
                  {c.eyebrow}
                </p>
                <h3 className="mt-3 font-sans text-[1.125rem] font-semibold tracking-[-0.01em] text-ink md:text-xl">
                  {c.title}
                </h3>
                <ul className="mt-6 flex-1 space-y-3 text-ink-muted">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base leading-relaxed">
                      <span
                        className="mt-2.5 h-px w-3 shrink-0 bg-accent"
                        aria-hidden
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-ink-faint">
                  Duration · <span className="text-ink-muted">{c.duration}</span>
                </p>
                <a
                  href={c.hash}
                  className="mt-6 inline-flex w-fit min-h-[44px] items-center font-sans text-base font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {c.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
