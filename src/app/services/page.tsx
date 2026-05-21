import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesPageList } from "@/components/services/ServicesPageList";
import { ValueSection } from "@/components/sections/ValueSection";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutBookCall } from "@/components/about/AboutBookCall";

export const metadata: Metadata = {
  title: "Trusted UI UX, SaaS and AI Design Services for Modern Brands",
  description:
    "Boost your business with expert UI UX, web, mobile app, SaaS, and AI design services. 15 years of experience, 1200+ projects delivered, top rated design agency.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesPageList />
      <ValueSection />
      <Stats variant="about" />
      <Testimonials />
      <AboutBookCall />
    </main>
  );
}
