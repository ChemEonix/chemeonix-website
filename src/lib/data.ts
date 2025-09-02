// File: src/lib/data.ts

export const portfolioData = {
  name: "Travis B. Mitchell",
  title: "Ph.D. Chemist & Software/AI Engineer",
  company: "ChemEonix, LLC",
  contact: {
    email1: "mitchell.travis@gmail.com",
    email2: "travis@chemeonix.com",
    email3: "hi@chemeonix.com",
    phone: "501.353.4315",
    location: "Los Angeles, CA, USA",
  },
  professionalProfile:
    "Ph.D. Chemist and full-stack engineer applying first-principles thinking across software/AI, computational chemistry, synthesis, and materials R&D. Experienced in production-grade software, AI/ML models, and automated scientific pipelines. Creator of ChemEonix, an independent R&D studio and portfolio where I explore causal approaches to machine learning and deep scientific insights. I am actively seeking a full-time role—whether in software/AI engineering, computational chemistry, synthesis/materials, or adjacent R&D—while remaining open to collaborations. Author of 18 peer-reviewed publications; strong scientific and technical communication, and cross-disciplinary teamwork.",
  coreCompetencies: [
    {
      title: "Project Management & Leadership",
      description:
        "Experience leading projects from conceptualization to deployment, including architecture design, development, and mentorship. Built and delivered production-ready platforms at SparkAI, Reveel, and ChemEonix.",
    },
    {
      title: "First-Principles Problem-Solving",
      description:
        "Deconstruct complex challenges to their scientific and engineering fundamentals and design novel solutions across software, chemistry, and process domains.",
    },
    {
      title: "Venture Conception & Strategy",
      description:
        "Identify high-value problems and translate deep scientific insights into strategic, fundable concepts and roadmaps.",
    },
    {
      title: "Rapid Skill Acquisition",
      description:
        "Self-teach and master complex domains as needed, from modern full-stack development to quantum chemistry and machine learning.",
    },
    {
      title: "Scientific Communication",
      description:
        "18 peer-reviewed publications; experienced writing grant proposals, technical reports, and presenting complex findings clearly.",
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
      role: "Lead Software Engineer",
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
      role: "Senior Scientist",
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
      year: "May 2014",
    },
  ],
  publications: [
    {
      authors: "Zhang, X.; Mitchell, T. B.; Benedict, J. B.",
      title:
        "The Crystal Structure Landscape of Diarylethene-based Crystalline Solids: A Comprehensive CSD Analysis.",
      journal: "Crystal Growth Des.",
      citation: "2024, 24 (15), 6284–6291.",
    },
    {
      authors:
        "Myers, S. D.; Marr, Z. Y.; Spernyak, J. A.; Mitchell, T. B.; Benedict, J. B.; Patel, D. P.",
      title:
        "Crystallographic, Spectroscopic, and Computational Characterization of a Diiodonaphthoquinone Diarylethene Photochrome: Halogen Bonding and in situ Photocrystallography.",
      journal: "CrystEngComm",
      citation: "2024, 26, 2510–2517.",
    },
    {
      authors:
        "Mitchell, T. B.; Zhang, X.; Jerozal, R. T.; Chen, Y.-S.; Wang, S.; Benedict, J. B.",
      title:
        "Development of a scalar-based geometric parameterization approach for the crystal structure landscape of dithienylethene-based crystalline solids.",
      journal: "IUCrJ",
      citation: "2023, 10 (6), 694–699.",
    },
    {
      authors: "Angevine, D. J.; Mitchell, T.; Zhang, X.; Benedict, J. B.",
      title:
        "Unusual single crystal to single crystal phase transition of a nicotine salt monitored using temperature dependent single crystal X-ray diffraction.",
      journal: "CrystEngComm",
      citation: "2023, 25, 2181–2184.",
    },
    {
      authors:
        "Huang, Y.; Mitchell, T.; Zheng, Y.; Hu, Y.; Benedict, J. B.; Seo, J.-H.; Ren, S.",
      title: "Switching charge states in quasi-2D molecular conductors.",
      journal: "PNAS Nexus",
      citation: "2022, 1 (3), pgac089.",
    },
    {
      authors:
        "Huang, Y.; Mitchell, T.; Yost, D. C.; Hu, Y.; Benedict, J. B.; Grossman, J. C.; Ren, S.",
      title: "Emerged metallicity in molecular ferromagnetic wires.",
      journal: "Nano Lett.",
      citation: "2021, 21 (22), 9746–9753.",
    },
    {
      authors:
        "Huang, Y.; Chen, Y.; Hu, Y.; Mitchell, T.; An, L.; Li, Z.; Benedict, J.; Li, H.; Ren, S.",
      title: "Cross-linking and charging molecular magnetoelectronics.",
      journal: "Nano Lett.",
      citation: "2021, 21 (9), 4099–4105.",
    },
    {
      authors: "Hu, Y.; Adhikari, D.; Tan, A.; et al. (incl. Mitchell, T.)",
      title:
        "Laser-Induced Cooperative Transition in Molecular Electronic Crystal.",
      journal: "Adv. Mater.",
      citation: "2021, 33 (39), 2103000.",
    },
    {
      authors:
        "Walton, I. M.; Cox, J. M.; Myers, S. D.; et al. (incl. Mitchell, T. B.)",
      title:
        "Determination of the dehydration pathway in a flexible metal–organic framework by dynamic in situ x-ray diffraction.",
      journal: "Struct. Dyn.",
      citation: "2020, 7 (3), 032305.",
    },
    {
      authors:
        "Patel, D. G.; Mitchell, T. B.; Myers, S. D.; Carter, D. A.; Novak, F. A.",
      title: "A Suzuki approach to quinone-based diarylethene photochromes.",
      journal: "J. Org. Chem.",
      citation: "2020, 85 (4), 2646–2653.",
    },
    {
      authors: "Patel, D. G.; Boggio-Pasqua, M.; Mitchell, T. B.; et al.",
      title:
        "Computational and Crystallographic Examination of Naphthoquinone Based Diarylethene Photochromes.",
      journal: "Molecules",
      citation: "2020, 25 (11), 2630.",
    },
    {
      authors:
        "Asik, D.; Smolinski, R.; Abozeid, S. M.; Mitchell, T. B.; et al.",
      title:
        "Modulating the properties of Fe (III) macrocyclic MRI contrast agents by appending sulfonate or hydroxyl groups.",
      journal: "Molecules",
      citation: "2020, 25 (10), 2291.",
    },
    {
      authors:
        "Patel, D. G.; Sylvester, E. D.; LeValley, N. R; Mitchell, T. B.; Benedict, J. B.",
      title:
        "The Structure and Characterization of 3, 4, 5-Triiodo-2-Methylthiophene: An Unexpected Iodination Product of 2-Methylthiophene.",
      journal: "J. Chem. Crystallogr.",
      citation: "2019, 49, 206–212.",
    },
    {
      authors: "Parnell, C. M.; Chhetri, B. P.; Mitchell, T. B.; et al.",
      title:
        "Simultaneous electrochemical deposition of cobalt complex and poly (pyrrole) thin films for supercapacitor electrodes.",
      journal: "Sci. Rep.",
      citation: "2019, 9 (1), 5650.",
    },
    {
      authors: "Hu, Y.; Zhong, G.; Guan, Y. S.; et al. (incl. Mitchell, T.)",
      title:
        "Alkali-Metal-Intercalated Percolation Network Regulates Self-Assembled Electronic Aromatic Molecules.",
      journal: "Adv. Mater.",
      citation: "2019, 31 (11), 1807178.",
    },
    {
      authors:
        "Cox, J. M.; Walton, I. M.; Bateman, G.; et al. (incl. Mitchell, T.)",
      title:
        "Solvent exchange in a metal–organic framework single crystal monitored by dynamic in situ X-ray diffraction.",
      journal: "Acta Crystallogr. B",
      citation: "2017, 73 (4), 669–674.",
    },
    {
      authors:
        "Walton, I. M.; Cox, J. M.; Mitchell, T. B.; Bizier, N. P.; Benedict, J. B.",
      title:
        "Structural response to desolvation in a pyridyl-phenanthrene diarylethene-based metal–organic framework.",
      journal: "CrystEngComm",
      citation: "2016, 18 (41), 7972–7977.",
    },
    {
      authors:
        "Parnell, C. M.; Watanabe, F.; Nasini, U. B.; Berry, B. C.; Mitchell, T.; Shaikh, A. U.; Ghosh, A.",
      title:
        "Electrochemical sensing of hydrogen peroxide using a cobalt (III) complex supported on carbonaceous nanomaterials.",
      journal: "J. Electroanal. Chem.",
      citation: "2015, 740, 37–44.",
    },
  ],
};

