"use client";

import { motion } from "framer-motion";
import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
  SlideSubtitle,
  Card,
} from "@/components/ui/SlideLayout";

const flowRows = [
  {
    label: "LEAD CAPTURE",
    icon: "📞",
    steps: [
      { text: "AI answers call", color: "blue" },
      { text: "Qualifies lead", color: "blue" },
      { text: "Books appointment", color: "blue" },
      { text: "Lead in system", color: "gold" },
    ],
  },
  {
    label: "SALES",
    icon: "🤝",
    steps: [
      { text: "Rep assigned", color: "purple" },
      { text: "Consultation", color: "purple" },
      { text: "Contract signed", color: "purple" },
      { text: "Job created", color: "gold" },
    ],
  },
  {
    label: "PRODUCTION",
    icon: "🔨",
    steps: [
      { text: "Crew assigned", color: "green" },
      { text: "Materials ordered", color: "green" },
      { text: "Work completed", color: "green" },
      { text: "Photos captured", color: "gold" },
    ],
  },
  {
    label: "CLOSE OUT",
    icon: "✅",
    steps: [
      { text: "Invoice sent", color: "amber" },
      { text: "Payment received", color: "amber" },
      { text: "Commission paid", color: "amber" },
      { text: "Review requested", color: "gold" },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/25", text: "text-blue-300", glow: "shadow-blue-500/10" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/25", text: "text-purple-300", glow: "shadow-purple-500/10" },
  green: { bg: "bg-green-500/10", border: "border-green-500/25", text: "text-green-300", glow: "shadow-green-500/10" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/25", text: "text-amber-300", glow: "shadow-amber-500/10" },
  gold: { bg: "bg-[#28241A]", border: "border-gold/40", text: "text-gold", glow: "shadow-gold/15" },
};

const arrowColors: Record<string, string> = {
  blue: "text-blue-400/50",
  purple: "text-purple-400/50",
  green: "text-green-400/50",
  amber: "text-amber-400/50",
};

export default function SlideConnected() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>THE BIG PICTURE</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">How It All </span>
          <span className="text-gold">Connects</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          Every piece feeds the next. No data silos. No re-entering information.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="flex flex-col justify-evenly mt-4 sm:mt-8 flex-1 gap-2">
        {flowRows.map((row, ri) => (
          <AnimatedElement key={ri} delay={0.3 + ri * 0.12} direction="left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              {/* Row label with icon */}
              <div className="flex sm:w-40 shrink-0 sm:text-right items-center sm:justify-end gap-2 sm:gap-3 mb-1 sm:mb-0">
                <span className="text-lg sm:text-2xl">{row.icon}</span>
                <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.1em] text-white/40 uppercase">
                  {row.label}
                </span>
              </div>

              {/* Steps */}
              <div className="flex items-center gap-1 sm:gap-3 flex-wrap flex-1">
                {row.steps.map((step, si) => {
                  const c = colorMap[step.color];
                  const isGold = step.color === "gold";
                  return (
                    <div key={si} className="flex items-center gap-1 sm:gap-3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          delay: 0.4 + ri * 0.12 + si * 0.08,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className={`px-2 sm:px-5 py-1.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-base md:text-lg font-medium border ${c.bg} ${c.border} ${c.text} shadow-md ${c.glow} ${
                          isGold ? "font-bold ring-1 ring-gold/20" : ""
                        }`}
                      >
                        {step.text}
                      </motion.div>
                      {si < row.steps.length - 1 && (
                        <motion.span
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + ri * 0.12 + si * 0.08 }}
                          className={`text-xs sm:text-xl font-bold ${arrowColors[row.steps[si].color] || "text-gold/40"}`}
                        >
                          →
                        </motion.span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.9} direction="up">
        <Card gold className="mt-3 sm:mt-4">
          <p className="text-sm sm:text-lg md:text-xl text-white/50 text-center">
            <span className="text-gold font-semibold">Zero re-entry.</span> Customer info from the
            AI call flows into the lead → contract → job → invoice → review request —
            automatically.
          </p>
        </Card>
      </AnimatedElement>
    </SlideLayout>
  );
}
