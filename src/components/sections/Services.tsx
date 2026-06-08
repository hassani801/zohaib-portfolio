"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/site";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { StartProjectButton } from "@/components/ui/StartProjectButton";
export function Services() {
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const blocks = blockRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!blocks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = blocks.indexOf(visible[0].target as HTMLDivElement);
          if (idx >= 0) setActive(idx);
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    blocks.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-cream">
      <div className="container mx-auto max-w-7xl px-4 group/card lg:px-8">
        <div className="flex flex-col items-start gap-5 py-10 lg:py-16">
          <SectionBadge label="Our Services" />
          <p className="text-4xl font-semibold text-gray-950 lg:text-5xl">
            We Design Digital
            <br />
            Solutions{" "}
            <span className="playfair-underline font-playfair italic">
              That Performs
            </span>
          </p>
        </div>

        <div className="lg:flex lg:gap-12">
          {/* Sticky image panel — desktop */}
          <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:justify-center lg:py-12">
            <div className="relative h-[50rem] w-full overflow-hidden rounded-[30px] bg-white">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    index === active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="rounded-[30px] object-cover"
                    sizes="50vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scrollable service blocks */}
          <div className="lg:w-1/2 lg:py-24">
            <div className="flex flex-col lg:gap-0">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  ref={(el) => {
                    blockRefs.current[index] = el;
                  }}
                  className={`group flex flex-col items-start transition-opacity duration-300 lg:min-h-[calc(100vh-12rem)] lg:justify-center ${
                    index === active ? "lg:opacity-100" : "lg:opacity-20"
                  }`}
                >
                  {/* Mobile image */}
                  <div className="mb-6 mt-6 flex h-[218px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-white md:h-[460px] lg:hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={750}
                      height={460}
                      className="h-full w-full rounded-[20px] object-cover"
                    />
                  </div>

                  <h2 className="mb-4 text-2xl font-semibold leading-tight text-gray-950 lg:mb-8 lg:text-5xl">
                    {service.title}
                  </h2>

                  <div className="mb-4 flex flex-wrap gap-2 lg:mb-8 lg:gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-900 px-3 py-2 text-sm text-gray-900 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-brand-light group-hover:shadow-[0_10px_24px_rgba(69,57,210,0.12)] lg:px-4"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-base leading-[1.875rem] text-gray-900 lg:text-xl">
                    {service.description}
                  </p>

                  <div className="mt-4 lg:mt-8">
                    <StartProjectButton />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
