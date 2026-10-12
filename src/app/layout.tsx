import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mahesh Ram Kirde | AI & Data Science Student & Software Developer",
  description:
    "Official portfolio of Mahesh Ram Kirde — Third-year B.Tech student in Artificial Intelligence & Data Science at JNEC, MGM University. Software developer exploring practical web and intelligent systems.",
  keywords: [
    "Mahesh Ram Kirde",
    "Mahesh Kirde",
    "Software Developer",
    "AI & Data Science",
    "JNEC",
    "MGM University",
    "Portfolio",
    "React",
    "Python",
  ],
  authors: [{ name: "Mahesh Ram Kirde" }],
  creator: "Mahesh Ram Kirde",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maheshkirde.dev",
    title: "Mahesh Ram Kirde | AI & Data Science Student & Software Developer",
    description:
      "Official portfolio of Mahesh Ram Kirde — Third-year B.Tech student in Artificial Intelligence & Data Science at JNEC, MGM University.",
    siteName: "Mahesh Ram Kirde Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh Ram Kirde | Portfolio",
    description:
      "AI & Data Science Student | Software Developer at MGM University (JNEC).",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-[#070A12] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
