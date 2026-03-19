"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface PresentationProps {
  children: React.ReactNode[];
}

export default function Presentation({ children }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = children.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) return;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide, totalSlides]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "Escape") {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch / swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const diffX = touchStartX - e.changedTouches[0].clientX;
      const diffY = touchStartY - e.changedTouches[0].clientY;
      // Only trigger if horizontal swipe is dominant
      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
        if (diffX > 0) nextSlide();
        else prevSlide();
      }
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "8%" : "-8%",
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "8%" : "-8%",
      opacity: 0,
      scale: 0.97,
    }),
  };

  return (
    <div className="relative w-screen h-screen bg-bg-darker overflow-hidden select-none">
      {/* Slide content */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute inset-0"
          >
            {children[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation bar — compact on mobile */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        {/* Gold accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="flex items-center justify-between px-2 sm:px-6 py-2 sm:py-3 bg-bg-darker/90 backdrop-blur-md">
          {/* Prev button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Slide indicators — dots on mobile, wider on desktop */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentSlide
                    ? "w-5 sm:w-8 h-1.5 sm:h-2 bg-gold"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-[10px] sm:text-xs text-white/40 font-mono mr-1 sm:mr-2">
              {currentSlide + 1}/{totalSlides}
            </span>
            <button
              onClick={toggleFullscreen}
              className="hidden sm:block p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all"
            >
              {isFullscreen ? (
                <Minimize2 size={16} />
              ) : (
                <Maximize2 size={16} />
              )}
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
