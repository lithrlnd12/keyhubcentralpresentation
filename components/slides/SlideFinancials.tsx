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
  { price: "$499", period: "/mo", name: "Starter", seats: "1–5 seats", onboarding: "$499", popular: false },
  { price: "$1,299", period: "/mo", name: "Growth", seats: "6–20 seats", onboarding: "$1,499", popular: true },
  { price: "$2,499", period: "/mo", name: "Business", seats: "21–50 seats", onboarding: "$2,999", popular: false },
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 mt-4 sm:mt-8 flex-1">
        <div className="space-y-3 sm:space-y-4">
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

        <div className="space-y-3 sm:space-y-4">
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
              <CardTitle>KeyHub Central Plans</CardTitle>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-2 sm:mt-3">
                {tiers.map((t, i) => (
                  <div key={i} className={`text-center rounded-lg p-1.5 sm:p-2 ${t.popular ? "ring-1 ring-gold/30 bg-gold/5" : ""}`}>
                    {t.popular && <div className="text-[8px] sm:text-[10px] font-bold text-gold uppercase tracking-wider mb-1">Most Popular</div>}
                    <div className="text-xs sm:text-[15px] font-semibold text-white">{t.name}</div>
                    <div className="text-lg sm:text-2xl font-bold text-gold mt-1">{t.price}</div>
                    <div className="text-[10px] sm:text-xs text-white/30">{t.period}</div>
                    <div className="text-[10px] sm:text-xs text-white/40 mt-1">{t.seats}</div>
                    <div className="text-[8px] sm:text-[10px] text-white/25 mt-0.5">+ {t.onboarding} onboarding</div>
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
