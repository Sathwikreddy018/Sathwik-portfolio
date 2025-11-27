"use client";

import { useState } from "react";

type StepId = "btech" | "bootcamp" | "internship";

type Step = {
  id: StepId;
  label: string;       // short label used on the left (ECE, MIT, etc.)
  yearLabel: string;   // date / period
  title: string;
  period: string;
  description: string;
};

const STEPS: Step[] = [
  {
    id: "btech",
    label: "ECE",
    yearLabel: "Dec 2021 – Jun 2025",
    title: "BTech · Electronics and Communication Engineering",
    period: "Vaagdevi Engineering College · CGPA 7.5 / 10 · Warangal, India",
    description:
      "Built a strong electronics and communication base while shifting focus into applied AI/ML and embedded systems. Worked on projects that connected signal processing, hardware constraints, and deep learning deployment.",
  },
  {
    id: "bootcamp",
    label: "MIT",
    yearLabel: "Deep Learning Bootcamp",
    title: "Deep Learning Bootcamp · MIT",
    period: "Intensive program in advanced deep learning",
    description:
      "Attended MIT’s deep learning bootcamp with hands-on labs for CNNs, RNNs, GANs, LLMs and RL. Implemented projects like music generation, facial detection, and LLM fine-tuning, focusing on how to take models from notebooks to usable systems.",
  },
  {
    id: "internship",
    label: "Intern · 2025",
    yearLabel: "Mar 2025 – Jun 2025",
    title: "AI/ML Intern · Brainwave Matrix",
    period: "Fake News Detection System",
    description:
      "Developed an AI-powered fake news detection system using TF-IDF features, classical ML models and LSTMs. Deployed the model as a Flask web app so users can perform real-time news authenticity checks with 90%+ accuracy.",
  },
];

export default function ExperienceSection() {
  const [activeId, setActiveId] = useState<StepId | null>(null);
  const activeStep = STEPS.find((s) => s.id === activeId) ?? null;

  return (
    <section
      id="experience"
      className="border-b border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Experience Roadmap
          </h2>
          <p className="text-xs text-slate-400 sm:text-sm">
            Click on a step (ECE, MIT, Internship) to see what I actually did
            there. Nothing opens until the user chooses a point on the roadmap.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:items-start">
          {/* Left: roadmap / clickable steps */}
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-400">
              Roadmap
            </p>

            <div className="relative pl-4">
              {/* Vertical line */}
              <div className="absolute left-[6px] top-0 h-full w-px bg-slate-800">
                <div className="h-full w-full bg-gradient-to-b from-cyan-500/40 via-cyan-400/10 to-indigo-500/40 opacity-60 blur-sm" />
              </div>

              <div className="space-y-4">
                {STEPS.map((step) => {
                  const isActive = step.id === activeId;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveId(step.id)}
                      className={[
                        "relative w-full text-left rounded-xl px-4 py-3 transition",
                        isActive
                          ? "bg-cyan-500/10 border border-cyan-400/70 shadow-[0_0_22px_rgba(34,211,238,0.4)]"
                          : "bg-transparent border border-transparent hover:border-slate-600 hover:bg-slate-900",
                      ].join(" ")}
                    >
                      {/* Node on the line */}
                      <div className="absolute -left-[14px] top-4 h-3 w-3 rounded-full border border-cyan-400 bg-slate-950 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

                      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500">
                        {step.label}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-50">
                        {step.title}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        {step.yearLabel}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: detail panel (only shows after click) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-300 min-h-[200px] flex flex-col justify-center">
            {!activeStep && (
              <p className="text-xs text-slate-400">
                Select a step on the roadmap on the left — for example, click{" "}
                <span className="font-semibold text-slate-200">ECE</span> to see
                what I did during my engineering, then explore the MIT
                bootcamp and my AI/ML internship.
              </p>
            )}

            {activeStep && (
              <>
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-400">
                  {activeStep.yearLabel}
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  {activeStep.title}
                </h3>
                <p className="mt-1 text-[11px] text-slate-400">
                  {activeStep.period}
                </p>
                <p className="mt-3 text-xs text-slate-300">
                  {activeStep.description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
