"use client";
import { landingPageData } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dna, Atom, Code } from "lucide-react";

const icons = {
  Dna,
  Atom,
  Code,
};

export const LandingImpact = () => {
  const { title, description, areas } = landingPageData.impact;

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = icons[area.icon as keyof typeof icons];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl pt-2">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};