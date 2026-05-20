"use client";

import { useEffect, useState } from "react";


export function Header() {
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 hidden transition-all duration-300 lg:block ${
        onHero ? "bg-transparent" : "bg-cream/90 backdrop-blur-md shadow-sm"
      }`}
    >
    </header>
  );
}
