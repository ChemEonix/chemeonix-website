"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-muted dark:bg-card rounded-lg"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <Card className="max-w-4xl mx-auto mb-12 shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg text-center text-card-foreground">
                {portfolioData.professionalProfile}
              </p>
            </CardContent>
          </Card>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.coreCompetencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <CardTitle className="font-heading text-xl">
                      {competency.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {competency.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
