"use client";

import clsx from "clsx";
import CountUp from "@/components/motion/CountUp";

interface SocialProofProps {
  count?: number;
  label?: string;
  className?: string;
}

const avatarColors = [
  "bg-medical-blue",
  "bg-emerald-500",
  "bg-amber-400",
];

export default function SocialProof({
  count = 500,
  label = "patients nationwide",
  className,
}: SocialProofProps) {
  return (
    <div className={clsx("inline-flex items-center gap-2.5", className)}>
      <div className="flex -space-x-2">
        {avatarColors.map((color, i) => (
          <div
            key={i}
            className={clsx(
              "h-7 w-7 rounded-full ring-2 ring-white",
              color,
            )}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-sm text-gray-600">
        <CountUp end={count} suffix="+" className="font-semibold text-navy" />
        {" "}
        {label}
      </p>
    </div>
  );
}
