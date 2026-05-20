"use client";

export function ScrollToTop() {
  return (
    <a
      href="#home"
      id="to-top"
      aria-label="Scroll to top"
      className="fixed bottom-20 right-12 z-[1100] inline-flex h-[46px] w-[46px] cursor-pointer select-none items-center justify-center overflow-hidden rounded-full border-0 bg-black/40 text-white no-underline transition-all duration-300 ease-out hover:scale-[1.04] lg:bottom-16 lg:h-14 lg:w-14 xl:right-24"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d="M10 4L4 10H7V16H13V10H16L10 4Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
