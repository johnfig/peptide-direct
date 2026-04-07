"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { testimonials } from "@/data/testimonials";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 1.5l2.318 4.697L16.5 6.94l-3.75 3.656.885 5.16L9 13.347l-4.635 2.41.885-5.161L1.5 6.94l5.182-.743L9 1.5z"
        fill={filled ? "#F59E0B" : "none"}
        stroke={filled ? "#F59E0B" : "#D1D5DB"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </div>
  );
}

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

export default function Testimonials() {
  const featured = testimonials.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="TESTIMONIALS"
            heading="What Our Patients Are Saying"
            accentWords={["Patients"]}
            description="Real experiences from patients who have transformed their health with physician-supervised peptide therapy."
          />
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.12}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {featured.map((testimonial) => (
            <Card key={testimonial.name} padding="md">
              <StarRating rating={testimonial.rating} />

              <blockquote className="mt-4">
                <p className="text-sm italic leading-relaxed text-gray-600 line-clamp-5">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-sm font-semibold text-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Age {testimonial.age} &middot; {testimonial.location}
                  </p>
                </div>
                <Badge variant="info">
                  {getPeptideDisplayName(testimonial.peptide)}
                </Badge>
              </div>
            </Card>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
