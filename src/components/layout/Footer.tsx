"use client";

import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { SITE_NAME, SUPPORT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-700 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Peptide</span>
                <span className="text-medical-blue-300">Rx</span>
                <span className="ml-1 font-medium text-gray-400">Direct</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Prescription Peptide Therapy &mdash; Delivered
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Physician-prescribed peptide treatments shipped directly to your
              door. Licensed providers in all 50 states.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rounded-lg bg-navy-600 p-2 text-gray-300 transition-colors hover:bg-medical-blue hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-lg bg-navy-600 p-2 text-gray-300 transition-colors hover:bg-medical-blue hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-lg bg-navy-600 p-2 text-gray-300 transition-colors hover:bg-medical-blue hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg bg-navy-600 p-2 text-gray-300 transition-colors hover:bg-medical-blue hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          {footerNav.map((section) => (
            <div key={section.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {section.label}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.children?.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Email Capture */}
        <div className="mt-16 rounded-2xl bg-navy-600 px-6 py-8 sm:px-10">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Stay informed about peptide therapy
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Get the latest research, promotions, and health tips delivered to
                your inbox.
              </p>
            </div>
            <form
              className="flex w-full gap-2 sm:w-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full min-w-0 rounded-full border border-navy-400 bg-navy-700 px-4 py-2.5 text-sm text-white placeholder-gray-400 outline-none transition-colors focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/30 sm:w-64"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-medical-blue px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-medical-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 sm:px-6 md:flex-row md:justify-between lg:px-8">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
            {/* HIPAA Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-500 px-3 py-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              HIPAA Compliant
            </span>

            {/* FDA Disclaimer */}
            <span className="max-w-md text-center leading-relaxed md:text-left">
              All medications prescribed by licensed providers and dispensed by
              US-licensed pharmacies. Individual results may vary.
            </span>
          </div>

          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-xs text-gray-400 transition-colors hover:text-white"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
