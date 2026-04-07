"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackFormComplete } from "@/lib/gtm";

const STORAGE_KEY = "exit-intent-shown";

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY > 10) return;
    if (sessionStorage.getItem(STORAGE_KEY) === "true") return;
    setOpen(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
  }, []);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY) === "true";
    if (alreadyShown) return;

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  function handleClose() {
    setOpen(false);
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) handleClose();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    trackFormComplete("exit_intent_guide_download");
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label="Get your free peptide therapy guide"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue/30"
              aria-label="Close dialog"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-medical-blue/10">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-3.5L7 21z"
                  stroke="#2980B9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 10h6M11 14h4"
                  stroke="#2980B9"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-center text-xl font-bold text-navy">
              Get Your Free Peptide Therapy Guide
            </h3>
            <p className="mt-2 text-center text-sm text-gray-600">
              Learn which peptide protocol is right for your goals. Evidence-based
              information reviewed by licensed physicians.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors duration-200 placeholder:text-gray-400 focus:border-medical-blue focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-medical-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-medical-blue-600 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-medical-blue/30 focus:ring-offset-2 active:scale-[0.98]"
                >
                  Download Free Guide
                </button>
                <p className="text-center text-xs text-gray-400">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-center">
                <p className="text-sm font-medium text-emerald-700">
                  Check your inbox! Your guide is on its way.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
