import { valueProps } from "@/data/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { CheckStarIcon } from "@/components/ui/icons";

export function ValueSection() {
  return (
    <section className="bg-cream py-10 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="group grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4 lg:gap-8">
            <p className="text-3xl font-semibold text-gray-950 lg:text-5xl">
              Design That Solves{" "}
              <span className="playfair-underline font-playfair italic">
                Real Problems
              </span>
            </p>
            <p className="text-lg text-gray-950 lg:text-2xl">
              Great products don&apos;t need explanation. We design experiences
              that feel natural, reduce friction, and guide users effortlessly
              from first interaction to conversion.
            </p>
            <CTAButton />
          </div>

          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-0">
              {valueProps.map((prop) => (
                <div
                  key={prop}
                  className="flex flex-row items-center gap-3 transition-transform duration-300 ease-out hover:translate-x-1"
                >
                  <CheckStarIcon />
                  <p className="text-lg text-gray-900">{prop}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-16 text-center text-sm uppercase tracking-widest text-gray-600 lg:mt-24">
          We Design Digital Solutions That Performs
        </p>
      </div>
    </section>
  );
}
