"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

/* ─── Data ───────────────────────────────────────────────────────── */

const benefits = [
  "Tissue Repair",
  "Joint Recovery",
  "Gut Healing",
];

const stats = [
  { value: "87%", label: "Report faster recovery" },
  { value: "4-6 wks", label: "To see results" },
  { value: "$149", label: "Starting price/month" },
  { value: "24/7", label: "Physician support" },
];

/* ─── Component ──────────────────────────────────────────────────── */

export default function BPC157Spotlight() {
  return (
    <section className="bg-gradient-to-b from-warm-50 to-category-recovery/30 section-padding overflow-hidden">
      <div className="container-max">
        {/* ── Row 1: Hero Banner ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left: Copy — 60% (3 of 5 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Eyebrow badge */}
            <FadeIn direction="left" delay={0}>
              <span className="inline-block bg-sage/10 text-sage px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                Featured Treatment
              </span>
            </FadeIn>

            {/* Heading */}
            <FadeIn direction="left" delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
                BPC-157: The Gold Standard in{" "}
                <span className="text-sage">Recovery Peptide Therapy</span>
              </h2>
            </FadeIn>

            {/* Description */}
            <FadeIn direction="left" delay={0.2}>
              <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
                BPC-157 is the most extensively studied recovery peptide
                available today. Physician-prescribed and pharmacy-compounded,
                it supports your body&apos;s natural healing processes for
                joints, soft tissue, and the GI tract.
              </p>
            </FadeIn>

            {/* Benefits pills */}
            <FadeIn direction="left" delay={0.3}>
              <div className="flex flex-wrap gap-2.5">
                {benefits.map((b) => (
                  <span
                    key={b}
                    className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-forest-900"
                  >
                    &#10003; {b}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn direction="left" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <Link
                  href="/bpc-157"
                  className="inline-flex items-center justify-center bg-forest text-white rounded-full px-8 py-3.5 font-semibold text-sm hover:bg-forest-800 transition-colors w-full sm:w-auto"
                >
                  Explore BPC-157 &rarr;
                </Link>
                <Link
                  href="/bpc-157#pricing"
                  className="text-forest underline font-medium text-sm"
                >
                  See Pricing
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right: Image collage — 40% (2 of 5 cols) */}
          <FadeIn
            direction="right"
            delay={0.2}
            className="lg:col-span-2"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Main image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
                  alt="Athletic person demonstrating recovery and wellness"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 33vw"
                />
              </div>

              {/* Accent image — overlapping, visible only on md+ */}
              <div className="hidden md:block absolute -bottom-4 -right-4 w-2/3 rounded-xl overflow-hidden shadow-xl z-20">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&q=80"
                    alt="Person stretching during recovery routine"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Row 2: Stats + Social Proof ──────────────────────── */}
        <div className="mt-14 lg:mt-20">
          {/* Stats grid */}
          <StaggerChildren
            staggerDelay={0.1}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-5 card-shadow text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-forest-900">
                  {s.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </StaggerChildren>

          {/* Testimonial */}
          <FadeIn delay={0.5} className="mt-10">
            <blockquote className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-3xl mx-auto text-center sm:text-left">
              {/* Avatar initial */}
              <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-sage/15 text-sage font-bold text-sm">
                M
              </span>
              <p className="text-sm md:text-base text-gray-600 italic leading-relaxed">
                &ldquo;BPC-157 was a game-changer for my shoulder recovery.
                Within four weeks, the chronic inflammation was noticeably
                reduced.&rdquo;{" "}
                <span className="not-italic font-medium text-forest-900">
                  &mdash; Marcus T., Age 42
                </span>
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
