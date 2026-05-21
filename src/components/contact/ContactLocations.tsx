import Image from "next/image";
import Link from "next/link";
import { contactPageOffices } from "@/data/contact";
import { SectionBadge } from "@/components/ui/SectionBadge";

function LocationPinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
      aria-hidden
    >
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0011 22C12.6044 22 13.1841 21.773 13.6177 21.367C13.9206 21.0834 14.2311 20.7971 14.5452 20.5075C18.3609 16.9893 22.711 12.9784 20.316 7.37966C18.9126 4.09916 15.5439 2 12.0011 2C8.45834 2 5.08963 4.09916 3.68627 7.37966C1.30093 12.9556 5.603 16.9368 9.39808 20.4488C9.73246 20.7582 10.0629 21.064 10.3845 21.367C10.8182 21.773 11.3978 22 12.0011 22ZM12 14.5C13.933 14.5 15.5 12.933 15.5 11C15.5 9.067 13.933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.933 10.067 14.5 12 14.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.75C9.65279 6.75 7.75 8.65279 7.75 11C7.75 13.3472 9.65279 15.25 12 15.25C14.3472 15.25 16.25 13.3472 16.25 11C16.25 8.65279 14.3472 6.75 12 6.75ZM9.25 11C9.25 9.48122 10.4812 8.25 12 8.25C13.5188 8.25 14.75 9.48122 14.75 11C14.75 12.5188 13.5188 13.75 12 13.75C10.4812 13.75 9.25 12.5188 9.25 11Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.001 1.25C8.17489 1.25 4.52456 3.51303 2.99665 7.08468C1.57469 10.4086 2.34447 13.2373 3.94723 15.6595C5.26128 17.6454 7.17786 19.4178 8.90693 21.0168C9.2366 21.3217 9.55961 21.6204 9.87017 21.9129C8.70581 18.711 9.34232 18.9587 10.001 18.9587C10.6596 18.9587 11.2961 18.711 11.7753 18.2624C13.9888 16.2193 15.6084 14.727 16.7149 13.051C18.0489 11.0305 18.6881 8.67077 17.5046 5.90423C16.2314 2.92785 13.1894 1.04199 10.001 1.04199C6.81251 1.04199 3.77057 2.92785 2.49731 5.90423C1.31234 8.6742 1.95383 11.0314 3.28946 13.0499C4.3845 14.7049 5.98165 16.1818 7.42255 17.5143C7.69727 17.7684 7.96644 18.0173 8.22524 18.2611C8.70581 18.711 9.34232 18.9587 10.001 18.9587C10.6596 18.9587 11.2961 18.711 11.7753 18.2624C12.0199 18.0333 12.2735 17.7997 12.5322 17.5614C13.9888 16.2193 15.6084 14.727 16.7149 13.051C18.0489 11.0305 18.6881 8.67077 17.5046 5.90423C16.2314 2.92785 13.1894 1.04199 10.001 1.04199Z"
        fill="black"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
      aria-hidden
    >
      <path
        opacity="0.4"
        d="M9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.755 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9392 8.41261 21.9097 7.0282 21.5259 6L12 11L2.47411 6C2.09032 7.0282 2.0608 8.4126 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.92 2.78681C12.967 2.73773 11.033 2.73773 9.07999 2.7868L9.02182 2.78826C7.497 2.82655 6.27002 2.85735 5.2867 3.0286C4.2572 3.20789 3.42048 3.55177 2.71362 4.26132C2.00971 4.9679 1.66764 5.7926 1.49176 6.8054C1.32429 7.76978 1.29878 8.9668 1.26719 10.4496L1.26593 10.5084C1.24469 11.5047 1.24469 12.4953 1.26594 13.4916L1.26719 13.5504C1.29879 15.0332 1.32429 16.2302 1.49176 17.1946C1.66764 18.2074 2.00972 19.0321 2.71362 19.7387C3.42048 20.4482 4.2572 20.7921 5.2867 20.9714C6.27001 21.1426 7.49697 21.1735 9.02177 21.2117L9.07999 21.2132C11.033 21.2623 12.967 21.2623 14.92 21.2132L14.9782 21.2117C16.503 21.1735 17.73 21.1426 18.7133 20.9714C19.7428 20.7921 20.5795 20.4482 21.2864 19.7387C21.9903 19.0321 22.3324 18.2074 22.5082 17.1946C22.6757 16.2302 22.7012 15.0332 22.7328 13.5503L22.7341 13.4916C22.7553 12.4953 22.7553 11.5047 22.7341 10.5084L22.7328 10.4496C22.7012 8.9668 22.6757 7.76978 22.5082 6.8054C22.3324 5.7926 21.9903 4.9679 21.2864 4.26132C20.5795 3.55177 19.7428 3.20789 18.7133 3.0286C17.73 2.85735 16.503 2.82655 14.9782 2.78826L14.92 2.78681ZM9.07999 4.2868C11.0065 4.2384 12.9935 4.2384 14.92 4.2868L14.9782 4.28826C16.4553 4.32479 17.602 4.35335 18.5082 4.5054C19.3975 4.65489 19.9395 4.90735 20.3795 5.34912C20.8226 5.79403 21.0751 6.33699 21.2246 7.2264C21.3766 8.1326 21.4052 9.2793 21.4417 10.7564L21.4432 10.8146C21.4635 11.7353 21.4635 12.2647 21.4432 13.1854L21.4417 13.2436C21.4052 14.7207 21.3766 15.8674 21.2246 16.7736C21.0751 17.663 20.8226 18.206 20.3795 18.6509C19.9395 19.0926 19.3975 19.3451 18.5082 19.4946C17.602 19.6466 16.4553 19.6752 14.9782 19.7117L14.92 19.7132C12.9935 19.7616 11.0065 19.7616 9.07999 19.7132L9.02177 19.7117C7.5447 19.6752 6.398 19.6466 5.4918 19.4946C4.60239 19.3451 4.05943 19.0926 3.61452 18.6509C3.17275 18.206 2.92029 17.663 2.7708 16.7736C2.61875 15.8674 2.59019 14.7207 2.55366 13.2436L2.55221 13.1854C2.53187 12.2647 2.53187 11.7353 2.55221 10.8146L2.55366 10.7564C2.59019 9.2793 2.61875 8.1326 2.7708 7.2264C2.92029 6.33699 3.17275 5.79403 3.61452 5.34912C4.05943 4.90735 4.60239 4.65489 5.4918 4.5054C6.398 4.35335 7.5447 4.32479 9.02177 4.28826L9.07999 4.2868Z"
        fill="black"
      />
    </svg>
  );
}

