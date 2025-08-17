"use client";
import { landingPageData } from "@/lib/data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const LandingHero = () => {
  const { headline, subhead, cta } = landingPageData.hero;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("origin-story");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
          {headline}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
          {subhead}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-50"
      >
        <Button variant="ghost" onClick={scrollToNextSection}>
          {cta}
          <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </motion.div>
    </section>
  );
};
