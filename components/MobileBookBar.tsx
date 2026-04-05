"use client";

export function MobileBookBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-bg-elevated/95 p-3 backdrop-blur-md md:hidden">
      <a
        href="#book"
        className="flex h-[48px] w-full items-center justify-center rounded-md bg-accent font-sans text-base font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Book a lesson
      </a>
    </div>
  );
}
