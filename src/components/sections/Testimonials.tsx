"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/site";
import { QuoteMarks } from "@/components/ui/QuoteMarks";

function ClutchLogo() {
  return (
    <svg width="200" height="97" viewBox="0 0 200 97" fill="none" className="h-14 w-auto lg:h-20">
      <g clipPath="url(#clutch-clip)">
        <path d="M52.1 0H61.3V56.7H52.1V0ZM93.1 56.7H102.3V18.3H93.1V38.6H93.3C93.3 47.1 86 47.9 84 47.9C78.7 47.9 77.5 42.7 77.5 39.6V18.3H68.3V39.9C68.3 45.2 70.1 49.5 72.8 52.7C75.3 55.2 79.3 56.7 83.8 56.7C88.3 56.7 91.1 55.9 93.1 53.5V56.7ZM111.1 56.7H120.3V27.4H127V18.2H120.3V4.7H111.1V18.3H104.3V27.5H111.1V56.8V56.7ZM148.4 56.6C153.6 56.6 158.4 54.8 162.1 51.4L163.4 50.1L157.1 43.8L155.8 45.5C153.8 47.3 151.3 48.3 148.5 48.3C142.2 48.3 137.5 43.8 137.5 37.2C137.5 30.6 142 26.2 148.5 26.2C155 26.2 153.8 27 155.8 29L157.1 30.2L163.1 24.2L161.8 22.9C158 19.7 153.5 17.7 148.4 17.7C137.1 17.5 128.7 25.7 128.7 37.2C128.7 48 137.2 56.7 148.4 56.7V56.6ZM176.9 35.3C176.9 26.8 183.2 26 185.2 26C190.5 26 190.5 31.2 190.5 34.3V56.8H199.7V34.2C199.9 29.2 198.7 24.7 195.7 21.7C193.2 19.2 189.9 17.7 185.7 17.7C181.5 17.7 179.2 18.5 176.7 20.9V0H167.5V56.7H176.7V35.2H176.9V35.3ZM26.2 56.6C33.5 56.6 40.6 53.8 45.2 48.6L46.5 47.3L40.5 41L39.3 42.7C36 46 31 48 26.1 48C15.8 48 8.4 40 8.4 29.2C8.4 18.4 15.9 10.3 26 10.3C36.1 10.3 35.3 12.3 39.2 15.6L40.5 16.9L46.5 10.9L45.2 9.6C40.2 4.3 33.4 1.6 26.2 1.6C11.2 1.8 0 13.5 0 29.1C0 44.7 11.2 56.6 26.2 56.6Z" fill="#17313B" />
      </g>
      <defs>
        <clipPath id="clutch-clip">
          <rect width="200" height="97" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

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
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
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
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <ClutchLogo />
          </Link>
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
