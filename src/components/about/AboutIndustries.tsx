import Image from "next/image";
import { BookCallButton } from "@/components/ui/BookCallButton";
function WhiteDiamondIcon() {
  return (
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" aria-hidden>
      <path
        d="M0 2.96104L5.2987 0L10.5974 2.96104V9.19481L5.2987 12L0 9.19481V2.96104Z"
        fill="white"
      />
    </svg>
  );
}

export function AboutIndustries() {
  return (
    <section className="group/section w-full bg-black bg-[url('/img/illustrations/industry.png')] bg-top bg-no-repeat px-4 py-8 lg:py-24 xl:px-8 2xl:px-0">
      <div className="container relative mx-auto max-w-7xl overflow-hidden">
        <div className="mb-5 lg:mb-12">
          <div className="flex flex-col items-center gap-4 px-0 md:gap-6 lg:px-12">
            <div className="flex flex-row items-center gap-2 rounded-full border border-white bg-white/20 px-4 py-2 transition-all duration-300 ease-out hover:translate-y-0.5 hover:bg-white/30 lg:px-5">
              <WhiteDiamondIcon />
              <p className="text-base font-medium text-white lg:text-lg">Who we are</p>
            </div>
            <h2 className="text-center text-[36px] font-semibold leading-[120%] text-white lg:text-start lg:text-[48px]">
              Design trusted across{" "}
              <span className="font-playfair relative inline-block transition-all duration-300 ease-out after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#8F84FF] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 group-hover/section:text-[#8F84FF]">
                every industry.
              </span>
            </h2>
            <p className="text-center text-base font-normal text-gray-300 lg:text-xl">
              Hire a design team that already understands your space. We&apos;ve 15
              years of designing products across healthcare, fintech, SaaS,
              e-commerce, enterprise and 10+ more industries so you skip the
              ramp-up and start building faster, smarter, better.
            </p>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-2.5 lg:mb-[52px] xl:grid-cols-3">
          <div className="xl:col-span-2">
            <div className="mb-2 flex flex-col gap-2.5 lg:mb-4 lg:flex-row">
              <Image
                src="/images/services/SaaS1.jpg"
                alt="SaaS"
                width={800}
                height={256}
                className="w-full rounded-3xl object-cover transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(255,255,255,0.12)] lg:h-64"
              />
              <Image
                src="/images/services/HealthcareApp.jpg"
                alt="Health Care App"
                width={800}
                height={256}
                className="w-full rounded-3xl object-cover transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(255,255,255,0.12)] lg:h-64"
              />
            </div>
            <Image
              src="/images/services/EnterpriseWeb2.jpg"
              alt="Enterprise Web"
              width={1200}
              height={600}
              className="w-full rounded-3xl object-cover transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(255,255,255,0.12)] lg:h-[600px]"
            />
          </div>
          <Image
            src="/images/services/FintechApp.jpg"
            alt="Fintech App"
            width={600}
            height={900}
            className="h-full min-h-[280px] w-full rounded-3xl object-cover transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(255,255,255,0.12)] lg:min-h-0"
          />
        </div>

        <div className="flex items-center justify-center">
          <BookCallButton />
        </div>
      </div>
    </section>
  );
}
