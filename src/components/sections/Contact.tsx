"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT_VIDEO_URL } from "@/data/site";
import { ContactForm } from "@/components/contact/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-cream">
      <div className="container mx-auto max-w-7xl px-4 pb-6 lg:pb-24 xl:px-8 2xl:px-0">
        <div className="relative flex min-h-0 w-full items-center overflow-hidden rounded-[20px] bg-neutral-900 lg:rounded-[56px]">
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

          <div className="relative mx-auto grid w-full max-w-8xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-2 md:px-12 md:py-18 lg:gap-10 lg:py-0 lg:pl-12 lg:pr-10">
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="flex flex-col gap-3 text-4xl font-semibold leading-[112%] text-white lg:gap-4 lg:text-[50px]">
                  <span>
                    Let&apos;s{" "}
                    <span className="font-playfair inline-block italic transition-all duration-300 ease-out hover:-translate-x-1">
                      Design Products
                    </span>
                  </span>
                  <span>user remembers.</span>
                </h2>
                <p className="text-lg leading-normal text-white lg:text-xl">
                  Tell us about your idea. We&apos;ll start with a call to understand
                  your goals and define the right approach, then turn it into a clear,
                  well-designed product.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/images/backgrounds/ceo-contact.png"
                  alt="Mohsin Irshad"
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">Mohsin Irshad</h3>
                  <span className="text-sm font-normal text-white">
                    CEO Endpointclients
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end justify-end">
              <div className="w-full rounded-4xl bg-white p-4 lg:p-10">
                <ContactForm variant="home" />
              </div>

              <p className="mt-6 w-full text-sm text-white lg:text-right">
                Not Interested to submit the form?{" "}
                <Link
                  href="https://calendly.com/endpointclients/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-white font-bold text-white hover:opacity-90"
                >
                  Book A Call Directly
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
