"use client";

import { motion } from "framer-motion";
import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
  SlideSubtitle,
  Card,
  BulletList,
} from "@/components/ui/SlideLayout";

const pillars = [
  {
    icon: "🏗️",
    title: "Key Trade Solutions",
    subtitle: "YOUR TEAM",
    bullets: [
      "1099 contractor network management",
      "Availability calendar (AM/PM/Eve)",
      "AI-powered crew recommendations",
      "Inventory & truck stock tracking",
      "Contractor ratings & tier system",
      "Individual contractor portals",
    ],
  },
  {
    icon: "🔨",
    title: "Key Renovations",
    subtitle: "YOUR JOBS",
    bullets: [
      "Full job lifecycle (8 stages)",
      "Digital contracts & e-signatures",
      "Material & labor cost tracking",
      "Before/after photo documentation",
      "Commission tracking & payouts",
      "Measurement data capture",
    ],
  },
  {
    icon: "📈",
    title: "Keynote Digital",
    subtitle: "YOUR LEADS",
    bullets: [
      "Multi-source lead management",
      "Campaign performance tracking",
      "AI call analysis & lead scoring",
      "Subscription-based lead gen",
      "Automated lead assignment",
      "Hot / Warm / Cold scoring",
    ],
  },
];

export default function SlideSolution() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>THE SOLUTION</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">One Platform. </span>
          <span className="text-gold">Everything Connected.</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          KeyHub Central unifies your entire operation — from the first inbound call to final
          payment — into a single, mobile-first command center.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 mt-4 sm:mt-8 flex-1">
        {pillars.map((p, i) => (
          <AnimatedElement key={i} delay={0.3 + i * 0.1} direction="up" className="flex">
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-1"
            >
              <Card gold className="flex-1 h-full flex flex-col">
                <div className="flex items-center gap-2 sm:gap-3 mb-1">
                  <span className="text-xl sm:text-3xl">{p.icon}</span>
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">{p.title}</h3>
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-gold uppercase block mb-3 sm:mb-5">
                  {p.subtitle}
                </span>
                <BulletList items={p.bullets} className="flex-1" />
              </Card>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.7} direction="up">
        <Card gold className="mt-3 sm:mt-4">
          <p className="text-sm sm:text-lg md:text-xl text-white/50">
            <span className="text-xl sm:text-2xl mr-2">📱</span>
            <span className="text-gold font-semibold">Built for mobile.</span>{" "}
            Your team works from trucks and jobsites, not desks. KeyHub is a full PWA — works
            like a native app on any phone.
          </p>
        </Card>
      </AnimatedElement>
    </SlideLayout>
  );
}
