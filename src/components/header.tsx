"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { ChemEonixLogo } from "./chemeonix-logo";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex items-center justify-between py-4 max-w-screen-2xl">
        <ChemEonixLogo />
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};
