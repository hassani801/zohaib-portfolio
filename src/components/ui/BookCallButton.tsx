import Link from "next/link";
import { CALENDLY_URL } from "@/data/about";

type BookCallButtonProps = {
  variant?: "brand" | "white";
  className?: string;
};

export function BookCallButton({
  variant = "brand",
  className = "",
}: BookCallButtonProps) {
  const isWhite = variant === "white";

  return (
    <Link
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 md:px-6 md:py-4 ${
        isWhite
          ? "bg-white text-black"
          : "bg-brand text-white"
      } ${className}`}
    >
      <span className="relative z-10 text-base md:text-xl">Book a Call</span>
      <span className="relative z-10 shrink-0 transition-transform duration-500 group-hover:rotate-45">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M17.9985 5.96188C17.752 5.73328 17.4267 5.60648 17.1498 5.52671C16.8544 5.44161 16.5165 5.38359 16.1686 5.34296C15.4713 5.26154 14.6536 5.24119 13.8884 5.2478C13.1188 5.25445 12.3816 5.26276 12.6508 5.52671L3.99957 11.2511C3.58536 11.2511 3.24957 11.5869 3.24957 12.0011C3.24957 12.4153 3.58536 12.7511 3.99957 12.7511L18.7339 12.7511C18.7089 12.7803 18.683 12.81 18.6563 12.8403C18.2198 13.3343 17.6235 13.8932 17.0079 14.4277C16.396 14.9591 15.7819 15.452 15.3194 15.813C15.0886 15.9931 14.8964 16.1397 14.7624 16.241C14.6954 16.2916 14.643 16.3308 14.6076 16.3572L14.5675 16.387L14.5548 16.3964C14.2213 16.6421 14.1501 17.1116 14.3958 17.4451C14.6414 17.7786 15.1114 17.8495 15.4449 17.6038L15.4489 17.6008L15.4604 17.5923L15.504 17.5599C15.5418 17.5317 15.5968 17.4905 15.6666 17.4379C15.806 17.3325 16.0044 17.1811 16.2423 16.9954C16.7174 16.6246 17.3533 16.1144 17.9914 15.5603C18.6257 15.0095 19.2794 14.4005 19.7804 13.8334C20.0301 13.5507 20.2578 13.2608 20.4271 12.98C20.583 12.7213 20.7476 12.3773 20.7496 12.0063"
            fill={isWhite ? "#111827" : "white"}
          />
        </svg>
      </span>
      {!isWhite && (
        <div className="absolute -left-40 -top-40 h-[200px] w-[65px] rotate-30 rounded-full bg-white blur-[70px] group-hover:animate-buttonShine" />
      )}
    </Link>
  );
}
