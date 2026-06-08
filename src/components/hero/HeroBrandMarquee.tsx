import Image from "next/image";
import { partnerBrands } from "@/data/site";

export function HeroBrandMarquee() {
  const items = [...partnerBrands, ...partnerBrands];

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-12 py-2 hover:[animation-play-state:paused]">
        {items.map((brand, i) => (
          <div
            key={`${brand.alt}-${i}`}
            className="flex h-[68px] shrink-0 items-center opacity-60 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={170}
              height={83}
              className="h-[52px] w-auto max-w-[140px] object-contain lg:h-[68px] lg:max-w-[170px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
