"use client";

import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
  SlideSubtitle,
  Card,
  CardTitle,
  BulletList,
} from "@/components/ui/SlideLayout";

const captures = [
  { label: "PROJECT TYPE", value: "Bathroom, Kitchen, Exterior..." },
  { label: "URGENCY LEVEL", value: "Exploring → Ready → Urgent" },
  { label: "PRIMARY CONCERN", value: "Price, Timeline, Warranty, Trust" },
  { label: "SENTIMENT", value: "Excited, Neutral, Skeptical, Frustrated" },
];

export default function SlideAIVoice() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>GAME CHANGER</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">AI That Answers Your Phones </span>
          <span className="text-gold">24/7</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          Your AI receptionist handles calls when you can&apos;t — qualifying leads, booking
          appointments, and capturing every detail.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 mt-4 sm:mt-8 flex-1">
        {/* Left column */}
        <div className="space-y-3 sm:space-y-4">
          <AnimatedElement delay={0.3} direction="left" className="flex">
            <Card className="flex-1 flex flex-col">
              <CardTitle>📞 Inbound Call Handling</CardTitle>
              <BulletList
                items={[
                  "Natural voice AI answers every call",
                  "Qualifies leads automatically",
                  "Captures project type, urgency & timeline",
                  "Detects customer sentiment",
                  "Full transcripts & recordings",
                ]}
              />
            </Card>
          </AnimatedElement>
          <AnimatedElement delay={0.4} direction="left" className="flex">
            <Card className="flex-1 flex flex-col">
              <CardTitle>📅 Smart Scheduling</CardTitle>
              <BulletList
                items={[
                  "Books appointments to available time slots",
                  "Checks availability in real-time",
                  "Syncs to Google Calendar automatically",
                  "Morning / Afternoon / Evening + specific times",
                ]}
              />
            </Card>
          </AnimatedElement>
        </div>

        {/* Right column */}
        <div className="space-y-3 sm:space-y-4">
          <AnimatedElement delay={0.35} direction="right" className="flex">
            <Card gold glow className="flex-1 flex flex-col">
              <CardTitle color="gold">What Your AI Captures</CardTitle>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2 sm:mt-3">
                {captures.map((c, i) => (
                  <div key={i}>
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.1em] text-white/30 uppercase block">
                      {c.label}
                    </span>
                    <span className="text-xs sm:text-[15px] text-white mt-0.5 block">{c.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedElement>
          <AnimatedElement delay={0.45} direction="right" className="flex">
            <Card className="flex-1 flex flex-col">
              <CardTitle>💬 Outbound & Follow-Up</CardTitle>
              <BulletList
                items={[
                  "AI-powered lead follow-up calls",
                  "Quote follow-up reminders",
                  "Compliance & verification calls",
                  "SMS conversations with AI analysis",
                ]}
              />
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </SlideLayout>
  );
}
