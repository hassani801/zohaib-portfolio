"use client";

import { heroPillPhrases } from "@/data/site";
import RotatingText from "@/components/hero/RotatingText";

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