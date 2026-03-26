"use client";

import React, { useRef, useEffect } from "react";

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function SlideLayout({ children, className = "" }: SlideLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const updateScale = () => {
      // Reset to measure natural dimensions at full width
      content.style.transform = "none";
      content.style.width = "100%";

      const available = container.clientHeight;
      const natural = content.scrollHeight;

      if (natural > available) {
        const scale = available / natural;
        content.style.transformOrigin = "top left";
        content.style.transform = `scale(${scale})`;
        // Widen content so it visually fills container width after scaling
        content.style.width = `${100 / scale}%`;
      }
    };

    const timer = setTimeout(updateScale, 60);
    const observer = new ResizeObserver(updateScale);
    observer.observe(container);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`relative w-full h-full bg-bg-dark overflow-hidden ${className}`}>
      {/* Top gold accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-gold to-gold-dark z-10" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,168,75,0.5) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scaling container */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-full overflow-hidden"
      >
        <div
          ref={contentRef}
          className="flex flex-col min-h-full px-4 sm:px-6 md:px-12 lg:px-16 pt-4 sm:pt-6 pb-14 sm:pb-16"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gold uppercase mb-1">
      {children}
    </span>
  );
}

export function SlideTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight ${className}`}>
      {children}
    </h1>
  );
}

export function SlideSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm sm:text-lg md:text-xl text-white/50 max-w-5xl mt-2 sm:mt-3 leading-relaxed">
      {children}
    </p>
  );
}

export function Card({
  children,
  className = "",
  gold = false,
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  gold?: boolean;
  glow?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-3 sm:p-6 border transition-all duration-300 ${
        gold
          ? "bg-[#28241A] border-[#4A3D20] hover:border-gold/40"
          : "bg-surface border-surface-light/30 hover:border-white/10"
      } ${glow ? "animate-glow-pulse" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, color = "white" }: { children: React.ReactNode; color?: string }) {
  const colorClass = color === "gold" ? "text-gold" : "text-white";
  return <h3 className={`text-base sm:text-xl md:text-2xl font-semibold ${colorClass} mb-1.5 sm:mb-3`}>{children}</h3>;
}

export function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-1 sm:space-y-2.5 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-1.5 sm:gap-2.5 text-xs sm:text-base md:text-lg text-white/50 leading-snug">
          <span className="text-gold/60 mt-0.5 sm:mt-1 shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold">{value}</div>
      <div className="text-xs sm:text-sm text-white/30 mt-1 sm:mt-2 uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
}