export const landingPageData = {
  hero: {
    headline: "Solving Foundational Problems.",
    subhead:
      "Open to full-time roles across software/AI, computational chemistry, synthesis/materials R&D, and adjacent domains — while continuing ChemEonix as my independent R&D portfolio.",
    cta: "Explore My Work",
  },
  originStory: {
    headline: "My journey began with atoms.",
    subhead:
      "True innovation comes from understanding a problem at its most fundamental level.",
    body: [
      "I designed and synthesized photochromic materials—diarylethenes—and studied their behavior at the atomic level using single-crystal X-ray diffraction and DFT simulations. This taught me the power of a first-principles approach.",
      "I created ChemEonix as my R&D studio and portfolio to explore causal ML, modern software systems, and venture concepts across science and engineering. Today, I’m looking to bring this mindset directly into a full-time role—whether that’s software/AI, computational chemistry, synthesis/materials, or related R&D—and I remain open to collaborations.",
    ],
  },
  theShift: {
    title: "From Symptoms to Root Causes",
    correlation: {
      title: "Symptom-Based Solutions",
      description:
        "Address the observable effects of a problem — useful short-term but rarely defensible or scalable.",
      icon: "Link",
    },
    causation: {
      title: "First-Principles Solutions",
      description:
        "Identify and solve the underlying mechanism. This creates durable insight and better engineering decisions.",
      icon: "BrainCircuit",
    },
  },
  theVision: {
    headline: "First principles meet practical engineering.",
    subhead: "Technology-agnostic, evidence-driven, production-minded.",
    body: "I apply first-principles reasoning across software and the chemical sciences to build the right solution for the problem at hand—be it a robust web platform, an ML pipeline, a computational chemistry workflow, or a lab-ready process. My goal is to deliver systems that are insightful, testable, and scalable within a team.",
  },
  impact: {
    title: "Areas of Impact",
    description:
      "Mechanism-aware work that transfers across multiple industries.",
    areas: [
      {
        title: "Sustainable Agriculture",
        description: "Creating more resilient and efficient food systems.",
        icon: "Leaf",
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
    title: "Let’s Build Together.",
    description:
      "I’m open to full-time opportunities across software/AI, computational chemistry, synthesis/materials R&D, and adjacent domains—and I’m also open to collaborations for longer-term innovation. If my work resonates, let’s talk.",
    contactOptions: [
      { label: "Employment opportunities", email: "mitchell.travis@gmail.com" },
      { label: "Collaborations & partnerships", email: "travis@chemeonix.com" },
      { label: "General inquiries", email: "hi@chemeonix.com" },
    ],
    primaryCta: { text: "View Portfolio", href: "/portfolio" },
    secondaryCta: {
      text: "Contact Travis",
      href: "mailto:mitchell.travis@gmail.com",
    },
  },
};
