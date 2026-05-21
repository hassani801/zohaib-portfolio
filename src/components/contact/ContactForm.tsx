"use client";

import { useState, type FormEvent } from "react";
import { formBudgets, formServices } from "@/data/site";
import { StartProjectButton } from "@/components/ui/StartProjectButton";

type ContactFormProps = {
  variant?: "page" | "home";
};

export function ContactForm({ variant = "page" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-4xl bg-white p-10 text-center">
        <p className="text-2xl font-bold text-gray-950">Thank you!</p>
        <p className="mt-3 text-gray-600">We&apos;ve received your inquiry.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7.5">
      <FormField label="Full Name" name="fullName" placeholder="Jane Cooper" />
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
        <FormSelect
          label="Service required*"
          name="serviceRequired"
          options={formServices}
          placeholder="Select Your Service"
          required
        />
        <FormSelect
          label="Project budget*"
          name="projectBudget"
          options={formBudgets}
          placeholder="Select Your Range"
          required
        />
      </div>
      <div className="group">
        <label
          htmlFor="projectDetails"
          className="mb-1 block text-lg font-semibold text-black transition-colors duration-300 group-hover:text-brand"
        >
          Project details*
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          required
          rows={variant === "page" ? 3 : 4}
          placeholder={
            variant === "page"
              ? "Tell us more about your idea"
              : "Tell us about your project..."
          }
          className="w-full resize-none border-b-2 border-black bg-transparent py-2 text-base font-normal text-black outline-none placeholder:text-[#6e6e6e] transition-colors duration-300 focus:ring-0 group-hover:border-brand"
        />
      </div>
      {variant === "page" ? (
        <button
          type="submit"
          className="w-full cursor-pointer rounded-full bg-[#05080d] px-8 py-3 text-xl font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Send inquiry
        </button>
      ) : (
        <StartProjectButton type="submit">Send inquiry</StartProjectButton>
      )}
    </form>
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
        className="mb-1 block text-lg font-semibold text-black transition-colors duration-300 group-hover:text-brand"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={
          name === "email" ? "email" : name === "fullName" ? "name" : undefined
        }
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
    <div className="group mt-4 lg:mt-0">
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
