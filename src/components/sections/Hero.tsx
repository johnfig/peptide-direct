"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Category card data ─────────────────────────────────────────── */

const categories = [
  {
    name: "Recovery & Healing",
    href: "/peptides/bpc-157",
    bg: "bg-category-recovery",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
  {
    name: "Performance",
    href: "/peptides/cjc-1295",
    bg: "bg-category-performance",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    name: "Anti-Aging",
    href: "/peptides/sermorelin",
    bg: "bg-category-antiaging",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  },
  {
    name: "Sexual Health",
    href: "/peptides/pt-141",
    bg: "bg-category-sexual",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
  },
];

/* ─── Arrow icon for category cards ──────────────────────────────── */

function ArrowRightIcon({ className }: { className?: string }) {
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
        d="M4.167 10h11.666M10.833 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Props ───────────────────────────────────────────────────────── */

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  /** Legacy props — accepted so sub-pages don't break. */
  highlightedWords?: string[];
  showTrustIndicators?: boolean;
  variant?: "default" | "centered" | "minimal";
}

/* ─── Component ──────────────────────────────────────────────────── */

export default function Hero({
  headline = "Peptide therapy, reimagined for real results.",
  subheadline = "Physician-prescribed peptide protocols \u2014 delivered to your door. No waiting rooms. No unnecessary steps.",
  ctaText = "Start Your Consultation",
  ctaHref = "/consultation",
  secondaryCtaText = "See How It Works",
  secondaryCtaHref = "/how-it-works",
}: HeroProps) {
  /* Split headline around "reimagined" for color treatment */
  const parts = headline.split(/(reimagined)/i);

  return (
    <section className="relative bg-gradient-to-br from-forest-900 via-forest to-forest-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
        {/* ── Text content ── */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Social proof */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-xs font-semibold uppercase tracking-widest text-sage-300"
          >
            Join 2,500+ patients nationwide
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {parts.map((part, i) =>
              part.toLowerCase() === "reimagined" ? (
                <span key={i} className="text-sage-400">
                  {part}
                </span>
              ) : (
                <span key={i}>{part}</span>
              ),
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            {subheadline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-sage px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-sage-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              {ctaText}
            </Link>

            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              {secondaryCtaText}
            </Link>
          </motion.div>
        </div>

        {/* ── Category cards (overflow out of hero) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative z-10 -mb-24 mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Label */}
              <div className={`${cat.bg} flex items-center justify-between px-4 py-3`}>
                <span className="text-sm font-semibold text-forest-900 md:text-base">
                  {cat.name}
                </span>
                <ArrowRightIcon className="h-5 w-5 text-forest-900 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
