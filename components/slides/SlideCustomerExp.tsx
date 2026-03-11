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

const cards = [
  {
    icon: "📋",
    title: "Lead Capture",
    status: "LIVE",
    statusColor: "text-green-400 bg-green-400/10",
    bullets: [
      "Multi-source lead intake forms",
      "AI call capture & qualification",
      "Automated lead scoring (Hot/Warm/Cold)",
      "Instant notification to sales reps",
      "Full lead history & activity log",
    ],
  },
  {
    icon: "🏠",
    title: "Customer Portal",
    status: "IN DEVELOPMENT",
    statusColor: "text-amber-400 bg-amber-400/10",
    bullets: [
      "Self-service signup with address",
      "Browse and find contractors",
      "Request quotes & book appointments",
      "Track active projects in real-time",
      "Direct messaging with contractors",
    ],
  },
  {
    icon: "📝",
    title: "Digital Contracts",
    status: "PLANNED",
    statusColor: "text-blue-400 bg-blue-400/10",
    bullets: [
      "Sign contracts from any device",
      "Multi-page remodeling agreements",
      "Disclosure statements built in",
      "Signature & initials capture",
      "Instant PDF copies emailed",
    ],
  },
];

export default function SlideCustomerExp() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>CUSTOMER-FACING</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">Building a </span>
          <span className="text-gold">Premium Customer Experience</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          From lead capture through project completion — a professional experience that
          builds trust, reduces friction, and wins more jobs.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-4 sm:mt-8 flex-1">
        {cards.map((c, i) => (
          <AnimatedElement key={i} delay={0.3 + i * 0.1} direction="up" className="flex">
            <Card className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
                <CardTitle>
                  {c.icon} {c.title}
                </CardTitle>
                <span className={`text-[8px] sm:text-[10px] font-bold tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0 ${c.statusColor}`}>
                  {c.status}
                </span>
              </div>
              <BulletList items={c.bullets} className="flex-1" />
            </Card>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.65} direction="up">
        <Card gold className="mt-3 sm:mt-4">
          <p className="text-sm sm:text-base md:text-lg">
            <span className="text-gold font-semibold">Professionalism that wins jobs.</span>{" "}
            <span className="text-white/50">
              When a homeowner sees a branded portal, digital contracts, and organized
              communication — they choose you over the guy texting from a personal phone.
            </span>
          </p>
        </Card>
      </AnimatedElement>
    </SlideLayout>
  );
}
