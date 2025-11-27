"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-10 text-lg font-semibold text-slate-50 sm:text-xl">
          Contact
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT CARD — Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-slate-400">
              Work with me
            </p>

            <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-50">
              Let’s build something useful with AI.
            </h3>

            <p className="mt-3 text-sm text-slate-300">
              I work across deep learning, NLP, computer vision, and full-stack
              integration to take ideas from prototype to production.  
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Whether it's an LLM feature, ML pipeline, or a complete AI-powered
              product — I'm open to roles and collaborations.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:sathwikreddykatla@gmail.com"
                className="flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.5)] hover:bg-cyan-300"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/sathwikreddy018/"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-100"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href="https://github.com/Sathwikreddy018"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-100"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <a
              href="/Katla-Sathwik-Resume.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 text-[12px] text-slate-400 hover:text-cyan-300"
            >
              <FileDown className="h-3.5 w-3.5" />
              Download resume
            </a>
          </motion.div>

          {/* RIGHT CARD — Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-slate-400">
              Quick info
            </p>

            <ul className="mt-4 space-y-4 text-sm text-slate-300">
              <li>
                <span className="font-semibold text-slate-200">Location:</span>
                &nbsp;Hyderabad, India · open to remote roles
              </li>

              <li>
                <span className="font-semibold text-slate-200">Roles:</span>
                &nbsp;AI / ML Engineer, AI Full-Stack Developer, LLM Engineer
              </li>

              <li>
                <span className="font-semibold text-slate-200">Tech:</span>
                <br />
                Python, PyTorch, TensorFlow, Transformers, LangChain, FastAPI,
                Flask, React, Docker, MongoDB, MySQL
              </li>

              <li>
                <span className="font-semibold text-slate-200">
                  Best way to reach:
                </span>
                &nbsp;Email: sathwikreddykatla@gmail.com
              </li>

              <li className="text-xs text-slate-500">
                I usually reply within 12–24 hours.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
