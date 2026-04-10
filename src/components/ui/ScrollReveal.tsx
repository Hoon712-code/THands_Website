"use client";

import { type ReactNode } from "react";
import { m } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <m.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        transition={{ delay }}
        className={className}
      >
        {children}
      </m.div>
  );
}
