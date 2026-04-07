"use client";

import { useState } from "react";
import clsx from "clsx";
import BlogCard from "@/components/sections/BlogCard";
import type { BlogPost } from "@/types";
import type { BlogCategory } from "@/data/blog-posts";

interface BlogListClientProps {
  posts: BlogPost[];
  categories: readonly BlogCategory[];
}

export default function BlogListClient({
  posts,
  categories,
}: BlogListClientProps) {
  const [active, setActive] = useState<BlogCategory>("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* ── Category filter ─────────────────────────────────────────── */}
      <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-2 min-w-max sm:flex-wrap sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue/30",
                active === cat
                  ? "bg-navy text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Post grid ───────────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-gray-500">
          No articles in this category yet. Check back soon.
        </p>
      )}
    </>
  );
}
