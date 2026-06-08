"use client";

import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import { industries } from "@/data/site";
import { SectionBadge } from "@/components/ui/SectionBadge";
import ScrollVideo from "./ScrollVideo";

// Helper component to handle cursor tracking without triggering main page re-renders
interface HoverImageContainerProps {
  children: React.ReactNode;
  className?: string;
}

function HoverImageContainer({ children, className = "" }: HoverImageContainerProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cursorRef.current) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursorRef.current.style.left = `${x}px`;
    cursorRef.current.style.top = `${y}px`;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden cursor-none ${className}`}
    >
      {children}

      {/* Black circle cursor follower */}
      <div
        ref={cursorRef}
        className={`pointer-events-none absolute z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#4539D2] text-xs font-semibold text-white shadow-lg transition-[transform,opacity] duration-300 ease-out ${
          isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          left: "0px",
          top: "0px",
        }}
      >
        Visit
      </div>
    </div>
  );
}

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
            {industries.map((industry) => {
              const leftTags = industry.tags[0] || [];
              const rightTags = industry.tags[1] || [];
              return (
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

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Web Image Wrapper (Custom Hover Container) */}
                    <HoverImageContainer className="rounded-2xl bg-white/40">
                      <Image
                        src={industry.webImage}
                        alt={`${industry.title} web`}
                        width={1200}
                        height={800}
                        className="h-auto w-full transition-transform duration-500 ease-out group-hover/card:scale-105"
                      />

                      <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2">
                        {leftTags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800 shadow"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </HoverImageContainer>

                    {/* App Image Wrapper (Custom Hover Container) */}
                    <HoverImageContainer className="rounded-2xl bg-white/40">
                      <Image
                        src={industry.appImage}
                        alt={`${industry.title} app`}
                        width={800}
                        height={1200}
                        className="mx-auto h-auto max-h-[500px] w-auto transition-transform duration-500 ease-out group-hover/card:scale-105"
                      />

                      {/* RIGHT IMAGE TAGS → now bottom-left */}
                      <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2">
                        {rightTags.map((tag, index) => (
                          <span
                            key={`${tag}-${index}`}
                            className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800 shadow"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </HoverImageContainer>
                  </div>
                </div>
              );
            })}
             
          </div>
        </div>
      </div>
    
    </section>
  );
}