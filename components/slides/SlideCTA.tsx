"use client";

import { motion } from "framer-motion";
import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, { Card } from "@/components/ui/SlideLayout";

const timeline = [
  { week: "Week 1", desc: "Team onboarded, contractors in the system, calendar synced" },
  { week: "Week 2", desc: "Jobs tracked, AI answering calls, inventory baseline set" },
  { week: "Week 3+", desc: "Full visibility — leads, jobs, finances, team — all in one view" },
];

export default function SlideCTA() {
  return (
    <SlideLayout className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto flex-1">
        {/* Logo */}
        <AnimatedElement delay={0} direction="scale">
          <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mb-8 animate-float">
            <span className="text-3xl font-bold text-bg-dark">KH</span>
          </div>
        </AnimatedElement>

        {/* Title */}
        <AnimatedElement delay={0.2} direction="up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-white">Ready to Run Your Business</span>
            <br />
            <span className="text-gold">From One Place?</span>
          </h1>
        </AnimatedElement>

        <AnimatedElement delay={0.35} direction="up">
          <p className="text-base text-white/40 mt-6 max-w-2xl leading-relaxed">
            KeyHub Central isn&apos;t another tool to learn. It&apos;s the tool that replaces the
            ten you&apos;re juggling today. Your team gets clarity. Your customers get
            professionalism. You get your time back.
          </p>
        </AnimatedElement>

        {/* Timeline */}
        <AnimatedElement delay={0.5} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 w-full">
            {timeline.map((t, i) => (
              <Card key={i} className="text-center">
                <div className="text-2xl font-bold text-gold mb-2">{t.week}</div>
                <p className="text-sm text-white/40 leading-relaxed">{t.desc}</p>
              </Card>
            ))}
          </div>
        </AnimatedElement>

        {/* CTA Button */}
        <AnimatedElement delay={0.7} direction="up">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 px-10 py-3.5 bg-gold text-bg-dark font-bold text-lg rounded-full hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
          >
            Let&apos;s Get Started
          </motion.button>
        </AnimatedElement>

        <AnimatedElement delay={0.85} direction="fade">
          <p className="mt-6 text-sm text-white/20">
            keyhubcentral.com &middot; support@keyrenovations.com &middot; (812) 776-6215
          </p>
        </AnimatedElement>
      </div>
    </SlideLayout>
  );
}
