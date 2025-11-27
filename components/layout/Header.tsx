"use client";

import type { SectionKey } from "@/app/page";

type HeaderProps = {
  activeSection: SectionKey;
  onSectionChange?: (section: SectionKey) => void;
};

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const change = (section: SectionKey) => {
    if (onSectionChange) onSectionChange(section);
  };

  const base =
    "text-sm px-1 pb-1 border-b-2 border-transparent transition-colors";
  const active = "text-white border-cyan-400";
  const inactive = "text-slate-300 hover:text-white hover:border-slate-500";

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between border-b border-slate-800 bg-slate-950/90 px-6 py-4 backdrop-blur">
      <div className="text-sm font-semibold text-slate-100">
        Katla Sathwik
      </div>
      <nav className="flex gap-6">
        <button
          type="button"
          onClick={() => change("home")}
          className={`${base} ${
            activeSection === "home" ? active : inactive
          }`}
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => change("about")}
          className={`${base} ${
            activeSection === "about" ? active : inactive
          }`}
        >
          About
        </button>
        <button
          type="button"
          onClick={() => change("projects")}
          className={`${base} ${
            activeSection === "projects" ? active : inactive
          }`}
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() => change("experience")}
          className={`${base} ${
            activeSection === "experience" ? active : inactive
          }`}
        >
          Experience
        </button>
        <button
          type="button"
          onClick={() => change("skills")}
          className={`${base} ${
            activeSection === "skills" ? active : inactive
          }`}
        >
          Skills
        </button>
        <button
          type="button"
          onClick={() => change("contact")}
          className={`${base} ${
            activeSection === "contact" ? active : inactive
          }`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
