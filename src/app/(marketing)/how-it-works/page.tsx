import type { Metadata } from "next";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import CtaSection from "@/components/sections/CtaSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import SlideIn from "@/components/motion/SlideIn";
import { SITE_URL } from "@/lib/constants";
import { medicalWebPageSchema } from "@/lib/schema";

/* ------------------------------------------------------------------ */
/*  SEO Metadata                                                      */
/* ------------------------------------------------------------------ */

const title = "How It Works | PeptideRx Direct";
const description =
  "Learn how PeptideRx Direct makes prescription peptide therapy simple. Complete a medical intake, get a physician review within 24-48 hours, and receive FDA-compliant medication shipped to your door.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/how-it-works`,
    siteName: "PeptideRx Direct",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "How PeptideRx Direct Works",
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

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}

function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BeakerIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const steps = [
  {
    number: "01",
    title: "Complete Your Medical Intake",
    summary:
      "Answer a comprehensive health questionnaire that helps our physicians understand your medical history, current health goals, and suitability for peptide therapy.",
    details: [
      "Takes approximately 10 minutes to complete",
      "Covers medical history, current medications, allergies, and health goals",
      "All data encrypted and transmitted via HIPAA-compliant systems",
      "No in-person visit required --- complete from any device",
    ],
    icon: ClipboardIcon,
  },
  {
    number: "02",
    title: "Provider Reviews & Prescribes",
    summary:
      "A licensed, board-certified physician reviews your intake and designs a personalized peptide protocol tailored to your needs.",
    details: [
      "Physician review completed within 24--48 hours",
      "Personalized treatment protocol based on your health profile",
      "Direct messaging with your provider for questions",
      "If not approved, you receive a full explanation and alternative recommendations --- no charge",
    ],
    icon: StethoscopeIcon,
  },
  {
    number: "03",
    title: "Medication Shipped to Your Door",
    summary:
      "Your prescribed peptide medication is dispensed from an FDA-compliant pharmacy and shipped directly to your home with full tracking.",
    details: [
      "Standard shipping: 5--7 business days",
      "Priority shipping: 3--5 business days",
      "Express shipping: 2--3 business days",
      "Temperature-controlled packaging to ensure peptide stability",
      "Full tracking provided via email and SMS",
    ],
    icon: TruckIcon,
  },
] as const;

const timelineSteps = [
  { day: "Day 1", label: "Submit intake" },
  { day: "Day 1--2", label: "Physician review" },
  { day: "Day 2--3", label: "Prescription & dispensing" },
  { day: "Day 3--7", label: "Shipping & delivery" },
];

const providerCredentials = [
  "Board-certified physicians with expertise in regenerative and functional medicine",
  "Licensed to practice in all 50 states via telehealth",
  "Ongoing patient monitoring and follow-up protocols",
  "Continuing education in peptide therapeutics and hormone optimization",
];

const pharmacyQualities = [
  "FDA-compliant compounding pharmacies",
  "USP 797/800 certified sterile compounding",
  "Third-party purity and potency testing on every batch",
  "Cold-chain shipping with temperature monitors",
  "Lot tracking and full chain-of-custody documentation",
];

