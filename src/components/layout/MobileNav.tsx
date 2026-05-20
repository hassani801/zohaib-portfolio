"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { desktopNavLinks } from "@/data/site";
import { CRTText } from "@/components/ui/CRTText";

function NavIcon({ type }: { type: string }) {
  if (type === "services") {
    return (
      <svg width="24" height="24" viewBox="0 0 640 640" fill="white" aria-hidden>
        <path d="M128 128C128 110.3 142.3 96 160 96L480 96C497.7 96 512 110.3 512 128C512 145.7 497.7 160 480 160L160 160C142.3 160 128 145.7 128 128zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM32 512C32 494.3 46.3 480 64 480L576 480C593.7 480 608 494.3 608 512C608 529.7 593.7 544 576 544L64 544C46.3 544 32 529.7 32 512z" />
      </svg>
    );
  }
  if (type === "contact") {
    return (
      <svg width="24" height="24" viewBox="0 0 640 640" fill="white" aria-hidden>
        <path d="M224 96C206.3 96 192 110.3 192 128L192 512C192 529.7 206.3 544 224 544L416 544C433.7 544 448 529.7 448 512L448 128C448 110.3 433.7 96 416 96L224 96zM272 160L368 160C376.8 160 384 167.2 384 176L384 208C384 216.8 376.8 224 368 224L272 224C263.2 224 256 216.8 256 208L256 176C256 167.2 263.2 160 272 160z" />
      </svg>
    );
  }
  if (type === "about") {
    return (
      <svg width="24" height="24" viewBox="0 0 640 640" fill="white" aria-hidden>
        <path d="M320 96C239.2 96 176 159.2 176 240C176 320.8 239.2 384 320 384C400.8 384 464 320.8 464 240C464 159.2 400.8 96 320 96zM96 544C96 465.5 159.5 402 238 402L402 402C480.5 402 544 465.5 544 544L544 560C544 568.8 536.8 576 528 576L112 576C103.2 576 96 568.8 96 560L96 544z" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 640 640" fill="white" aria-hidden>
      <path d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" />
    </svg>
  );
}

function ProjectConeIcon() {
  return (
    <svg width="19" height="28" viewBox="0 0 19 28" fill="none" aria-hidden>
      <path
        d="M10.7754 4.88379C13.2327 4.88389 15.2684 6.8635 15.2686 9.30762C15.2686 9.41383 15.2658 9.5166 15.2578 9.62207H6.46973C5.24993 9.62208 4.54785 10.5103 4.54785 11.7285C4.5481 12.9428 6.11 14.0254 7.33008 14.0254L13.1152 14.0752C15.222 14.1716 17.1357 16.4197 17.1357 18.833C17.1357 18.8442 17.1358 18.849 17.1357 18.8545H4.6416C3.44666 18.8545 2.6339 19.8109 2.63379 21.0137C2.63379 22.2166 4.46409 23.3113 5.65918 23.3115H14.3564C16.7352 23.6212 18.6679 25.483 18.668 27.9277C18.668 27.95 18.667 27.9779 18.667 28H0.000976562C0.00097455 27.9779 0 27.95 0 27.9277C3.62577e-05 26.4377 0.628295 25.1144 1.72461 24.332C2.65268 23.6661 2.82516 23.2612 2.8252 22.8281C2.8252 22.0905 2.4264 21.8751 2.10547 21.3311C1.68426 20.6183 1.43463 19.7603 1.43457 18.833C1.43457 17.1759 2.26274 15.7856 3.39941 14.957C4.01837 14.5088 4.0745 14.4394 4.35645 14.166C4.85187 13.683 4.74898 12.9821 4.49414 12.6904C3.78318 11.879 3.35156 10.7384 3.35156 9.30762C3.35173 6.86354 5.4856 4.88395 7.93945 4.88379H10.7754ZM9.33496 0C10.047 0.000247351 10.6269 0.579873 10.627 1.29297C10.627 2.00514 10.0471 2.58569 9.33496 2.58594C8.62189 2.58594 8.04102 2.00529 8.04102 1.29297C8.04109 0.579721 8.62194 0 9.33496 0Z"
        fill="white"
      />
    </svg>
  );
}

const mobileLinks = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "About", href: "#about", icon: "about" },
  { label: "Services", href: "#services", icon: "services" },
  { label: "Contact", href: "#contact", icon: "contact" },
];

export function MobileNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-1/2 z-[1000] flex w-full -translate-x-1/2 items-center justify-center transition-all duration-500 lg:pb-5 pointer-events-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      {/* Mobile — 5 columns, black bar */}
      <div className="grid w-full grid-cols-5 gap-0 rounded-t-xl bg-black lg:hidden">
        {mobileLinks.slice(0, 2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="pointer-events-auto flex w-full flex-col items-center gap-2 p-2 py-3 text-xs text-white"
          >
            <NavIcon type={link.icon} />
            {link.label}
          </Link>
        ))}
        <div className="relative">
          <Link
            href="#contact"
            className="pointer-events-auto absolute -top-4 right-2 flex w-16.25 flex-col items-center gap-2 overflow-hidden rounded-[10px] text-2xl text-white"
          >
            <Image
              src="/assets/projectIcon.png"
              alt="projectIcon"
              width={65}
              height={65}
              className="w-full rounded-[10px]"
            />
          </Link>
        </div>
        {mobileLinks.slice(2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="pointer-events-auto flex w-full flex-col items-center gap-2 p-2 py-3 text-xs text-white"
          >
            <NavIcon type={link.icon} />
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop — white pill dock */}
      <div className="hidden items-center gap-2.5 rounded-2xl border border-[#E5E7EB] bg-white p-3 drop-shadow-2xl lg:flex pointer-events-auto">
        {desktopNavLinks.slice(0, 2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex h-15 min-w-31 max-w-31 cursor-pointer items-center justify-center rounded-xl border border-[#E5E7EB] bg-white py-4 text-center text-lg font-medium text-black hover:bg-[#F3F4F6]"
          >
            <CRTText text={link.label} className="text-black text-lg" />
          </Link>
        ))}

        <Link
          href="#contact"
          className="flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#4539D2] px-8 py-4 text-center text-lg text-white"
        >
          <ProjectConeIcon />
          <CRTText text="Start A Project" className="text-white text-lg" />
        </Link>

        {desktopNavLinks.slice(2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex h-15 min-w-31 max-w-31 cursor-pointer items-center justify-center rounded-xl border border-[#E5E7EB] bg-white py-4 text-center text-lg font-medium text-black hover:bg-[#F3F4F6]"
          >
            <CRTText text={link.label} className="text-black text-lg" />
          </Link>
        ))}
      </div>
    </div>
  );
}
