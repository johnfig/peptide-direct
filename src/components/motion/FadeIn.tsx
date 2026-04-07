"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: Direction;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: -30 },
  right: { x: 30 },
  none: {},
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  direction = "up",
}: FadeInProps) {
  const offset = offsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
