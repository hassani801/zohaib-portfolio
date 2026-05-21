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
          <Image
            src="/assets/CompanyLogo.svg"
            alt="Logo"
            width={172}
            height={48}
            className="h-12 w-43"
            priority
          />
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
