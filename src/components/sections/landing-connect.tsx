// File: landing-connect.tsx
"use client";
import { landingPageData } from "@/lib/data";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export const LandingConnect = () => {
  const { title, description, primaryCta, secondaryCta, contactOptions } =
    landingPageData.connect;

  return (
    <section className="py-10 md:py-16 bg-muted dark:bg-card rounded-lg">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center max-w-3xl"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">{description}</p>

        {contactOptions?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {contactOptions.map((opt) => (
              <a
                key={opt.email}
                href={`mailto:${opt.email}`}
                className="block rounded-lg border bg-background hover:bg-accent transition-colors p-4"
              >
                <p className="text-sm font-medium text-foreground">
                  {opt.label}
                </p>
                <p className="text-sm text-muted-foreground">{opt.email}</p>
              </a>
            ))}
          </div>
        ) : null}

        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <a href={primaryCta.href}>
              {primaryCta.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={secondaryCta.href}>
              <Mail className="mr-2 h-5 w-5" />
              {secondaryCta.text}
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
