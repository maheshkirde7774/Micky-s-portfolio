"use client";

import React, { useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#070A12] text-slate-100 flex flex-col selection:bg-blue-500/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenResume={openResumeModal} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenResume={openResumeModal} />

        {/* Section Divider */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-800/60" />
        </div>

        {/* About Section */}
        <About />

        {/* Section Divider */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-800/60" />
        </div>

        {/* Skills Section */}
        <Skills />

        {/* Section Divider */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-800/60" />
        </div>

        {/* Projects Section */}
        <Projects />

        {/* Section Divider */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-800/60" />
        </div>

        {/* Certificates Section */}
        <Certificates />

        {/* Section Divider */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-800/60" />
        </div>

        {/* Education Section */}
        <Education />

        {/* Section Divider */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-800/60" />
        </div>

        {/* Resume Section */}
        <Resume onOpenResume={openResumeModal} />

        {/* Section Divider */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-800/60" />
        </div>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Resume Lightbox Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </div>
    </MotionConfig>
  );
}
