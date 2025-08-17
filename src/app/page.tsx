"use client";

import { LandingHero } from "@/components/sections/landing-hero";
import { LandingOriginStory } from "@/components/sections/landing-origin-story";
import { LandingShift } from "@/components/sections/landing-shift";
import { LandingVision } from "@/components/sections/landing-vision";
import { LandingImpact } from "@/components/sections/landing-impact";
import { LandingConnect } from "@/components/sections/landing-connect";

export default function HomePage() {
  return (
    <div>
      <LandingHero />
      <LandingOriginStory />
      <LandingShift />
      <LandingVision />
      <LandingImpact />
      <LandingConnect />
    </div>
  );
}
