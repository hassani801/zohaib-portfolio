"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { desktopNavLinks } from "@/data/site";

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
    <Image
      src="/images/icons/Group 6.png"
      alt="Project Icon"
      width={25}
      height={25}
       className=" object-contain"
    />
  );
}
const mobileLinks = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about-us", icon: "about" },
  { label: "Services", href: "/services", icon: "services" },
  { label: "Contact", href: "/contact", icon: "contact" },
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
      className={`fixed bottom-0 left-1/2 z-[1000] flex w-full -translate-x-1/2 items-center justify-center transition-all duration-500 lg:pb-5 pointer-events-none ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
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
            href="/contact"
            className="pointer-events-auto absolute -top-4 right-2 flex w-24 flex-col items-center gap-2 overflow-hidden rounded-[10px] text-2xl text-white"
          >
            <Image
              src="/images/icons/Group 6.png"
              alt="projectIcon"
              width={26}
              height={26}
              className="h-auto w-full object-contain"
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
            {link.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#4539D2] px-8 py-4 text-center text-lg font-medium text-white"
        >
          <ProjectConeIcon />
          Start A Project
        </Link>

        {desktopNavLinks.slice(2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex h-15 min-w-31 max-w-31 cursor-pointer items-center justify-center rounded-xl border border-[#E5E7EB] bg-white py-4 text-center text-lg font-medium text-black hover:bg-[#F3F4F6]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
