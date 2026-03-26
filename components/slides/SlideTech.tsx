"use client";

import { motion } from "framer-motion";
import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
  SlideSubtitle,
  Card,
} from "@/components/ui/SlideLayout";

const badges = [
  { icon: "📱", label: "PWA", desc: "Works like a native app" },
  { icon: "⚡", label: "Real-Time", desc: "Live data sync" },
  { icon: "🔐", label: "Secure", desc: "Firebase Auth + RBAC" },
  { icon: "🤖", label: "AI-Powered", desc: "Voice, scoring, OCR" },
  { icon: "📅", label: "Google Calendar", desc: "2-way sync" },
  { icon: "🌐", label: "Cloud Native", desc: "99.9% uptime" },
];

export default function SlideTech() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>BUILT TO LAST</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">Enterprise Tech. </span>
          <span className="text-gold">Contractor Price.</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          Built on the same infrastructure that powers Google, with integrations your team already uses.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 mt-6 sm:mt-10 max-w-4xl mx-auto">
        {badges.map((b, i) => (
          <AnimatedElement key={i} delay={0.3 + i * 0.08} direction="scale" className="flex">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-1"
            >
              <Card className="text-center flex-1 flex flex-col items-center py-6 sm:py-8">
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">{b.icon}</div>
                <div className="text-base sm:text-xl font-bold text-white">{b.label}</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1">{b.desc}</div>
              </Card>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>
    </SlideLayout>
  );
}
