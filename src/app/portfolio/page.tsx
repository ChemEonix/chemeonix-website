// File: src/app/page.tsx
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { PublicationsSection } from "@/components/sections/publications-section";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <PublicationsSection />
    </div>
  );
}
