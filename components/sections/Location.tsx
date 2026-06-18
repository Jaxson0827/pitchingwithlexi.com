import { Reveal } from "@/components/Reveal";

export function Location() {
  return (
    <section
      className="bg-bg px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <h2
            id="location-heading"
            className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
          >
            Utah County
          </h2>
          <div className="mt-8 space-y-8 break-words text-ink-muted">
            <div>
              <h3 className="font-sans text-lg font-semibold text-ink">
                In-person sessions
              </h3>
              <p className="mt-2">
                I coach pitchers in and around{" "}
                <strong className="font-semibold text-ink">Utah County</strong>
                . Exact facility or field details are shared when you join the
                waitlist or schedule a session.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-lg font-semibold text-ink">
                What to bring
              </h3>
              <p className="mt-2">
                Cleats or turfs, water, glove, and any training tools you
                already use. If you&apos;re filming for check-ins or review,
                have your phone charged and a simple way to capture side /
                front angles.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-lg font-semibold text-ink">
                Online check-ins
              </h3>
              <p className="mt-2">
                Clear space for full delivery, lighting toward the camera, and
                a stable camera angle. You&apos;ll get mechanical notes, drill
                ideas, and adjustments you can use right away.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
