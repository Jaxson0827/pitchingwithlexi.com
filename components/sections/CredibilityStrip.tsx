"use client";

import { useEffect, useRef, useState } from "react";

const METRICS = [
  { value: "6+", label: "Years coaching pitchers" },
  { value: "DI", label: "BYU & UNM pitcher" },
  { value: "Utah County", label: "Training & coaching" },
  { value: "Elite exposure", label: "Texas · Arizona · FSU +" },
];

export function CredibilityStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (reduced) {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="border-y border-white/10 bg-ink py-7 md:py-9"
      aria-label="At a glance"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-4 gap-y-8 px-4 sm:px-6 md:grid-cols-4 md:gap-y-0 md:px-10 lg:px-16">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className={`flex flex-col items-center px-2 text-center transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none sm:px-4 md:border-r md:border-white/15 md:last:border-r-0 ${
              inView
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            }`}
            style={
              inView
                ? { transitionDelay: `${i * 80}ms` }
                : { transitionDelay: "0ms" }
            }
          >
            <span className="font-display text-[clamp(1.35rem,3vw,2rem)] font-medium leading-tight text-cream">
              {m.value}
            </span>
            <span className="mt-2 max-w-[11rem] font-sans text-[0.8125rem] font-medium uppercase leading-snug tracking-[0.08em] text-cream/55">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
