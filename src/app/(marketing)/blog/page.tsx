import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import CtaSection from "@/components/sections/CtaSection";
import BlogListClient from "./BlogListClient";
import { blogPosts, blogCategories } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/constants";

/* ─── SEO Metadata ────────────────────────────────────────────────── */

const title = "Blog | PeptideRx Direct";
const description =
  "Evidence-based articles on peptide therapy, recovery science, performance optimization, and regulatory updates from our physician team.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/blog`,
    siteName: "PeptideRx Direct",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

/* ─── Page ────────────────────────────────────────────────────────── */

export default function BlogPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />
      </div>

      <Hero
        variant="centered"
        headline="Peptide Therapy Insights"
        subheadline="Evidence-based articles on peptide therapy, recovery science, and performance optimization."
        ctaText="Start Your Free Consultation"
        ctaHref="/consultation"
        showTrustIndicators={false}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogListClient posts={blogPosts} categories={blogCategories} />
        </div>
      </section>

      <CtaSection
        variant="gradient"
        headline="Ready to Explore Peptide Therapy?"
        subheadline="Schedule a free consultation with a licensed provider and discover which peptide protocol is right for you."
      />
    </>
  );
}
