import clsx from "clsx";

type CardPadding = "sm" | "md" | "lg";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: CardPadding;
}

const paddingStyles: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white card-shadow",
        "transition-all duration-300 ease-out",
        hover && "hover:card-shadow-hover hover:scale-[1.01]",
        paddingStyles[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
