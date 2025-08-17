"use client";

import { landingPageData } from "@/lib/data";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

export const LandingProblem = () => {
  const { headline, subhead, body } = landingPageData.theProblem;

  return (
    <section
      id="problem"
      className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-muted dark:bg-card rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <BarChart3 className="mx-auto h-16 w-16 text-primary mb-6" />
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          {headline}
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
          {subhead}
        </h2>
        <p className="text-lg md:text-xl">{body}</p>
      </motion.div>
    </section>
  );
};
