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

const tiers = [
  { price: "$499", period: "/mo", name: "Starter", seats: "1–5 seats", popular: false },
  { price: "$1,299", period: "/mo", name: "Growth", seats: "6–20 seats", popular: true },
  { price: "$2,499", period: "/mo", name: "Business", seats: "21–50 seats", popular: false },
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
      <AnimatedElement delay={0.15}>
        <SlideSubtitle>
          Invoices, P&L, lead tracking, and pricing — all in one place.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-4 sm:mt-8">
        <AnimatedElement delay={0.2} direction="up" className="flex">
          <Card className="flex-1 flex flex-col">
            <CardTitle>💵 Financial Command Center</CardTitle>
            <BulletList
              items={[
                "Invoice management & overdue alerts",
                "P&L reports by business unit",
                "Contractor earnings & payouts",
              ]}
            />
          </Card>
        </AnimatedElement>
        <AnimatedElement delay={0.3} direction="up" className="flex">
          <Card className="flex-1 flex flex-col">
            <CardTitle>📈 Lead Management</CardTitle>
            <BulletList
              items={[
                "Google, Meta, TikTok & referral sources",
                "Hot / Warm / Cold lead scoring",
                "Automated assignment to reps",
              ]}
            />
          </Card>
        </AnimatedElement>
        <AnimatedElement delay={0.4} direction="up" className="flex">
          <Card gold className="flex-1 flex flex-col">
            <CardTitle>KeyHub Central Plans</CardTitle>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-2 sm:mt-3">
              {tiers.map((t, i) => (
                <div key={i} className={`text-center rounded-lg p-1.5 sm:p-2 ${t.popular ? "ring-1 ring-gold/30 bg-gold/5" : ""}`}>
                  {t.popular && <div className="text-[8px] sm:text-[10px] font-bold text-gold uppercase tracking-wider mb-1">Popular</div>}
                  <div className="text-xs sm:text-[15px] font-semibold text-white">{t.name}</div>
                  <div className="text-lg sm:text-2xl font-bold text-gold mt-1">{t.price}</div>
                  <div className="text-[10px] sm:text-xs text-white/30">{t.period}</div>
                  <div className="text-[10px] sm:text-xs text-white/40 mt-1">{t.seats}</div>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedElement>
      </div>
    </SlideLayout>
  );
}
