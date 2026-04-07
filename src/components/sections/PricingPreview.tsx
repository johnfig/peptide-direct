"use client";

import Link from "next/link";
import { pricingTiers } from "@/data/pricing";
import SectionHeader from "@/components/ui/SectionHeader";
import PricingCard from "@/components/ui/PricingCard";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

export default function PricingPreview() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="PRICING"
            heading="Transparent Pricing, No Hidden Fees"
            accentWords={["Transparent"]}
          />
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.15}
          className="mt-16 grid items-center gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-gray-500">
            All plans include physician oversight, FDA-compliant medications,
            and free shipping on your first order.
          </p>

          <div className="mt-6 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1 text-sm font-semibold text-medical-blue transition-colors hover:text-medical-blue-600"
            >
              View Full Pricing Details
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5"
              >
                <path
                  d="M6 12l4-4-4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
