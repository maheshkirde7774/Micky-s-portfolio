"use client";

import React, { useEffect } from "react";
import {
  X,
  Download,
  Printer,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Mail,
  Phone,
  MapPin,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { certificatesData } from "@/data/certificates";
import { modalBackdrop, modalContent } from "@/lib/animations";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="resume-modal-backdrop"
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            key="resume-modal-content"
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl bg-[#0B0F19] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0E1526]/80">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="resume-modal-title" className="text-base sm:text-lg font-bold text-white">
                    Resume Preview — Mahesh Ram Kirde
                  </h3>
                  <p className="text-xs text-slate-400">
                    Verified Academic & Technical Credentials
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => window.print()}
                  aria-label="Print resume preview"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                >
                  <Printer className="w-4 h-4 text-slate-400" />
                  Print
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={profileData.resumePath}
                  download="Mahesh_Ram_Kirde_Resume_A4.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Notice Banner */}
            <div className="bg-blue-950/40 border-b border-blue-500/20 px-6 py-2.5 flex items-start sm:items-center gap-2.5 text-xs text-blue-200/90">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 sm:mt-0" />
              <span>
                The official A4 PDF is configured at{" "}
                <code className="text-blue-300 font-mono">public/resume/Mahesh_Ram_Kirde_Resume_A4.pdf</code>.
                Placing your PDF file in this directory enables direct file downloading.
              </span>
            </div>

            {/* Resume Sheet Content */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090D16] text-slate-200 font-sans">
              {/* Header */}
              <div className="border-b border-slate-800 pb-6 text-center sm:text-left sm:flex sm:items-start sm:justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {profileData.fullName}
                  </h1>
                  <p className="text-sm font-medium text-blue-400 mt-1">
                    {profileData.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 max-w-xl">
                    {profileData.heroIntro}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 flex flex-col items-center sm:items-end text-xs text-slate-400 space-y-1.5">
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    {profileData.email}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    {profileData.phone}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {profileData.location}
                  </span>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-800">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                    Education
                  </h2>
                </div>
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-sm font-semibold text-white">
                      {profileData.education.degree}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 font-medium self-start sm:self-auto">
                      CGPA: {profileData.education.cgpa}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {profileData.education.college} | {profileData.education.university}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                    <span>Year: <strong className="text-slate-300">{profileData.education.currentYear}</strong></span>
                    <span>•</span>
                    <span>Location: {profileData.location}</span>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-800">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                    Technical Skills
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skillCategories.map((cat) => (
                    <div
                      key={cat.title}
                      className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5"
                    >
                      <h3 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
                        {cat.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((s) => (
                          <span
                            key={s.name}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/60"
                          >
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-800">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                    Academic & Practical Projects
                  </h2>
                </div>
                <div className="space-y-3.5">
                  {projectsData.map((proj) => (
                    <div
                      key={proj.id}
                      className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-semibold text-white">
                          {proj.title}
                        </h3>
                        <span className="text-xs text-slate-400">{proj.category}</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        {proj.description}
                      </p>
                      {proj.detailedPoints && (
                        <ul className="mt-2 space-y-1">
                          {proj.detailedPoints.map((pt, idx) => (
                            <li key={idx} className="text-xs text-slate-400 flex items-start gap-1.5">
                              <span className="text-blue-400 mt-0.5">•</span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-slate-800/60">
                        {proj.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-800">
                  <Award className="w-4 h-4 text-blue-400" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                    Certifications & Hackathons
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certificatesData.map((c) => (
                    <div
                      key={c.id}
                      className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5"
                    >
                      <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                        {c.organization}
                      </span>
                      <h3 className="text-xs font-semibold text-white mt-0.5">
                        {c.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-800 bg-[#0E1526]/80">
              <span className="text-xs text-slate-400">
                Target PDF: <code className="text-blue-400 font-mono">public{profileData.resumePath}</code>
              </span>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
