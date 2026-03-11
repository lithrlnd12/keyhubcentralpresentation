"use client";

import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, { StatBlock } from "@/components/ui/SlideLayout";

export default function SlideCover() {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center flex-1 max-w-6xl">
        {/* Logo */}
        <AnimatedElement delay={0} direction="scale">
          <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mb-8">
            <span className="text-3xl font-bold text-bg-dark">KH</span>
          </div>
        </AnimatedElement>

        {/* Tagline pill */}
        <AnimatedElement delay={0.15} direction="up">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#25231A] border border-[#4A3D20] mb-8 w-fit">
            <span className="text-xs font-bold tracking-[0.15em] text-gold uppercase">
              Unified Business Management for Contracting Companies
            </span>
          </div>
        </AnimatedElement>

        {/* Title */}
        <AnimatedElement delay={0.3} direction="up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-white">Stop Juggling Tools.</span>
            <br />
            <span className="text-gold">Start Running Your Business.</span>
          </h1>
        </AnimatedElement>

        {/* Subtitle */}
        <AnimatedElement delay={0.45} direction="up">
          <p className="text-lg md:text-xl text-white/40 max-w-3xl mt-8 leading-relaxed">
            KeyHub Central replaces the spreadsheets, group texts, missed calls, and scattered
            systems that cost your contracting company time, money, and jobs every single week.
          </p>
        </AnimatedElement>

        {/* Stats row */}
        <AnimatedElement delay={0.6} direction="up">
          <div className="mt-auto pt-10 border-t border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatBlock value="1" label="Platform" />
              <StatBlock value="3" label="Business Units" />
              <StatBlock value="8" label="Roles Supported" />
              <StatBlock value="24/7" label="AI Answering" />
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SlideLayout>
  );
}
