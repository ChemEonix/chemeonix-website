// File: src/components/footer.tsx

"use client";

import { portfolioData } from "@/lib/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center text-center max-w-full">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {portfolioData.company}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Contact:{" "}
          <a
            href={"mailto:${portfolioData.contact.generalInquiries}"}
            className="hover:text-primary"
          >
            {portfolioData.contact.generalInquiries}
          </a>
        </p>
      </div>
    </footer>
  );
};
