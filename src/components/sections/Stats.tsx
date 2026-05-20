"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

function StatCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
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
  }, [started, end, duration]);

  return (
    <div ref={ref} className="fact-card flex flex-col items-center gap-3 p-4 lg:gap-6 lg:p-6">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#D1E9FF] lg:h-[148px] lg:w-[148px]">
        <span className="text-3xl font-bold text-brand lg:text-5xl">◆</span>
      </div>
      <p className="text-4xl font-bold text-gray-900 lg:text-[56px]">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="text-center text-lg font-semibold text-gray-900">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-cream py-10 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              end={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix ?? ""}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
