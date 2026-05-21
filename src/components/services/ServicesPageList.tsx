import { servicesPageCards } from "@/data/services-page";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ServicePageCardItem } from "./ServicePageCard";

export function ServicesPageList() {
  return (
    <section className="relative z-10 -mt-10 overflow-hidden rounded-t-4xl bg-cream lg:rounded-t-[50px]">
      <section className="px-4 py-10 lg:py-24 2xl:px-0">
        <div className="container group/section mx-auto max-w-330">
          <div className="mb-12 flex flex-col items-start gap-5 md:mb-16">
            <SectionBadge label="Our Services" />
            <p className="text-4xl font-semibold leading-[120%] text-gray-950 lg:text-5xl">
              We turn bold ideas into
              <br />
              <span className="font-playfair text-brand">products that convert.</span>
            </p>
          </div>

          <div className="space-y-12 md:space-y-24">
            {servicesPageCards.map((card) => (
              <ServicePageCardItem key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
