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
    bullets: [
      "Multi-source intake with AI qualification",
      "Automated scoring & rep notification",
      "Full lead history & activity log",
    ],
  },
  {
    icon: "🏠",
    title: "Customer Portal",
    bullets: [
      "Find contractors & request quotes",
      "Track active projects in real-time",
      "Direct messaging with your crew",
    ],
  },
  {
    icon: "📝",
    title: "Digital Contracts",
    bullets: [
      "Sign from any device",
      "Disclosures & initials built in",
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
          <span className="text-white">A </span>
          <span className="text-gold">Premium Customer Experience</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          Professional touchpoints from lead capture through project completion.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-4 sm:mt-8">
        {cards.map((c, i) => (
          <AnimatedElement key={i} delay={0.3 + i * 0.1} direction="up" className="flex">
            <Card className="flex-1 flex flex-col">
              <CardTitle>
                {c.icon} {c.title}
              </CardTitle>
              <BulletList items={c.bullets} />
            </Card>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.65} direction="up">
        <Card gold className="mt-3 sm:mt-4">
          <p className="text-sm sm:text-base md:text-lg">
            <span className="text-gold font-semibold">Professionalism wins jobs.</span>{" "}
            <span className="text-white/50">
              A branded portal and digital contracts beat texting from a personal phone.
            </span>
          </p>
        </Card>
      </AnimatedElement>
    </SlideLayout>
  );
}
