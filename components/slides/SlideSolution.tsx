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

const pillars = [
  {
    icon: "🏗️",
    title: "Key Trade Solutions",
    subtitle: "YOUR TEAM",
    bullets: [
      "1099 contractor network management",
      "Availability calendar (AM/PM/Eve)",
      "AI-powered crew recommendations",
      "Inventory & truck stock tracking",
      "Contractor ratings & tier system",
      "Individual contractor portals",
    ],
  },
  {
    icon: "🔨",
    title: "Key Renovations",
    subtitle: "YOUR JOBS",
    bullets: [
      "Full job lifecycle (8 stages)",
      "Digital contracts & e-signatures",
      "Material & labor cost tracking",
      "Before/after photo documentation",
      "Commission tracking & payouts",
      "Measurement data capture",
    ],
  },
  {
    icon: "📈",
    title: "Keynote Digital",
    subtitle: "YOUR LEADS",
    bullets: [
      "Multi-source lead management",
      "Campaign performance tracking",
      "AI call analysis & lead scoring",
      "Subscription-based lead gen",
      "Automated lead assignment",
      "Hot / Warm / Cold scoring",
    ],
  },
];

export default function SlideSolution() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>THE SOLUTION</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">One Platform. </span>
          <span className="text-gold">Everything Connected.</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          KeyHub Central unifies your entire operation — from the first inbound call to final
          payment — into a single, mobile-first command center.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {pillars.map((p, i) => (
          <AnimatedElement key={i} delay={0.3 + i * 0.1} direction="up">
            <Card gold className="h-full">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{p.icon}</span>
                <CardTitle>{p.title}</CardTitle>
              </div>
              <span className="text-[10px] font-bold tracking-[0.15em] text-gold uppercase block mb-3">
                {p.subtitle}
              </span>
              <BulletList items={p.bullets} />
            </Card>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.7} direction="up">
        <Card gold className="mt-5">
          <p className="text-sm text-white/50">
            <span className="text-lg mr-2">📱</span>
            <span className="text-gold font-medium">Built for mobile.</span>{" "}
            Your team works from trucks and jobsites, not desks. KeyHub is a full PWA — works
            like a native app on any phone.
          </p>
        </Card>
      </AnimatedElement>
    </SlideLayout>
  );
}
