import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { BookCallButton } from "@/components/ui/BookCallButton";

export function AboutWhoWeAre() {
  return (
    <section className="relative z-10 -mt-10 overflow-hidden rounded-t-4xl bg-cream lg:rounded-t-[50px]">
      <section className="bg-white px-4 py-8 lg:py-24 2xl:px-0">
        <div className="container group/section mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12">
            <div className="space-y-3 md:space-y-5">
              <div className="flex flex-col items-start gap-5">
                <SectionBadge label="Who we are" />
                <p className="text-[36px] font-semibold leading-[120%] text-gray-950 lg:text-[48px]">
                  Global design and development studio for
                  <br />
                  <span className="font-playfair relative inline-block transition-all duration-300 ease-out after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 group-hover/section:text-brand">
                    products that grow.
                  </span>
                </p>
              </div>
              <div className="space-y-3 md:space-y-6">
                <p className="text-base text-gray-700 lg:text-xl">
                  We&apos;re a global design and development studio crafting products
                  that turn ideas into measurable business growth, shipping
                  high-performing digital products across 15+ industries.
                </p>
                <BookCallButton />
              </div>
            </div>

            <div>
              <Image
                src="/images/who_we_are.png"
                alt="Mobile App Image"
                width={600}
                height={700}
                className="rounded-4xl object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
