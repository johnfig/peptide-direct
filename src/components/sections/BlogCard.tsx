import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readingTime: string;
  };
}

const categoryVariant: Record<string, "default" | "success" | "warning" | "info"> = {
  Recovery: "success",
  Performance: "info",
  "Anti-Aging": "warning",
  "Sexual Health": "default",
  "Metabolic Health": "info",
  Education: "default",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="1.167"
        y="2.333"
        width="11.667"
        height="10.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M1.167 5.833h11.667M4.667 1.167v2.333M9.333 1.167v2.333"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx="7"
        cy="7"
        r="5.833"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M7 3.5V7l2.333 1.167"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlogCard({ post }: BlogCardProps) {
  const variant = categoryVariant[post.category] ?? "default";

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <Card hover padding="md" className="group h-full flex flex-col">
        <Badge variant={variant}>{post.category}</Badge>

        <h3 className="mt-4 text-xl font-semibold text-navy group-hover:text-medical-blue transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-gray-100 pt-4 text-xs text-gray-500">
          <span className="font-medium text-navy">{post.author}</span>
          <span className="flex items-center gap-1">
            <CalendarIcon />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <ClockIcon />
            {post.readingTime}
          </span>
        </div>
      </Card>
    </Link>
  );
}
