import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface PeptideCardProps {
  peptide: {
    slug: string;
    name: string;
    shortName: string;
    category: string;
    tagline: string;
    price: number;
  };
}

const categoryVariant: Record<string, "default" | "success" | "warning" | "info"> = {
  Recovery: "success",
  Performance: "info",
  "Anti-Aging": "warning",
  "Sexual Health": "default",
  "Metabolic Health": "info",
};

export default function PeptideCard({ peptide }: PeptideCardProps) {
  const variant = categoryVariant[peptide.category] ?? "default";

  return (
    <Link href={`/peptides/${peptide.slug}`} className="block">
      <Card hover padding="md" className="group h-full flex flex-col">
        <Badge variant={variant}>{peptide.category}</Badge>

        <h3 className="mt-4 text-xl font-bold text-navy group-hover:text-medical-blue transition-colors duration-200">
          {peptide.shortName}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
          {peptide.tagline}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <p className="text-sm font-semibold text-navy">
            From ${peptide.price}/mo
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-medical-blue transition-transform duration-200 group-hover:translate-x-0.5">
            Learn More
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3.333 8h9.334M8.667 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Card>
    </Link>
  );
}
