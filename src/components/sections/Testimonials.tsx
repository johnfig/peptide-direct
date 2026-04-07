"use client";

import FadeIn from "@/components/motion/FadeIn";
import { testimonials } from "@/data/testimonials";

function getPeptideDisplayName(slug: string): string {
  const names: Record<string, string> = {
    "bpc-157": "BPC-157",
    "tb-500": "TB-500",
    "cjc-1295-ipamorelin": "CJC-1295/Ipamorelin",
    sermorelin: "Sermorelin",
    "pt-141": "PT-141",
    tesamorelin: "Tesamorelin",
  };
  return names[slug] || slug;
}

function getInitialColor(name: string): string {
  const colors = [
    "bg-sage",
    "bg-forest-700",
    "bg-sage-600",
    "bg-forest",
    "bg-sage-800",
    "bg-forest-800",
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-amber-400 text-sm" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? "\u2605" : "\u2606"
      ).join("")}
    </span>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 card-shadow h-full flex flex-col">
      {/* Top row: avatar + name on left, stars on right */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full ${getInitialColor(testimonial.name)} text-white font-bold text-base shrink-0`}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-forest-900">{testimonial.name}</p>
          <p className="text-xs text-gray-400">
            Age {testimonial.age} &middot; {testimonial.location}
          </p>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <blockquote className="flex-1 mt-4">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      {/* Peptide badge */}
      <div className="mt-4">
        <span className="inline-flex text-xs bg-sage-50 text-sage-700 px-3 py-1 rounded-full font-medium">
          {getPeptideDisplayName(testimonial.peptide)}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const featured = testimonials.slice(0, 6);

  return (
    <section className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-10 sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sage">
              THOSE WHO CHOSE PEPTIDERX
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-900 text-balance">
              There&apos;s a reason people are{" "}
              <span className="text-sage">raving about us</span>.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Join the patients who have trusted PeptideRx Direct to help
              transform their health.
            </p>
          </div>
        </FadeIn>

        {/* Mobile: horizontal scroll carousel */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:hidden scrollbar-hide">
          {featured.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.06} direction="right">
              <div className="snap-start flex-shrink-0 w-[85vw] sm:w-[70vw]">
                <TestimonialCard testimonial={testimonial} />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.08}>
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
