"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  direction: "left" | "right";
  className?: string;
}

export default function SlideIn({
  children,
  delay = 0,
  direction,
  className,
}: SlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
