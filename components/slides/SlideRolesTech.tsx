"use client";

import { motion } from "framer-motion";
import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
  SlideSubtitle,
  Card,
} from "@/components/ui/SlideLayout";

const roles = [
  { title: "Owner / Admin", desc: "Full access", color: "text-gold", border: "border-gold/30", bg: "bg-gold/5" },
  { title: "Project Manager", desc: "Jobs & crews", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/5" },
  { title: "Sales Rep", desc: "Leads & contracts", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/5" },
  { title: "Contractor", desc: "Jobs & earnings", color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/5" },
  { title: "Partner", desc: "Labor & service", color: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/5" },
];

const techBadges = [
  { icon: "📱", label: "PWA", desc: "Native app experience" },
  { icon: "⚡", label: "Real-Time", desc: "Live data sync" },
  { icon: "🔐", label: "Secure", desc: "Firebase Auth + RBAC" },
  { icon: "🤖", label: "AI-Powered", desc: "Voice, scoring, OCR" },
  { icon: "📅", label: "Google Calendar", desc: "2-way sync" },
  { icon: "🌐", label: "Cloud Native", desc: "99.9% uptime" },
];

export default function SlideRolesTech() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>SECURITY & TECHNOLOGY</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">Enterprise Tech. </span>
          <span className="text-gold">Role-Based Access.</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          Five distinct roles with tailored dashboards — built on infrastructure that powers Google.
        </SlideSubtitle>
      </AnimatedElement>

      {/* Roles row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mt-4 sm:mt-6">
        {roles.map((r, i) => (
          <AnimatedElement key={i} delay={0.25 + i * 0.06} direction="scale" className="flex">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative rounded-xl p-3 sm:p-4 border ${r.border} ${r.bg} flex flex-col flex-1`}
            >
              <div
                className={`absolute left-0 top-3 sm:top-4 bottom-3 sm:bottom-4 w-[3px] rounded-full ${r.color.replace("text-", "bg-")}`}
              />
              <h3 className={`text-xs sm:text-base font-bold ${r.color} pl-2.5 sm:pl-3`}>{r.title}</h3>
              <p className="text-[10px] sm:text-sm text-white/45 pl-2.5 sm:pl-3">{r.desc}</p>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>

      {/* Tech badges */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mt-3 sm:mt-5">
        {techBadges.map((b, i) => (
          <AnimatedElement key={i} delay={0.55 + i * 0.06} direction="scale" className="flex">
            <Card className="text-center flex-1 flex flex-col items-center py-3 sm:py-4">
              <div className="text-lg sm:text-2xl mb-1">{b.icon}</div>
              <div className="text-xs sm:text-sm font-bold text-white">{b.label}</div>
              <div className="text-[9px] sm:text-xs text-white/40 mt-0.5">{b.desc}</div>
            </Card>
          </AnimatedElement>
        ))}
      </div>
    </SlideLayout>
  );
}
