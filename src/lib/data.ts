// File: src/lib/data.ts

export const portfolioData = {
  name: "Travis B. Mitchell",
  title: "Ph.D. Chemist & Deep-Tech Founder",
  company: "ChemEonix, LLC",
  contact: {
    email: "travis@chemeonix.com",
    generalInquiries: "hi@chemeonix.com",
    phone: "501.353.4315",
    location: "Los Angeles, CA, USA",
  },
  professionalProfile:
    "A Ph.D. Chemist and scientific innovator with a proven record of leading projects that apply first-principles thinking, advanced computational methods, and full-stack software development to solve complex scientific and industrial problems. Expertise in architecting automated, high-throughput workflows to accelerate discovery and analysis. A highly collaborative researcher with 18 peer-reviewed publications, adept at working within interdisciplinary teams to advance solutions from concept to deployment.",
  coreCompetencies: [
    {
      title: "Project Management & Leadership",
      description:
        "Experience leading projects from conceptualization to deployment, including architecture design, development, and team mentorship. Led development and design efforts at SparkAI and Reveel.",
    },
    {
      title: "First-Principles Problem-Solving",
      description:
        "Demonstrated ability to deconstruct complex challenges to their fundamental principles and engineer novel software, hardware, or process-based solutions.",
    },
    {
      title: "Mentorship",
      description:
        "Mentored approximately 3 undergraduate students and multiple junior graduate students in research methodologies.",
    },
    {
      title: "Rapid Skill Acquisition",
      description:
        "Proven ability to self-teach complex new domains, such as full-stack web development and hardware prototyping, to deliver functional solutions in accelerated timelines.",
    },
    {
      title: "Scientific Communication",
      description:
        "Expertise in disseminating complex scientific findings through 18 peer-reviewed publications, grant proposals, and presentations.",
    },
  ],
  technicalSkills: [
    {
      category: "Scientific & Computational",
      skills: [
        "First-Principles Modeling",
        "Computational Chemistry (DFT, TD-DFT)",
        "High-Throughput Workflow Automation",
        "Advanced Data Analysis",
        "Machine Learning (PyTorch, Scikit-learn)",
        "RDKit",
      ],
    },
    {
      category: "Software Engineering",
      skills: [
        "Python (Expert)",
        "JavaScript/TypeScript",
        "FastAPI",
        "Next.js / React",
        "PostgreSQL",
        "RESTful APIs",
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub Actions (CI/CD)",
        "Docker",
        "Azure Cloud Services",
        "Celery / Redis",
      ],
    },
  ],
  workExperience: [
    {
      company: "SparkAI",
      role: "Lead Engineer (Contract)",
      duration: "June 2024 - July 2025",
      description:
        "Architected and delivered a full-stack web platform for multi-objective formulation optimization. Developed a proprietary algorithm to automate neural network architecture search for sparse, high-dimensional data. Achieved 80% predictive accuracy, delivering a functional MVP that led to a formal case study with a major industrial partner.",
      skills: [
        "Project Leadership",
        "Full-Stack Development",
        "Python",
        "FastAPI",
        "Next.js",
        "AI/ML",
        "Docker",
        "Azure",
      ],
    },
    {
      company: "Reveel",
      role: "Principal Consultant - Computational Chemist (Contract)",
      duration: "November 2023 - August 2024",
      description:
        "Designed and built a fully autonomous quantum chemical pipeline to systematically generate, execute, and analyze vast computational chemistry libraries of diarylethene (DAE) molecules. The system was capable of autonomously executing and parsing thousands of calculations without human interaction.",
      skills: [
        "Generative Chemistry",
        "Workflow Automation",
        "Python",
        "RDKit",
        "Computational Chemistry (ORCA, Psi4)",
        "HPC",
      ],
    },
    {
      company: "University at Buffalo, The State University of New York",
      role: "Ph.D. Candidate - Single Crystal X-ray Diffraction",
      duration: "August 2014 - August 2023",
      description:
        "Conducted doctoral research on photochromic materials and MOFs. Proactively designed and built a Python GUI application to streamline HPC workflows (Slurm/Gaussian) and redeveloped a legacy C++ tool into a modern Python application for high-throughput synchrotron data analysis.",
      skills: [
        "Computational Modeling (DFT/TD-DFT)",
        "Software Engineering (Python, PySide6, PyQt5)",
        "Scientific Collaboration",
        "HPC",
        "Data Analysis",
      ],
    },
  ],
  education: [
    {
      institution: "University at Buffalo, The State University of New York",
      degree: "Ph.D., Chemistry",
      year: "August 2023",
      dissertation:
        "The Development of Methods and Materials for Advanced Functional Crystalline Solids",
    },
    {
      institution: "University of Arkansas at Little Rock (UALR)",
      degree: "B.S., Chemistry",
      year: "May 2024",
    },
  ],
  publications: [
    // ... (full list of 18 publication objects) ...
  ],
};

