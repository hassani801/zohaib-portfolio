"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/site";
import { QuoteMarks } from "@/components/ui/QuoteMarks";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;
    const offset =
      slide.offsetLeft - track.clientWidth / 2 + slide.clientWidth / 2;
    track.scrollTo({ left: offset, behavior: "smooth" });
    setActive(index);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const elCenter = el.offsetLeft + el.clientWidth / 2;
        const dist = Math.abs(center - elCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % testimonials.length;
        const track = trackRef.current;
        const slide = track?.children[next] as HTMLElement | undefined;
        if (track && slide) {
          const offset =
            slide.offsetLeft - track.clientWidth / 2 + slide.clientWidth / 2;
          track.scrollTo({ left: offset, behavior: "smooth" });
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-cream py-10 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 group/card lg:px-8">
        <div className="mb-10 max-w-3xl">
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

        <div className="relative overflow-visible">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide lg:gap-6"
            style={{ scrollPaddingInline: "1rem" }}
          >
            {testimonials.map((t, index) => (
              <div
                key={t.name}
                className={`w-[85vw] shrink-0 snap-center px-2 transition-all duration-500 sm:w-[400px] lg:w-[28.125rem] lg:px-0 ${
                  index === active
                    ? "opacity-100 blur-0"
                    : "opacity-35 blur-[2px]"
                }`}
              >
                <div className="flex min-h-[30rem] max-w-[31.25rem] flex-col justify-between gap-4 rounded-3xl bg-white p-4 lg:min-h-[37.75rem] lg:gap-24 lg:p-10">
                  <div className="flex flex-col gap-4 lg:gap-12">
                    <div className="flex flex-row items-start justify-between">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={120}
                        height={120}
                        className="h-20 w-20 rounded-full object-cover lg:h-30 lg:w-30"
                      />
                      <QuoteMarks />
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700">{t.quote}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl font-semibold text-gray-950 lg:text-3xl">
                      {t.name}
                    </p>
                    <p className="text-base text-gray-700">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                scrollTo((active - 1 + testimonials.length) % testimonials.length)
              }
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-brand hover:text-brand"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-brand" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => scrollTo((active + 1) % testimonials.length)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-brand hover:text-brand"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
