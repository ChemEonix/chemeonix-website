// File: src/tests/Footer.test.tsx

import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/lib/data";

describe("Footer", () => {
  it("renders the copyright notice with the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = `© ${currentYear} ${portfolioData.name}. All rights reserved.`;
    expect(screen.getByText(copyrightText)).toBeInTheDocument();
  });
});
