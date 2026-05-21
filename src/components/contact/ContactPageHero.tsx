import Image from "next/image";

export function ContactPageHero() {
  return (
    <div
      id="contact-hero"
      className="relative overflow-hidden bg-brand-dark bg-[url('/images/HomeHeroBg.svg')] bg-cover bg-center bg-no-repeat pb-31 pt-12 lg:pt-18"
    >
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-7 px-4 md:gap-16 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/assets/CompanyLogo.svg"
            alt="Logo"
            width={172}
            height={48}
            className="h-12 w-43"
            priority
          />
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
