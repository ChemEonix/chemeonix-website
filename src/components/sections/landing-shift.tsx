"use client";
import { landingPageData } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, BrainCircuit } from "lucide-react";

const icons = {
  Link,
  BrainCircuit,
};

export const LandingShift = () => {
  const { title, correlation, causation } = landingPageData.theShift;

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {[correlation, causation].map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-2xl pt-4">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
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
