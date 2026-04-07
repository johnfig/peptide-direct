import clsx from "clsx";
import type { PricingTier } from "@/types";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("shrink-0", className)}
    >
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  const { name, price, period, description, features, highlighted, ctaText } =
    tier;

  return (
    <Card
      hover
      padding="lg"
      className={clsx(
        "relative flex flex-col",
        highlighted &&
          "bg-navy text-white scale-[1.03] border-2 border-medical-blue",
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="info">Most Popular</Badge>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={clsx(
            "text-xl font-bold",
            highlighted ? "text-white" : "text-navy",
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            "mt-1 text-sm",
            highlighted ? "text-gray-300" : "text-gray-500",
          )}
        >
          {description}
        </p>
      </div>

      <div className="mb-6">
        <span
          className={clsx(
            "text-4xl font-bold",
            highlighted ? "text-white" : "text-navy",
          )}
        >
          ${price}
        </span>
        <span
          className={clsx(
            "ml-1 text-sm",
            highlighted ? "text-gray-300" : "text-gray-500",
          )}
        >
          /{period}
        </span>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckIcon
              className={clsx(
                "mt-0.5",
                highlighted ? "text-medical-blue-300" : "text-medical-blue",
              )}
            />
            <span
              className={clsx(
                "text-sm",
                highlighted ? "text-gray-200" : "text-gray-600",
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? "accent" : "secondary"}
        size="lg"
        className="w-full"
      >
        {ctaText}
      </Button>
    </Card>
  );
}
