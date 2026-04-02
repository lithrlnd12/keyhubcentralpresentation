"use client";

import { motion } from "framer-motion";
import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
  SlideSubtitle,
} from "@/components/ui/SlideLayout";

const roles = [
  {
    title: "Owner / Admin",
    desc: "Full access — financials, approvals, settings",
    color: "text-gold",
    border: "border-gold/30",
    bg: "bg-gold/5",
  },
  {
    title: "Project Manager",
    desc: "Jobs, crews, scheduling, materials",
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
  },
  {
    title: "Sales Rep",
    desc: "Leads, contracts, commissions",
    color: "text-green-400",
    border: "border-green-500/30",
    bg: "bg-green-500/5",
  },
  {
    title: "Contractor",
    desc: "Jobs, invoices, availability, earnings",
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/5",
  },
  {
    title: "Partner",
    desc: "Labor requests & service tickets",
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
  },
];

export default function SlideRoles() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>SECURITY & ACCESS</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">Role-Based Access — </span>
          <span className="text-gold">Everyone Sees What They Need</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          Five distinct roles, each with tailored permissions and dashboards.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-6 sm:mt-10 max-w-4xl mx-auto">
        {roles.map((r, i) => (
          <AnimatedElement key={i} delay={0.25 + i * 0.08} direction="scale" className="flex">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative rounded-xl p-4 sm:p-5 border ${r.border} ${r.bg} flex flex-col`}
            >
              <div
                className={`absolute left-0 top-4 sm:top-5 bottom-4 sm:bottom-5 w-[3px] sm:w-[4px] rounded-full ${r.color.replace("text-", "bg-")}`}
              />
              <h3 className={`text-sm sm:text-xl md:text-2xl font-bold ${r.color} mb-1 sm:mb-2 pl-3 sm:pl-4`}>{r.title}</h3>
              <p className="text-xs sm:text-base text-white/45 leading-relaxed pl-3 sm:pl-4">{r.desc}</p>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>
    </SlideLayout>
  );
}
