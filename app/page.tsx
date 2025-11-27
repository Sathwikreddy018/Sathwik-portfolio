"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";

import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export type SectionKey =
  | "home"
  | "about"
  | "projects"
  | "experience"
  | "skills"
  | "contact";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <Hero onViewProjects={() => setActiveSection("projects")} />
        );

      case "about":
        return (
          <section className="border-t border-slate-800 bg-slate-950/95">
            <AboutSection />
          </section>
        );

      case "projects":
        return (
          <section className="border-t border-slate-800 bg-slate-950/95">
            <ProjectsSection />
          </section>
        );

      case "experience":
        return (
          <section className="border-t border-slate-800 bg-slate-950/95">
            <ExperienceSection />
          </section>
        );

      case "skills":
        return (
          <section className="border-t border-slate-800 bg-slate-950/95">
            <SkillsSection />
          </section>
        );

      case "contact":
        return (
          <section className="border-t border-slate-800 bg-slate-950/95">
            <ContactSection />
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1">{renderSection()}</main>
    </div>
  );
}
