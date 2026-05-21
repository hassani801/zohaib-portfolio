"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CALENDLY_URL,
  SITE_OWNER,
  SITE_OWNER_IMAGE,
  SITE_OWNER_TITLE,
} from "@/data/branding";
import { CONTACT_VIDEO_URL } from "@/data/site";
import { ContactForm } from "@/components/contact/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-cream pt-8 lg:pt-16">
      <div className="container mx-auto max-w-7xl px-4 pb-6 lg:pb-24 xl:px-8 2xl:px-0">
        <div className="relative w-full overflow-hidden rounded-[20px] bg-neutral-900 lg:rounded-[56px]">
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

          <div className="relative mx-auto grid w-full max-w-8xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 sm:py-12 md:grid-cols-2 md:gap-12 md:px-12 md:py-16 lg:gap-14 lg:px-14 lg:py-20 xl:px-16">
            <div className="flex h-full min-h-0 flex-col justify-between gap-8 md:gap-10 lg:py-2">
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
                  src={SITE_OWNER_IMAGE}
                  alt={SITE_OWNER}
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{SITE_OWNER}</h3>
                  <span className="text-sm font-normal text-white">
                    {SITE_OWNER_TITLE}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 lg:justify-center">
              <div className="w-full rounded-4xl bg-white p-6 sm:p-8 lg:p-10">
                <ContactForm variant="home" />
              </div>

              <p className="w-full shrink-0 px-1 text-sm text-white lg:text-right">
                Not Interested to submit the form?{" "}
                <Link
                  href={CALENDLY_URL}
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
