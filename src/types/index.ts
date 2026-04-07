export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface Peptide {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  mechanismOfAction: string;
  clinicalUses: string[];
  benefits: string[];
  whoItsFor: string[];
  whatToExpect: string[];
  sideEffects: string[];
  dosing: string;
  price: number;
  relatedSlugs: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

export interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export interface BlogSection {
  heading: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
  relatedSlugs: string[];
}

export interface TeamMember {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  age: number;
  location: string;
  quote: string;
  rating: number;
  peptide: string;
}

export interface LandingPage {
  slug: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  benefits: string[];
  peptideSlug?: string;
  pricingHighlight?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
