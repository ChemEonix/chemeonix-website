"use client";

import { LandingPageIntroduction } from "@/components/sections/landing-introduction";
import { LandingProblem } from "@/components/sections/landing-problem";
import { LandingShift } from "@/components/sections/landing-shift";
import { LandingVision } from "@/components/sections/landing-vision";
import { LandingImpact } from "@/components/sections/landing-impact";
import { LandingConnect } from "@/components/sections/landing-connect";

export default function HomePage() {
  return (
    <div>
      <LandingPageIntroduction />
      <LandingProblem />
      <LandingShift />
      <LandingVision />
      <LandingImpact />
      <LandingConnect />
    </div>
  );
}
