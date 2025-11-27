"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-lg font-semibold text-slate-50 sm:text-xl mb-6">
          About
        </h2>

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-sm text-slate-200"
        >
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mb-3">
            Who I am
          </p>
          <p className="mb-3 text-sm text-slate-200">
            I&apos;m Katla Sathwik, an AI/ML engineer who enjoys turning messy,
            real-world problems into clean systems. My work spans deep learning,
            NLP, computer vision, and the full stack required to ship those
            models into production.
          </p>
          <p className="mb-3 text-sm text-slate-200">
            I like projects where I own the pipeline: data, modelling, training,
            evaluation, and finally deployment behind an API or interface. I’ve
            worked on fake news detection, license plate recognition,
            plant-disease detection, EV demand forecasting, NLP recommenders,
            and AI-powered tools like email assistants.
          </p>
          <p className="text-sm text-slate-200">
            My goal is to join teams where I can build end-to-end AI features,
            collaborate with product and engineering, and continuously push my
            skills in model design, optimization, and scalable deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
