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
  // Consistent color based on first char code
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

export default function Testimonials() {
  const featured = testimonials.slice(0, 6);

  return (
    <section className="bg-warm-50 py-12 sm:py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
              PATIENT STORIES
            </p>
            <h2 className="text-2xl font-bold text-forest-900 md:text-3xl lg:text-4xl text-balance">
              There&apos;s a reason people are{" "}
              <span className="text-sage">raving about us</span>.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.08}>
              <div className="rounded-2xl bg-white p-5 md:p-8 card-shadow h-full flex flex-col">
                {/* Avatar initial + stars row */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${getInitialColor(testimonial.name)} text-white font-bold text-lg shrink-0`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Age {testimonial.age} &middot; {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Star rating */}
                <div
                  className="flex gap-0.5 mb-4"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={
                        i < testimonial.rating
                          ? "text-amber-400"
                          : "text-gray-300"
                      }
                    >
                      &#9733;
                    </span>
                  ))}
                </div>

                {/* Quote — full text, no line-clamp */}
                <blockquote className="flex-1">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Peptide badge */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-xs bg-sage-50 text-sage-700 px-2 py-1 rounded-full">
                    {getPeptideDisplayName(testimonial.peptide)}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
