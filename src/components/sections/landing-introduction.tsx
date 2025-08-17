"use client";

import { landingPageData } from "@/lib/data";
import { motion } from "framer-motion";
import { Atom } from "lucide-react";

export const LandingPageIntroduction = () => {
  const { headline, subHeadline, body } = landingPageData.introduction;

  return (
    <section
      id="introduction"
      className="min-h-screen flex flex-col justify-center items-center text-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <Atom className="mx-auto h-16 w-16 text-primary mb-6" />
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          {headline}
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
          {subHeadline}
        </h2>
        <p className="text-lg md:text-xl">{body}</p>
      </motion.div>
    </section>
  );
};
