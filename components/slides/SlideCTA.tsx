"use client";

import Image from "next/image";
import AnimatedElement from "@/components/ui/AnimatedElement";
import ParticleBackground from "@/components/ui/ParticleBackground";
import SlideLayout from "@/components/ui/SlideLayout";

export default function SlideCTA() {
  return (
    <SlideLayout className="flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto flex-1">
        {/* Logo */}
        <AnimatedElement delay={0} direction="scale">
          <Image
            src="/logo.png"
            alt="KeyHub Central"
            width={140}
            height={140}
            className="mb-4 sm:mb-6 w-20 h-20 sm:w-28 sm:h-28 lg:w-[140px] lg:h-[140px] animate-float"
          />
        </AnimatedElement>

        {/* Contact Heading */}
        <AnimatedElement delay={0.2} direction="up">
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-white">Get In</span>
            <br />
            <span className="text-gold">Touch</span>
          </h1>
        </AnimatedElement>

        {/* Contact Name */}
        <AnimatedElement delay={0.35} direction="up">
          <p className="text-lg sm:text-2xl md:text-3xl text-white font-semibold mt-6 sm:mt-10">
            Aaron Litherland
          </p>
        </AnimatedElement>

        {/* Contact Details */}
        <AnimatedElement delay={0.5} direction="up">
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            <p className="text-sm sm:text-lg text-white/60">
              <a href="mailto:aaron@innovativeaiconsulting.com" className="hover:text-gold transition-colors">
                aaron@innovativeaiconsulting.com
              </a>
            </p>
            <p className="text-sm sm:text-lg text-white/60">
              <a href="tel:8128906303" className="hover:text-gold transition-colors">
                (812) 890-6303
              </a>
            </p>
          </div>
        </AnimatedElement>
      </div>
    </SlideLayout>
  );
}
