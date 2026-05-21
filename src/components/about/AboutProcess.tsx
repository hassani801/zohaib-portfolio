import Image from "next/image";
import { aboutProcessSteps } from "@/data/about";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { BookCallButton } from "@/components/ui/BookCallButton";

export function AboutProcess() {
  return (
    <section className="group/section flex flex-col items-center gap-13 overflow-x-hidden bg-cream px-4 py-16 md:py-24">
      <div className="flex w-full max-w-7xl flex-col items-center gap-5">
        <SectionBadge label="How we work" />
        <p className="text-center text-[36px] font-semibold leading-[120%] text-gray-950 lg:text-[48px]">
          Discover ·{" "}
          <span className="font-playfair inline-block transition-[transform,color] duration-300 ease-out group-hover/section:-translate-y-1 group-hover/section:text-brand">
            Design
          </span>{" "}
          · Deliver
        </p>
        <p className="w-10/12 text-center text-base text-gray-800 lg:text-lg">
          From discovery to delivery, we follow a focused process that keeps your
          product clear, user-friendly, and built for measurable growth.
        </p>
      </div>

      <div className="w-full max-w-[1120px] space-y-4 lg:space-y-8">
        {aboutProcessSteps.map((item) => (
          <div
            key={item.title}
            className="group relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-4xl border border-transparent bg-white px-4 py-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_24px_70px_rgba(73,57,210,0.12)] md:flex-row md:gap-8 md:px-10 md:py-9 lg:px-6 lg:py-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(73,57,210,0.10),transparent_32%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 space-y-4">
              <span className="inline-block text-lg font-medium text-gray-950 transition-colors duration-300 group-hover:text-brand">
                {item.step}
              </span>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold leading-tight text-gray-950 transition-colors duration-300 group-hover:text-brand md:text-[40px] lg:text-[32px]">
                  {item.title}
                </h2>
                <p className="text-base leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-gray-900 md:text-xl">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="relative z-10 flex shrink-0">
              <Image
                src={item.icon}
                alt={item.alt}
                width={208}
                height={208}
                className="h-40 w-40 shrink-0 object-contain transition-transform duration-500 ease-out group-hover:rotate-3 group-hover:scale-110 md:h-52 md:w-52"
              />
            </div>
          </div>
        ))}
      </div>

      <BookCallButton />
    </section>
  );
}
