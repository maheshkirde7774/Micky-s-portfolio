export interface ProfileData {
  fullName: string;
  shortName: string;
  initials: string;
  title: string;
  role1: string;
  role2: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  heroIntro: string;
  aboutText: string[];
  education: {
    degree: string;
    college: string;
    collegeShort: string;
    university: string;
    currentYear: string;
    cgpa: string;
  };
  resumePath: string;
}

export const profileData: ProfileData = {
  fullName: "Mahesh Ram Kirde",
  shortName: "Mahesh Kirde",
  initials: "MK",
  title: "AI & Data Science Student | Software Developer",
  role1: "AI & Data Science Student",
  role2: "Software Developer",
  location: "Chhatrapati Sambhajinagar, Maharashtra, India",
  email: "kirdemahesh@gmail.com",
  phone: "+91 7822884694",
  github: "https://github.com/maheshkirde7774",
  linkedin: "https://www.linkedin.com/in/mahesh-kirde-082b31334/",
  heroIntro:
    "I enjoy building practical software applications, exploring technology, and developing solutions that combine programming and modern web development.",
  aboutText: [
    "I'm Mahesh Ram Kirde, a third-year B.Tech student studying Artificial Intelligence and Data Science at Jawaharlal Nehru Engineering College, MGM University.",
    "I am interested in software development, programming, web technologies, and building useful applications.",
    "I continue to strengthen my technical skills through academic learning and personal projects.",
  ],
  education: {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    college: "Jawaharlal Nehru Engineering College (JNEC)",
    collegeShort: "JNEC",
    university: "MGM University",
    currentYear: "Third Year",
    cgpa: "8.0",
  },
  resumePath: "/resume/Mahesh_Ram_Kirde_Resume_A4.pdf",
};