const complianceItems = [
  {
    title: "HIPAA Compliance",
    description:
      "All patient data is encrypted in transit and at rest, with strict access controls and regular security audits.",
  },
  {
    title: "DEA Compliance",
    description:
      "Controlled substance prescribing follows all DEA regulations, with proper scheduling and record-keeping.",
  },
  {
    title: "Controlled Substance Protocols",
    description:
      "Prescription Drug Monitoring Program (PDMP) checks performed on every applicable prescription.",
  },
  {
    title: "Adverse Event Reporting",
    description:
      "Structured adverse event monitoring and FDA MedWatch reporting for all patient-reported side effects.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                    */
/* ------------------------------------------------------------------ */

export default function HowItWorksPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageSchema(title, description, `${SITE_URL}/how-it-works`)
          ),
        }}
      />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "How It Works" },
          ]}
        />
      </div>

      {/* Hero */}
      <Hero
        headline="How PeptideRx Direct Works"
        subheadline="From medical intake to your doorstep in three simple steps. Physician-prescribed peptide therapy has never been more accessible."
        ctaText="Start Your Free Consultation"
        ctaHref="/consultation"
        variant="centered"
        showTrustIndicators={false}
      />

      {/* ── Detailed 3-Step Process ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="The Process"
              heading="Three Steps to Better Health"
              description="We designed every step to be straightforward, secure, and physician-led so you can focus on your health."
            />
          </FadeIn>

          <div className="mt-16 space-y-24">
            {steps.map((step, idx) => {
              const direction = idx % 2 === 0 ? "left" : "right";
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="grid items-center gap-12 md:grid-cols-2"
                >
                  {/* Text side */}
                  <SlideIn
                    direction={direction}
                    className={idx % 2 !== 0 ? "md:order-2" : ""}
                  >
                    <div>
                      <span className="text-sm font-bold uppercase tracking-widest text-medical-blue">
                        Step {step.number}
                      </span>
                      <h3 className="mt-2 text-2xl font-bold text-navy md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        {step.summary}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-gray-600"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              className="mt-0.5 shrink-0 text-emerald-500"
                            >
                              <path
                                d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M7.5 10l1.667 1.667L12.5 8.333"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SlideIn>

                  {/* Icon / visual side */}
                  <FadeIn
                    delay={0.2}
                    className={idx % 2 !== 0 ? "md:order-1" : ""}
                  >
                    <div className="flex items-center justify-center">
                      <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-medical-blue/10">
                        <Icon className="text-medical-blue" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              heading="Most Patients Receive Their Medication Within 5--7 Business Days"
              description="Here is a typical timeline from intake to delivery."
            />
          </FadeIn>

          <div className="relative mt-16">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gray-200 md:block" />

            <div className="grid gap-8 md:grid-cols-4">
              {timelineSteps.map((item, idx) => (
                <FadeIn key={item.day} delay={idx * 0.15}>
                  <div className="relative text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue text-sm font-bold text-white">
                      {idx + 1}
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-medical-blue">
                      {item.day}
                    </p>
                    <p className="mt-1 text-gray-600">{item.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Provider Credentials ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <SlideIn direction="left">
              <div>
                <SectionHeader
                  eyebrow="Our Providers"
                  heading="Board-Certified Physicians You Can Trust"
                  centered={false}
                />
                <ul className="mt-8 space-y-4">
                  {providerCredentials.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600">
                      <ShieldCheckIcon className="mt-0.5 shrink-0 text-medical-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>

            <FadeIn delay={0.2}>
              <Card hover={false} padding="lg">
                <div className="space-y-4 text-center">
                  <p className="text-4xl font-bold text-navy">50</p>
                  <p className="text-lg font-semibold text-gray-700">
                    States with licensed providers
                  </p>
                  <p className="text-sm text-gray-500">
                    Our telehealth network ensures you can access care no matter
                    where you live in the United States.
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Pharmacy Quality ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn>
              <Card hover={false} padding="lg">
                <div className="flex items-center justify-center">
                  <BeakerIcon className="text-medical-blue" />
                </div>
                <p className="mt-4 text-center text-sm text-gray-500">
                  Every batch tested for purity, potency, and sterility before
                  dispensing.
                </p>
              </Card>
            </FadeIn>

            <SlideIn direction="right">
              <div>
                <SectionHeader
                  eyebrow="Pharmacy Standards"
                  heading="FDA-Compliant, USP-Certified Pharmacies"
                  centered={false}
                />
                <ul className="mt-8 space-y-4">
                  {pharmacyQualities.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-0.5 shrink-0 text-emerald-500"
                      >
                        <path
                          d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M7.5 10l1.667 1.667L12.5 8.333"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Safety & Compliance ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Safety & Compliance"
              heading="Your Safety Is Our Top Priority"
              description="PeptideRx Direct operates under strict federal and state healthcare regulations to protect every patient."
            />
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {complianceItems.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <Card hover={false} padding="lg">
                  <div className="flex items-start gap-4">
                    <LockIcon className="shrink-0 text-medical-blue" />
                    <div>
                      <h3 className="text-lg font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CtaSection
        variant="gradient"
        headline="Ready to Get Started?"
        subheadline="Complete your free medical intake in under 10 minutes and take the first step toward physician-prescribed peptide therapy."
      />
    </>
  );
}
