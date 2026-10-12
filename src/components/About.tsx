"use client";

import React from "react";
import {
  User,
  GraduationCap,
  Building,
  School,
  Award,
  MapPin,
  Sparkles,
  BookOpen,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { fadeInUp, fadeInScale } from "@/lib/animations";

export default function About() {
  const infoItems = [
    {
      label: "Name",
      value: profileData.fullName,
      icon: User,
    },
    {
      label: "Education",
      value: "B.Tech AI & Data Science",
      icon: GraduationCap,
    },
    {
      label: "University",
      value: profileData.education.university,
      icon: School,
    },
    {
      label: "College",
      value: profileData.education.collegeShort,
      fullValue: profileData.education.college,
      icon: Building,
    },
    {
      label: "Current Year",
      value: profileData.education.currentYear,
      icon: BookOpen,
    },
    {
      label: "CGPA",
      value: profileData.education.cgpa,
      highlight: true,
      icon: Award,
    },
    {
      label: "Location",
      value: "Chhatrapati Sambhajinagar, Maharashtra",
      icon: MapPin,
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Section"
      className="py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Biography Text Column with Smooth Reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="lg:col-span-7 space-y-5"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Code className="w-5 h-5 text-blue-400" />
                Undergraduate Developer in AI & Data Science
              </h3>

              {profileData.aboutText.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Core Focus:
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Software Engineering
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Data Structures & Programming
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Full Stack Web Development
                </span>
              </div>
            </div>
          </motion.div>

          {/* Compact Information Card Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInScale}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-5 border border-slate-700/70">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">
                  Personal & Academic Details
                </h3>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold">
                  Verified Record
                </span>
              </div>

              <div className="space-y-3">
                {infoItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      whileHover={{ x: 3, transition: { duration: 0.15 } }}
                      className="flex items-start justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium text-slate-400">
                          {item.label}
                        </span>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-xs font-semibold ${
                            item.highlight
                              ? "text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20"
                              : "text-slate-100"
                          }`}
                        >
                          {item.value}
                        </span>
                        {item.fullValue && (
                          <span className="block text-[10px] text-slate-500">
                            {item.fullValue}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-2">
                <p className="text-[11px] text-slate-500 text-center">
                  Jawaharlal Nehru Engineering College • MGM University
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
