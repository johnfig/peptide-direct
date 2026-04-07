"use client";

import clsx from "clsx";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";

interface HeroProps {
  headline: string;
  highlightedWords?: string[];
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showTrustIndicators?: boolean;
  variant?: "default" | "centered" | "minimal";
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 1.667L3.333 4.167v4.166c0 4.25 2.85 8.225 6.667 9.167 3.817-.942 6.667-4.917 6.667-9.167V4.167L10 1.667z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10l1.667 1.667L12.5 8.333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10l1.667 1.667L12.5 8.333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="5"
        y="9.167"
        width="10"
        height="7.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9.167V5.833a2.5 2.5 0 0 1 5 0v3.334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHeadline(headline: string, highlightedWords?: string[]) {
  if (!highlightedWords || highlightedWords.length === 0) {
    return headline;
  }

  const pattern = new RegExp(
    `(${highlightedWords.map(escapeRegex).join("|")})`,
    "gi",
  );
  const parts = headline.split(pattern);

  return parts.map((part, i) => {
    const isHighlighted = highlightedWords.some(
      (word) => word.toLowerCase() === part.toLowerCase(),
    );
    return isHighlighted ? (
      <span key={i} className="text-medical-blue-300">
        {part}
      </span>
    ) : (
      part
    );
  });
}

const trustIndicators = [
  { icon: CheckCircleIcon, label: "Licensed Providers in All 50 States" },
  { icon: ShieldIcon, label: "FDA-Compliant Pharmacies" },
  { icon: LockIcon, label: "HIPAA-Secured" },
];

export default function Hero({
  headline,
  highlightedWords,
  subheadline,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  showTrustIndicators = true,
  variant = "default",
}: HeroProps) {
  const isMinimal = variant === "minimal";
  const isCentered = variant === "centered";

  return (
    <section
      className={clsx(
        isMinimal
          ? "py-16 md:py-20"
          : "py-20 md:py-28 lg:py-36 bg-gradient-to-br from-navy via-navy-600 to-navy-800",
      )}
    >
      <div
        className={clsx(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          (isCentered || isMinimal) && "text-center",
        )}
      >
        <FadeIn>
          <div
            className={clsx(
              isCentered && "mx-auto max-w-3xl",
              !isCentered && !isMinimal && "max-w-2xl",
            )}
          >
            <h1
              className={clsx(
                "font-bold leading-tight",
                isMinimal
                  ? "text-3xl md:text-4xl lg:text-5xl text-navy"
                  : "text-4xl md:text-5xl lg:text-6xl text-white",
              )}
            >
              {renderHeadline(headline, highlightedWords)}
            </h1>

            <p
              className={clsx(
                "mt-6 text-lg md:text-xl leading-relaxed",
                isMinimal ? "text-gray-600" : "text-gray-300",
              )}
            >
              {subheadline}
            </p>

            <div
              className={clsx(
                "mt-8 flex flex-wrap gap-4",
                (isCentered || isMinimal) && "justify-center",
              )}
            >
              <Button
                variant={isMinimal ? "primary" : "accent"}
                size="lg"
                href={ctaHref}
              >
                {ctaText}
              </Button>

              {secondaryCtaText && secondaryCtaHref && (
                <Button
                  variant={isMinimal ? "ghost" : "secondary"}
                  size="lg"
                  href={secondaryCtaHref}
                  className={clsx(
                    !isMinimal &&
                      "border-white/30 text-white hover:bg-white/10 hover:text-white",
                  )}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>

            {showTrustIndicators && !isMinimal && (
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
                {trustIndicators.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <item.icon className="text-medical-blue-300" />
                    <span>{item.label}</span>
                    {index < trustIndicators.length - 1 && (
                      <span className="ml-4 hidden text-gray-500 sm:inline">
                        |
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
