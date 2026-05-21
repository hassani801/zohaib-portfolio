import Image from "next/image";
import { SITE_OWNER, SITE_OWNER_TITLE } from "@/data/branding";
import { CONTACT_VIDEO_URL } from "@/data/site";
import { ContactForm } from "./ContactForm";

export function ContactPageFormSection() {
  return (
    <section className="relative z-10 -mt-10 overflow-hidden rounded-t-4xl bg-cream lg:rounded-t-[50px]">
      <section className="bg-cream px-4 xl:px-8 2xl:px-0">
        <div className="container mx-auto max-w-7xl py-4 md:pt-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative h-full w-full overflow-hidden rounded-4xl bg-black p-10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute left-0 top-0 h-full w-full object-cover"
                aria-hidden
              >
                <source src={CONTACT_VIDEO_URL} type="video/mp4" />
              </video>

              <div className="relative flex h-full min-h-140 flex-col justify-between">
                <div className="space-y-3.5 md:space-y-6">
                  <h2 className="text-[36px] font-semibold text-white md:text-[60px]">
                    Share Your <span className="font-playfair">Vision</span> With
                    US
                  </h2>
                  <p className="text-base text-white md:text-xl">
                    Tell us about your idea. We&apos;ll start with a call to
                    understand your goals and define the right approach, then turn
                    it into a clear, well-designed product.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/images/backgrounds/ceo-contact.png"
                    alt={SITE_OWNER}
                    width={96}
                    height={96}
                    className="h-24 w-24 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {SITE_OWNER}
                    </h3>
                    <span className="text-sm font-normal text-white">
                      {SITE_OWNER_TITLE}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-full rounded-[32px] bg-white p-4 lg:rounded-[50px] lg:p-10">
              <ContactForm variant="page" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
