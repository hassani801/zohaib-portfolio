"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/data/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="bg-cream py-10 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 group/card lg:px-8">
        <div className="mb-10 flex flex-col items-start gap-5">
          <SectionBadge label="Our Services" />
          <p className="text-3xl font-semibold text-gray-950 lg:text-5xl">
            We Design Digital Solutions That{" "}
            <span className="playfair-underline font-playfair italic">
              Performs
            </span>
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-[400px] w-full overflow-hidden rounded-[30px] bg-white lg:h-[500px]">
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`text-left text-xl font-semibold transition-colors lg:text-2xl ${
                    index === active
                      ? "text-brand"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-950 lg:text-3xl">
                {current.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-gray-700 lg:text-lg">
                {current.description}
              </p>
              <div className="mt-6">
                <CTAButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
