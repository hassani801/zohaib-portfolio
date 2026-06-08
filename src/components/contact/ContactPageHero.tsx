import Image from "next/image";

export function ContactPageHero() {
  return (
    <div
      id="contact-hero"
      className="relative overflow-hidden bg-brand-dark bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-center bg-no-repeat pb-31 pt-12 lg:pt-18"
    >
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-7 px-4 md:gap-16 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 lg:gap-5">

            {/* LOGO: Scaled to match the height of the three-line stacked text */}
            <Image
              src="/images/icons/Frame 4.jpg"
              alt="Muhammad Zohaib Ali Logo"
              width={48}
              height={48}
              className="h-12 w-auto shrink-0 object-contain lg:h-15 rounded-xl"
            />

            {/* TEXT CONTAINER: Stacks the name and role vertically */}
            <div className="flex flex-col text-left">

              {/* Name split into two lines exactly like the image */}
              <h1 className="font-sans text-xl font-bold leading-[1.1] text-white lg:text-2xl lg:leading-[1.1]">
                Muhammad
                <br />
                Zohaib Ali
              </h1>

              {/* Subtitle / Role */}
              <p className="mt-1 text-[11px] font-normal tracking-wide text-neutral-400 lg:mt-2 lg:text-sm">
                UI/UX Designer
              </p>

            </div>

          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-4xl font-semibold text-white lg:text-[72px] lg:leading-21.5">
            Got an <span className="font-playfair">Idea?</span>
            <br />
            Let&apos;s Make It Real
          </p>
          <p className="max-w-4xl text-base text-gray-200 lg:max-w-[52rem] lg:text-xl">
            Tell us what you&apos;re building. Our team will get back within 24
            hours to schedule a call, understand your goals, and shape the right
            approach.
          </p>
        </div>
      </div>
    </div>
  );
}
