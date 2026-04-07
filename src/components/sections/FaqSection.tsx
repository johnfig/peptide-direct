"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Accordion from "@/components/ui/Accordion";
import FadeIn from "@/components/motion/FadeIn";
import { faqPageSchema } from "@/lib/schema";

interface FaqSectionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
  showSchema?: boolean;
}

export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  showSchema = false,
}: FaqSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            heading={title}
            accentWords={["Questions"]}
            description="Find answers to the most common questions about peptide therapy."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-14 max-w-3xl">
            <Accordion items={faqs} allowMultiple />
          </div>
        </FadeIn>
      </div>

      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageSchema(faqs)),
          }}
        />
      )}
    </section>
  );
}
