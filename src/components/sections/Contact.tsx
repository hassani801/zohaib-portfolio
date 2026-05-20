"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { formBudgets, formServices } from "@/data/site";
import { CTAButton } from "@/components/ui/CTAButton";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#531fae] py-12 lg:py-20"
    >
      <Image
        src="/images/backgrounds/ceo-contact.png"
        alt=""
        fill
        className="object-cover object-right opacity-40 pointer-events-none"
        aria-hidden
      />

      <div className="container relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl font-semibold leading-tight lg:text-5xl">
              Let&apos;s Design Products user remembers.
            </h2>
            <p className="mt-6 max-w-lg text-base text-white/80 lg:text-lg">
              Tell us about your idea. We&apos;ll start with a call to understand
              your goals and define the right approach, then turn it into a clear,
              well-designed product.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-lg font-bold">
                MI
              </div>
              <div>
                <h3 className="text-xl font-semibold">Mohsin Irshad</h3>
                <span className="text-sm text-white/70">CEO Endpointclients</span>
              </div>
            </div>

            <p className="mt-8 text-sm text-white/70">
              Not Interested to submit the form?{" "}
              <a
                href="https://calendly.com/endpointclients/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Book A Call Directly
              </a>
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-4xl bg-white p-10 text-center">
                <p className="text-2xl font-bold text-gray-950">Thank you!</p>
                <p className="mt-3 text-gray-600">
                  We&apos;ve received your inquiry.
                </p>
              </div>
            ) : (
              <div className="w-full rounded-4xl bg-white p-4 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-7">
                  <FormField label="Full Name" name="fullName" placeholder="Jane Cooper" />
                  <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
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
                  <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
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
                      className="mb-1 block text-lg font-semibold text-black transition-colors group-hover:text-brand"
                    >
                      Project details*
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none border-b-2 border-black bg-transparent py-2 text-base text-black outline-none placeholder:text-[#6e6e6e] transition-colors focus:ring-0 group-hover:border-brand"
                    />
                  </div>
                  <CTAButton type="submit">Send inquiry</CTAButton>
                </form>
              </div>
            )}
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
        className="mb-1 block text-lg font-semibold text-black transition-colors group-hover:text-brand"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-b-2 border-black bg-transparent py-2 text-base text-black outline-none placeholder:text-[#6e6e6e] transition-colors focus:ring-0 group-hover:border-brand"
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
        className="mb-1 block text-lg font-semibold text-black transition-colors group-hover:text-brand"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full cursor-pointer border-b-2 border-black bg-transparent py-2 text-base text-black outline-none transition-colors focus:ring-0 group-hover:border-brand"
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
