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
    heroImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    accentImages: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&q=80",
    ],
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
    heroImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    accentImages: [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80",
    ],
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
    heroImage:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    accentImages: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80",
    ],
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
    heroImage:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80",
    accentImages: [
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    ],
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
      {treatments.map((t, i) => {
        const isOdd = i % 2 !== 0;

        return (
          <div key={t.eyebrow} className={t.bg}>
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
                {/* Image collage column */}
                <FadeIn
                  direction={isOdd ? "right" : "left"}
                  className={`space-y-3 sm:space-y-4${isOdd ? " lg:order-last" : ""}`}
                >
                  {/* Hero image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={t.heroImage}
                      alt={t.eyebrow}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Two accent images side by side */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {t.accentImages.map((img, j) => (
                      <div
                        key={j}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl"
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </FadeIn>

                {/* Text column */}
                <FadeIn
                  direction={isOdd ? "left" : "right"}
                  delay={0.15}
                  className="mt-8 lg:mt-0"
                >
                  {/* Eyebrow */}
                  <p
                    className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${t.accentColor}`}
                  >
                    {t.eyebrow}
                  </p>

                  {/* Heading */}
                  <h2 className="text-2xl font-bold tracking-tight text-forest-900 md:text-4xl lg:text-5xl">
                    {t.heading}{" "}
                    <span className={t.accentColor}>{t.accentWord}</span>
                  </h2>

                  {/* Description */}
                  <p className="mt-4 mb-8 text-lg text-gray-600">
                    {t.description}
                  </p>

                  {/* Benefits checklist */}
                  <ul className="space-y-3">
                    {t.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-sm text-gray-700 md:text-base"
                      >
                        <CheckIcon />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <Link
                    href={t.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800 sm:px-8 sm:py-3.5 sm:text-base"
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
