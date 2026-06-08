"use client";

import Image from "next/image";
import Link from "next/link";
import { CALENDLY_URL } from "@/data/branding";
import { heroPlatformIcons } from "@/data/site";
import { HeroRotatingPill } from "@/components/hero/HeroRotatingPill";
import { HeroBrandMarquee } from "@/components/hero/HeroBrandMarquee";
import { ArrowIcon, StarIcon } from "@/components/ui/icons";

export function Hero() {
  
  return (
    <section className="bg-cream">
      <div
        id="home"
        className="relative overflow-hidden bg-[#531fae] bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-center bg-no-repeat pb-31 pt-12 lg:pt-18"
      >
        <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-7 px-4 md:gap-16 md:px-8">
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Horizontal container aligning the logo and the text */}
            <div className="flex items-center gap-4 lg:gap-5">

              {/* LOGO: Scaled to match the height of the three-line stacked text */}
              <img
                src="/images/icons/Frame 4.jpg"
                alt="Muhammad Zohaib Ali Logo"
                className="h-12 w-auto shrink-0 object-contain lg:h-15 rounded-xl"
              />

              {/* TEXT CONTAINER: Stacks the name and role vertically */}
              <div className="flex flex-col text-left">

                {/* Name split into two lines exactly like the image */}
                <h1 className="font-playfair text-xl font-bold leading-[1.1] text-white lg:text-2xl lg:leading-[1.1]">
                  Muhammad
                  <br />
                  Zohaib Ali
                </h1>

                {/* Subtitle / Role */}
                <p className="font-playfair mt-1 text-[11px] font-normal tracking-wide text-white lg:mt-2 lg:text-sm">
                  UI/UX Designer
                </p>

              </div>

            </div>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center lg:flex-row lg:gap-6">
                <span className="text-center text-[40px] font-semibold leading-16 text-white lg:text-start lg:text-[72px] lg:leading-21.5">
                  We <span className="font-playfair">Design</span>
                </span>
                <HeroRotatingPill />
              </div>
              <span className="text-center text-[40px] font-semibold leading-12 text-white lg:text-start lg:text-[72px] lg:leading-21.5">
                Solutions That <span className="font-playfair">Performs</span>
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
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-row">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="text-sm text-white">based on 100+ reviews</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
              <Link
                href="/contact"
                className="flex cursor-pointer items-center justify-center rounded-xl bg-white px-8 py-4"
              >
                <span className="text-base font-medium text-gray-950">
                  Book a 30 min call
                </span>
              </Link>
              <Link
                href="#services"
                className="flex cursor-pointer items-center justify-center rounded-xl border border-white px-8 py-4 backdrop-blur-[30px]"
              >
                <span className="text-base font-medium text-white">
                  Explore Our Work
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {heroPlatformIcons.map((icon) => (
                <div key={icon.alt} className="group relative">
                  <Link
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full transition-transform duration-300 ease-out hover:-translate-y-1.5"
                  >
                    <Image
                      src={icon.image}
                      alt={icon.alt}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </Link>
                  <div className="pointer-events-none absolute bottom-[120%] left-1/2 z-20 mt-3 hidden -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100 md:block">
                    <div className="relative whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs text-white shadow-lg">
                      {icon.label}
                      <div className="absolute -bottom-3 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Device mockups — matches endpointclients.com (2xl+, edge-framed) */}
        <div className="pointer-events-none absolute inset-0 hidden 2xl:block">
          <Image
            src="/assets/Macbook.png"
            alt="macbook"
            width={315}
            height={368}
            priority
            className="absolute left-0 top-[25%] z-10 h-auto w-auto animate-heroFloatUp"
          />
          <Image
            src="/assets/HomePhone.png"
            alt="mobile mockup"
            width={211}
            height={437}
            priority
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
            width={88}
            height={88}
            className="absolute left-40 top-[23.5%] z-[5] h-auto w-auto animate-heroFloatDown"
          />
        </div>
      </div>

      <div className="relative z-10 -mt-10 overflow-hidden rounded-t-4xl bg-cream lg:rounded-t-[50px]">
        <section className="py-10 lg:pb-24 lg:pt-16">
          <div className="container mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 lg:px-8">
            <h2 className="text-center text-xl font-bold text-gray-950 lg:text-2xl">
              Chosen by 350+ Premium Brands Worldwide
            </h2>
            <HeroBrandMarquee />
          </div>
        </section>
      </div>
    </section>
  );
}
