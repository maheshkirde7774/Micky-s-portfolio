export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedPoints?: string[];
  technologies: string[];
  githubUrl?: string; // Set to undefined or null if not yet confirmed
  liveUrl?: string;   // Set to undefined or null if not yet deployed
  featured: boolean;
  accentColor: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "gym-management-system",
    title: "Gym Management System",
    category: "Full Stack Web Application",
    description:
      "A web application designed to simplify gym operations through member registration, membership management, fee/payment tracking, and an administrative dashboard.",
    detailedPoints: [
      "Member onboarding and profile records management",
      "Membership subscription plans and renewal tracking",
      "Payment and fee record management system",
      "Streamlined administrative overview for day-to-day operations",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "SQL"],
    githubUrl: "https://github.com/maheshkirde7774",
    liveUrl: undefined, // Add deployment URL when live
    featured: true,
    accentColor: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "smart-attendance-system",
    title: "Smart Attendance System",
    category: "System Software & Database",
    description:
      "A project focused on smart attendance management to streamline and organize session attendance tracking efficiently.",
    detailedPoints: [
      "Automated attendance record logging and tracking",
      "Database schema designed for students and sessions",
      "Structured reporting and attendance audit records",
    ],
    technologies: ["Python", "SQL", "DBMS"],
    githubUrl: "https://github.com/maheshkirde7774",
    liveUrl: undefined,
    featured: true,
    accentColor: "from-sky-500/20 to-indigo-500/10",
  },
  {
    id: "codealpha-chatbot",
    title: "CodeAlpha Chatbot",
    category: "Conversational Application",
    description:
      "A chatbot project developed in association with CodeAlpha, delivering interactive automated assistance and query responses.",
    detailedPoints: [
      "Query processing and conversational intent response flow",
      "Lightweight backend integration using Flask routing",
      "User-friendly web interface for text-based interactions",
    ],
    technologies: ["Python", "Flask", "HTML", "CSS"],
    githubUrl: "https://github.com/maheshkirde7774",
    liveUrl: undefined,
    featured: true,
    accentColor: "from-cyan-500/20 to-blue-500/10",
  },
];
