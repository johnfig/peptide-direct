"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";

const treatments = [
  {
    eyebrow: "RECOVERY & HEALING",
    heading: "Accelerate your body's",
    accentWord: "natural recovery",
    accentColor: "text-sage",
    description:
      "BPC-157 and TB-500 peptides support your body's innate healing processes — from joint repair to gut health to post-surgical recovery.",
    benefits: [
      "Clinically studied peptide protocols",
      "Accelerated tissue repair & healing",
      "Reduced inflammation & joint support",
      "Gut health restoration",
      "Physician-monitored treatment plans",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    href: "/peptides/bpc-157",
    bg: "bg-white",
  },
  {
    eyebrow: "PERFORMANCE & GROWTH",
    heading: "Unlock peak",
    accentWord: "performance",
    accentColor: "text-blue-600",
    description:
      "CJC-1295 and Ipamorelin stimulate natural growth hormone production for enhanced muscle growth, fat loss, and recovery.",
    benefits: [
      "Natural growth hormone optimization",
      "Enhanced muscle growth & strength",
      "Improved body composition",
      "Better sleep quality & recovery",
      "Personalized dosing protocols",
    ],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    href: "/peptides/cjc-1295",
    bg: "bg-warm-100",
  },
  {
    eyebrow: "ANTI-AGING & VITALITY",
    heading: "Turn back the clock on",
    accentWord: "aging",
    accentColor: "text-pink-600",
    description:
      "Sermorelin and GHK-Cu peptides promote cellular renewal, skin rejuvenation, and whole-body vitality from the inside out.",
    benefits: [
      "Cellular regeneration support",
      "Improved skin elasticity & texture",
      "Enhanced energy & mental clarity",
      "Better sleep & mood regulation",
      "Evidence-based longevity protocols",
    ],
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    href: "/peptides/sermorelin",
    bg: "bg-white",
  },
  {
    eyebrow: "SEXUAL HEALTH & WELLNESS",
    heading: "Restore confidence and",
    accentWord: "intimacy",
    accentColor: "text-purple-600",
    description:
      "PT-141 works through your nervous system to enhance natural desire and arousal — a fundamentally different approach to sexual wellness.",
    benefits: [
      "Addresses root causes, not just symptoms",
      "Works for both men and women",
      "Non-hormonal mechanism of action",
      "Discreet delivery to your door",
      "Ongoing physician support",
    ],
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80",
    href: "/peptides/pt-141",
    bg: "bg-warm-100",
  },
];

function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <circle cx="11" cy="11" r="11" fill="#4a7c59" opacity="0.15" />
      <path
        d="M7 11.5L9.5 14L15 8.5"
        stroke="#4a7c59"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TreatmentCategories() {
  return (
    <section>
      {treatments.map((treatment, index) => {
        const isOdd = index % 2 !== 0;

        return (
          <div key={treatment.eyebrow} className={treatment.bg}>
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-28">
              <div className="grid items-center gap-6 sm:gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Image column */}
                <FadeIn
                  direction={isOdd ? "right" : "left"}
                  className={isOdd ? "lg:order-last" : ""}
                >
                  <div className="relative">
                    {/* Colored glow behind image */}
                    <div
                      className={`absolute -inset-4 rounded-3xl opacity-20 blur-2xl ${
                        index === 0
                          ? "bg-sage"
                          : index === 1
                            ? "bg-blue-400"
                            : index === 2
                              ? "bg-pink-400"
                              : "bg-purple-400"
                      }`}
                    />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={treatment.image}
                        alt={treatment.eyebrow}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </FadeIn>

                {/* Text column */}
                <FadeIn
                  direction={isOdd ? "left" : "right"}
                  delay={0.15}
                >
                  {/* Eyebrow */}
                  <p
                    className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${treatment.accentColor}`}
                  >
                    {treatment.eyebrow}
                  </p>

                  {/* Heading */}
                  <h2 className="text-2xl font-bold tracking-tight text-forest-900 md:text-4xl lg:text-5xl">
                    {treatment.heading}{" "}
                    <span className={treatment.accentColor}>
                      {treatment.accentWord}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="mt-4 mb-8 text-lg text-gray-600">
                    {treatment.description}
                  </p>

                  {/* Benefits checklist */}
                  <ul className="space-y-3">
                    {treatment.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-sm md:text-base text-gray-700"
                      >
                        <CheckIcon />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <Link
                    href={treatment.href}
                    className="mt-8 inline-flex w-auto items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base font-semibold text-white transition-colors hover:bg-forest-800"
                  >
                    Learn More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.333 8h9.334M8.667 4L13 8l-4.333 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
