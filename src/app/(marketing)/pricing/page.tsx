import type { Metadata } from 'next';

import { pricingTiers } from '@/data/pricing';
import { getFaqsByCategory } from '@/data/faqs';
import { SITE_URL, SITE_NAME, CONSULTATION_URL } from '@/lib/constants';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Hero from '@/components/sections/Hero';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';
import PricingCard from '@/components/ui/PricingCard';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/motion/FadeIn';
import StaggerChildren from '@/components/motion/StaggerChildren';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Pricing | Transparent Peptide Therapy Plans | PeptideRx Direct',
  description:
    'Transparent, all-inclusive pricing for physician-supervised peptide therapy. No hidden fees. Compare Starter, Performance, and Elite plans. HSA/FSA eligible.',
  openGraph: {
    title: 'Pricing | Transparent Peptide Therapy Plans | PeptideRx Direct',
    description:
      'Transparent, all-inclusive pricing for physician-supervised peptide therapy. No hidden fees. Compare Starter, Performance, and Elite plans.',
    url: `${SITE_URL}/pricing`,
    siteName: SITE_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | PeptideRx Direct',
    description:
      'Transparent peptide therapy pricing. No hidden fees. Compare plans and start your consultation today.',
  },
  alternates: { canonical: `${SITE_URL}/pricing` },
};

// ---------------------------------------------------------------------------
// Inline SVG icons
// ---------------------------------------------------------------------------

function CheckIcon({ className }: { className?: string }) {
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
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
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
        d="M10 4.167v11.666M4.167 10h11.666"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

const includedFeatures = [
  {
    title: 'Licensed Physician Oversight',
    description:
      'Every protocol is prescribed and monitored by a board-certified provider licensed in your state.',
  },
  {
    title: 'FDA-Compliant Pharmacy Sourcing',
    description:
      'All peptides come from US-based, FDA-registered 503A and 503B compounding pharmacies with third-party purity testing.',
  },
  {
    title: 'HIPAA-Secured Telehealth Platform',
    description:
      'Your consultations, health records, and personal data are protected by enterprise-grade encryption and HIPAA compliance.',
  },
  {
    title: 'Personalized Treatment Protocols',
    description:
      'No cookie-cutter plans. Your provider designs a protocol tailored to your health history, labs, and goals.',
  },
  {
    title: 'Ongoing Dosing Optimization',
    description:
      'Your dosing is monitored and adjusted over time based on your response, labs, and feedback to ensure optimal results.',
  },
  {
    title: 'Direct Messaging With Your Provider',
    description:
      'Reach your clinical team through our secure patient portal for questions, concerns, or protocol adjustments between consultations.',
  },
];

const addOns = [
  {
    name: 'PT-141 Sexual Health Add-On',
    price: 179,
    period: 'mo',
    description:
      'Add FDA-approved PT-141 (Bremelanotide) for on-demand sexual desire enhancement. Available as an add-on to any plan.',
  },
  {
    name: 'Additional Peptide',
    price: 99,
    period: 'mo per peptide',
    description:
      'Add extra peptides beyond your plan allowance. Ideal for patients wanting to stack BPC-157 + TB-500 on a Starter plan or expand an existing protocol.',
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PricingPage() {
  const pricingFaqs = getFaqsByCategory('Pricing');

  return (
    <>
      {/* ── Breadcrumbs ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Pricing' },
          ]}
        />
      </div>

      {/* ── Hero (centered variant) ── */}
      <Hero
        headline="Transparent Pricing for Peptide Therapy"
        highlightedWords={['Transparent']}
        subheadline="No hidden fees. No surprise charges. Every plan includes your medication, supplies, shipping, and physician consultations."
        ctaText="Start Your Consultation"
        ctaHref={CONSULTATION_URL}
        secondaryCtaText="Compare Plans"
        secondaryCtaHref="#plans"
        variant="centered"
      />

      {/* ── Pricing Grid ── */}
      <section id="plans" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Plans"
              heading="Choose Your Plan"
              accentWords={['Plan']}
              description="All plans include physician oversight, FDA-compliant medications, and dedicated support. Upgrade or downgrade anytime."
            />
          </FadeIn>

          <StaggerChildren
            className="mx-auto mt-14 grid max-w-5xl items-center gap-8 md:grid-cols-3"
            staggerDelay={0.12}
          >
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3}>
            <p className="mt-10 text-center text-sm text-gray-500">
              All prices in USD. HSA/FSA eligible. Cancel or pause anytime.
              10% off quarterly prepay, 15% off semi-annual.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Included"
              heading="What Every Plan Includes"
              accentWords={['Every']}
              description="No matter which tier you choose, you receive the same high standard of care and quality."
            />
          </FadeIn>

          <StaggerChildren
            className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.08}
          >
            {includedFeatures.map((feature) => (
              <Card key={feature.title} hover={false} padding="md" className="flex flex-col">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-medical-blue/10">
                  <CheckIcon className="text-medical-blue" />
                </div>
                <h3 className="text-base font-semibold text-navy">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Add-Ons ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Add-Ons"
              heading="Customize Your Protocol"
              accentWords={['Customize']}
              description="Enhance any plan with targeted add-ons for a fully personalized therapy experience."
            />
          </FadeIn>

          <StaggerChildren
            className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2"
            staggerDelay={0.1}
          >
            {addOns.map((addon) => (
              <Card key={addon.name} hover padding="lg" className="flex flex-col">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-navy/10">
                  <PlusIcon className="text-navy" />
                </div>

                <Badge variant="default" className="mb-3 self-start">
                  Add-On
                </Badge>

                <h3 className="text-lg font-semibold text-navy">{addon.name}</h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {addon.description}
                </p>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="text-2xl font-bold text-navy">
                    ${addon.price}
                    <span className="ml-1 text-sm font-normal text-gray-500">
                      /{addon.period}
                    </span>
                  </p>
                </div>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Pricing FAQs ── */}
      <div className="bg-gray-50">
        <FaqSection
          faqs={pricingFaqs}
          title="Pricing & Billing FAQs"
          showSchema
        />
      </div>

      {/* ── Bottom CTA ── */}
      <CtaSection
        headline="Ready to Start Your Peptide Therapy?"
        subheadline="Schedule your free consultation with a licensed provider and find the right plan for your goals."
        variant="dark"
      />
    </>
  );
}
