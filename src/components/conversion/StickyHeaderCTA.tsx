"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { CONSULTATION_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/gtm";

const STORAGE_KEY = "sticky-header-dismissed";

export default function StickyHeaderCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(STORAGE_KEY) === "true";
    setDismissed(wasDismissed);

    if (wasDismissed) return;

    function handleScroll() {
      setVisible(window.scrollY > 500);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
  }

  function handleCtaClick() {
    trackCtaClick("sticky_header_start_now", "sticky_header");
  }

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-0 top-0 z-40 bg-navy"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
            <p className="text-sm text-white">
              <span className="hidden sm:inline">
                Limited consultations available this week &mdash;{" "}
              </span>
              <span className="sm:hidden">Limited spots &mdash; </span>
              Reserve yours today
            </p>

            <div className="flex items-center gap-3">
              <Button
                variant="accent"
                size="sm"
                href={CONSULTATION_URL}
                onClick={handleCtaClick}
              >
                Start Now
              </Button>

              <button
                type="button"
                onClick={handleDismiss}
                className="rounded-full p-1 text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                aria-label="Dismiss banner"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4.5 4.5l9 9M13.5 4.5l-9 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
