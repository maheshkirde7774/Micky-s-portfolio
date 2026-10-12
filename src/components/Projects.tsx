"use client";

import React from "react";
import {
  ExternalLink,
  Sparkles,
  FolderGit2,
  CheckCircle2,
  Dumbbell,
  ClipboardCheck,
  Bot,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";
import { Github } from "@/components/icons/SocialIcons";
import { projectsData } from "@/data/projects";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const projectIcons: Record<string, React.ElementType> = {
  "gym-management-system": Dumbbell,
  "smart-attendance-system": ClipboardCheck,
  "codealpha-chatbot": Bot,
};

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="py-20 relative overflow-hidden"
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
            Software Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Practical software applications and projects developed with verified technologies and clear implementation scopes.
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Staggered Project Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => {
            const Icon = projectIcons[project.id] || FolderGit2;
            return (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800 hover:border-blue-500/40 transition-colors"
              >
                <div>
                  {/* Visual Header / Tech Mockup Graphic with subtle hover zoom */}
                  <div className="relative h-44 bg-gradient-to-br from-slate-900 via-[#0B0F19] to-[#070A12] border-b border-slate-800 p-5 flex flex-col justify-between overflow-hidden">
                    {/* Ambient glow accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />

                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800/90 text-blue-400 border border-slate-700/60">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Stylized Project Title in Header */}
                    <div className="z-10 transition-transform duration-300 group-hover:translate-x-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Mahesh Ram Kirde • Project Showcase
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed min-h-[58px]">
                      {project.description}
                    </p>

                    {/* Detailed Highlights */}
                    {project.detailedPoints && (
                      <div className="space-y-1.5 pt-1">
                        {project.detailedPoints.slice(0, 3).map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technology Tags */}
                    <div className="pt-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-2">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.15 }}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-blue-950/40 text-blue-300 border border-blue-500/20 transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons with Micro-interactions */}
                <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                  {project.githubUrl ? (
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </motion.a>
                  ) : (
                    <span className="text-[11px] text-slate-500 italic">
                      Repo on request
                    </span>
                  )}

                  {project.liveUrl ? (
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-md shadow-blue-600/20"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  ) : (
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <Info className="w-3 h-3 text-slate-600" />
                      Academic / Local build
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
