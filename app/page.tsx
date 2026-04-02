"use client";

import Presentation from "@/components/ui/Presentation";
import SlideCover from "@/components/slides/SlideCover";
import SlideProblem from "@/components/slides/SlideProblem";
import SlideSolution from "@/components/slides/SlideSolution";
import SlideAIVoice from "@/components/slides/SlideAIVoice";
import SlideJobLifecycle from "@/components/slides/SlideJobLifecycle";
import SlideTeamInventory from "@/components/slides/SlideTeamInventory";
import SlideFinancials from "@/components/slides/SlideFinancials";
import SlideConnected from "@/components/slides/SlideConnected";
import SlideRolesTech from "@/components/slides/SlideRolesTech";
import SlideCTA from "@/components/slides/SlideCTA";

export default function Home() {
  return (
    <Presentation>
      <SlideCover />
      <SlideProblem />
      <SlideSolution />
      <SlideAIVoice />
      <SlideJobLifecycle />
      <SlideTeamInventory />
      <SlideFinancials />
      <SlideConnected />
      <SlideRolesTech />
      <SlideCTA />
    </Presentation>
  );
}
