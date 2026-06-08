import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_LOGO_SRC } from "@/data/branding";
import {
  footerOffices,
  footerQuickLinks,
  footerReviewLinks,
  footerServiceLinks,
  footerSocialLinks,
  heroPlatformIcons,
} from "@/data/site";
import { FooterLink } from "@/components/ui/FooterLink";
import { ArrowIcon } from "@/components/ui/icons";

function LocationPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0009 18.3337C10.5037 18.3337 10.9867 18.1445 11.3481 17.8061C11.6005 17.5698 11.8592 17.3313 12.121 17.0899C15.3008 14.158 18.9259 10.8156 16.93 6.15005C15.7605 3.41629 12.9532 1.66699 10.0009 1.66699C7.04862 1.66699 4.24136 3.41629 3.07189 6.15005C1.08411 10.7967 4.66917 14.1143 7.83173 17.041C8.11038 17.2989 8.38575 17.5537 8.65374 17.8061C9.01515 18.1445 9.49821 18.3337 10.0009 18.3337ZM10 12.0837C11.6108 12.0837 12.9167 10.7778 12.9167 9.16699C12.9167 7.55616 11.6108 6.25033 10 6.25033C8.38917 6.25033 7.08333 7.55616 7.08333 9.16699C7.08333 10.7778 8.38917 12.0837 10 12.0837Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.001 1.04199C6.81251 1.04199 3.77057 2.92785 2.49731 5.90423C1.31234 8.6742 1.95383 11.0314 3.28946 13.0499C4.3845 14.7049 5.98165 16.1818 7.42255 17.5143C7.69727 17.7684 7.96644 18.0173 8.22524 18.2611C8.70581 18.711 9.34232 18.9587 10.001 18.9587C10.6596 18.9587 11.2961 18.711 11.7753 18.2624C12.0199 18.0333 12.2735 17.7997 12.5322 17.5614C13.9888 16.2193 15.6084 14.727 16.7149 13.051C18.0489 11.0305 18.6881 8.67077 17.5046 5.90423C16.2314 2.92785 13.1894 1.04199 10.001 1.04199ZM3.64656 6.39587C4.71225 3.90473 7.28482 2.29199 10.001 2.29199C12.7171 2.29199 15.2897 3.90473 16.3554 6.39587C17.3321 8.679 16.8392 10.594 15.6717 12.3623C14.6571 13.8991 13.1708 15.2705 11.7098 16.6185C11.445 16.8628 11.1811 17.1063 10.921 17.3499C10.6774 17.578 10.3478 17.7087 10.001 17.7087C9.65444 17.7087 9.32507 17.5782 9.0815 17.3504C6.79846 15.2318 5.33572 13.8772 4.33191 12.3602C3.16327 10.594 2.66861 8.68194 3.64656 6.39587Z"
        fill="white"
      />
    </svg>
  );
}

function OfficeFlag({ flag }: { flag: string }) {
  const emoji = flag === "pk" ? "🇵🇰" : "🇬🇧";
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center text-2xl leading-none">
      {emoji}
    </span>
  );
}

