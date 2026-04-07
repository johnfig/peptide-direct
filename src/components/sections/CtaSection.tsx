"use client";

import { useState } from "react";
import clsx from "clsx";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { CONSULTATION_URL } from "@/lib/constants";
import { trackFormComplete } from "@/lib/gtm";

interface CtaSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  variant?: "default" | "dark" | "gradient";
}

const variantStyles = {
  default: {
    section: "bg-gray-50",
    headline: "text-forest",
    subheadline: "text-gray-600",
    inputBorder: "border-gray-200 focus:border-sage focus:ring-sage/20",
    inputText: "text-gray-900 placeholder:text-gray-400",
    proofText: "text-gray-500",
    avatarRing: "ring-gray-50",
  },
  dark: {
    section: "bg-forest",
    headline: "text-white",
    subheadline: "text-gray-300",
    inputBorder: "border-white/20 focus:border-sage-300 focus:ring-sage/30 bg-white/10",
    inputText: "text-white placeholder:text-gray-400",
    proofText: "text-gray-400",
    avatarRing: "ring-forest",
  },
  gradient: {
    section: "bg-gradient-to-r from-forest-900 to-forest",
    headline: "text-white",
    subheadline: "text-gray-200",
    inputBorder: "border-white/20 focus:border-white focus:ring-white/30 bg-white/10",
    inputText: "text-white placeholder:text-gray-300",
    proofText: "text-gray-300",
    avatarRing: "ring-transparent",
  },
} as const;

const avatarColors = [
  "bg-sage-300",
  "bg-emerald-400",
  "bg-amber-400",
];

export default function CtaSection({
  headline = "Ready to Start Your Peptide Therapy Journey?",
  subheadline = "Schedule your free consultation with a licensed provider and discover which peptide protocol is right for you.",
  ctaText = "Start Your Free Consultation",
  variant = "default",
}: CtaSectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const styles = variantStyles[variant];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    trackFormComplete("cta_email_capture");
    setSubmitted(true);
  }

  return (
    <section className={clsx("py-20 md:py-28", styles.section)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className={clsx(
                "text-3xl font-bold md:text-4xl text-balance",
                styles.headline,
              )}
            >
              {headline}
            </h2>

            {subheadline && (
              <p
                className={clsx(
                  "mt-4 text-lg leading-relaxed",
                  styles.subheadline,
                )}
              >
                {subheadline}
              </p>
            )}

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={clsx(
                      "flex-1 rounded-full border px-5 py-3 text-sm",
                      "transition-colors duration-200",
                      "focus:outline-none focus:ring-2",
                      styles.inputBorder,
                      styles.inputText,
                    )}
                  />
                  <Button variant="accent" size="md" type="submit">
                    {ctaText}
                  </Button>
                </form>
              ) : (
                <p
                  className={clsx(
                    "text-base font-medium",
                    variant === "default" ? "text-emerald-600" : "text-emerald-300",
                  )}
                >
                  Thank you! We&apos;ll be in touch shortly.
                </p>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="flex -space-x-2">
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className={clsx(
                      "h-7 w-7 rounded-full ring-2",
                      color,
                      styles.avatarRing,
                    )}
                  />
                ))}
              </div>
              <p className={clsx("text-sm", styles.proofText)}>
                Join 500+ patients nationwide
              </p>
            </div>

            {!submitted && (
              <div className="mt-4">
                <Button variant="ghost" size="sm" href={CONSULTATION_URL}>
                  Or schedule a call directly
                </Button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
