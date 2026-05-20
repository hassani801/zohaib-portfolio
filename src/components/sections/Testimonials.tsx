"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-cream py-10 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 group/card lg:px-8">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-3xl font-semibold text-gray-950 lg:text-5xl">
              Stories that showcase
              <br />
              our{" "}
              <span className="playfair-underline font-playfair italic">
                UX Excellence
              </span>
            </p>
            <p className="mt-4 text-lg text-gray-950 lg:text-2xl">
              Great work speaks for itself, but our clients speak even louder.
              Discover why teams keep coming back.
            </p>
          </div>
          <Link
            href="https://clutch.co/profile/endpoint-clients"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 opacity-80 transition-opacity hover:opacity-100"
          >
            <Image
              src="/assets/clutch.svg"
              alt="Clutch"
              width={200}
              height={97}
              className="h-16 w-auto lg:h-24"
            />
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-sm lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10"
            >
              <Image
                src={current.image}
                alt={current.name}
                width={120}
                height={120}
                className="h-20 w-20 shrink-0 rounded-full object-cover lg:h-28 lg:w-28"
              />
              <div>
                <blockquote className="text-lg leading-relaxed text-gray-800 lg:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <footer className="mt-4">
                  <p className="font-semibold text-gray-950">{current.name}</p>
                  <p className="text-sm text-gray-600">{current.role}</p>
                </footer>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-brand" : "w-1.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
