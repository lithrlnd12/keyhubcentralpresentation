"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface CountAnimationProps {
  value: string;          // Display value — can be "3", "24/7", "100%", etc.
  numericEnd?: number;    // If provided, animates from 0 to this number
  className?: string;
}

export default function CountAnimation({ value, numericEnd, className = "" }: CountAnimationProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (numericEnd != null) {
      const controls = animate(count, numericEnd, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [numericEnd, count]);

  // If there's a numeric animation target, render the animated number
  if (numericEnd != null) {
    return <motion.span className={className}>{rounded}</motion.span>;
  }

  // Otherwise just render the static text with a fade-in scale effect
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {value}
    </motion.span>
  );
}
