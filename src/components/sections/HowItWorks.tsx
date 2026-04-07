"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

const steps = [
  {
    number: 1,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    alt: "Doctor consultation via telehealth",
    title: "Complete Your Health Profile",
    description:
      "Fill out our comprehensive health questionnaire from the comfort of your home. It takes about 10 minutes and gives our physicians everything they need.",
  },
  {
    number: 2,
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
    alt: "Prescription medicine and peptide vials",
    title: "Physician Reviews & Prescribes",
    description:
      "A licensed physician reviews your health history and creates a personalized treatment protocol tailored to your goals.",
  },
  {
    number: 3,
    image:
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=600&q=80",
    alt: "Package delivery to your door",
    title: "Delivered to Your Door",
    description:
      "Your prescription is filled by an FDA-compliant pharmacy and shipped directly to you in discreet packaging.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-warm-100 py-12 sm:py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
              SIMPLE, STREAMLINED PROCESS
            </p>
            <h2 className="text-2xl font-bold text-forest-900 md:text-3xl lg:text-4xl text-balance">
              How It Works
            </h2>
          </div>
        </FadeIn>

        <div className="relative mt-16">
          {/* Connecting line between steps — visible on lg+ */}
          <div className="absolute left-0 right-0 top-[140px] hidden lg:block">
            <div className="mx-auto max-w-3xl border-t-2 border-dashed border-sage-200" />
          </div>

          <div className="grid gap-12 md:gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Image container with step badge */}
                  <div className="relative w-full overflow-hidden rounded-2xl">
                    <div className="aspect-video relative">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Step number badge overlaid top-left */}
                    <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-sage text-sm font-bold text-white shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 mb-2 text-lg md:text-xl font-bold text-forest-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600 max-w-sm">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
