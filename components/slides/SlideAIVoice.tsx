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
          Never miss a lead again. Your AI receptionist qualifies callers, books appointments,
          and captures every detail — even at 2 AM.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-4 sm:mt-8">
        <AnimatedElement delay={0.3} direction="up" className="flex">
          <Card className="flex-1 flex flex-col">
            <CardTitle>📞 Inbound Calls</CardTitle>
            <BulletList
              items={[
                "Natural voice AI answers every call",
                "Qualifies leads & captures project details",
                "Full transcripts & recordings saved",
              ]}
            />
          </Card>
        </AnimatedElement>
        <AnimatedElement delay={0.4} direction="up" className="flex">
          <Card className="flex-1 flex flex-col">
            <CardTitle>📅 Smart Scheduling</CardTitle>
            <BulletList
              items={[
                "Books appointments to available slots",
                "Checks real-time availability",
                "Syncs to Google Calendar automatically",
              ]}
            />
          </Card>
        </AnimatedElement>
        <AnimatedElement delay={0.5} direction="up" className="flex">
          <Card gold glow className="flex-1 flex flex-col">
            <CardTitle color="gold">💬 Follow-Up</CardTitle>
            <BulletList
              items={[
                "AI-powered lead follow-up calls",
                "Quote follow-up reminders",
                "SMS conversations with AI analysis",
              ]}
            />
          </Card>
        </AnimatedElement>
      </div>
    </SlideLayout>
  );
}
