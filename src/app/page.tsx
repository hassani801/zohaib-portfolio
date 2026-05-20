import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { ValueSection } from "@/components/sections/ValueSection";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { VideoSection } from "@/components/sections/VideoSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Industries />
      <ValueSection />
      <Services />
      <Stats />
      <Testimonials />
      <VideoSection />
      <Contact />
    </main>
  );
}
