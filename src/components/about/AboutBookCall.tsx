import Image from "next/image";
import { BookCallButton } from "@/components/ui/BookCallButton";

export function AboutBookCall() {
  return (
    <section className="overflow-x-hidden bg-cream px-4 py-9 lg:py-24 2xl:px-0">
      <div className="container mx-auto max-w-7xl px-0 md:px-4 lg:px-8">
        <div className="relative flex h-[30.125rem] flex-col items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-[#0568BF] to-[#070928] px-3 pt-8 md:flex-row md:overflow-visible md:rounded-[50px] md:px-[60px] md:py-[72px]">
          <div className="relative z-[5] flex flex-col items-center justify-center space-y-7 md:items-start md:justify-start">
            <p className="text-center text-[32px] font-semibold leading-[120%] text-white md:text-start lg:text-[48px]">
              Got a product idea? <br />
              <span className="font-playfair text-white">
                Let&apos;s design it..
              </span>
            </p>
            <BookCallButton variant="white" />
          </div>

          <Image
            src="/images/about/book-call-bg.png"
            alt="book call"
            width={1572}
            height={964}
            className="absolute bottom-0 -right-6 z-0 block h-[30.125rem] w-[400px] rounded-r-[50px] object-cover object-bottom md:relative md:h-auto md:w-[60%] md:max-h-full"
          />
        </div>
      </div>
    </section>
  );
}
