"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import { teamMembers } from "@/data/team";

const doctorImages = [
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
];

export default function DoctorsSection() {
  const doctors = teamMembers.slice(0, 2);

  return (
    <section className="bg-warm-200 py-12 sm:py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
              OUR MEDICAL TEAM
            </p>
            <h2 className="text-2xl font-bold text-forest-900 md:text-3xl lg:text-4xl text-balance">
              Medical care from leading{" "}
              <span className="text-sage">health experts</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 mx-auto max-w-2xl">
              Board-certified physicians who specialize in peptide therapy and
              regenerative medicine.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <FadeIn key={doctor.name} delay={index * 0.15}>
              <div className="relative overflow-hidden rounded-2xl">
                {/* Doctor portrait */}
                <div className="aspect-[3/4] relative">
                  <Image
                    src={doctorImages[index]}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Credential card overlaid bottom-left */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <p className="text-sm sm:text-base font-bold text-forest-900">{doctor.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{doctor.title}</p>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">
                      {doctor.credentials}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
