import { Reveal } from "@/components/Reveal";

const OFFERINGS = [
  {
    eyebrow: "Private instruction",
    title: "Private 1-on-1 lessons",
    body: "Personalized pitching instruction focused on mechanics, power development, pitch design, and in-game confidence. Every session is tailored to your specific goals and long-term development.",
  },
  {
    eyebrow: "Shared session",
    title: "2-on-1 lessons",
    body: "Bring a teammate or opt into a shared session if scheduling aligns. You'll still receive individualized coaching and detailed feedback — with the added benefit of competitive reps and a lower lesson cost.",
  },
  {
    eyebrow: "Between lessons",
    title: "Online pitching check-ins",
    body: "Video breakdowns and virtual coaching for athletes who want consistent feedback between lessons. Includes mechanical analysis, drill recommendations, and adjustments you can apply immediately.",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-bg px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[40rem] text-center md:mb-14">
            <h2
              id="services-heading"
              className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
            >
              Lessons &amp; coaching
            </h2>
            <p className="mt-4 text-ink-muted">
              In-person in Utah County, plus online support when you need
              feedback between sessions.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {OFFERINGS.map((c, i) => (
            <Reveal key={c.title} delayMs={i * 80}>
              <article className="group flex h-full flex-col rounded-lg border border-line bg-bg-elevated p-5 transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1 hover:border-accent/35 hover:shadow-[var(--shadow-card-hover)] sm:p-7 md:p-10">
                <p className="font-sans text-[0.75rem] font-medium uppercase tracking-[0.12em] text-ink-faint">
                  {c.eyebrow}
                </p>
                <h3 className="mt-3 font-sans text-[1.125rem] font-semibold tracking-[-0.01em] text-ink md:text-xl">
                  {c.title}
                </h3>
                <p className="mt-6 flex-1 text-base leading-relaxed text-ink-muted">
                  {c.body}
                </p>
                <p className="mt-8 text-sm text-ink-muted">
                  New spots are offered to the waitlist first.{" "}
                  <a
                    href="#waitlist"
                    className="inline-flex min-h-11 items-center font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:text-accent-hover"
                  >
                    Join the waitlist
                  </a>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
