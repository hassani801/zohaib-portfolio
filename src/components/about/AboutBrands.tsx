import { HeroBrandMarquee } from "@/components/hero/HeroBrandMarquee";

export function AboutBrands() {
  return (
    <section className="overflow-x-hidden bg-cream py-10 lg:py-16">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 lg:px-8">
        <h2 className="text-center text-xl font-bold text-gray-950 lg:text-2xl">
          Chosen by 350+ Premium Brands Worldwide
        </h2>
        <HeroBrandMarquee />
      </div>
    </section>
  );
}
