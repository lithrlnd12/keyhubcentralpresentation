"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  className?: string;
  duration?: number;
}

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  scale: { scale: 0.85, x: 0, y: 0 },
  fade: { x: 0, y: 0 },
};

export default function AnimatedElement({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.6,
}: AnimatedElementProps) {
  const initial = {
    opacity: 0,
    ...directionMap[direction],
  };

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
