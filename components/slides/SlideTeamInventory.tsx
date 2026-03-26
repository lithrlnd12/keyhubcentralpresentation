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

export default function SlideTeamInventory() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>OPERATIONS</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">Your Crew & Materials — </span>
          <span className="text-gold">Always Visible</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.15}>
        <SlideSubtitle>
          Know who&apos;s available, what&apos;s in stock, and where everything is — in real time.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-4 sm:mt-8">
        <AnimatedElement delay={0.2} direction="up" className="flex">
          <Card className="flex-1 flex flex-col">
            <CardTitle>👷 Contractor Profiles</CardTitle>
            <BulletList
              items={[
                "Trades, certifications & insurance docs",
                "Performance ratings & tier system",
                "Service radius with territory maps",
              ]}
            />
          </Card>
        </AnimatedElement>
        <AnimatedElement delay={0.3} direction="up" className="flex">
          <Card className="flex-1 flex flex-col">
            <CardTitle>📅 Scheduling</CardTitle>
            <BulletList
              items={[
                "AM / PM / Evening availability blocks",
                "Google Calendar 2-way sync",
                "Team-wide availability grid",
              ]}
            />
          </Card>
        </AnimatedElement>
        <AnimatedElement delay={0.4} direction="up" className="flex">
          <Card gold className="flex-1 flex flex-col">
            <CardTitle>📦 Inventory</CardTitle>
            <BulletList
              items={[
                "Warehouse + truck stock locations",
                "AI receipt scanning & shopping lists",
                "Low-stock alerts & par levels",
              ]}
            />
          </Card>
        </AnimatedElement>
      </div>
    </SlideLayout>
  );
}
