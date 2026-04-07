import clsx, { type ClassValue } from "clsx";

/** Merge Tailwind class names, resolving conflicts via clsx. */
export function cn(...classes: ClassValue[]): string {
  return clsx(classes);
}

/** Format a price as "$149" or "$149/mo" when `monthly` is true. */
export function formatPrice(price: number, monthly = false): string {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return monthly ? `${formatted}/mo` : formatted;
}

/** Convert a string to a URL-safe slug. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Truncate text to `length` characters, appending an ellipsis if needed. */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + "...";
}

/** Estimate reading time in minutes (assumes ~200 wpm). */
export function getReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
