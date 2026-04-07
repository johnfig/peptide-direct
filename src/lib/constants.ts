export const SITE_NAME = "PeptideRx Direct";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://peptiderxdirect.com";

export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@peptiderxdirect.com";

export const PHONE = "(888) 555-0123";

export const BUSINESS_HOURS = "Monday - Friday, 9am - 6pm EST";

export const CONSULTATION_URL = "/consultation";

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/peptiderxdirect",
  instagram: "https://instagram.com/peptiderxdirect",
  facebook: "https://facebook.com/peptiderxdirect",
  linkedin: "https://linkedin.com/company/peptiderxdirect",
} as const;