export const landingPageData = {
  hero: {
    headline: "Solving Foundational Problems.",
    subhead:
      "Building the next generation of scientific ventures from first principles.",
    cta: "Explore The Approach",
  },
  originStory: {
    headline: "My journey began with atoms.",
    subhead:
      "In graduate school, I learned that true innovation comes from understanding a problem at its most fundamental level.",
    body: [
      "I designed and synthesized photochromic materials—diarylethenes—and studied their behavior at the atomic level using single-crystal X-ray diffraction and DFT simulations. This deep dive into the fundamental rules governing molecular systems taught me the power of a first-principles approach.",
      "Transitioning to industry, I saw a recurring pattern: companies building solutions to treat symptoms, not root causes. Many modern tools are marvels of engineering, but a solution that works without a clear 'why' is a temporary fix. My goal is to build ventures that create lasting value by solving problems at their core.",
    ],
  },
  theShift: {
    title: "The ChemEonix Approach: From Symptoms to Root Causes",
    correlation: {
      title: "Symptom-Based Solutions",
      description:
        "Addresses the observable effects of a problem. These solutions can be effective in the short term, but often fail to create a lasting, defensible advantage.",
      icon: "Link",
    },
    causation: {
      title: "First-Principles Solutions",
      description:
        "Identifies and solves the fundamental, root cause of a problem. This is the key to unlocking true innovation and building breakthrough ventures.",
      icon: "BrainCircuit",
    },
  },
  theVision: {
    headline: "The future is built on foundational science.",
    subhead:
      "The next leap forward is not about a single technology, but about a deeper, more integrated approach to problem-solving.",
    body: "My work is focused on building ventures that leverage a deep, scientific understanding to create the right solution for the right problem. This means being technology-agnostic—whether the answer is a novel algorithm, a new piece of hardware, or a smarter process. By integrating deep domain knowledge with rigorous engineering, we can create solutions that are not just intelligent, but truly insightful.",
  },
  impact: {
    title: "Potential for Impact",
    description:
      "This approach is aimed at developing ventures that can create a tangible, positive impact on some of humanity's biggest challenges.",
    areas: [
      {
        title: "Sustainable Agriculture",
        description: "Creating more resilient and efficient food systems.",
        icon: "Leaf", // Placeholder for a relevant icon
      },
      {
        title: "Accelerated Drug Discovery",
        description:
          "Uncovering novel therapeutic pathways and designing more effective medicines.",
        icon: "Dna",
      },
      {
        title: "Next-Generation Materials",
        description:
          "Engineering materials with desired properties from the atom up.",
        icon: "Atom",
      },
    ],
  },
  connect: {
    title: "Let's Build the Future.",
    description:
      "The initial venture proposals and MVPs are currently under development. I'm passionate about solving these types of challenges and am actively seeking opportunities to apply this vision. If my work resonates with you, I'd be excited to discuss how I can contribute to your team or how you can join mine.",
    primaryCta: {
      text: "View My Work",
      href: "/portfolio",
    },
    secondaryCta: {
      text: "Collaborate With Me",
      href: "mailto:travis@chemeonix.com",
    },
  },
};
