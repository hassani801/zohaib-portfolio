import { valueProps } from "@/data/site";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { StartProjectButton } from "@/components/ui/StartProjectButton";
import { CheckStarIcon } from "@/components/ui/icons";
import ScrollVideo from "./ScrollVideo";

export function ValueSection() {
  return (
    <section className="bg-cream">
      <section className="py-8 lg:py-24">
        <div className="container group/section mx-auto flex max-w-7xl flex-col items-start gap-5 px-4 lg:px-8">
          <SectionBadge label="What Makes Us Different" />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <p className="text-4xl font-semibold leading-[100%] text-gray-950 lg:text-5xl">
              Design That
              <br /> Solves{" "}
              <span className="font-playfair relative inline-block transition-all duration-300 ease-out after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 group-hover/section:text-brand">
                Real Problems
              </span>
            </p>

            <div className="flex flex-col gap-4 lg:gap-8">
              <p className="text-lg text-gray-950 lg:text-2xl">
                Great products don&apos;t need explanation. We design experiences
                that feel natural, reduce friction, and guide users effortlessly
                from first interaction to conversion.
              </p>

              <div className="flex flex-col gap-3">
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

              <StartProjectButton />
            </div>
          </div>
        </div>
      </section>
      <ScrollVideo/>
    </section>
  );
}
