export interface SkillItem {
  name: string;
  category: string;
  badge?: string;
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core programming paradigms, algorithms, and computational logic",
    skills: [
      { name: "Python", category: "Programming" },
      { name: "C", category: "Programming" },
      { name: "C++", category: "Programming" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Designing responsive, structured, and modern web interfaces",
    skills: [
      { name: "HTML", category: "Frontend" },
      { name: "CSS", category: "Frontend" },
      { name: "JavaScript", category: "Frontend" },
      { name: "React.js", category: "Frontend" },
    ],
  },
  {
    title: "Backend Development",
    description: "Server-side routing, API development, and logic handling",
    skills: [
      { name: "Flask", category: "Backend" },
    ],
  },
  {
    title: "Database",
    description: "Relational data structuring, querying, and database management",
    skills: [
      { name: "SQL", category: "Database" },
      { name: "DBMS", category: "Database" },
    ],
  },
  {
    title: "Development Tools",
    description: "Version control, collaboration workflows, and source tracking",
    skills: [
      { name: "Git", category: "Tools" },
      { name: "GitHub", category: "Tools" },
    ],
  },
];
