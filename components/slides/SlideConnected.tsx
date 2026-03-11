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
    steps: [
      { text: "AI answers call", color: "blue" },
      { text: "Qualifies lead", color: "blue" },
      { text: "Books appointment", color: "blue" },
      { text: "Lead in system", color: "gold" },
    ],
  },
  {
    label: "SALES",
    steps: [
      { text: "Rep assigned", color: "purple" },
      { text: "Consultation", color: "purple" },
      { text: "Contract signed", color: "purple" },
      { text: "Job created", color: "gold" },
    ],
  },
  {
    label: "PRODUCTION",
    steps: [
      { text: "Crew assigned", color: "green" },
      { text: "Materials ordered", color: "green" },
      { text: "Work completed", color: "green" },
      { text: "Photos captured", color: "gold" },
    ],
  },
  {
    label: "CLOSE OUT",
    steps: [
      { text: "Invoice sent", color: "amber" },
      { text: "Payment received", color: "amber" },
      { text: "Commission paid", color: "amber" },
      { text: "Review requested", color: "gold" },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-white" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-white" },
  green: { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-white" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-white" },
  gold: { bg: "bg-[#28241A]", border: "border-gold/30", text: "text-gold" },
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

      <div className="space-y-3 mt-8 flex-1">
        {flowRows.map((row, ri) => (
          <AnimatedElement key={ri} delay={0.3 + ri * 0.12} direction="left">
            <div className="flex items-center gap-3">
              {/* Row label */}
              <div className="w-28 shrink-0 text-right">
                <span className="text-xs font-bold tracking-[0.1em] text-white/30 uppercase">
                  {row.label}
                </span>
              </div>

              {/* Steps */}
              <div className="flex items-center gap-2 flex-wrap">
                {row.steps.map((step, si) => {
                  const c = colorMap[step.color];
                  const isGold = step.color === "gold";
                  return (
                    <div key={si} className="flex items-center gap-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + ri * 0.12 + si * 0.06 }}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border ${c.bg} ${c.border} ${c.text} ${
                          isGold ? "font-semibold" : ""
                        }`}
                      >
                        {step.text}
                      </motion.div>
                      {si < row.steps.length - 1 && (
                        <span className="text-gold/60 text-sm">→</span>
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
        <Card gold className="mt-6">
          <p className="text-[15px] text-white/50 text-center">
            <span className="text-gold font-medium">Zero re-entry.</span> Customer info from the
            AI call flows into the lead → contract → job → invoice → review request —
            automatically.
          </p>
        </Card>
      </AnimatedElement>
    </SlideLayout>
  );
}
