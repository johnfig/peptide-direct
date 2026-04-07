import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { peptides, getPeptideBySlug, getRelatedPeptides } from '@/data/peptides';
import { SITE_URL, SITE_NAME, CONSULTATION_URL } from '@/lib/constants';
import { medicalWebPageSchema } from '@/lib/schema';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Hero from '@/components/sections/Hero';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';
import PeptideCard from '@/components/sections/PeptideCard';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/motion/FadeIn';
import StaggerChildren from '@/components/motion/StaggerChildren';

// ---------------------------------------------------------------------------
// Static params & metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return peptides.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) return {};

  const url = `${SITE_URL}/peptides/${peptide.slug}`;

  return {
    title: peptide.metaTitle,
    description: peptide.metaDescription,
    openGraph: {
      title: peptide.metaTitle,
      description: peptide.metaDescription,
      url,
      siteName: SITE_NAME,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: peptide.metaTitle,
      description: peptide.metaDescription,
    },
    alternates: { canonical: url },
  };
}

// ---------------------------------------------------------------------------
// Inline SVG icons (keeps the file self-contained)
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

function UserIcon({ className }: { className?: string }) {
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
        d="M16.667 17.5v-1.667A3.333 3.333 0 0 0 13.333 12.5H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="10"
        cy="6.667"
        r="3.333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="10"
        cy="10"
        r="8.333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5v5l3.333 1.667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
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
        d="M10 7.5v3.333M10 14.167h.008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.575 3.217 1.517 15a1.667 1.667 0 0 0 1.425 2.5h14.116a1.667 1.667 0 0 0 1.425-2.5L11.425 3.217a1.667 1.667 0 0 0-2.85 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Category badge mapping (mirrors PeptideCard)
// ---------------------------------------------------------------------------

const categoryVariant: Record<string, 'default' | 'success' | 'warning' | 'info'> = {
  Recovery: 'success',
  Performance: 'info',
  'Anti-Aging': 'warning',
  'Sexual Health': 'default',
  'Metabolic Health': 'info',
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function PeptideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) notFound();

  const related = getRelatedPeptides(slug);
  const pageUrl = `${SITE_URL}/peptides/${peptide.slug}`;

  return (
    <>
      {/* ── JSON-LD: MedicalWebPage ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageSchema(peptide.metaTitle, peptide.metaDescription, pageUrl),
          ),
        }}
      />

      {/* ── Breadcrumbs ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Peptides', href: '/peptides' },
            { label: peptide.shortName },
          ]}
        />
      </div>

      {/* ── Hero (minimal variant) ── */}
      <Hero
        headline={peptide.name}
        subheadline={peptide.tagline}
        ctaText="Start Your Consultation"
        ctaHref={CONSULTATION_URL}
        variant="minimal"
        showTrustIndicators={false}
      />

      {/* ── Overview ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <Badge variant={categoryVariant[peptide.category] ?? 'default'}>
                {peptide.category}
              </Badge>

              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
                What is {peptide.shortName}?
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {peptide.description}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Card hover={false} padding="lg" className="mx-auto mt-10 max-w-3xl border-l-4 border-medical-blue bg-medical-blue/5">
              <h3 className="text-lg font-semibold text-navy">
                Mechanism of Action
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {peptide.mechanismOfAction}
              </p>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Benefits"
              heading={`Why Choose ${peptide.shortName}`}
              accentWords={[peptide.shortName]}
              description="Evidence-based benefits backed by preclinical and clinical research."
            />
          </FadeIn>

          <StaggerChildren className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2" staggerDelay={0.08}>
            {peptide.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 shrink-0 text-medical-blue" />
                <p className="text-base leading-relaxed text-gray-700">{benefit}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Ideal Candidates"
              heading={`Is ${peptide.shortName} Right for You?`}
              accentWords={[peptide.shortName]}
            />
          </FadeIn>

          <StaggerChildren className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2" staggerDelay={0.08}>
            {peptide.whoItsFor.map((item) => (
              <Card key={item} hover={false} padding="md" className="flex items-start gap-3">
                <UserIcon className="mt-0.5 shrink-0 text-medical-blue" />
                <p className="text-sm leading-relaxed text-gray-700">{item}</p>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── What to Expect ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Timeline"
              heading="What to Expect"
              accentWords={['Expect']}
              description={`A typical ${peptide.shortName} protocol timeline.`}
            />
          </FadeIn>

          <div className="mx-auto mt-14 max-w-3xl">
            <StaggerChildren className="relative space-y-0" staggerDelay={0.1}>
              {peptide.whatToExpect.map((milestone, index) => (
                <div key={milestone} className="relative flex gap-5 pb-10 last:pb-0">
                  {/* Timeline line */}
                  {index < peptide.whatToExpect.length - 1 && (
                    <div className="absolute left-[15px] top-9 h-[calc(100%-12px)] w-px bg-medical-blue/20" />
                  )}

                  {/* Timeline dot */}
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-medical-blue text-white">
                    <ClockIcon className="h-4 w-4" />
                  </div>

                  <Card hover={false} padding="md" className="flex-1">
                    <p className="text-sm leading-relaxed text-gray-700">{milestone}</p>
                  </Card>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ── Safety / Side Effects ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Safety"
              heading="Potential Side Effects"
              accentWords={['Safety']}
              description="All therapies carry some risk. Your provider will discuss these with you in detail."
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mx-auto mt-14 max-w-3xl space-y-4">
              {peptide.sideEffects.map((effect) => (
                <div key={effect} className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
                  <AlertIcon className="mt-0.5 shrink-0 text-amber-600" />
                  <p className="text-sm leading-relaxed text-gray-700">{effect}</p>
                </div>
              ))}

              <Card hover={false} padding="md" className="mt-6 border border-gray-200 bg-gray-50">
                <p className="text-xs leading-relaxed text-gray-500">
                  <strong>Medical Disclaimer:</strong> The information on this page is for
                  educational purposes only and does not constitute medical advice. Always
                  consult with a qualified healthcare provider before starting any peptide
                  therapy. Individual results may vary. Peptide therapy should only be
                  administered under the supervision of a licensed physician.
                </p>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-medical-blue">
                Pricing
              </p>

              <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                Start {peptide.shortName} Therapy
              </h2>

              <p className="mt-4 text-lg text-gray-600">
                Physician-supervised protocols starting at
              </p>

              <p className="mt-4 text-5xl font-bold text-navy">
                ${peptide.price}
                <span className="ml-1 text-lg font-normal text-gray-500">/mo</span>
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Includes medication, supplies, shipping, and provider consultations.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg" href={CONSULTATION_URL}>
                  Start Your Consultation
                </Button>
                <Button variant="secondary" size="lg" href="/pricing">
                  View All Plans
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQs ── */}
      <FaqSection
        faqs={peptide.faqs}
        title={`${peptide.shortName} FAQs`}
        showSchema
      />

      {/* ── Related Peptides ── */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeader
                eyebrow="Explore"
                heading="Related Peptides"
                accentWords={['Related']}
                description="Other peptide therapies that complement or pair well with this protocol."
              />
            </FadeIn>

            <StaggerChildren className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
              {related.map((rp) => (
                <PeptideCard key={rp.slug} peptide={rp} />
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ── */}
      <CtaSection variant="dark" />
    </>
  );
}
