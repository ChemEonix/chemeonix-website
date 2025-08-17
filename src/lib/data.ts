// File: src/lib/data.ts

export const portfolioData = {
  name: "Travis B. Mitchell",
  title: "Ph.D. Chemist & AI Software Developer",
  company: "ChemEonix, LLC",
  contact: {
    email: "travis@chemeonix.com",
    generalInquiries: "hi@chemeonix.com",
    phone: "501.353.4315",
    location: "Los Angeles, CA, USA",
  },
  professionalProfile:
    "A Ph.D. Chemist and scientific software developer with a proven record of leading projects that apply physics-based methods, data analysis, and machine learning to solve complex scientific problems. Expertise in architecting automated, high-throughput computational workflows to accelerate molecular design and analysis. A highly collaborative researcher with 18 peer-reviewed publications and experience guiding junior scientists, adept at working within interdisciplinary teams to advance research from concept to deployment.",
  coreCompetencies: [
    {
      title: "Project Management & Leadership",
      description:
        "Experience leading projects from conceptualization to deployment, including architecture design, development, and team mentorship. Led development and design efforts at SparkAI and Reveel.",
    },
    {
      title: "Problem-Solving",
      description:
        "Demonstrated ability to identify research and workflow bottlenecks and proactively engineer novel software and automation solutions.",
    },
    {
      title: "Mentorship",
      description:
        "Mentored approximately 3 undergraduate students and multiple junior graduate students in research methodologies.",
    },
    {
      title: "Rapid Skill Acquisition",
      description:
        "Proven ability to self-teach complex new domains, such as full-stack web development, and deliver functional applications in accelerated timelines.",
    },
    {
      title: "Scientific Communication",
      description:
        "Expertise in disseminating complex scientific findings through 18 peer-reviewed publications, grant proposals, and presentations.",
    },
  ],
  technicalSkills: [
    {
      category: "AI & Machine Learning",
      skills: [
        "Automated Architecture Search",
        "Bayesian Optimization",
        "PyTorch",
        "TensorFlow/Keras",
        "Scikit-learn",
        "RAG Architecture Design",
      ],
    },
    {
      category: "Software Development",
      skills: [
        "Python (Expert)",
        "JavaScript/TypeScript",
        "FastAPI",
        "RESTful APIs",
        "Celery",
        "Redis",
        "PostgreSQL",
        "pgvector",
        "SQLAlchemy",
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        "Next.js",
        "React",
        "PyQt5/PySide6",
        "Mantine UI",
        "Tailwind CSS",
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub Actions (CI/CD)",
        "Docker",
        "Azure VMs",
        "Azure Blob Storage",
      ],
    },
    {
      category: "Computational Chemistry & Cheminformatics",
      skills: [
        "DFT (Density Functional Theory)",
        "TD-DFT (Time-Dependent DFT)",
        "Gaussian Software Suite",
        "ORCA Software Suite",
        "Psi4 Software Suite",
        "PySCF",
        "RDKit",
        "HPC Workflow Automation",
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
        "PostgreSQL",
        "pgvector",
        "Redis",
        "Celery",
        "TypeScript",
        "Mantine UI",
        "Azure Virtual Machines",
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
        "Data Analysis",
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
        "Single Crystal X-ray Diffraction",
        "Small Molecule Design and Synthesis",
        "Method Development",
        "Mentorship",
        "NMR Spectroscopy",
        "UV-Vis Spectroscopy",
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
        "Patel, D. G.; Sylvester, E. D.; LeValley, N. R.; Mitchell, T. B.; Benedict, J. B.",
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
    headline: "From Correlation to Causality.",
    subhead: "Building the next generation of intelligent scientific software.",
    cta: "Explore My Vision",
  },
  originStory: {
    headline: "My journey began with atoms.",
    subhead:
      "In graduate school, I learned that true understanding is built on a foundation of causality, not just observation.",
    body: [
      "I designed and synthesized photochromic materials—diarylethenes—and studied their behavior at the atomic level using single-crystal X-ray diffraction and DFT simulations. This deep dive into the fundamental rules governing molecular systems laid the foundation for my career.",
      "Transitioning to industry, I saw a recurring pattern: a world awash in data but starved for insight. Modern machine learning is a marvel of pattern recognition, but a model that predicts 'what' without explaining 'why' is a black box. Relying on correlation alone is like navigating with a compass that only points north—useful, but it won't show you the mountains or valleys ahead. This is the ceiling of innovation we're currently hitting.",
    ],
  },
  theShift: {
    title: "The Shift: From Correlation to Causation",
    correlation: {
      title: "Correlation",
      description:
        'Observes that "A" and "B" happen together. It identifies patterns in data, but doesn\'t explain the "why" behind them. This is the limit of most current data analysis.',
      icon: "Link",
    },
    causation: {
      title: "Causation",
      description:
        'Understands that "A" causes "B" to happen. This is the key to true understanding, allowing us to predict, engineer, and create novel solutions with confidence.',
      icon: "BrainCircuit",
    },
  },
  theVision: {
    headline: "The future is built on causality.",
    subhead:
      "The next leap in AI is not about bigger models, but deeper understanding.",
    body: "My work is focused on building systems that move beyond prediction to uncover the causal levers that drive outcomes. By integrating deep domain knowledge with tools like knowledge graphs and generative AI, we can create models that reason, not just react. This is how we build trust, unlock true innovation, and create systems that act as genuine partners to human experts.",
  },
  impact: {
    title: "Potential for Impact",
    description:
      "This vision is aimed at developing tools that can create a tangible, positive impact on some of humanity's biggest challenges.",
    areas: [
      {
        title: "Accelerated Drug Discovery",
        description:
          "Uncover novel therapeutic pathways and design more effective medicines.",
        icon: "Dna",
      },
      {
        title: "Next-Generation Materials",
        description:
          "Engineer materials with desired properties from the atom up.",
        icon: "Atom",
      },
      {
        title: "Smarter Scientific Tools",
        description:
          "Empower researchers with intelligent software that acts as a true collaborator.",
        icon: "Code",
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