export function ContactLocations() {
  return (
    <section className="relative flex flex-col items-start justify-center bg-cream px-4 py-12 md:py-24 xl:px-8 2xl:px-0">
      <Image
        src="/images/services/services-cube.png"
        alt="cube"
        width={200}
        height={200}
        className="absolute -left-1/12 hidden w-auto animate-slowRotate lg:inline-block"
      />

      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col items-start gap-5 pb-8 md:pb-12">
          <SectionBadge label="Location" />
          <p className="text-[32px] font-semibold leading-[120%] text-gray-950 md:text-[48px]">
            One <span className="font-playfair">Studio</span>
            <br />
            <span className="font-playfair">Global Reach</span>
          </p>
        </div>

        <div className="col-span-2 flex flex-col gap-4 md:gap-8">
          {contactPageOffices.map((office) => (
            <div
              key={office.country}
              className="group relative flex w-full flex-col gap-4 overflow-hidden rounded-3xl border border-transparent bg-white p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand/20 md:gap-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(73,57,210,0.14),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-4">
                <Image
                  src={office.flag}
                  alt={office.flagAlt}
                  width={48}
                  height={48}
                  className="h-12 w-12 transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-110"
                />
                <span className="text-2xl font-semibold text-gray-950">
                  {office.country}
                </span>
              </div>

              <hr className="relative z-10 border-gray-200" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="group/link flex w-fit items-start gap-4 text-gray-800 transition-transform duration-300 ease-out hover:translate-x-1">
                  <LocationPinIcon />
                  <span className="text-base leading-relaxed text-gray-800 transition-colors duration-300 group-hover/link:text-brand lg:text-lg">
                    {office.address}
                  </span>
                </div>

                <Link
                  href={`mailto:${office.email}`}
                  className="group/link flex w-fit items-center gap-4 text-gray-800 transition-transform duration-300 ease-out hover:translate-x-1"
                >
                  <EmailIcon />
                  <span className="relative text-base text-gray-800 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 group-hover/link:text-brand hover:after:scale-x-100 lg:text-lg">
                    {office.email}
                  </span>
                </Link>

                {office.phone && office.phoneHref && (
                  <Link
                    href={office.phoneHref}
                    target={office.whatsapp ? "_blank" : undefined}
                    rel={office.whatsapp ? "noopener noreferrer" : undefined}
                    className="group/link flex w-fit items-center gap-4 text-gray-800 transition-transform duration-300 ease-out hover:translate-x-1"
                  >
                    {office.whatsapp ? (
                      <Image
                        src="/assets/whatsapp.svg"
                        alt="whatsapp icon"
                        width={24}
                        height={24}
                        className="h-6 w-6 shrink-0"
                      />
                    ) : (
                      <PhoneIcon />
                    )}
                    <span className="relative text-base text-gray-800 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 group-hover/link:text-brand hover:after:scale-x-100 lg:text-lg">
                      {office.phone}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
      <path
        opacity="0.4"
        d="M9.35221 20.6243C7.8417 20.4471 6.322 19.876 4.88169 18.9171C3.44138 17.9582 2.22733 16.6619 1.32446 15.1331C0.421586 13.6043 0 11.8987 0 10.1667C0 8.43468 0.421586 6.72908 1.32446 5.20028C2.22733 3.67148 3.44138 2.37518 4.88169 1.41628C6.322 0.457385 7.8417 -0.113715 9.35221 -0.290885C9.59912 -0.318425 9.84829 -0.332692 10.0988 -0.333333H13.9012C14.1517 -0.332692 14.4009 -0.318425 14.6478 -0.290885C16.1583 -0.113715 17.678 0.457385 19.1183 1.41628C20.5586 2.37518 21.7727 3.67148 22.6755 5.20028C23.5784 6.72908 24 8.43468 24 10.1667C24 11.8987 23.5784 13.6043 22.6755 15.1331C21.7727 16.6619 20.5586 17.9582 19.1183 18.9171C17.678 19.876 16.1583 20.4471 14.6478 20.6243C14.4009 20.6526 14.1517 20.6667 13.9012 20.6667H10.0988C9.84829 20.6667 9.59912 20.6526 9.35221 20.6243Z"
        fill="black"
      />
    </svg>
  );
}
