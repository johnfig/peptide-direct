"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import clsx from "clsx";

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const subjectOptions = [
  { value: "", label: "Select a subject" },
  { value: "general", label: "General Inquiry" },
  { value: "medical", label: "Medical Question" },
  { value: "billing", label: "Billing" },
  { value: "technical", label: "Technical Support" },
  { value: "other", label: "Other" },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  function onSubmit(_data: ContactFormData) {
    // TODO: wire up to API endpoint
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-emerald-600"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-navy">
          Message Sent
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="First Name"
          name="firstName"
          placeholder="John"
          required
          error={errors.firstName?.message}
          register={register("firstName", {
            required: "First name is required",
          })}
        />
        <Input
          label="Last Name"
          name="lastName"
          placeholder="Doe"
          required
          error={errors.lastName?.message}
          register={register("lastName", {
            required: "Last name is required",
          })}
        />
      </div>

      {/* Email & Phone row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          error={errors.email?.message}
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          error={errors.phone?.message}
          register={register("phone")}
        />
      </div>

      {/* Subject select */}
      <div className="space-y-1.5">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-navy"
        >
          Subject<span className="ml-0.5 text-red-500">*</span>
        </label>
        <select
          id="subject"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={clsx(
            "w-full rounded-xl border px-4 py-2.5 text-sm",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2",
            errors.subject
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-200 focus:border-medical-blue focus:ring-medical-blue/20",
          )}
          {...register("subject", { required: "Please select a subject" })}
        >
          {subjectOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p id="subject-error" className="text-xs text-red-500" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <Textarea
        label="Message"
        name="message"
        placeholder="How can we help you?"
        required
        rows={5}
        error={errors.message?.message}
        register={register("message", {
          required: "Message is required",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters",
          },
        })}
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
