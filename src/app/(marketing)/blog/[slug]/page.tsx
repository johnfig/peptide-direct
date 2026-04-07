import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import BlogCard from "@/components/sections/BlogCard";
import CtaSection from "@/components/sections/CtaSection";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { blogPostSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

/* ─── Static Params ───────────────────────────────────────────────── */

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/* ─── Dynamic Metadata ────────────────────────────────────────────── */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: "PeptideRx Direct",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
  };
}

/* ─── Helpers ─────────────────────────────────────────────────────── */

const categoryVariant: Record<string, "default" | "success" | "warning" | "info"> = {
  Recovery: "success",
  Performance: "info",
  "Anti-Aging": "warning",
  "Sexual Health": "default",
  Science: "info",
  Legal: "default",
  General: "default",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ─── Page ────────────────────────────────────────────────────────── */

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = blogPostSchema({
    title: post.title,
    description: post.metaDescription,
    author: post.author,
    date: post.date,
    url: `${SITE_URL}/blog/${slug}`,
  });

  return (
    <>
      {/* ── Structured Data: Article ────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Breadcrumbs ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />
      </div>

      {/* ── Article ─────────────────────────────────────────────────── */}
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* ── Main content ───────────────────────────────────────── */}
            <div className="mx-auto max-w-3xl lg:mx-0">
              {/* Article header */}
              <header>
                <Badge variant={categoryVariant[post.category] ?? "default"}>
                  {post.category}
                </Badge>

                <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl leading-tight text-balance">
                  {post.title}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                  <span className="font-medium text-navy">{post.author}</span>
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime}</span>
                </div>
              </header>

              {/* Article body */}
              <div className="mt-10 space-y-10">
                {post.sections.map((section) => {
                  const id = slugify(section.heading);
                  return (
                    <section key={id} id={id}>
                      <h2 className="text-2xl font-bold text-navy">
                        {section.heading}
                      </h2>
                      <div className="mt-4 space-y-4">
                        {section.content.split("\n\n").map((para, i) => (
                          <p
                            key={i}
                            className="text-lg leading-relaxed text-gray-700"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>

            {/* ── Table of Contents (desktop sidebar) ────────────────── */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                  Table of Contents
                </h3>
                <ul className="mt-4 space-y-2 border-l border-gray-200">
                  {post.sections.map((section) => {
                    const id = slugify(section.heading);
                    return (
                      <li key={id}>
                        <Link
                          href={`#${id}`}
                          className="block border-l-2 border-transparent py-1 pl-4 text-sm text-gray-500 transition-colors hover:border-medical-blue hover:text-navy"
                        >
                          {section.heading}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </article>

      {/* ── Related Posts ────────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-100 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">
              Related Articles
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CtaSection
        variant="gradient"
        headline="Ready to Explore Peptide Therapy?"
        subheadline="Schedule a free consultation with a licensed provider and discover which peptide protocol is right for you."
      />
    </>
  );
}
