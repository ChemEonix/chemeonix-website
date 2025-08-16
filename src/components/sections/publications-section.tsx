"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-16 md:py-14">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Peer-Reviewed Publications
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                View All {portfolioData.publications.length} Publications
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4 pt-4">
                  {portfolioData.publications.map((publication, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <BookOpen className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">
                        {publication.authors}
                        <span className="font-semibold text-foreground">
                          {publication.title}
                        </span>
                        <em className="text-primary">{publication.journal}</em>
                        {publication.citation}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
