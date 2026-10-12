"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Copy,
  Check,
  Send,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
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
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            I&apos;m open to connecting with developers, learning from new opportunities, and discussing interesting projects.
          </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          
          {/* Email Direct Contact Card */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800 hover:border-blue-500/50 transition-colors duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
                  Primary Contact
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Email Address
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                Send an email directly or copy the address to your clipboard.
              </p>
              <p className="text-sm font-semibold text-slate-200 select-all font-mono break-all bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                {profileData.email}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-slate-800/80 mt-6">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${profileData.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Phone Contact Card */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800 hover:border-blue-500/50 transition-colors duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">
                  Phone & WhatsApp
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Phone Number
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                Call directly or reach out on messaging platforms.
              </p>
              <p className="text-sm font-semibold text-slate-200 select-all font-mono bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                {profileData.phone}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-slate-800/80 mt-6">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call Directly</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyPhone}
                aria-label="Copy phone number to clipboard"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Social Profiles Bento Card */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-2 glass-card rounded-2xl p-6 sm:p-7 border border-slate-800"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-base font-bold text-white">
                  Developer & Professional Networks
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Explore code repositories, academic profiles, and professional network presence.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{profileData.location}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub Link */}
              <motion.a
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mahesh's GitHub Profile (opens in new tab)"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 group-hover:text-blue-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      GitHub
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      maheshkirde7774
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              {/* LinkedIn Link */}
              <motion.a
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mahesh's LinkedIn Profile (opens in new tab)"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 group-hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      LinkedIn
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      mahesh-kirde-082b31334
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
