"use client";

import Image from "next/image";
import { industries } from "@/data/site";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Industries() {
  return (
    <section id="about" className="bg-cream">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="group flex flex-col gap-4 lg:gap-12">
          <div className="flex flex-col items-start gap-5">
            <SectionBadge label="Industry Expertise" />
            <p className="text-3xl font-semibold leading-none text-gray-950 lg:text-5xl">
              Trusted Design
              <br />
              Across{" "}
              <span className="playfair-underline font-playfair italic">
                Every Industry
              </span>
            </p>
          </div>

          <div className="space-y-5 lg:space-y-12">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group/card flex flex-col gap-4 rounded-[20px] p-4 lg:gap-8 lg:rounded-[50px] lg:p-12"
                style={{ backgroundColor: industry.bg }}
              >
                <div className="flex max-w-206 flex-col gap-2">
                  <h2 className="text-3xl font-bold text-gray-950 lg:text-5xl">
                    {industry.title}
                  </h2>
                  <p className="text-base text-gray-700 lg:text-xl">
                    {industry.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {industry.tags.map((row, ri) => (
                    <div key={ri} className="flex flex-wrap gap-2">
                      {row.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 bg-white/50 px-4 py-1.5 text-sm text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl bg-white/40">
                    <Image
                      src={industry.webImage}
                      alt={`${industry.title} web`}
                      width={1200}
                      height={800}
                      className="h-auto w-full transition-transform duration-500 ease-out group-hover/card:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-white/40">
                    <Image
                      src={industry.appImage}
                      alt={`${industry.title} app`}
                      width={800}
                      height={1200}
                      className="mx-auto h-auto max-h-[500px] w-auto transition-transform duration-500 ease-out group-hover/card:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
