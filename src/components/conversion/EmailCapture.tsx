"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { trackFormComplete } from "@/lib/gtm";

interface EmailCaptureProps {
  variant?: "inline" | "stacked";
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
}

interface FormData {
  email: string;
}

export default function EmailCapture({
  variant = "inline",
  placeholder = "Enter your email",
  buttonText = "Get Started",
  onSubmit,
}: EmailCaptureProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function handleFormSubmit(data: FormData) {
    trackFormComplete("email_capture");
    onSubmit?.(data.email);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-emerald-50 px-4 py-3 text-center">
        <p className="text-sm font-medium text-emerald-700">
          Thank you! We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  const isInline = variant === "inline";

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={clsx(
        "flex gap-2",
        isInline ? "flex-row items-start" : "flex-col",
      )}
      noValidate
    >
      <div className={clsx("relative", isInline ? "flex-1" : "w-full")}>
        <input
          type="email"
          placeholder={placeholder}
          aria-label="Email address"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-capture-error" : undefined}
          className={clsx(
            "w-full rounded-full border px-5 py-2.5 text-sm",
            "transition-colors duration-200",
            "placeholder:text-gray-400",
            "focus:outline-none focus:ring-2",
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-200 focus:border-medical-blue focus:ring-medical-blue/20",
          )}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && (
          <p
            id="email-capture-error"
            className="absolute -bottom-5 left-5 text-xs text-red-500"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className={clsx(
          "inline-flex items-center justify-center rounded-full bg-medical-blue px-6 py-2.5 text-sm font-semibold text-white",
          "transition-all duration-200 ease-out",
          "hover:bg-medical-blue-600 hover:scale-[1.02]",
          "focus:outline-none focus:ring-2 focus:ring-medical-blue/30 focus:ring-offset-2",
          "active:scale-[0.98]",
          !isInline && "w-full",
        )}
      >
        {buttonText}
      </button>
    </form>
  );
}
