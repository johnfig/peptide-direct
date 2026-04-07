import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landingPages, getLandingPageBySlug } from "@/data/landing-pages";
import { testimonials } from "@/data/testimonials";
import { getFaqsByCategory } from "@/data/faqs";
import { SITE_URL, CONSULTATION_URL } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import UTMCapture from "./UTMCapture";

/* ─── Static Params ──────────────────────────────────────────────── */

export function generateStaticParams() {
  return landingPages.map((lp) => ({ slug: lp.slug }));
}

/* ─── Dynamic Metadata ───────────────────────────────────────────── */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lp = getLandingPageBySlug(slug);
  if (!lp) return {};

  const title = lp.headline;
  const description = lp.subheadline;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/lp/${lp.slug}`,
      siteName: "PeptideRx Direct",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: false, follow: false },
  };
}

/* ─── Landing-page FAQ data ──────────────────────────────────────── */

const lpFaqs = [
  ...getFaqsByCategory("General").slice(0, 3),
  ...getFaqsByCategory("Safety").slice(0, 1),
  ...getFaqsByCategory("Pricing").slice(0, 1),
];

/* ─── Trust items ────────────────────────────────────────────────── */

const trustItems = [
  { label: "Licensed Providers in All 50 States", icon: MapIcon },
  { label: "FDA-Compliant Pharmacies", icon: ShieldIcon },
  { label: "HIPAA-Secured Platform", icon: LockIcon },
  { label: "Ships Nationwide", icon: TruckIcon },
];

/* ─── Page Component ─────────────────────────────────────────────── */

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const lp = getLandingPageBySlug(slug);
  if (!lp) notFound();

  const relatedTestimonials = lp.peptideSlug
    ? testimonials.filter((t) => t.peptide === lp.peptideSlug).slice(0, 3)
    : testimonials.slice(0, 3);

  // Ensure we always have 3 testimonials, fill from general pool if needed
  const displayTestimonials =
    relatedTestimonials.length >= 3
      ? relatedTestimonials
      : [
          ...relatedTestimonials,
          ...testimonials
            .filter((t) => !relatedTestimonials.includes(t))
            .slice(0, 3 - relatedTestimonials.length),
        ];

  return (
    <>
      <UTMCapture />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-medical-blue py-20 md:py-28">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-balance">
                {lp.headline}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
                {lp.subheadline}
              </p>

              <div className="mt-10">
                <Button variant="accent" size="lg" href={CONSULTATION_URL}>
                  {lp.ctaText}
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircleIcon />
                  Licensed Physicians
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircleIcon />
                  FDA-Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircleIcon />
                  HIPAA-Secured
                </span>
              </div>

              {/* Price visible above the fold */}
              {lp.pricingHighlight && (
                <p className="mt-6 text-base font-medium text-medical-blue-200">
                  {lp.pricingHighlight}
                </p>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Benefits Grid ────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-navy md:text-4xl">
                Why Patients Choose This Protocol
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Evidence-based benefits prescribed and monitored by licensed
                providers.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lp.benefits.map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Card hover={false} padding="md" className="h-full">
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M11.667 3.5L5.25 9.917 2.333 7"
                          stroke="#059669"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Highlight ────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-lg text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-medical-blue">
                Simple, Transparent Pricing
              </p>
              <div className="mt-4">
                <span className="text-5xl font-bold text-navy md:text-6xl">
                  $149
                </span>
                <span className="text-xl text-gray-500">/mo</span>
              </div>
              <p className="mt-2 text-lg text-gray-600">
                Starting price &mdash; all supplies and shipping included
              </p>
              <div className="mt-8">
                <Button variant="primary" size="lg" href={CONSULTATION_URL}>
                  {lp.ctaText}
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                No hidden fees. Cancel anytime with 7 days&apos; notice.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Trust Section ────────────────────────────────────────── */}
      <section className="border-y border-gray-200 bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue/10">
                    <item.icon className="h-6 w-6 text-medical-blue" />
                  </div>
                  <span className="text-sm font-semibold text-navy">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-navy md:text-4xl">
                Real Patients, Real Results
              </h2>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {displayTestimonials.map((testimonial, i) => (
              <FadeIn key={testimonial.name} delay={i * 0.1}>
                <Card padding="md" hover={false} className="h-full">
                  {/* Stars */}
                  <div
                    className="flex gap-0.5"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, j) => (
                      <svg
                        key={j}
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M9 1.5l2.318 4.697L16.5 6.94l-3.75 3.656.885 5.16L9 13.347l-4.635 2.41.885-5.161L1.5 6.94l5.182-.743L9 1.5z"
                          fill={j < testimonial.rating ? "#F59E0B" : "none"}
                          stroke={
                            j < testimonial.rating ? "#F59E0B" : "#D1D5DB"
                          }
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="mt-4">
                    <p className="text-sm italic leading-relaxed text-gray-600 line-clamp-5">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </blockquote>

                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <p className="text-sm font-semibold text-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Age {testimonial.age} &middot; {testimonial.location}
                    </p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-navy md:text-4xl">
                Common Questions
              </h2>
            </div>
          </FadeIn>

          <div className="mt-10">
            <Accordion items={lpFaqs} />
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-navy to-medical-blue py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl text-balance">
                Start Your Personalized Peptide Protocol Today
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                Limited consultations available this week. Complete your free
                medical intake in under 10 minutes.
              </p>
              <div className="mt-8">
                <Button variant="accent" size="lg" href={CONSULTATION_URL}>
                  {lp.ctaText}
                </Button>
              </div>
              <p className="mt-6 text-sm text-gray-300">
                Free consultation &middot; No obligation &middot; Cancel
                anytime
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

/* ─── Inline SVG Icons ───────────────────────────────────────────── */

function CheckCircleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14.667 7.387V8a6.667 6.667 0 1 1-3.954-6.093"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.667 2.667 8 9.34l-2-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2v16M16 6v16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L3 5v5.09c0 5.1 3.42 9.87 9 11.01 5.58-1.14 9-5.91 9-11.01V5l-9-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="5"
        y="11"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11V7a4 4 0 0 1 8 0v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 3H1v13h15V3zM16 8h4l3 3v5h-7V8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="5.5"
        cy="18.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="18.5"
        cy="18.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
