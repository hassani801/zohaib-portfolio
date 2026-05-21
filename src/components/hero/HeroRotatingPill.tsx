"use client";

import { heroPillPhrases } from "@/data/site";

const items = [...heroPillPhrases, ...heroPillPhrases];

export function HeroRotatingPill() {
  return (
    <div className="relative flex h-10 w-70 items-center overflow-hidden rounded-full bg-black/30 backdrop-blur-[20px] md:w-90 lg:h-24">
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mx-5 font-playfair text-lg font-bold text-white lg:text-4xl"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
