"use client";

import { motion } from "framer-motion";
import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
  SlideSubtitle,
  Card,
} from "@/components/ui/SlideLayout";

const stages = [
  "Lead",
  "Sold",
  "Front End Hold",
  "Production",
  "Scheduled",
  "Started",
  "Complete",
  "Paid in Full",
];

const features = [
  {
    icon: "📄",
    title: "Digital Contracts",
    desc: "E-signatures, initials, disclosures — all captured digitally with PDF generation",
  },
  {
    icon: "📸",
    title: "Photo Documentation",
    desc: "Before/after photos, measurement data, and job notes in one place",
  },
  {
    icon: "💰",
    title: "Cost Tracking",
    desc: "Material & labor costs — projected vs. actual — so you know margin on every job",
  },
  {
    icon: "👥",
    title: "Crew Assignment",
    desc: "AI recommends contractors based on availability, distance, and rating",
  },
];

export default function SlideJobLifecycle() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>CORE WORKFLOW</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">Every Job. Every Stage. </span>
          <span className="text-gold">One View.</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          Track every project from first contact through final payment — with full cost
          visibility at each step.
        </SlideSubtitle>
      </AnimatedElement>

      {/* Pipeline stages — larger */}
      <div className="flex flex-wrap items-center gap-3 mt-8 mb-8">
        {stages.map((stage, i) => {
          const isHighlight = i === 0 || i === stages.length - 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div
                className={`px-5 py-3 rounded-xl text-base md:text-lg font-semibold whitespace-nowrap transition-all ${
                  isHighlight
                    ? "bg-[#28241A] border-2 border-gold/40 text-gold shadow-lg shadow-gold/10"
                    : "bg-surface border border-surface-light/30 text-white"
                }`}
              >
                {stage}
              </div>
              {i < stages.length - 1 && (
                <span className="text-gold text-lg font-bold">→</span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Feature cards — bigger text, fill space */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 flex-1">
        {features.map((f, i) => (
          <AnimatedElement key={i} delay={0.6 + i * 0.08} direction="up" className="flex">
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-1"
            >
              <Card className="h-full flex-1 flex flex-col">
                <span className="text-3xl mb-3">{f.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-base md:text-lg text-white/45 leading-relaxed flex-1">{f.desc}</p>
              </Card>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>

      {/* Commission highlight */}
      <AnimatedElement delay={0.95} direction="up">
        <Card gold className="mt-5">
          <p className="text-lg md:text-xl">
            <span className="text-gold font-semibold">Commission tracking built in.</span>{" "}
            <span className="text-white/50">
              Elite (10%), Pro (9%), Standard (8%) tiers based on contractor ratings. Automated
              calculation and payout approval workflows.
            </span>
          </p>
        </Card>
      </AnimatedElement>
    </SlideLayout>
  );
}
