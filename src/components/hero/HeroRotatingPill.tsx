"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TEXTS = [
  "UI/UX Design",
  "Branding",
  "Web Design",
  "App Design",
  "Web Development",
  "App Development",
  "SEO",
  "E-Commerce Design",
  "Graphic Design",
];

export function HeroRotatingPill() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure the hidden span's width whenever the text changes
  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth + 24); // 24 = px-3 * 2
    }
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TEXTS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hidden measurer — renders current text offscreen to get its width */}
      <span
        ref={measureRef}
        aria-hidden
        className="font-playfair whitespace-nowrap text-sm font-bold md:text-lg lg:text-2xl"
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          top: -9999,
          left: -9999,
        }}
      >
        {TEXTS[index]}
      </span>

      {/* Pill — width transitions smoothly via CSS */}
      <div
        className="relative inline-flex h-8 items-center justify-center overflow-hidden rounded-xl bg-black/30 px-3 backdrop-blur-[20px] md:h-10 lg:h-14"
        style={{
          width: width ? `${width}px` : "auto",
          transition: "width 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={TEXTS[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              type: "tween",
              ease: [0.16, 1, 0.3, 1],
              duration: 0.55,
            }}
            className="font-playfair absolute whitespace-nowrap text-white text-sm font-bold md:text-lg lg:text-2xl"
          >
            {TEXTS[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </>
  );
}