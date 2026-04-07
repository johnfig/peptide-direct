"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

const features = [
  {
    title: "Licensed & Regulated",
    description: "Care from licensed clinicians through regulated pharmacies.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sage"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "100% Online",
    description:
      "Appointments, follow-ups, and treatment entirely online.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sage"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Fast & Discreet",
    description: "Shipped quickly in plain packaging.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sage"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Medical support whenever you need it.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sage"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function ModernHealthcare() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Lifestyle photo */}
          <FadeIn direction="left">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80"
                  alt="Happy person enjoying modern healthcare"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn direction="right">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
                BETTER IS POSSIBLE — AND WE BUILT FOR IT
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 text-balance">
                Modern healthcare,{" "}
                <span className="text-sage">built around you</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We believe everyone deserves access to cutting-edge treatments
                without the hassle of traditional healthcare. Our platform
                connects you directly with expert physicians and delivers
                personalized care to your doorstep.
              </p>

              {/* 2x2 feature grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-warm-50 rounded-xl p-4"
                  >
                    <div className="mb-2">{feature.icon}</div>
                    <p className="font-semibold text-forest-900 text-sm">
                      {feature.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
