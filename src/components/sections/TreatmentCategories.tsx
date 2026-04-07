"use client";

import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

function HealingIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.5 3.5H10.5a1.167 1.167 0 0 0-1.167 1.167V10.5H4.667A1.167 1.167 0 0 0 3.5 11.667v4.666a1.167 1.167 0 0 0 1.167 1.167H9.333v5.833A1.167 1.167 0 0 0 10.5 24.5h7a1.167 1.167 0 0 0 1.167-1.167V17.5h4.666A1.167 1.167 0 0 0 24.5 16.333v-4.666a1.167 1.167 0 0 0-1.167-1.167H18.667V4.667A1.167 1.167 0 0 0 17.5 3.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LightningIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.167 2.333L4.667 16.333h9.333L12.833 25.667l10.5-14H14L15.167 2.333z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="14"
        cy="14"
        r="11.667"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7v7l4.667 2.333"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.15 5.717a6.417 6.417 0 0 0-9.075 0L14 6.792l-1.075-1.075a6.418 6.418 0 1 0-9.075 9.075l1.075 1.075L14 24.942l9.075-9.075 1.075-1.075a6.417 6.417 0 0 0 0-9.075z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const categories = [
  {
    name: "Recovery",
    icon: HealingIcon,
    peptides: ["BPC-157", "TB-500"],
    description:
      "Accelerate tissue repair, reduce inflammation, and speed recovery from injury with targeted healing peptides.",
    href: "/peptides/bpc-157",
  },
  {
    name: "Performance",
    icon: LightningIcon,
    peptides: ["CJC-1295", "Ipamorelin"],
    description:
      "Boost growth hormone levels to enhance muscle growth, fat loss, and overall athletic performance.",
    href: "/peptides/cjc-1295-ipamorelin",
  },
  {
    name: "Anti-Aging",
    icon: ClockIcon,
    peptides: ["Sermorelin", "Tesamorelin"],
    description:
      "Support healthy aging with peptides that promote cellular regeneration, skin health, and vitality.",
    href: "/peptides/sermorelin",
  },
  {
    name: "Sexual Health",
    icon: HeartIcon,
    peptides: ["PT-141"],
    description:
      "Enhance intimacy and address sexual health concerns with clinically-studied peptide therapy.",
    href: "/peptides/pt-141",
  },
];

export default function TreatmentCategories() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="TREATMENTS"
            heading="Peptide Therapy for Every Goal"
            accentWords={["Every Goal"]}
          />
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.12}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {categories.map((cat) => (
            <Card key={cat.name} hover padding="lg">
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50">
                <cat.icon className="text-navy" />
              </div>

              {/* Category name */}
              <h3 className="mb-2 text-lg font-bold text-navy">{cat.name}</h3>

              {/* Peptide badges */}
              <div className="mb-3 flex flex-wrap gap-2">
                {cat.peptides.map((peptide) => (
                  <Badge key={peptide} variant="info">
                    {peptide}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {cat.description}
              </p>

              {/* Learn more link */}
              <Link
                href={cat.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-medical-blue transition-colors hover:text-medical-blue-600"
              >
                Learn More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 10.5L8.75 7 5.25 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Card>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
