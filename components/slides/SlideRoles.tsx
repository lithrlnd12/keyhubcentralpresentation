"use client";

import AnimatedElement from "@/components/ui/AnimatedElement";
import SlideLayout, {
  SectionLabel,
  SlideTitle,
  SlideSubtitle,
} from "@/components/ui/SlideLayout";

const roles = [
  {
    title: "Owner / Admin",
    desc: "Full access. User approvals, financial reports, system settings, all data.",
    color: "text-gold",
    border: "border-gold/30",
    bg: "bg-gold/5",
  },
  {
    title: "Project Manager",
    desc: "Job management, crew assignment, scheduling, material tracking, costs.",
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
  },
  {
    title: "Sales Rep",
    desc: "Lead management, job creation, nearby leads, commissions, recommendations.",
    color: "text-green-400",
    border: "border-green-500/30",
    bg: "bg-green-500/5",
  },
  {
    title: "Contractor",
    desc: "Personal portal: jobs, invoices, expenses, availability, inventory, P&L.",
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/5",
  },
  {
    title: "Partner",
    desc: "Labor requests, service tickets, team map, submission history.",
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
  },
  {
    title: "Customer",
    desc: "Book appointments, find pros, track projects, messaging, reviews.",
    color: "text-teal-400",
    border: "border-teal-500/30",
    bg: "bg-teal-500/5",
  },
  {
    title: "Subscriber",
    desc: "Lead access based on subscription tier. Starter, Growth, or Pro plans.",
    color: "text-white/50",
    border: "border-white/10",
    bg: "bg-white/[0.02]",
  },
  {
    title: "🔒 Approval Flow",
    desc: "Every signup is reviewed by admin before access is granted.",
    color: "text-white/30",
    border: "border-white/5",
    bg: "bg-white/[0.01]",
  },
];

export default function SlideRoles() {
  return (
    <SlideLayout>
      <AnimatedElement delay={0}>
        <SectionLabel>SECURITY & ACCESS</SectionLabel>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <SlideTitle>
          <span className="text-white">Role-Based Access — </span>
          <span className="text-gold">Everyone Sees What They Need</span>
        </SlideTitle>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <SlideSubtitle>
          Eight distinct roles, each with tailored permissions and their own dashboard
          experience.
        </SlideSubtitle>
      </AnimatedElement>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {roles.map((r, i) => (
          <AnimatedElement key={i} delay={0.25 + i * 0.06} direction="scale">
            <div
              className={`relative rounded-xl p-4 border ${r.border} ${r.bg} h-full transition-all duration-300 hover:scale-[1.02]`}
            >
              {/* Left accent bar */}
              <div
                className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-full ${r.color.replace("text-", "bg-")}`}
              />
              <h3 className={`text-sm font-semibold ${r.color} mb-2 pl-3`}>{r.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed pl-3">{r.desc}</p>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </SlideLayout>
  );
}
