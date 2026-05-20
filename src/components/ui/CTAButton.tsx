"use client";

import Link from "next/link";
import { ArrowIcon } from "./icons";

type CTAButtonProps = {
  href?: string;
  type?: "button" | "submit";
  className?: string;
  children?: React.ReactNode;
};

export function CTAButton({
  href = "#contact",
  type = "button",
  className = "",
  children = "Start a Project",
}: CTAButtonProps) {
  const inner = (
    <span className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-brand px-4 py-2.5 md:px-5 md:py-3 transition-transform hover:scale-[1.02] active:scale-[0.98]">
      <span className="relative z-10 text-base font-medium text-white md:text-xl">
        {children}
      </span>
      <span className="relative z-10 shrink-0 transition-transform duration-500 group-hover:rotate-45">
        <ArrowIcon />
      </span>
    </span>
  );

  if (type === "submit") {
    return (
      <button type="submit" className={className}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className={`inline-block ${className}`}>
      {inner}
    </Link>
  );
}
