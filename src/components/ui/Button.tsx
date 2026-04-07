"use client";

import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-600 focus:ring-navy/30",
  secondary:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy/30",
  accent:
    "bg-medical-blue text-white hover:bg-medical-blue-600 focus:ring-medical-blue/30",
  ghost:
    "bg-transparent text-navy hover:bg-navy-50 focus:ring-navy/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full font-semibold",
    "transition-all duration-200 ease-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "active:scale-[0.98]",
    disabled
      ? "cursor-not-allowed opacity-50"
      : "hover:scale-[1.02]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
