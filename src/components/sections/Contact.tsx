"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { CONTACT_VIDEO_URL, formBudgets, formServices } from "@/data/site";
import { StartProjectButton } from "@/components/ui/StartProjectButton";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              {submitted ? (
                <div className="w-full rounded-4xl bg-white p-10 text-center">
                  <p className="text-2xl font-bold text-gray-950">Thank you!</p>
                  <p className="mt-3 text-gray-600">
                    We&apos;ve received your inquiry.
                  </p>
                </div>
              ) : (
                <div className="w-full rounded-4xl bg-white p-4 lg:p-10">
                  <form onSubmit={handleSubmit} className="space-y-7.5">
                    <FormField
                      label="Full Name"
                      name="fullName"
                      placeholder="Jane Cooper"
                    />
                    <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-2">
                      <FormField
                        label="Company name"
                        name="companyName"
                        placeholder="Ex. Tesla Inc"
                      />
                      <FormField
                        label="Email*"
                        name="email"
                        type="email"
                        placeholder="You@Example.Com"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-2">
                      <FormSelect
                        label="Service required*"
                        name="serviceRequired"
                        options={formServices}
                        placeholder="Select Your Service"
                        required
                      />
                      <FormSelect
                        label="Project budget*"
                        name="budget"
                        options={formBudgets}
                        placeholder="Select Your Range"
                        required
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="details"
                        className="mb-1 block text-lg font-semibold text-black transition-colors duration-300 group-hover:text-brand"
                      >
                        Project details*
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        required
                        rows={4}
                        placeholder="Tell us about your project..."
                        className="w-full resize-none border-b-2 border-black bg-transparent py-2 text-base font-normal text-black outline-none placeholder:text-[#6e6e6e] transition-colors duration-300 focus:ring-0 group-hover:border-brand"
                      />
                    </div>
                    <StartProjectButton type="submit">Send inquiry</StartProjectButton>
                  </form>
                </div>
              )}

              <p className="mt-6 w-full text-sm text-white lg:text-right">
                Not Interested to submit the form?{" "}
                <a
                  href="https://calendly.com/endpointclients/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-white font-bold text-white hover:opacity-90"
                >
                  Book A Call Directly
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="group">
      <label
        htmlFor={name}
        className="mb-1 block text-lg font-semibold text-black transition-colors duration-300 group-hover:text-brand lg:text-lg"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={name === "email" ? "email" : name === "fullName" ? "name" : undefined}
        className="w-full border-b-2 border-black bg-transparent py-2 text-base font-normal text-black outline-none placeholder:text-[#6e6e6e] transition-colors duration-300 focus:ring-0 group-hover:border-brand"
      />
    </div>
  );
}

function FormSelect({
  label,
  name,
  options,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="group">
      <label
        htmlFor={name}
        className="mb-1 block text-lg font-semibold text-black transition-colors duration-300 group-hover:text-brand"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full cursor-pointer border-b-2 border-black bg-transparent py-2 text-base font-normal text-black outline-none transition-colors duration-300 focus:ring-0 group-hover:border-brand"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
