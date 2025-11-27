"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  onViewProjects?: () => void;
};

export default function Hero({ onViewProjects }: HeroProps) {
  return (
    <section className="relative h-[calc(100vh-64px)] w-full bg-black text-slate-50 overflow-hidden">
      {/* Full background image without cropping */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/sathwik-3d.png"
          alt="Katla Sathwik 3D portrait"
          fill
          className="object-contain scale-[1.3]" 
          priority
        />
      </div>

      {/* Soft dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 text-[11px] font-mono uppercase tracking-[0.22em] text-slate-300"
        >
          Katla Sathwik • AI / ML Engineer • Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
        >
          I build the quiet AI space —  
          <br />
          where function and clarity meet.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mt-4 max-w-xl text-sm text-slate-200 sm:text-base"
        >
          I design and ship deep learning, NLP, and computer vision systems
          that hide complexity behind simple, functional experiences.
        </motion.p>

        {onViewProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-7"
          >
            <button
              type="button"
              onClick={onViewProjects}
              className="rounded-full bg-cyan-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-[0_16px_45px_rgba(34,211,238,0.5)] hover:bg-cyan-300"
            >
              View featured projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
