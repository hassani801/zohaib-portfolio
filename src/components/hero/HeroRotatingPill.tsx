"use client";

import { heroPillPhrases } from "@/data/site";

const items = [...heroPillPhrases, ...heroPillPhrases];

function PillStarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 shrink-0 lg:h-6 lg:w-6"
      aria-hidden
    >
      <path
        d="M16.4161 1.13261C16.267 0.470411 15.6788 0 15 0C14.3212 0 13.733 0.470411 13.5839 1.13261L12.5412 5.76147C11.7799 9.14087 9.14087 11.7799 5.76147 12.5412L1.13261 13.5839C0.470411 13.733 0 14.3212 0 15C0 15.6788 0.470411 16.267 1.13261 16.4161L5.76147 17.4588C9.14087 18.2201 11.7799 20.8591 12.5412 24.2385L13.5839 28.8674C13.733 29.5296 14.3212 30 15 30C15.6788 30 16.267 29.5296 16.4161 28.8674L17.4588 24.2385C18.2201 20.8591 20.8591 18.2201 24.2385 17.4588L28.8674 16.4161C29.5296 16.267 30 15.6788 30 15C30 14.3212 29.5296 13.733 28.8674 13.5839L24.2385 12.5412C20.8591 11.7799 18.2201 9.14087 17.4588 5.76147L16.4161 1.13261Z"
        fill="white"
      />
    </svg>
  );
}

export function HeroRotatingPill() {
  return (
    <div className="relative flex h-10 w-70 items-center overflow-hidden rounded-full bg-black/30 backdrop-blur-[20px] md:w-90 lg:h-24">
      <div className="flex animate-marquee items-center whitespace-nowrap py-2">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mx-5 inline-flex items-center gap-2 font-playfair text-lg font-bold text-white lg:gap-2.5 lg:text-4xl"
          >
            <PillStarIcon />
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
