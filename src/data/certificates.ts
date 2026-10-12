export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  category: string;
  imagePath?: string; // e.g. "/images/certificates/tata-data-vis.jpg"
  description: string;
  skillsHighlighted: string[];
}

export const certificatesData: CertificateItem[] = [
  {
    id: "tata-data-visualisation",
    title: "Tata Data Visualisation: Empowering Business with Effective Insights",
    organization: "Forage",
    category: "Data Analytics & Simulation",
    imagePath: "/images/certificates/tata-data-visualisation.jpg",
    description:
      "Completed practical job simulation focused on business metrics, data visualisation strategies, and executive-level insight delivery.",
    skillsHighlighted: ["Data Analysis", "Visualisation", "Executive Reporting"],
  },
  {
    id: "esg-job-simulation",
    title: "ESG Job Simulation",
    organization: "Tata Group through Forage",
    category: "Corporate Simulation",
    imagePath: "/images/certificates/esg-job-simulation.jpg",
    description:
      "Explored environmental, social, and corporate governance practices, risk evaluation, and corporate sustainability frameworks.",
    skillsHighlighted: ["ESG Frameworks", "Corporate Governance", "Sustainability Analysis"],
  },
  {
    id: "dreamflow-buildathon-2025",
    title: "Dreamflow Buildathon 2025",
    organization: "FlutterFlow",
    category: "Hackathon & App Development",
    imagePath: "/images/certificates/dreamflow-buildathon-2025.jpg",
    description:
      "Participated in the competitive Dreamflow Buildathon 2025 hackathon designing and prototyping rapid software solutions.",
    skillsHighlighted: ["Rapid Prototyping", "Software Architecture", "Team Collaboration"],
  },
  {
    id: "techsprint-hackathon",
    title: "TechSprint Hackathon",
    organization: "Google Developer Group, MGM University / Hack2Skill",
    category: "Hackathon & Innovation",
    imagePath: "/images/certificates/techsprint-hackathon.jpg",
    description:
      "Participated in the collegiate TechSprint hackathon addressing real-world problem statements through software innovation.",
    skillsHighlighted: ["Problem Solving", "Web & Tech Innovation", "Hackathon Development"],
  },
];
