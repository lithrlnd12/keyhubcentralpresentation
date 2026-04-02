"use client";

import Image from "next/image";
import AnimatedElement from "@/components/ui/AnimatedElement";
import ParticleBackground from "@/components/ui/ParticleBackground";
import CountAnimation from "@/components/ui/CountAnimation";
import SlideLayout from "@/components/ui/SlideLayout";

const capabilities = [
  { value: "3", label: "Business Units", numericEnd: 3 },
  { value: "5", label: "User Roles", numericEnd: 5 },
  { value: "24/7", label: "AI Voice" },
  { value: "100%", label: "Mobile-Ready" },
];

export default function SlideCover() {
  return (
    <SlideLayout className="relative overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center max-w-5xl mx-auto">
        {/* Logo */}
        <AnimatedElement delay={0} direction="scale">
          <Image
            src="/logo.png"
            alt="KeyHub Central"
            width={180}
            height={180}
            className="mb-4 sm:mb-6 w-24 h-24 sm:w-36 sm:h-36 lg:w-[180px] lg:h-[180px]"
            priority
          />
        </AnimatedElement>

        {/* Tagline pill */}
        <AnimatedElement delay={0.15} direction="up">
          <div className="inline-flex items-center px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#25231A] border border-[#4A3D20] mb-4 sm:mb-8">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-gold uppercase">
              All-in-One Contractor Management Platform
            </span>
          </div>
        </AnimatedElement>

        {/* Title */}
        <AnimatedElement delay={0.3} direction="up">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-white">One Platform.</span>
            <br />
            <span className="text-gold">Every Tool Your Crews Need.</span>
          </h1>
        </AnimatedElement>

        {/* Subtitle */}
        <AnimatedElement delay={0.45} direction="up">
          <p className="text-sm sm:text-lg md:text-xl text-white/40 max-w-3xl mt-4 sm:mt-8 leading-relaxed">
            AI-powered call handling, scheduling, compliance, and client management —
            fully white-labeled under your brand. Replace your entire tool stack.
          </p>
        </AnimatedElement>

        {/* Capabilities row with animated counters */}
        <AnimatedElement delay={0.6} direction="up">
          <div className="mt-auto pt-6 sm:pt-10 border-t border-white/5 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              {capabilities.map((c, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold">
                    <CountAnimation
                      value={c.value}
                      numericEnd={c.numericEnd}
                    />
                  </div>
                  <div className="text-[10px] sm:text-sm text-white/30 mt-1 sm:mt-2 uppercase tracking-widest font-medium">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SlideLayout>
  );
}
