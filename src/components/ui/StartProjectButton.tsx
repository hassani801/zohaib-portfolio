"use client";

import Link from "next/link";
import { ArrowIcon } from "./icons";

type StartProjectButtonProps = {
  href?: string;
  type?: "button" | "submit";
  className?: string;
  children?: React.ReactNode;
};

export function StartProjectButton({
  href = "#contact",
  type = "button",
  className = "",
  children = "Start a Project",
}: StartProjectButtonProps) {
  const inner = (
    <>
      <span className="relative z-10 text-base font-medium text-white md:text-xl">
        {children}
      </span>
      <span className="relative z-10 shrink-0 transition-transform duration-500 group-hover:rotate-45">
        <ArrowIcon />
      </span>
      <div className="absolute -left-40 -top-40 h-[200px] w-[65px] rotate-30 rounded-full bg-white blur-[70px] group-hover:animate-buttonShine" />
    </>
  );

  const classes = `group relative inline-flex cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-4 py-2.5 text-white md:px-6 md:py-4 ${className}`;

  if (type === "submit") {
    return (
      <button type="submit" className={classes}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
