import Image from "next/image";
import Link from "next/link";
import { CALENDLY_URL } from "@/data/about";

export function ServicesHero() {
  return (
    <section
      id="services-hero"
      className="relative overflow-hidden bg-brand-dark bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-center bg-no-repeat pb-31 pt-12 lg:min-h-[calc(100dvh+40px)] lg:pt-18"
    >
      <div className="pointer-events-none absolute inset-0 hidden 2xl:block">
        <Image
          src="/images/services/ServicesCube.png"
          alt="ring"
          width={147}
          height={147}
          className="absolute left-10 top-[10%] z-[5] h-auto w-auto animate-floatSoft"
        />
        <Image
          src="/images/services/ServicesSpring.png"
          alt="ring"
          width={175}
          height={175}
          className="absolute right-33 top-[48%] z-[5] h-auto w-auto animate-floatSoft"
        />
      </div>

      <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-7 px-4 md:gap-16 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 lg:gap-5">

            {/* LOGO: Scaled to match the height of the three-line stacked text */}
            <Image
              src="/images/icons/Frame 4.jpg"
              alt="Muhammad Zohaib Ali Logo"
              width={48}
              height={48}
              className="h-12 w-auto shrink-0 object-contain lg:h-15 rounded-xl"
            />

            {/* TEXT CONTAINER: Stacks the name and role vertically */}
            <div className="flex flex-col text-left">

              {/* Name split into two lines exactly like the image */}
              <h1 className="font-sans text-xl font-bold leading-[1.1] text-white lg:text-2xl lg:leading-[1.1]">
                Muhammad
                <br />
                Zohaib Ali
              </h1>

              {/* Subtitle / Role */}
              <p className="mt-1 text-[11px] font-normal tracking-wide text-neutral-400 lg:mt-2 lg:text-sm">
                UI/UX Designer
              </p>

            </div>

          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-4xl font-semibold text-white lg:text-[72px] lg:leading-21.5">
            Design <span className="font-playfair">Services</span>
            <br />
            Built for Impact
          </p>
          <p className="max-w-4xl text-base text-gray-200 lg:max-w-[52rem] lg:text-xl">
            From UI/UX and web design to SaaS platforms and AI-powered products,
            we deliver end-to-end services that turn bold ideas into measurable
            business growth.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 lg:gap-12">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center justify-center rounded-xl bg-white px-8 py-4"
            >
              <span className="text-base font-medium text-gray-950">
                Book a 30 min call
              </span>
            </Link>
            <Link
              href="/#services"
              className="flex cursor-pointer items-center justify-center rounded-xl border border-white px-8 py-4 backdrop-blur-[30px]"
            >
              <span className="text-base font-medium text-white">
                Explore Our Work
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
