"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroPillPhrases } from "@/data/site";

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M7 0L7.8 5.2L13 7L7.8 8.8L7 14L6.2 8.8L1 7L6.2 5.2L7 0Z"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
}

export function HeroRotatingPill() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroPillPhrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const phrase = heroPillPhrases[index];

  return (
    <div className="hero-pill flex h-8.75 w-[min(280px,72vw)] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-black/30 px-4 shadow-[0_0_40px_rgba(120,57,238,0.25)] backdrop-blur-[20px] md:w-90 lg:h-22 lg:w-[360px] lg:px-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={phrase}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <Sparkle className="hidden sm:block" />
          <span className="font-playfair text-lg italic text-white md:text-2xl lg:text-[32px] lg:leading-none">
            {phrase}
          </span>
          <Sparkle className="hidden sm:block" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
