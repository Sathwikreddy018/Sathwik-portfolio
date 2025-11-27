"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SkillArea = {
  id: string;
  label: string;
  level: number; // 0–1
  summary: string;
  description: string;
  bullets: string[];
};

const AREAS: SkillArea[] = [
  {
    id: "ai-ml",
    label: "AI / ML",
    level: 0.9,
    summary: "Deep learning, classical ML, end-to-end pipelines.",
    description:
      "From baselines to tuned architectures with real metrics and iteration loops.",
    bullets: [
      "PyTorch, TensorFlow, Keras",
      "CNNs, LSTMs, Transformers, encoder–decoder",
      "Classification, sequence modelling, detection, segmentation",
      "Experiment design, evaluation, and error analysis",
    ],
  },
  {
    id: "nlp",
    label: "NLP & LLMs",
    level: 0.85,
    summary: "Language understanding and LLM workflows.",
    description:
      "Using LLMs and classical NLP to build assistants, analysers and automations.",
    bullets: [
      "HuggingFace Transformers, LangChain",
      "Text classification, sentiment, semantic search",
      "Prompting, tools/agents, structured outputs",
      "LLM integration with APIs and products",
    ],
  },
  {
    id: "cv",
    label: "Computer Vision",
    level: 0.82,
    summary: "Real-time and image-based understanding.",
    description:
      "From preprocessing pipelines to real-time inference for ALPR, plants, and gestures.",
    bullets: [
      "OpenCV pipelines, augmentation & preprocessing",
      "ALPR, plant disease detection, sign/gesture detection",
      "MediaPipe pose estimation, CNN + LSTM pipelines",
      "Optimisation for edge/mobile (TFLite, quantization – in progress)",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    level: 0.76,
    summary: "APIs that expose models cleanly.",
    description:
      "Taking models out of notebooks and serving them reliably to frontends and services.",
    bullets: [
      "Python, FastAPI, Flask, Node.js/Express",
      "REST APIs, JWT auth, basic rate limiting",
      "MySQL, PostgreSQL, MongoDB, Firebase",
      "React + TypeScript + Tailwind for UIs",
    ],
  },
  {
    id: "infra",
    label: "Data & Infra",
    level: 0.7,
    summary: "Data handling, environments, and delivery.",
    description:
      "Keeping experiments reproducible, data clean, and deployments maintainable.",
    bullets: [
      "Pandas, NumPy, feature engineering & EDA",
      "Matplotlib, Seaborn for analysis & debugging",
      "Docker, virtual envs, basic CI/CD awareness",
      "Git, GitHub, Linux, VS Code",
    ],
  },
];

export default function SkillsSection() {
  const [activeId, setActiveId] = useState<string>("ai-ml");
  const active = AREAS.find((a) => a.id === activeId) ?? AREAS[0];

  return (
    <section
      id="skills"
      className="border-t border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Skill Radar
            </h2>
            <p className="text-xs text-slate-400 sm:text-sm">
              A quick map of where I&apos;m strongest across AI, product, and
              engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
            <span className="rounded-full border border-slate-700 px-3 py-1">
              Deep Learning · NLP · CV
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              PyTorch · TensorFlow · LangChain
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              FastAPI · React · Docker
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
          {/* Left: radar */}
          <Radar
            areas={AREAS}
            activeId={activeId}
            onActiveChange={setActiveId}
          />

          {/* Right: active area details */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-400">
              Area focus
            </p>
            <h3 className="mt-2 text-sm font-semibold text-slate-50">
              {active.label}
            </h3>
            <p className="mt-1 text-[11px] text-cyan-200">{active.summary}</p>
            <p className="mt-2 text-xs text-slate-300">{active.description}</p>

            <div className="mt-5 grid gap-3 text-xs text-slate-200 sm:grid-cols-2">
              {active.bullets.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2"
                >
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] text-slate-500">
              These are based on real work across projects like CareerForge,
              PlantDoc, ALPR, Digital Detox Hub, EV forecasting, and my
              FastAPI&nbsp;+ React starter — not just tutorial code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Radar component */

type RadarProps = {
  areas: SkillArea[];
  activeId: string;
  onActiveChange: (id: string) => void;
};

function Radar({ areas, activeId, onActiveChange }: RadarProps) {
  const maxRadius = 40; // percentage of container from center

  return (
    <div className="flex flex-col gap-4">
      <div className="relative mx-auto h-64 w-64 rounded-full border border-slate-800 bg-slate-950/70 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
        {/* concentric rings */}
        <div className="absolute inset-3 rounded-full border border-slate-800" />
        <div className="absolute inset-8 rounded-full border border-slate-900" />

        {/* center label */}
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-slate-950/90 text-center text-[10px] text-slate-400 border border-slate-700">
          <span className="font-mono uppercase tracking-[0.16em]">
            Focus
          </span>
        </div>

        {/* spokes + nodes */}
        {areas.map((area, i) => {
          const angle = (i / areas.length) * Math.PI * 2 - Math.PI / 2; // start at top
          const radius = maxRadius * area.level;

          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);

          const isActive = area.id === activeId;

          return (
            <RadarNode
              key={area.id}
              x={x}
              y={y}
              angle={angle}
              label={area.label}
              level={area.level}
              isActive={isActive}
              onClick={() => onActiveChange(area.id)}
            />
          );
        })}
      </div>

      {/* mini legend */}
      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
        {areas.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => onActiveChange(a.id)}
            className={`flex items-center gap-2 rounded-full border px-2 py-1 text-left ${
              a.id === activeId
                ? "border-cyan-400/70 bg-cyan-500/10 text-cyan-100"
                : "border-slate-800 bg-slate-900/80 hover:border-cyan-400/60 hover:text-cyan-100"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

type RadarNodeProps = {
  x: number;
  y: number;
  angle: number;
  label: string;
  level: number;
  isActive: boolean;
  onClick: () => void;
};

function RadarNode({
  x,
  y,
  angle,
  label,
  level,
  isActive,
  onClick,
}: RadarNodeProps) {
  return (
    <>
      {/* spoke line */}
      <div
        className="absolute left-1/2 top-1/2 h-1 w-1 origin-[0_50%] border-t border-slate-800"
        style={{
          transform: `rotate(${angle}rad) scaleX(${0.8 * level + 0.3})`,
        }}
      />

      {/* node */}
      <motion.button
        type="button"
        onClick={onClick}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.12 }}
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-2 py-1 text-[10px] font-medium ${
          isActive
            ? "border-cyan-400 bg-cyan-500/20 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
            : "border-slate-700 bg-slate-900/90 text-slate-200 hover:border-cyan-400 hover:text-cyan-100"
        }`}
        style={{ left: `${x}%`, top: `${y}%` }}
      >
        {label}
      </motion.button>
    </>
  );
}
