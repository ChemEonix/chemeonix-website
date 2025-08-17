"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-10 md:py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-foreground">
          {portfolioData.name}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-primary font-semibold mb-8">
          {portfolioData.title}
        </p>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
          Bridging atoms and bits to engineer the future of scientific software.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
          <Button variant="secondary" disabled>
            <Download className="mr-2 h-4 w-4" />
            Download CV (Soon)
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
