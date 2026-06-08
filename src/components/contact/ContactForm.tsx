"use client";

import { useState, type FormEvent } from "react";
import { formServices } from "@/data/site";
import { StartProjectButton } from "@/components/ui/StartProjectButton";

type ContactFormProps = {
  variant?: "page" | "home";
};

export function ContactForm({ variant = "page" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    // Automatically read all input values using native FormData
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    const payload = {
      ...formValues,
      access_key: "f3dddb5c-9024-42e0-a7eb-47cafc699f9c",
      subject: `New Lead from ${formValues.fullName || "Inquiry Form"}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || "Failed to submit. Please try again.");
      }
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
        {/* New Currency Selection */}
        <FormSelect
          label="Currency*"
          name="budgetCurrency"
          options={["USD ($)", "PKR (Rs.)"]}
          placeholder="Select Currency"
          required
        />
        {/* New Custom Budget Input */}
        <FormField
          label="Custom budget"
          name="customBudget"
          type="number"
          placeholder="Ex. 5000"
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
          disabled={loading}
          className="w-full cursor-pointer rounded-full bg-[#05080d] px-8 py-3 text-xl font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send inquiry"}
        </button>
      ) : (
        <StartProjectButton type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send inquiry"}
        </StartProjectButton>
      )}

      {errorMessage && (
        <p className="mt-4 text-center text-sm font-semibold text-red-600 animate-pulse">
          {errorMessage}
        </p>
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