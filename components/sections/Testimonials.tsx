import { Reveal } from "@/components/Reveal";

const QUOTES = [
  {
    quote:
      "Lexi broke things down in a way my daughter finally understood. Her speed came after her form—exactly what we needed.",
    name: "Parent of 14U pitcher",
    role: "Houston area",
  },
  {
    quote:
      "The online sessions surprised us. We sent video, got drills back, and saw progress within a few weeks.",
    name: "Travel ball family",
    role: "Remote client",
  },
] as const;

export function Testimonials() {
  return (
    <section
      className="px-6 py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2
            id="testimonials-heading"
            className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
          >
            What families say
          </h2>
        </Reveal>
        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delayMs={i * 80}>
              <figure className="w-[min(100%,380px)] shrink-0 snap-center md:w-auto">
                <blockquote className="font-display text-2xl font-normal leading-snug text-ink md:text-[1.5rem]">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-sans">
                  <span className="font-semibold text-ink">{q.name}</span>
                  <span className="mt-1 block text-sm text-ink-muted">
                    {q.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-faint">
          Replace with real testimonials when available.
        </p>
      </div>
    </section>
  );
}
