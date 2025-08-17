"use client";

import Link from "next/link";
import { motion } from "motion/react";
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
      <div className="flex items-center justify-between py-4 px-4 md:px-6 lg:px-8">
        <Link href="/" aria-label="Back to homepage">
          <ChemEonixLogo />
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};
