import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import Accordion from "@/components/ui/Accordion";
import CtaSection from "@/components/sections/CtaSection";
import { faqs, faqCategories, getFaqsByCategory } from "@/data/faqs";
import { faqPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

/* ─── SEO Metadata ────────────────────────────────────────────────── */

const title = "Frequently Asked Questions | PeptideRx Direct";
const description =
  "Find answers to common questions about peptide therapy, safety, shipping, pricing, and legal compliance. Learn how PeptideRx Direct works.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/faq`,
    siteName: "PeptideRx Direct",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
};

/* ─── Category icon mapping ───────────────────────────────────────── */

const categoryDescriptions: Record<string, string> = {
  General:
    "Learn about peptide therapy basics, candidacy, and what to expect from treatment.",
  Safety:
    "Understand side effects, sourcing standards, and how peptides interact with other treatments.",
  Shipping:
    "Details on delivery times, packaging, cold-chain handling, and what is included.",
  Pricing:
    "Information on subscription costs, insurance coverage, HSA/FSA eligibility, and discounts.",
  Legal:
    "Regulatory status, FDA compliance, compounding pharmacy standards, and privacy protections.",
};

/* ─── Page ────────────────────────────────────────────────────────── */

export default function FaqPage() {
  return (
    <>
      {/* ── Structured Data: FAQPage ────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      {/* ── Breadcrumbs ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "FAQ" },
          ]}
        />
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <Hero
        variant="centered"
        headline="Frequently Asked Questions"
        subheadline="Everything you need to know about peptide therapy, from getting started to what arrives at your door."
        ctaText="Start Your Free Consultation"
        ctaHref="/consultation"
        showTrustIndicators={false}
      />

      {/* ── FAQ sections by category ────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((category) => {
              const categoryFaqs = getFaqsByCategory(category);
              if (categoryFaqs.length === 0) return null;

              return (
                <div key={category} id={category.toLowerCase()}>
                  <h2 className="text-2xl font-bold text-navy">
                    {category}
                  </h2>
                  {categoryDescriptions[category] && (
                    <p className="mt-2 text-gray-600">
                      {categoryDescriptions[category]}
                    </p>
                  )}
                  <div className="mt-6">
                    <Accordion items={categoryFaqs} allowMultiple />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ─────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy">
            Still Have Questions?
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Our support team is here to help. Reach out and we will get back to
            you within 24 hours.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue/30"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CtaSection
        variant="gradient"
        headline="Ready to Start Your Peptide Therapy Journey?"
        subheadline="Schedule a free consultation with a licensed provider and discover which peptide protocol is right for you."
      />
    </>
  );
}
