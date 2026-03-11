"use client";

import { motion } from "framer-motion";
import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
  SlideSubtitle,
  Card,
  CardTitle,
  BulletList,
} from "@/components/ui/SlideLayout";

const techCards = [
  {
    title: "Platform",
    icon: "⚡",
    bullets: [
      "Progressive Web App (any device)",
      "Real-time data sync across all users",
      "Mobile-first responsive design",
      "Enterprise-grade security",
      "99.9% uptime (Vercel + Firebase)",
    ],
  },
  {
    title: "Integrations",
    icon: "🔗",
    bullets: [
      "Google Calendar (2-way sync)",
      "Gmail API (email automation)",
      "SMS / Twilio (messaging)",
      "Vapi AI (voice calls)",
      "Google Drive (document storage)",
    ],
  },
  {
    title: "AI Features",
    icon: "🤖",
    bullets: [
      "Voice AI receptionist (24/7)",
      "Call analysis & lead scoring",
      "SMS conversation analysis",
      "Receipt OCR parsing",
      "AI shopping list generation",
      "Contractor recommendations",
    ],
  },
];

const badges = [
  { icon: "📱", label: "PWA", desc: "Install like an app" },
  { icon: "⚡", label: "Real-Time", desc: "Live data sync" },
  { icon: "🔐", label: "Secure", desc: "Firebase Auth + RBAC" },
  { icon: "🌐", label: "Cloud Native", desc: "Auto-scaling" },
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
          Built on the same infrastructure that powers Google, with integrations your team
          already uses.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 flex-1">
        {techCards.map((t, i) => (
          <AnimatedElement key={i} delay={0.3 + i * 0.1} direction="up" className="flex">
            <Card className="h-full flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{t.icon}</span>
                <span className="text-lg font-semibold text-white">{t.title}</span>
              </div>
              <BulletList items={t.bullets} />
            </Card>
          </AnimatedElement>
        ))}
      </div>

      {/* Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        {badges.map((b, i) => (
          <AnimatedElement key={i} delay={0.65 + i * 0.08} direction="scale" className="flex">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-1"
            >
              <Card className="text-center flex-1 flex flex-col">
                <div className="text-2xl mb-1">{b.icon}</div>
                <div className="text-[15px] font-semibold text-white">{b.label}</div>
                <div className="text-xs text-white/30 mt-0.5">{b.desc}</div>
              </Card>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>
    </SlideLayout>
  );
}
