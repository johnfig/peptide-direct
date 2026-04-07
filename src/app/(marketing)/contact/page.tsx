import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import SlideIn from "@/components/motion/SlideIn";
import { SITE_URL, SUPPORT_EMAIL, PHONE, BUSINESS_HOURS } from "@/lib/constants";
import { medicalWebPageSchema } from "@/lib/schema";
import ContactForm from "./ContactForm";

/* ------------------------------------------------------------------ */
/*  SEO Metadata                                                      */
/* ------------------------------------------------------------------ */

const title = "Contact Us | PeptideRx Direct";
const description =
  "Get in touch with PeptideRx Direct. Contact our support team for questions about peptide therapy, billing, or technical support. We are available Monday through Friday, 9am to 6pm EST.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/contact`,
    siteName: "PeptideRx Direct",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact PeptideRx Direct",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE_URL}/og-image.png`],
  },
};

/* ------------------------------------------------------------------ */
/*  Inline SVG icons                                                  */
/* ------------------------------------------------------------------ */

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact info cards data                                           */
/* ------------------------------------------------------------------ */

const contactCards = [
  {
    icon: MailIcon,
    label: "Support Email",
    value: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    icon: ClockIcon,
    label: "Business Hours",
    value: BUSINESS_HOURS,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: PHONE,
    href: `tel:${PHONE.replace(/\D/g, "")}`,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Page Component                                                    */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageSchema(title, description, `${SITE_URL}/contact`)
          ),
        }}
      />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />
      </div>

      {/* Hero */}
      <Hero
        headline="Get in Touch"
        subheadline="Have a question about peptide therapy, your account, or our platform? Our support team is here to help."
        ctaText="Start Your Free Consultation"
        ctaHref="/consultation"
        variant="minimal"
        showTrustIndicators={false}
      />

      {/* ── Two-column: Form + Contact Info ───────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left: contact form (3 cols) */}
            <SlideIn direction="left" className="lg:col-span-3">
              <Card hover={false} padding="lg">
                <h2 className="text-2xl font-bold text-navy">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Fill out the form below and we will get back to you within one
                  business day.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </Card>
            </SlideIn>

            {/* Right: contact info cards (2 cols) */}
            <div className="space-y-6 lg:col-span-2">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <FadeIn key={card.label} delay={idx * 0.1}>
                    <Card hover={false} padding="md">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-medical-blue/10">
                          <Icon className="text-medical-blue" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-400">
                            {card.label}
                          </p>
                          {"href" in card && card.href ? (
                            <a
                              href={card.href}
                              className="mt-0.5 text-base font-semibold text-navy transition-colors hover:text-medical-blue"
                            >
                              {card.value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-base font-semibold text-navy">
                              {card.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Medical Emergency Notice ──────────────────────────────────── */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-600"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <line x1="12" x2="12" y1="9" y2="13" />
                    <line x1="12" x2="12.01" y1="17" y2="17" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-800">
                    Medical Emergency
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-red-700">
                    For medical emergencies, please call 911 or go to your
                    nearest emergency room. PeptideRx Direct is not an emergency
                    medical service and cannot provide urgent medical care.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ Link ─────────────────────────────────────────────────── */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-gray-50 p-6 text-center md:p-8">
              <p className="text-lg text-gray-700">
                Looking for answers?{" "}
                <Link
                  href="/faq"
                  className="font-semibold text-medical-blue transition-colors hover:text-medical-blue-600 underline underline-offset-2"
                >
                  Check our FAQ
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
