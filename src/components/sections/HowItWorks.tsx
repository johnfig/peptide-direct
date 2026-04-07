"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.333 5.333h2.667A2.667 2.667 0 0 1 26.667 8v18.667A2.667 2.667 0 0 1 24 29.333H8a2.667 2.667 0 0 1-2.667-2.666V8A2.667 2.667 0 0 1 8 5.333h2.667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="10.667"
        y="2.667"
        width="10.667"
        height="5.333"
        rx="1.333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16h8M12 21.333h5.333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 4v8a8 8 0 0 0 16 0V4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4h4M24 4h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="26"
        cy="20"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M26 22v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PackageIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M28 21.333V10.667a2.667 2.667 0 0 0-1.333-2.307l-9.334-5.333a2.667 2.667 0 0 0-2.666 0L5.333 8.36A2.667 2.667 0 0 0 4 10.667v10.666a2.667 2.667 0 0 0 1.333 2.307l9.334 5.333a2.667 2.667 0 0 0 2.666 0l9.334-5.333A2.667 2.667 0 0 0 28 21.333z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.373 9.28L16 16.013l11.627-6.733M16 29.44V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const steps = [
  {
    number: 1,
    icon: ClipboardIcon,
    title: "Complete Medical Intake",
    description:
      "Fill out our comprehensive health questionnaire from the comfort of your home. Takes about 10 minutes.",
  },
  {
    number: 2,
    icon: StethoscopeIcon,
    title: "Provider Reviews & Prescribes",
    description:
      "A licensed physician reviews your health history and creates a personalized treatment protocol.",
  },
  {
    number: 3,
    icon: PackageIcon,
    title: "Medication Shipped to Your Door",
    description:
      "Your prescription is filled by an FDA-compliant pharmacy and shipped directly to you.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="HOW IT WORKS"
            heading="Three Simple Steps to Start"
            accentWords={["Simple"]}
          />
        </FadeIn>

        <div className="relative mt-16">
          {/* Connecting line between steps — visible on md+ */}
          <div className="absolute left-0 right-0 top-24 hidden md:block">
            <div className="mx-auto max-w-2xl border-t-2 border-dashed border-gray-200" />
          </div>

          <StaggerChildren
            staggerDelay={0.15}
            className="grid gap-8 md:grid-cols-3"
          >
            {steps.map((step) => (
              <Card
                key={step.number}
                hover
                padding="lg"
                className="relative text-center"
              >
                {/* Step number badge */}
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-medical-blue text-sm font-bold text-white">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50">
                  <step.icon className="text-navy" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-navy">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
