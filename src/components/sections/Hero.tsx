"use client";

import Image from "next/image";
import Link from "next/link";
import { heroPlatformIcons } from "@/data/site";
import { HeroRotatingPill } from "@/components/hero/HeroRotatingPill";
import { HeroBrandMarquee } from "@/components/hero/HeroBrandMarquee";
import { ArrowIcon, StarIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="bg-cream">
      {/* Purple hero */}
      <div
        id="home"
        className="relative overflow-hidden bg-[#531fae] bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-center bg-no-repeat pb-24 pt-12 lg:pb-31 lg:pt-18"
      >
        {/* Center glow behind headline */}
        <div
          className="pointer-events-none absolute left-1/2 top-[18%] h-[420px] w-[min(900px,90vw)] -translate-x-1/2 rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(120, 57, 238, 0.45) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-7 px-4 md:gap-16 md:px-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <Image
              src="/assets/CompanyLogo.svg"
              alt="Endpoint Clients"
              width={172}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
            <p className="text-center text-[11px] font-normal tracking-[0.12em] text-white/90 md:text-base lg:text-2xl lg:tracking-normal">
              Global UI/UX Design Agency
            </p>
          </div>

          {/* Headline stack */}
          <div className="flex w-full max-w-5xl flex-col items-center gap-8 md:gap-10">
            <div className="flex w-full flex-col items-center text-center">
              <div className="flex flex-col items-center gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-5">
                <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
                  We{" "}
                  <span className="font-playfair italic font-normal">Design</span>
                </h1>
                <HeroRotatingPill />
              </div>
              <p className="mt-3 text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-white lg:mt-4">
                Solutions That{" "}
                <span className="font-playfair italic font-normal">Performs</span>
              </p>
            </div>

            {/* Social proof pill */}
            <div className="flex max-w-full flex-row items-center gap-2.5 rounded-full border border-white/10 bg-black/30 py-2 pl-3 pr-4 backdrop-blur-md md:pl-4 md:pr-5">
              <Image
                src="/assets/Hero-testimonials.png"
                alt="Client avatars"
                width={136}
                height={40}
                className="h-8 w-auto shrink-0 md:h-10"
              />
              <div className="flex min-w-0 flex-col gap-0.5">
                <div className="flex flex-row flex-wrap items-center gap-1.5">
                  <p className="whitespace-nowrap text-sm font-medium text-white md:text-lg">
                    What Clients Say About Us
                  </p>
                  <ArrowIcon />
                </div>
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <div className="flex flex-row">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} size={16} />
                    ))}
                  </div>
                  <p className="text-xs text-white/80 md:text-sm">
                    based on 100+ reviews
                  </p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
              <Link
                href="https://calendly.com/endpointclients/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-medium text-gray-950 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a 30 min call
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 text-base font-medium text-white backdrop-blur-[30px] transition-colors hover:bg-white/10"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Platform icons */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
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
                      className="h-12 w-12 rounded-full md:h-[60px] md:w-[60px]"
                    />
                  </Link>
                  <div className="pointer-events-none absolute bottom-[120%] left-1/2 z-20 hidden -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
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

        {/* Floating devices */}
        <div className="pointer-events-none absolute inset-0 hidden min-[1400px]:block">
          <Image
            src="/assets/Macbook.png"
            alt=""
            width={315}
            height={368}
            className="absolute left-[2%] top-[24%] z-10 h-auto w-[min(280px,22vw)] animate-heroFloatUp"
            aria-hidden
          />
          <Image
            src="/assets/HomePhone.png"
            alt=""
            width={211}
            height={437}
            className="absolute right-[1%] top-[22%] z-10 h-auto w-[min(200px,16vw)] animate-heroFloatUp"
            aria-hidden
          />
          <Image
            src="/assets/HomeCube.png"
            alt=""
            width={107}
            height={107}
            className="absolute right-[12%] top-[54%] z-[5] h-auto w-[min(90px,7vw)] animate-heroFloatDown"
            aria-hidden
          />
        </div>
      </div>

      {/* White curved brand strip */}
      <div className="relative z-10 -mt-10 overflow-hidden rounded-t-4xl bg-cream lg:-mt-10 lg:rounded-t-[50px]">
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
