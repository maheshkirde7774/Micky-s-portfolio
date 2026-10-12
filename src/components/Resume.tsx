"use client";

import React from "react";
import {
  FileText,
  Download,
  Eye,
  AlertCircle,
  Sparkles,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { fadeInUp, fadeInScale } from "@/lib/animations";

interface ResumeProps {
  onOpenResume: () => void;
}

export default function Resume({ onOpenResume }: ResumeProps) {
  return (
    <section
      id="resume"
      aria-label="Resume Section"
      className="py-20 relative overflow-hidden bg-[#070A12]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curriculum Vitae
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Resume
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Explore my education, technical skills, projects, and certifications.
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main Resume Card Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden hover:border-slate-700 transition-colors"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/30">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Official Document
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    Mahesh Ram Kirde — Professional Resume
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Standard A4 Format • Updated with verified academic & project details
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>Preview Resume</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={profileData.resumePath}
                  download="Mahesh_Ram_Kirde_Resume_A4.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </div>

            {/* Quick Summary Highlights inside Resume Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-b border-slate-800">
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-blue-400 mb-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Education</span>
                </div>
                <p className="text-xs text-slate-300 font-semibold">B.Tech in AI & DS</p>
                <p className="text-[11px] text-slate-400">JNEC, MGM University (8.0 CGPA)</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-blue-400 mb-1.5">
                  <Code2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Languages</span>
                </div>
                <p className="text-xs text-slate-300 font-semibold">Python, C, C++</p>
                <p className="text-[11px] text-slate-400">Data structures & logic</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-blue-400 mb-1.5">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Web & Data</span>
                </div>
                <p className="text-xs text-slate-300 font-semibold">React.js, Flask, SQL</p>
                <p className="text-[11px] text-slate-400">Full stack & database</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-blue-400 mb-1.5">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Credentials</span>
                </div>
                <p className="text-xs text-slate-300 font-semibold">4 Certifications</p>
                <p className="text-[11px] text-slate-400">Tata, Forage, FlutterFlow, GDG</p>
              </motion.div>
            </div>

            {/* Resume File Guidance Notice */}
            <div className="pt-6 flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400">
              <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium text-slate-300">
                  Document Configuration Notice:
                </p>
                <p className="leading-relaxed">
                  The resume download link is wired to serve the official file directly from{" "}
                  <code className="text-blue-300 font-mono">public/resume/Mahesh_Ram_Kirde_Resume_A4.pdf</code>.
                  You can drop your latest printed PDF resume into this folder at any time.
                </p>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
