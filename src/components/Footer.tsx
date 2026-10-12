"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentYear(new Date().getFullYear());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Attribution */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <Link
              href="#home"
              className="text-sm font-bold tracking-wider text-white hover:text-blue-400 transition-colors uppercase"
            >
              MAHESH RAM KIRDE
            </Link>
            <p className="text-xs text-slate-400">
              © {currentYear} Mahesh Ram Kirde. Built with care.
            </p>
          </div>

          {/* Quick Section Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <Link href="#home" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>•</span>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <span>•</span>
            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <span>•</span>
            <Link href="#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <span>•</span>
            <Link href="#certificates" className="hover:text-white transition-colors">
              Certificates
            </Link>
            <span>•</span>
            <Link href="#education" className="hover:text-white transition-colors">
              Education
            </Link>
            <span>•</span>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${profileData.email}`}
              aria-label="Email Mahesh"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </motion.a>

            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="p-2 rounded-lg bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
}
