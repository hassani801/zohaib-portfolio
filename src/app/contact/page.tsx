import type { Metadata } from "next";
import { ContactPageHero } from "@/components/contact/ContactPageHero";
import { ContactPageFormSection } from "@/components/contact/ContactPageFormSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { ContactLocations } from "@/components/contact/ContactLocations";
import { Stats } from "@/components/sections/Stats";

export const metadata: Metadata = {
  title: "Contact Us - Hire Senior UI UX, SaaS & AI Design Experts",
  description:
    "Boost your business with expert UI UX, web, mobile app, SaaS, and AI design services. 15 years of experience, 1200+ projects delivered, top rated design agency.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageHero />
      <ContactPageFormSection />
      <ValueSection />
      <ContactLocations />
      <Stats variant="about" />
    </main>
  );
}
