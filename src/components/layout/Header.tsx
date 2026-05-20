"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";

const desktopLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

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
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/assets/CompanyLogo.svg"
            alt="Endpoint Clients"
            width={172}
            height={48}
            className={`h-10 w-auto transition-all ${onHero ? "" : "brightness-0"}`}
            priority
          />
        </Link>

        <div className="relative flex items-center gap-4">
          <div className="relative">
            <Link
              href="#services"
              className="absolute -right-2 -top-4 flex w-16 flex-col items-center overflow-hidden rounded-[10px]"
            >
              <Image
                src="/assets/projectIcon.png"
                alt="projectIcon"
                width={65}
                height={65}
                className="w-full rounded-[10px]"
              />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
