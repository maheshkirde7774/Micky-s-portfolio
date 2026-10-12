"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Mail,
  Sparkles,
  MapPin,
  GraduationCap,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting with slow smooth movement */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [15, -15, 15],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none"
      />
      <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Staggered Introduction & Call-to-actions */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status / Greeting Badge */}
            <motion.div variants={staggerItem}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-300">
                  Third Year B.Tech • JNEC MGM University
                </span>
              </div>
            </motion.div>

            {/* Main Greeting & Name with smooth fade-in */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="text-sm sm:text-base font-medium text-blue-400 tracking-wide uppercase">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                MAHESH RAM KIRDE
              </h1>
            </motion.div>

            {/* Professional Titles */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs sm:text-sm font-semibold text-blue-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                {profileData.role1}
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs sm:text-sm font-semibold text-cyan-300">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                {profileData.role2}
              </span>
            </motion.div>

            {/* Introduction Statement with slight upward motion */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              &ldquo;{profileData.heroIntro}&rdquo;
            </motion.p>

            {/* Quick Key Facts */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Chhatrapati Sambhajinagar
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                CGPA: 8.0
              </span>
            </motion.div>

            {/* Primary Action Buttons with hover and tap effects */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Social & Contact Links */}
            <motion.div
              variants={staggerItem}
              className="pt-2 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mr-1">
                Connect:
              </span>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-900/30 text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (opens in new tab)"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-900/30 text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${profileData.email}`}
                aria-label="Send email to Mahesh"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-900/30 text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Column: Profile Visual Frame with Subtle Scale & Animated Glow */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96"
            >
              {/* Outer animated pulsing glowing aura */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/30 to-cyan-500/25 blur-xl -rotate-3"
              />
              <div className="absolute inset-0 rounded-3xl border border-blue-500/30 bg-[#0B0F19]/80 backdrop-blur-md rotate-2" />

              {/* Floating decorative badge 1 */}
              <motion.div
                animate={{ y: [-4, 5, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl text-xs font-semibold text-blue-300 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                AI & Data Science
              </motion.div>

              {/* Floating decorative badge 2 */}
              <motion.div
                animate={{ y: [4, -5, 4] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl text-xs font-semibold text-emerald-300 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                CGPA 8.0 • JNEC
              </motion.div>

              {/* Main Card Frame with gentle float */}
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-3xl bg-[#0E1526] border border-slate-700/80 p-3 shadow-2xl flex flex-col justify-between overflow-hidden"
              >
                {/* Photo or Professional Monogram Placeholder */}
                <div className="relative w-full h-[76%] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-[#070A12] border border-slate-800 flex items-center justify-center">
                  {!imgError ? (
                    <Image
                      src="/images/profile.jpg"
                      alt="Mahesh Ram Kirde"
                      fill
                      priority
                      sizes="(max-width: 768px) 300px, 380px"
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      onError={() => setImgError(true)}
                    />
                  ) : null}

                  {imgError && (
                    <div className="flex flex-col items-center justify-center text-center p-4">
                      {/* Geometric Monogram Avatar with animated subtle pulse */}
                      <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/30 border border-blue-400/40 mb-3"
                      >
                        <span className="text-3xl font-black text-white tracking-widest">
                          MK
                        </span>
                      </motion.div>
                      <span className="text-sm font-bold text-white tracking-wide">
                        Mahesh Ram Kirde
                      </span>
                      <span className="text-xs text-blue-400 font-medium mt-0.5">
                        AI & Data Science • Software Developer
                      </span>
                      <span className="text-[11px] text-slate-500 mt-2">
                        Add photo at <code className="text-slate-400 font-mono">public/images/profile.jpg</code>
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Card Summary Info */}
                <div className="h-[22%] flex items-center justify-between px-3 py-1 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white">
                      Mahesh Kirde
                    </span>
                    <span className="text-[11px] text-slate-400">
                      MGM University (JNEC)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-blue-400">
                      B.Tech AI & DS
                    </span>
                    <span className="block text-[11px] text-emerald-400 font-medium">
                      CGPA: 8.0
                    </span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
