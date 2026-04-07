import clsx from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  centered?: boolean;
  accentWords?: string[];
}

function renderHeading(heading: string, accentWords?: string[]) {
  if (!accentWords || accentWords.length === 0) {
    return heading;
  }

  const pattern = new RegExp(`(${accentWords.map(escapeRegex).join("|")})`, "gi");
  const parts = heading.split(pattern);

  return parts.map((part, i) => {
    const isAccent = accentWords.some(
      (word) => word.toLowerCase() === part.toLowerCase(),
    );
    return isAccent ? (
      <span key={i} className="text-sage">
        {part}
      </span>
    ) : (
      part
    );
  });
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function SectionHeader({
  eyebrow,
  heading,
  description,
  centered = true,
  accentWords,
}: SectionHeaderProps) {
  return (
    <div className={clsx(centered && "text-center")}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-bold text-forest-900 md:text-3xl lg:text-4xl text-balance">
        {renderHeading(heading, accentWords)}
      </h2>

      {description && (
        <p
          className={clsx(
            "mt-4 text-lg leading-relaxed text-gray-600",
            centered && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
