import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Pitching with Lexi",
  description:
    "Terms and conditions for using Pitching with Lexi services and website.",
};

export default function TermsPage() {
  return (
    <div className="min-h-dvh bg-bg px-4 py-12 text-ink sm:px-6 md:py-16">
      <div className="mx-auto max-w-[42rem]">
        <p className="font-sans text-sm text-ink-muted">
          <Link
            href="/"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:text-accent-hover"
          >
            ← Back to home
          </Link>
        </p>
        <h1 className="mt-8 font-display text-3xl font-medium tracking-[-0.02em] text-ink md:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-ink-faint">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-muted">
          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Agreement
            </h2>
            <p className="mt-3">
              By using this website or booking or attending instruction with
              Pitching with Lexi, you agree to these terms. If you do not agree,
              please do not use the site or services.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Services
            </h2>
            <p className="mt-3">
              We provide softball pitching coaching and related services as
              described on the site (including private lessons, shared sessions
              where offered, and online check-ins). Specific availability,
              location, pricing, and policies are confirmed when you schedule or
              are accepted from a waitlist.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Scheduling, payment, and cancellation
            </h2>
            <p className="mt-3">
              You agree to honor the scheduling and payment terms communicated at
              booking (including any cancellation or reschedule windows).
              Repeated late cancellations or no-shows may affect future
              availability.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Assumption of risk
            </h2>
            <p className="mt-3">
              Sports training involves physical activity. Athletes and
              guardians understand that participation carries inherent risk of
              injury. You agree to participate responsibly, follow coach
              instructions, and seek medical advice when appropriate.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Website use
            </h2>
            <p className="mt-3">
              You agree not to misuse the site (for example by attempting to
              disrupt security, scrape content without permission, or use the
              site for unlawful purposes). Content on this site is owned by
              Pitching with Lexi or used with permission and may not be copied
              for commercial use without consent.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Limitation of liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, Pitching with Lexi is not
              liable for indirect or consequential damages arising from use of
              the site or services. Our total liability for any claim relating
              to the services is limited to the amount you paid us for those
              services in the twelve months before the claim, except where law
              requires otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Changes
            </h2>
            <p className="mt-3">
              We may update these terms from time to time. The “Last updated”
              date at the top will change when we do. Continued use of the site
              or services after changes means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Contact
            </h2>
            <p className="mt-3">
              Questions:{" "}
              <a
                href="mailto:alexisatcitty@gmail.com"
                className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:text-accent-hover"
              >
                alexisatcitty@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
