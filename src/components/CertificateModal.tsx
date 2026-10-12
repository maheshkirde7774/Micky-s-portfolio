"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, Award, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CertificateItem } from "@/data/certificates";
import { modalBackdrop, modalContent } from "@/lib/animations";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl bg-[#0D1322] border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-blue-400">
                    {certificate.organization}
                  </span>
                  <h3 id="cert-modal-title" className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    {certificate.title}
                  </h3>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                aria-label="Close certificate preview"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto my-4 space-y-6 pr-1 custom-scrollbar">
              {/* Certificate Image or Professional Placeholder */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
                {certificate.imagePath && !imageError ? (
                  <Image
                    src={certificate.imagePath}
                    alt={certificate.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain"
                    onError={() => setImageError(true)}
                  />
                ) : null}

                {(!certificate.imagePath || imageError) && (
                  <div className="p-6 text-center max-w-md flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center mb-4 text-blue-400 shadow-inner">
                      <Award className="w-8 h-8" />
                    </div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      Verified Credential Record
                    </h4>
                    <p className="text-slate-400 text-sm mb-4">
                      Issued to <strong className="text-slate-200">Mahesh Ram Kirde</strong> by{" "}
                      <strong className="text-slate-200">{certificate.organization}</strong>
                    </p>
                    <div className="w-full bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-xs text-slate-400 flex items-start gap-2 text-left">
                      <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        To view the certificate image document, place your certificate file at:
                        <code className="block mt-1 font-mono text-blue-300 break-all">
                          public{certificate.imagePath || `/images/certificates/${certificate.id}.jpg`}
                        </code>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Credential Summary
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {certificate.description}
                </p>
              </div>

              {/* Competencies Highlighted */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                  Competencies & Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certificate.skillsHighlighted.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Participant: Mahesh Ram Kirde
              </span>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
              >
                Close Preview
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
