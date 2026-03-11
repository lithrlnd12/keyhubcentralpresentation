"use client";

import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
  Card,
  CardTitle,
  BulletList,
} from "@/components/ui/SlideLayout";

const tiers = [
  { price: "$399", period: "/mo", name: "Starter", leads: "10-15 leads" },
  { price: "$899", period: "/mo", name: "Growth", leads: "15-25 leads" },
  { price: "$1,499+", period: "/mo", name: "Pro", leads: "Flexible" },
];

export default function SlideFinancials() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>REVENUE & GROWTH</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">Financials & Lead Gen — </span>
          <span className="text-gold">Under One Roof</span>
        </SlideTitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 flex-1">
        <div className="space-y-4">
          <AnimatedElement delay={0.2} direction="left" className="flex">
            <Card className="flex-1 flex flex-col">
              <CardTitle>💵 Financial Command Center</CardTitle>
              <BulletList
                items={[
                  "Invoice management (draft, sent, paid, overdue)",
                  "P&L reports by business unit",
                  "Revenue trend charts (6-month)",
                  "Expense tracking with receipt uploads",
                  "Contractor earnings & payout processing",
                  "Overdue invoice alerts",
                  "Entity-level financial breakdown",
                ]}
              />
            </Card>
          </AnimatedElement>
          <AnimatedElement delay={0.35} direction="left" className="flex">
            <Card className="flex-1 flex flex-col">
              <CardTitle>🤝 Partner Portal</CardTitle>
              <BulletList
                items={[
                  "Submit labor requests",
                  "Create service/warranty tickets",
                  "Track request status & history",
                  "View team network on map",
                  "Activity history & reporting",
                ]}
              />
            </Card>
          </AnimatedElement>
        </div>

        <div className="space-y-4">
          <AnimatedElement delay={0.25} direction="right" className="flex">
            <Card className="flex-1 flex flex-col">
              <CardTitle>📈 Lead Management</CardTitle>
              <BulletList
                items={[
                  "Multi-source: Google, Meta, TikTok, referrals",
                  "Lead quality scoring: Hot / Warm / Cold",
                  "Automated assignment to sales reps",
                  "AI call & SMS analysis on every lead",
                  "Nearby lead discovery (geo-based)",
                  "Conversion funnel tracking",
                  "Campaign performance analytics",
                ]}
              />
            </Card>
          </AnimatedElement>
          <AnimatedElement delay={0.4} direction="right" className="flex">
            <Card gold className="flex-1 flex flex-col">
              <CardTitle>Subscription Tiers (Keynote Digital)</CardTitle>
              <div className="grid grid-cols-3 gap-3 mt-3">
                {tiers.map((t, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-gold">{t.price}</div>
                    <div className="text-xs text-white/30">{t.period}</div>
                    <div className="text-[15px] font-semibold text-white mt-1">{t.name}</div>
                    <div className="text-xs text-white/30 mt-0.5">{t.leads}</div>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </SlideLayout>
  );
}
