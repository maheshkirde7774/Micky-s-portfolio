"use client";

import React from "react";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const categoryIcons: Record<string, React.ElementType> = {
  "Programming Languages": Terminal,
  "Frontend Development": Layout,
  "Backend Development": Server,
  Database: Database,
  "Development Tools": Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills Section"
      className="py-20 relative overflow-hidden bg-[#070A12]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Practical programming languages, web technologies, database concepts, and developer tooling.
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Staggered Skills Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Code2;
            return (
              <motion.div
                key={category.title}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group transition-colors"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-slate-500">
                        {category.skills.length} verified technologies
                      </span>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Badges with subtle hover reaction */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.15 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-medium hover:border-blue-500/50 hover:bg-slate-800 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Category: {category.title}</span>
                  <span className="text-blue-400/80 font-mono text-[10px]">Active Stack</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
