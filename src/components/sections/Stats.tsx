"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

function StatItem({
  end,
  suffix = "",
  prefix = "",
  label,
  icon,
  duration = 2200,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, end, duration]);

  return (
    <div
      ref={ref}
      className={`fact-card flex flex-col items-center gap-6 p-4 lg:gap-8 lg:p-6 ${
        visible ? "animate-factFadeIn opacity-100" : "opacity-0"
      }`}
    >
      <Image src={icon} alt="" width={148} height={148} className="h-28 w-28 lg:h-[148px] lg:w-[148px]" />
      <div className="flex flex-col items-center gap-3">
        <p className="text-4xl font-bold text-gray-900 lg:text-[56px]">
          {prefix}
          {count}
          {suffix}
        </p>
        <p className="text-center text-lg font-semibold text-gray-900">{label}</p>
      </div>
    </div>
  );
}

export function Stats({ variant = "home" }: { variant?: "home" | "about" }) {
  return (
    <section
      className={`bg-cream ${
        variant === "about" ? "py-12 lg:py-24" : "pt-0 lg:pt-70 xl:pt-15"
      }`}
    >
      <div className="container mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-200 px-4 lg:grid-cols-5 lg:divide-x lg:divide-y-0 lg:px-8">
        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            end={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix ?? ""}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>
    </section>
  );
}
