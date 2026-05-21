import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutWhoWeAre } from "@/components/about/AboutWhoWeAre";
import { Stats } from "@/components/sections/Stats";
import { AboutIndustries } from "@/components/about/AboutIndustries";
import { AboutBrands } from "@/components/about/AboutBrands";
import { AboutProcess } from "@/components/about/AboutProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutBookCall } from "@/components/about/AboutBookCall";

export const metadata: Metadata = {
  title: "About Endpoint Clients - A Trusted Global Design Agency",
  description:
    "A design studio built on innovation. Global design and development studio for products that grow.",
};

export default function AboutUsPage() {
  return (
    <main>
      <AboutHero />
      <AboutWhoWeAre />
      <Stats variant="about" />
      <AboutIndustries />
      <AboutBrands />
      <AboutProcess />
      <Testimonials />
      <AboutBookCall />
    </main>
  );
}
