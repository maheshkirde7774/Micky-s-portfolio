"use client";

import React, { useState } from "react";
import {
  Award,
  Sparkles,
  Eye,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { certificatesData, CertificateItem } from "@/data/certificates";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import CertificateModal from "./CertificateModal";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  return (
    <section
      id="certificates"
      aria-label="Certificates & Hackathons Section"
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
            Accreditations & Competitions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Hackathons
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Industry simulation programs and competitive hackathons demonstrating applied problem-solving and software innovation.
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Certificate Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {certificatesData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group border border-slate-800 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div>
                {/* Header Bar */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                        {cert.organization}
                      </span>
                      <span className="block text-[11px] text-slate-400">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Competency Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skillsHighlighted.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-blue-500/40 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-blue-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: View Certificate */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Recipient: Mahesh Ram Kirde
                </span>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View Certificate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Lightbox / Modal */}
      <CertificateModal
        key={activeCert?.id || "modal"}
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}