function SocialIcon({
  type,
  href,
  label,
}: {
  type: string;
  href: string;
  label: string;
}) {
  let icon: ReactNode;

  if (type === "facebook") {
    icon = (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-hidden>
        <path
          d="M20.409 10.2045C20.409 15.4525 16.473 19.753 11.4436 20.3361V12.4641H13.849L14.2134 9.69428H11.5165V8.01782C11.5165 7.21604 11.7352 6.70582 12.9014 6.70582H14.3592V4.15469C13.6303 4.0818 12.9743 4.0818 12.2454 4.0818C10.1316 4.0818 8.67383 5.39381 8.67383 7.72627V9.76717H6.26848V12.537H8.67383V20.3361C3.71735 19.5343 0 15.3068 0 10.2045C0 4.59203 4.59203 0 10.2045 0C15.817 0 20.409 4.59203 20.409 10.2045Z"
          fill="#F5F5F5"
        />
      </svg>
    );
  } else if (type === "instagram") {
    icon = (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-hidden>
        <path
          d="M10.1856 4.95313C9.49941 4.95301 8.81991 5.08809 8.18593 5.35063C7.55195 5.61317 6.97591 5.99804 6.4907 6.48325C6.00549 6.96846 5.62062 7.54451 5.35808 8.17849C5.09553 8.81247 4.96046 9.49196 4.96057 10.1782C4.96046 10.8644 5.09553 11.5439 5.35808 12.1779C5.62062 12.8118 6.00549 13.3879 6.4907 13.8731C6.97591 14.3583 7.55195 14.7432 8.18593 15.0057C8.81991 15.2683 9.49941 15.4034 10.1856 15.4033C10.8718 15.4034 11.5513 15.2683 12.1853 15.0057C12.8193 14.7432 13.3953 14.3583 13.8805 13.8731C14.3657 13.3879 14.7506 12.8118 15.0131 12.1779C15.2757 11.5439 15.4107 10.8644 15.4106 10.1782C15.4107 9.49196 15.2757 8.81247 15.0131 8.17849C14.7506 7.54451 14.3657 6.96846 13.8805 6.48325C13.3953 5.99804 12.8193 5.61317 12.1853 5.35063C11.5513 5.08809 10.8718 4.95301 10.1856 4.95313ZM10.1856 13.3769C8.55615 13.3769 7.23682 12.0576 7.23682 10.4281C7.23682 8.79865 8.55615 7.47932 10.1856 7.47932C11.815 7.47932 13.1343 8.79865 13.1343 10.4281C13.1343 12.0576 11.815 13.3769 10.1856 13.3769ZM16.503 5.14434C16.503 5.70082 16.0519 6.15193 15.4954 6.15193C14.9389 6.15193 14.4878 5.70082 14.4878 5.14434C14.4878 4.58786 14.9389 4.13675 15.4954 4.13675C16.0519 4.13675 16.503 4.58786 16.503 5.14434ZM19.2676 6.15193C19.3405 7.4502 19.3405 12.9061 19.2676 14.2044C19.1947 15.5027 18.9599 16.6553 18.1406 17.5476C17.3213 18.4399 16.1687 18.6747 14.8704 18.7476C13.5721 18.8205 8.11621 18.8205 6.81794 18.7476C5.51967 18.6747 4.36707 18.4399 3.47476 17.5476C2.58245 16.6553 2.34766 15.5027 2.27476 14.2044C2.20186 12.9061 2.20186 7.4502 2.27476 6.15193C2.34766 4.85366 2.58245 3.70106 3.47476 2.80875C4.36707 1.91644 5.51967 1.68165 6.81794 1.60875C8.11621 1.53585 13.5721 1.53585 14.8704 1.60875C16.1687 1.68165 17.3213 1.91644 18.1406 2.80875C18.9599 3.70106 19.1947 4.85366 19.2676 6.15193Z"
          fill="#F5F5F5"
        />
      </svg>
    );
  } else {
    icon = (
      <Image
        src="/images/icons/Vector (1).png"
        alt=""
        width={21}
        height={21}
        className="h-[21px] w-[21px] object-contain"
      />
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center"
    >
      {icon}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative pb-27 pt-8 md:pb-30 md:pt-16">
      <Image
        src="/assets/footer-gradient.svg"
        alt=""
        fill
        className="-z-10 object-cover object-center pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto flex max-w-330 flex-col gap-6 px-4 lg:gap-16 lg:px-8">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-10">
          <div className="flex items-center gap-4 lg:gap-5">

            {/* LOGO: Scaled to match the height of the three-line stacked text */}
            <img
              src="/images/icons/Frame 4.jpg"
              alt="Muhammad Zohaib Ali Logo"
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

          <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row lg:gap-0">
            <div className="flex max-w-173.25 flex-col items-center gap-3 md:items-start">
              <span className="text-center text-base font-normal text-gray-50 md:text-start md:text-xl">
                Are you ready to elevate your brand&apos;s digital presence? I lead
                an exceptional team of UX/UI designers, researchers, 3D artists, and
                webmasters.
              </span>
              <div className="flex items-center gap-4">
                {heroPlatformIcons.map((icon) => (
                  <div key={icon.alt} className="group relative">
                    <a
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Image
                        src={icon.image}
                        alt={icon.alt}
                        width={40}
                        height={40}
                        className={`h-10 w-10 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 ${icon.alt === "TechBehemoths"
                            ? "rounded-full"
                            : ""
                          }`}
                      />
                    </a>
                    <div className="pointer-events-none absolute bottom-[120%] left-1/2 z-20 mt-3 hidden -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100 md:block">
                      <div className="relative whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs text-white shadow-lg">
                        {icon.label}
                        <div className="absolute -bottom-3 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto">
              <Link
                href="/contact"
                className="group relative flex w-full cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-4 py-2.5 md:px-6 md:py-4"
              >
                <span className="relative z-10 text-base text-white md:text-xl">
                  Contact Us
                </span>
                <span className="relative z-10 shrink-0 transition-transform duration-500 group-hover:rotate-45">
                  <ArrowIcon />
                </span>
                <div className="absolute -left-40 -top-40 h-[200px] w-[65px] rotate-30 rounded-full bg-white blur-[70px] group-hover:animate-buttonShine" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-7.5">
          <div className="flex flex-col gap-6 2xl:min-w-96.25">
            <h4 className="text-[17px] font-semibold uppercase text-white">
              Quick Link
            </h4>
            <div className="flex flex-col gap-4">
              {footerQuickLinks.map((link) => (
                <FooterLink key={link.label} href={link.href} label={link.label} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 2xl:min-w-96.25">
            <h4 className="text-[17px] font-semibold uppercase text-white">
              Services
            </h4>
            <div className="flex flex-col gap-4">
              {footerServiceLinks.map((link) => (
                <FooterLink key={link.label} href={link.href} label={link.label} />
              ))}
            </div>
          </div>

        </div>


        <div className="flex flex-col-reverse items-center justify-between gap-4 px-8 md:flex-row md:gap-0">
          <p className="text-center text-base font-normal text-white md:text-start">
            © {new Date().getFullYear()} Portfolio | All Rights Reserved.
          </p>
          <div className="flex flex-row justify-center gap-4.25 md:justify-start">
            {footerSocialLinks.map((social) => (
              <SocialIcon
                key={social.label}
                type={social.icon}
                href={social.href}
                label={social.label}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
