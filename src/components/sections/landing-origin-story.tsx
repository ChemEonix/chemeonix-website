"use client";
import { landingPageData } from "@/lib/data";
import { motion } from "framer-motion";
import { Atom, BarChart3 } from "lucide-react";

export const LandingOriginStory = () => {
  const { headline, subhead, body } = landingPageData.originStory;

  return (
    <section
      id="origin-story"
      className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-muted dark:bg-card rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <div className="flex justify-center items-center gap-4 mb-6">
          <Atom className="h-12 w-12 text-primary" />
          <BarChart3 className="h-12 w-12 text-primary" />
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          {headline}
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
          {subhead}
        </h2>
        <div className="space-y-6 text-lg md:text-xl">
          {body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
