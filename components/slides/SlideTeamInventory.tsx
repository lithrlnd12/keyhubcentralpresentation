"use client";

import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 flex-1">
        <div className="space-y-4">
          <AnimatedElement delay={0.2} direction="left" className="flex">
            <Card className="h-auto flex-1 flex flex-col">
              <CardTitle>👷 Contractor Management</CardTitle>
              <BulletList
                items={[
                  "Full 1099 contractor profiles",
                  "Trades, skills, and certifications",
                  "Insurance & W-9 document storage",
                  "Performance ratings (customer, speed, warranty)",
                  "Rating tiers: Elite, Pro, Standard",
                  "Service radius with territory maps",
                  "Individual contractor portals",
                ]}
              />
            </Card>
          </AnimatedElement>
          <AnimatedElement delay={0.35} direction="left" className="flex">
            <Card className="flex-1 flex flex-col">
              <CardTitle>📅 Availability Calendar</CardTitle>
              <BulletList
                items={[
                  "Morning / Afternoon / Evening blocks",
                  "Specific time scheduling",
                  "Google Calendar 2-way sync",
                  "Team-wide availability grid view",
                  "Date range bulk availability setting",
                ]}
              />
            </Card>
          </AnimatedElement>
        </div>

        <div className="space-y-4">
          <AnimatedElement delay={0.25} direction="right" className="flex">
            <Card className="h-auto flex-1 flex flex-col">
              <CardTitle>📦 Inventory Tracking</CardTitle>
              <BulletList
                items={[
                  "Materials & tools with par levels",
                  "Warehouse + truck stock locations",
                  "AI receipt scanning (snap & upload)",
                  "Low-stock alerts & notifications",
                  "AI-generated shopping lists",
                  "Inventory count workflows",
                  "Bulk import capability",
                ]}
              />
            </Card>
          </AnimatedElement>
          <AnimatedElement delay={0.4} direction="right" className="flex">
            <Card gold className="flex-1 flex flex-col">
              <CardTitle>🔑 Contractor Portal</CardTitle>
              <BulletList
                items={[
                  "Personal job dashboard & earnings",
                  "Invoice creation & tracking",
                  "Expense logging & P&L visibility",
                  "Availability management",
                  "Inventory counts from the truck",
                ]}
              />
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </SlideLayout>
  );
}
