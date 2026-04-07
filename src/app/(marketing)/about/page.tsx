import type { Metadata } from "next";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import CtaSection from "@/components/sections/CtaSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import SlideIn from "@/components/motion/SlideIn";
import { teamMembers } from "@/data/team";
import { SITE_URL } from "@/lib/constants";
import { medicalWebPageSchema } from "@/lib/schema";

/* ------------------------------------------------------------------ */
/*  SEO Metadata                                                      */
/* ------------------------------------------------------------------ */

const title = "About Us | PeptideRx Direct";
const description =
  "PeptideRx Direct bridges the gap between peptide science and patient access. Learn about our physician-first approach, medical advisory board, and commitment to safe, FDA-compliant peptide therapy.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/about`,
    siteName: "PeptideRx Direct",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "About PeptideRx Direct",
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

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
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
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const problems = [
  "Access to quality peptide therapy remains fragmented and difficult to navigate",
  "An unregulated grey market puts patients at risk with untested, impure products",
  "Lack of physician oversight leads to inappropriate dosing and missed contraindications",
  "Patients deserve transparent pricing, not hidden fees or subscription traps",
];

const pharmacyStandards = [
  "FDA-registered compounding facilities",
  "USP 797 and 800 sterile compounding certification",
  "Independent third-party purity and potency testing",
  "Temperature-controlled storage and cold-chain shipping",
  "Comprehensive lot tracking and chain-of-custody records",
];

const openloopCapabilities = [
  "Nationwide provider network with physicians licensed in all 50 states",
  "HIPAA-compliant telehealth platform for secure consultations",
  "Regulatory compliance management across federal and state requirements",
  "Credentialing, licensing, and ongoing provider quality assurance",
  "Integrated electronic prescribing and patient record management",
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                    */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageSchema(title, description, `${SITE_URL}/about`)
          ),
        }}
      />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />
      </div>

      {/* Hero */}
      <Hero
        headline="About PeptideRx Direct"
        subheadline="We are on a mission to make physician-prescribed peptide therapy safe, accessible, and transparent for every patient in the United States."
        ctaText="Start Your Free Consultation"
        ctaHref="/consultation"
        variant="centered"
        showTrustIndicators={false}
      />

      {/* ── Mission ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <SectionHeader
                eyebrow="Our Mission"
                heading="Bridging Peptide Science and Patient Access"
              />
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600">
                <p>
                  Peptide therapy represents one of the most promising
                  frontiers in regenerative and functional medicine, yet access
                  to safe, physician-supervised treatment has remained
                  frustratingly out of reach for most patients. PeptideRx Direct
                  was founded to change that.
                </p>
                <p>
                  We believe that every patient who can benefit from peptide
                  therapy deserves a clear, physician-led pathway --- from
                  initial evaluation to ongoing monitoring. Our platform
                  connects patients with board-certified providers, FDA-compliant
                  pharmacies, and evidence-based treatment protocols without
                  the complexity and cost of traditional clinic visits.
                </p>
                <p>
                  At our core, we are a physician-first company. Every
                  treatment protocol is designed by our medical advisory board,
                  every prescription is written by a licensed provider, and
                  every medication is dispensed from a certified pharmacy. No
                  shortcuts, no grey-market products, no compromises on safety.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Why We Built This ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <SlideIn direction="left">
              <div>
                <SectionHeader
                  eyebrow="Why We Built This"
                  heading="The Problem We Set Out to Solve"
                  centered={false}
                />
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  We saw first-hand the challenges patients face when trying to
                  access quality peptide therapy: fragmented information, risky
                  grey-market products, and a lack of proper medical oversight.
                  PeptideRx Direct was built to solve these problems.
                </p>
              </div>
            </SlideIn>

            <FadeIn delay={0.2}>
              <Card hover={false} padding="lg">
                <h3 className="text-lg font-semibold text-navy">
                  The challenges patients face
                </h3>
                <ul className="mt-4 space-y-3">
                  {problems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Medical Advisory Board ────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Medical Advisory Board"
              heading="Led by Experts in Regenerative Medicine"
              description="Our clinical team brings decades of experience in peptide therapeutics, functional medicine, and pharmaceutical quality assurance."
            />
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <FadeIn key={member.name} delay={idx * 0.1}>
                <Card padding="lg" hover={false} className="h-full">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-medical-blue">
                    {member.title}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                    {member.credentials}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {member.bio}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pharmacy Partners ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn>
              <Card hover={false} padding="lg" className="text-center">
                <p className="text-5xl font-bold text-navy">100%</p>
                <p className="mt-2 text-lg font-semibold text-gray-700">
                  FDA-Compliant Pharmacies
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Every pharmacy in our network meets or exceeds federal and
                  state compounding standards.
                </p>
              </Card>
            </FadeIn>

            <SlideIn direction="right">
              <div>
                <SectionHeader
                  eyebrow="Pharmacy Partners"
                  heading="Quality You Can Verify"
                  centered={false}
                />
                <ul className="mt-8 space-y-4">
                  {pharmacyStandards.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <CheckCircleIcon className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── OpenLoop Partnership ───────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <SlideIn direction="left">
              <div>
                <SectionHeader
                  eyebrow="Clinical Infrastructure"
                  heading="Powered by OpenLoop"
                  centered={false}
                />
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  PeptideRx Direct partners with OpenLoop, a leading clinical
                  infrastructure platform, to deliver a compliant, scalable
                  telehealth experience. OpenLoop provides the regulatory
                  backbone that ensures every consultation, prescription, and
                  patient interaction meets the highest standards of care.
                </p>
              </div>
            </SlideIn>

            <FadeIn delay={0.2}>
              <Card hover={false} padding="lg">
                <h3 className="text-lg font-semibold text-navy">
                  What OpenLoop provides
                </h3>
                <ul className="mt-4 space-y-3">
                  {openloopCapabilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <CheckCircleIcon className="mt-0.5 shrink-0 text-medical-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CtaSection
        variant="dark"
        headline="Start Your Peptide Therapy Journey"
        subheadline="Schedule your free consultation with a board-certified provider and discover how PeptideRx Direct can help you reach your health goals."
      />
    </>
  );
}
