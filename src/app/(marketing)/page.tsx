import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import TreatmentCategories from "@/components/sections/TreatmentCategories";
import HowItWorks from "@/components/sections/HowItWorks";
import ModernHealthcare from "@/components/sections/ModernHealthcare";
import DoctorsSection from "@/components/sections/DoctorsSection";
import Testimonials from "@/components/sections/Testimonials";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import { getFaqsByCategory } from "@/data/faqs";
import { organizationSchema, medicalBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

/* ─── SEO Metadata ────────────────────────────────────────────────── */

const title = "PeptideRx Direct | Prescription Peptide Therapy Delivered";
const description =
  "Access physician-prescribed peptide therapy delivered direct to your door. FDA-compliant medications from licensed US pharmacies, prescribed by providers in all 50 states. Start your free consultation today.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "PeptideRx Direct",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "PeptideRx Direct — Prescription Peptide Therapy Delivered",
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

/* ─── Page ────────────────────────────────────────────────────────── */

const generalFaqs = getFaqsByCategory("General").slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Structured data: Organization + MedicalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema()),
        }}
      />

      <Hero />

      <TrustBar />

      <TreatmentCategories />

      <HowItWorks />

      <ModernHealthcare />

      <DoctorsSection />

      <Testimonials />

      <FaqSection faqs={generalFaqs} title="Frequently Asked Questions" />

      <CtaSection variant="gradient" />
    </>
  );
}
