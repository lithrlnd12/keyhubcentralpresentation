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
    icon: "🏠",
    title: "Customer Portal",
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
    bullets: [
      "Sign contracts from any device",
      "Multi-page remodeling agreements",
      "Disclosure statements built in",
      "Signature & initials capture",
      "Instant PDF copies emailed",
    ],
  },
  {
    icon: "⭐",
    title: "Ratings & Reviews",
    bullets: [
      "Auto-sent after job completion",
      "Secure, tokenized review links",
      "1-5 star rating with comments",
      "Feeds contractor tier system",
      "30-day expiry with reminders",
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
          <span className="text-white">Your Customers Get a </span>
          <span className="text-gold">Premium Experience</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          A professional customer portal that builds trust and reduces friction — from first
          contact to completed project.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {cards.map((c, i) => (
          <AnimatedElement key={i} delay={0.3 + i * 0.1} direction="up">
            <Card className="h-full">
              <CardTitle>
                {c.icon} {c.title}
              </CardTitle>
              <BulletList items={c.bullets} />
            </Card>
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement delay={0.65} direction="up">
        <Card gold className="mt-5">
          <p className="text-sm">
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
