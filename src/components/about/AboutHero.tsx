import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative overflow-hidden bg-brand-dark bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-center bg-no-repeat pb-31 pt-12 lg:min-h-[calc(100dvh+40px)] lg:pt-18"
    >
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-7 px-4 md:gap-16 md:px-8">
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
            A <span className="font-playfair">Design Studio</span>
            <br />
            Built on Innovation
          </p>
          <p className="max-w-4xl text-base text-gray-200 lg:max-w-[52rem] lg:text-xl">
            We started with a simple belief that great design has the power to
            change how people experience the world. Today, we&apos;re a global team
            helping brands across 15+ industries design products that truly matter.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 lg:gap-12">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
            <Link
              href="/#contact"
              className="group flex cursor-pointer items-center justify-center rounded-xl bg-white px-8 py-4"
            >
              <span className="text-base font-medium text-gray-950">
                Start a Project
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
