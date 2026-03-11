"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: 1 + Math.random() * 2,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 4,
}));

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gold glow orb — top left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.6 }}
        className="absolute -top-24 -left-24 w-[340px] h-[340px] bg-gold/20 blur-[120px] rounded-full"
      />
      {/* Gold glow orb — bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.3 }}
        className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-gold/10 blur-[160px] rounded-full"
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.3, 0], y: [0, -30, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-gold/30"
          style={{
            top: p.y,
            left: p.x,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}
