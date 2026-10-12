"use client";

import React from "react";
import {
  GraduationCap,
  Building2,
  Calendar,
  Award,
  BookOpen,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { fadeInUp, fadeInScale } from "@/lib/animations";

export default function Education() {
  const highlights = [
    "Artificial Intelligence and Machine Learning Fundamentals",
    "Data Science and Statistical Analysis",
    "Data Structures & Object-Oriented Programming (Python, C, C++)",
    "Database Management Systems & Structured Query Language (SQL)",
    "Web Application Architecture & Development",
  ];

  return (
    <section
      id="education"
      aria-label="Education Section"
      className="py-20 relative overflow-hidden"
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
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Formal undergraduate engineering studies in Artificial Intelligence & Data Science at MGM University.
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Education Timeline / Bento Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 hover:border-blue-500/40 transition-colors duration-300 relative overflow-hidden"
          >
            {/* Subtle glow in corner */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar with Degree and Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                    Undergraduate Degree Program
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                    {profileData.education.degree}
                  </h3>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-sm shadow-sm">
                <Award className="w-4 h-4" />
                <span>CGPA: {profileData.education.cgpa}</span>
              </div>
            </div>

            {/* Institutional Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-slate-800">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    College
                  </span>
                  <span className="text-xs font-semibold text-slate-200">
                    {profileData.education.college}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    University
                  </span>
                  <span className="text-xs font-semibold text-slate-200">
                    {profileData.education.university}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    Academic Standing
                  </span>
                  <span className="text-xs font-semibold text-slate-200">
                    Current Year: {profileData.education.currentYear}
                  </span>
                </div>
              </div>
            </div>

            {/* Coursework & Learning Pillars */}
            <div className="pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Location & Academic Focus Areas
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Campus Location: <strong className="text-slate-300">{profileData.location}</strong>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4, transition: { duration: 0.15 } }}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60 text-xs text-slate-300 hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
