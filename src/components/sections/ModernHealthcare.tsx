"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

const features = [
  {
    title: "Licensed and regulated",
    description:
      "Care provided by licensed clinicians and filled through FDA-regulated pharmacies.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=80",
  },
  {
    title: "100% online medical care",
    description:
      "Appointments, follow-ups, and treatment all take place online.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
  },
  {
    title: "Shipping that's fast & discreet",
    description:
      "Orders arrive quickly and in plain packaging to protect your privacy.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80",
  },
  {
    title: "Unlimited 24/7 support",
    description:
      "Medical support continues throughout your care, whenever you need it.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80",
  },
];

export default function ModernHealthcare() {
  return (
    <section className="bg-warm-50 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sage">
              WE&apos;RE CREATING A BETTER HEALTHCARE EXPERIENCE
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-900">
              The details matter.
            </h2>
            <p className="mt-2 text-lg text-sage font-medium">
              We&apos;re here for those details
            </p>
          </div>
        </FadeIn>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <div className="card-shadow hover:card-shadow-hover transition-shadow duration-300 rounded-2xl overflow-hidden">
                {/* Photo */}
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="bg-white rounded-b-2xl p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-forest-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
