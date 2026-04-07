"use client";

import { useState, useEffect } from "react";
import { CONSULTATION_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/gtm";

const STORAGE_KEY = "urgency-banner-dismissed";

export default function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(STORAGE_KEY) === "true";
    setDismissed(wasDismissed);
  }, []);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
  }

  function handleCtaClick() {
    trackCtaClick("urgency_banner_consultation", "urgency_banner");
  }

  if (dismissed) return null;

  return (
    <div className="relative bg-medical-blue">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-white">
          <span className="hidden sm:inline">
            Limited consultations available this week &mdash;{" "}
          </span>
          <a
            href={CONSULTATION_URL}
            onClick={handleCtaClick}
            className="font-semibold underline underline-offset-2 transition-colors hover:text-white/90"
          >
            Start your free consultation today
          </a>
        </p>

        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/60 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:right-4"
          aria-label="Dismiss banner"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
