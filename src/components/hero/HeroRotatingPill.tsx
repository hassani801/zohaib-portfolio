"use client";

import { heroPillPhrases } from "@/data/site";

const items = [...heroPillPhrases, ...heroPillPhrases];

export function HeroRotatingPill() {
  return (
    <div className="relative flex h-8.75 w-70 items-center overflow-hidden rounded-full bg-black/30 backdrop-blur-[20px] md:w-90 lg:h-22">
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mx-5 font-playfair text-base text-white lg:text-xl"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
