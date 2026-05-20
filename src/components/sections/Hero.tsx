"use client";

import Image from "next/image";
import Link from "next/link";
import { heroBadges, heroMarqueeWords } from "@/data/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowIcon, StarIcon } from "@/components/ui/icons";

export function Hero() {
  const marqueeItems = [...heroMarqueeWords, ...heroMarqueeWords];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-center pb-31 pt-12 lg:pt-18"
    >
      <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-7 px-4 md:gap-16 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/assets/CompanyLogo.svg"
            alt="Logo"
            width={172}
            height={48}
            className="h-12 w-43"
            priority
          />
          <p className="text-xs text-white lg:text-2xl">Global UI/UX Design Agency</p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center lg:flex-row lg:gap-6">
              <span className="text-[40px] font-semibold leading-16 text-white lg:text-[72px] lg:leading-21.5">
                We <span className="font-playfair italic">Design</span>
              </span>
              <div className="h-8.75 w-70 overflow-hidden rounded-full bg-black/30 backdrop-blur-[20px] md:w-90 lg:h-22">
                <div className="flex animate-marquee whitespace-nowrap py-2">
                  {marqueeItems.map((word, i) => (
                    <span
                      key={`${word}-${i}`}
                      className="mx-4 text-sm font-medium text-white/90 lg:text-base"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <span className="text-center text-[40px] font-semibold leading-12 text-white lg:text-start lg:text-[72px] lg:leading-21.5">
              Solutions That{" "}
              <span className="font-playfair italic">Performs</span>
            </span>
          </div>

          <div className="hidden flex-row items-center gap-2.5 rounded-full bg-black/30 py-2 pl-4 pr-5 lg:flex">
            <Image
              src="/assets/Hero-testimonials.png"
              alt="Hero Testimonials"
              width={136}
              height={40}
            />
            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-1.5">
                <p className="text-lg font-medium text-white">
                  What Clients Say About Us
                </p>
                <ArrowIcon />
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-row">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-sm text-white/80">based on 100+ reviews</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {heroBadges.map((badge) => (
              <div key={badge.label} className="group relative">
                <Link
                  href={badge.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full transition-transform duration-300 ease-out hover:-translate-y-1.5"
                >
                  <Image
                    src={badge.image}
                    alt={badge.alt}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </Link>
                <div className="pointer-events-none absolute bottom-[120%] left-1/2 z-20 mt-3 hidden -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100 md:block">
                  <div className="relative whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs text-white shadow-lg">
                    {badge.label}
                    <div className="absolute -bottom-3 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <CTAButton />
        </div>
      </div>

      {/* Floating device mockups — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden 2xl:block">
        <Image
          src="/assets/Macbook.png"
          alt="macbook"
          width={315}
          height={368}
          className="absolute left-0 top-[25%] z-10 h-auto w-auto animate-heroFloatUp"
        />
        <Image
          src="/assets/HomePhone.png"
          alt="mobile mockup"
          width={211}
          height={437}
          className="absolute right-[2px] top-[25%] z-10 h-auto w-auto animate-heroFloatUp"
        />
        <Image
          src="/assets/HomeCube.png"
          alt="cube"
          width={107}
          height={107}
          className="absolute right-31 top-[57%] z-[5] h-auto w-auto animate-heroFloatDown"
        />
        <Image
          src="/assets/Ring.png"
          alt="ring"
          width={120}
          height={120}
          className="absolute left-40 top-[23.5%] z-[5] h-auto w-auto animate-heroFloatDown"
        />
      </div>
    </section>
  );
}
