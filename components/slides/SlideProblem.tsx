"use client";

import { motion } from "framer-motion";
import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, { SectionLabel, SlideTitle, SlideSubtitle } from "@/components/ui/SlideLayout";

const problems = [
  {
    icon: "📞",
    title: "Missed Calls = Missed Revenue",
    desc: "After-hours calls go to voicemail. By morning, that lead called your competitor.",
  },
  {
    icon: "📋",
    title: "Spreadsheet Scheduling",
    desc: "Crew availability lives in texts, whiteboards, or someone's head. Double-bookings happen weekly.",
  },
  {
    icon: "💸",
    title: "Invoices in the Wind",
    desc: "You can't tell what's outstanding, overdue, or paid without digging through email chains.",
  },
  {
    icon: "🧩",
    title: "10 Apps, Zero Integration",
    desc: "QuickBooks + Google Cal + WhatsApp + Excel + email. None of them talk to each other.",
  },
  {
    icon: "📦",
    title: "Inventory Blindness",
    desc: "Truck stock runs out mid-job. Nobody knows what's in the warehouse until it's too late.",
  },
  {
    icon: "📊",
    title: "No Visibility",
    desc: "You can't see which jobs are profitable, which reps are producing, or where money is leaking.",
  },
];

export default function SlideProblem() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>THE PROBLEM</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">You&apos;re Losing Revenue to </span>
          <span className="text-red-400">Operational Chaos</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          Every contracting company hits the same walls as they grow. Sound familiar?
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-4 sm:mt-8 flex-1">
        {problems.map((p, i) => (
          <AnimatedElement key={i} delay={0.25 + i * 0.08} direction="up" className="flex">
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex gap-3 sm:flex-col sm:gap-4 p-3 sm:p-6 rounded-xl bg-surface/50 border border-red-500/10 hover:border-red-500/30 transition-colors flex-1"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-2xl">{p.icon}</span>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-3">{p.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-white/45 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          </AnimatedElement>
        ))}
      </div>
    </SlideLayout>
  );
}
