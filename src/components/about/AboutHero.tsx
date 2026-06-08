"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Marquee item data
// ---------------------------------------------------------------------------
const MARQUEE_ITEMS = [
  { id: 1, src: "/images/about/enterprise.png", label: "Enterprise" },
  { id: 2, src: "/images/about/education.png", label: "Education" },
  { id: 3, src: "/images/about/healthcare.png", label: "Healthcare" },
  { id: 4, src: "/images/about/booking.png", label: "Booking" },
  { id: 5, src: "/images/about/fitness.png", label: "Fitness" },
];

const ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

// ---------------------------------------------------------------------------
// MarqueeCard — tall card matching Image 1 proportions
// ---------------------------------------------------------------------------
function MarqueeCard({ item }: { item: (typeof MARQUEE_ITEMS)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        flexShrink: 0,
        width: "290px",
        height: "300px",
        borderRadius: "32px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.5)"
          : "0 6px 24px rgba(0,0,0,0.25)",
      }}
    >
      <Image
        src={item.src}
        alt={item.label}
        fill
        sizes="200px"
        className="object-cover"
        style={{
          filter: hovered ? "brightness(1)" : "brightness(0.9)",
          transition: "filter 0.35s ease",
        }}
        priority
      />

      {/* Subtle border overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "12px",
          border: hovered
            ? "2px solid rgba(255,255,255,0.8)"
            : "1px solid rgba(255,255,255,0.12)",
          transition: "border 0.3s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// MarqueeTrack
// ---------------------------------------------------------------------------
function MarqueeTrack() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        paddingTop: "20px",
        paddingBottom: "20px",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
      }}
      onMouseEnter={() => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
      }}
      onMouseLeave={() => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "running";
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "20px",
          width: "max-content",
          animation: "marquee-scroll 32s linear infinite",
        }}
      >
        {ITEMS.map((item, i) => (
          <MarqueeCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AboutHero
// ---------------------------------------------------------------------------
export function AboutHero() {
  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section
        id="about-hero"
        className="relative overflow-hidden bg-brand-dark bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-center bg-no-repeat w-full"
        style={{
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* ── Top content ── */}
        <div
          className="container mx-auto flex max-w-7xl flex-col items-center px-4 md:px-8"
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            paddingTop: "28px",
            paddingBottom: "8px",
          }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-4 lg:gap-5">

              {/* LOGO: Scaled to match the height of the three-line stacked text */}
              <img
                src="/images/icons/Frame 4.jpg"
                alt="Muhammad Zohaib Ali Logo"
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

          {/* Headline */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h1
              style={{
                fontSize: "clamp(1.6rem, 3.2vw, 3rem)",
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              A <span className="font-playfair italic">Design Studio</span>
              <br />
              Built on Innovation
            </h1>
            <p
              style={{
                maxWidth: "46rem",
                fontSize: "clamp(0.78rem, 1.1vw, 0.92rem)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              We started with a simple belief that great design has the power to
              change how people experience the world. Today, we&apos;re a global team
              helping brands across 15+ industries design and develop products
              that truly matter.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/#contact"
              className="flex items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-semibold text-gray-950 transition-opacity hover:opacity-90"
            >
              Start Project
            </Link>
            <Link
              href="/#services"
              className="flex items-center justify-center rounded-xl border border-white px-8 py-3 text-sm font-semibold text-white backdrop-blur-[30px] transition-colors hover:bg-white/10"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* ── Marquee — takes remaining vertical space ── */}
        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
            paddingBottom: "0px",
            minHeight: 0,
            overflow: "hidden",
          }}
        >
          <MarqueeTrack />
        </div>
      </section>
    </>
  );
}