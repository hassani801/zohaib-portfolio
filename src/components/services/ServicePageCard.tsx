import Image from "next/image";
import Link from "next/link";
import type { ServicePageCard } from "@/data/services-page";
import { CheckStarIcon } from "@/components/ui/icons";

export function ServicePageCardItem({ card }: { card: ServicePageCard }) {
  return (
    <div className="container mx-auto w-full max-w-330">
      <div className="group h-full w-full overflow-hidden rounded-2xl border border-gray-100 bg-white drop-shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:border-brand/20 hover:shadow-[0_28px_80px_rgba(73,57,210,0.15)] lg:rounded-4xl">
        <div className="w-full overflow-hidden bg-gradient-to-l from-[#DDB1FF] via-20% to-[#BBE6FA]">
          <Image
            src={card.headerImage}
            alt={card.headerImageAlt}
            width={1200}
            height={400}
            className="min-h-45 w-full object-cover"
          />
        </div>

        <div className="space-y-6 bg-white p-4 md:px-12 md:py-10 lg:p-8">
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-[32px] font-semibold text-gray-900 transition-colors duration-300 group-hover:text-brand md:text-[48px]">
              {card.title}
            </h2>
            <p className="text-base font-normal text-gray-700 md:text-xl">
              {card.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-20 md:grid-cols-2">
            {card.features.map((feature) => (
              <div
                key={feature}
                className="group/feature flex items-center gap-3.5 border-b border-gray-100 py-2 transition-all duration-300 hover:translate-x-1 hover:border-b-brand/30 lg:py-4"
              >
                <CheckStarIcon />
                <h3 className="text-lg font-normal text-gray-900 transition-colors duration-300 group-hover/feature:text-brand">
                  {feature}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap -space-x-1 overflow-hidden transition-all duration-300 hover:space-x-1">
              {card.techIcons.map((icon) => (
                <Image
                  key={icon}
                  src={icon}
                  alt="tech stack"
                  width={30}
                  height={30}
                  className="inline-block h-7.5 w-7.5 rounded-full ring-2 ring-white"
                />
              ))}
            </div>
            <Link
              href="/#contact"
              aria-label="Open service"
              className="cursor-pointer transition-transform duration-300 ease-out hover:scale-110 hover:rotate-45"
            >
              <Image
                src="/images/services/actBtn.png"
                alt="Open service"
                width={48}
                height={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
