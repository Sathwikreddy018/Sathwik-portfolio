"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: string;
  title: string;
  role: string;
  tag: string;
  timeframe: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string;
  github?: string;
  live?: string;
};

const PROJECTS: Project[] = [
  {
    id: "careerforge",
    title: "CareerForge – AI-Powered Career Platform",
    role: "Creator · Full-Stack + AI",
    tag: "LLMs · NLP · Product",
    timeframe: "Personal Project",
    problem:
      "Job seekers waste time on generic applications and struggle to align their profiles with the right roles.",
    solution:
      "Built an AI platform that parses resumes, matches them with relevant jobs, and generates tailored roadmaps and application material using transformer-based models.",
    impact:
      "Improved relevance of job suggestions and automated parts of the application workflow using modular LLM pipelines.",
    tech: "Python, PyTorch, TensorFlow, HuggingFace, React, Node.js, Flask, MongoDB, Docker, ONNX ",
    github: "https://github.com/Sathwikreddy018/forge-your-future-now",
  },
  {
    id: "plantdoc",
    title: "PlantDoc – Plant Disease Detection",
    role: "Lead · Computer Vision",
    tag: "Computer Vision · Edge AI",
    timeframe: "Major Project",
    problem:
      "Farmers often detect diseases late, leading to preventable crop loss and low yield.",
    solution:
      "Trained CNN-based models on leaf images and integrated them into a mobile-friendly pipeline for real-time disease classification.",
    impact:
      "Achieved 95%+ accuracy on disease classes and prepared the model for deployment on constrained devices.",
    tech: "Python, TensorFlow/Keras, OpenCV, Flask, Flutter, Docker, ONNX (planned)",
    github: "https://github.com/Sathwikreddy018/Plant_Disease_Detection",
  },
  {
    id: "fake-news",
    title: "Fake News Detection System",
    role: "AI/ML Intern · Brainwave Matrix",
    tag: "NLP · Classical ML",
    timeframe: "Internship Project",
    problem:
      "Users struggle to identify misinformation quickly across large volumes of news content.",
    solution:
      "Implemented ML and deep learning models using TF-IDF, sentiment features, and LSTMs to classify news as real or fake, exposed via a Flask web app.",
    impact:
      "Achieved 90%+ classification accuracy and provided a usable tool for real-time news authenticity checks.",
    tech: "Python, scikit-learn, TensorFlow, TF-IDF, Sentiment Analysis, Flask",
    github: "https://github.com/Sathwikreddy018/Fake-News-Detection",
  },
  {
  id: "sign-language-action-detection",
  title: "Sign Language Action Detection",
  role: "Lead · Computer Vision",
  tag: "CV · Gesture Recognition",
  timeframe: "Academic Project",
  problem:
    "Individuals with hearing or speech impairments face communication barriers when interacting with people unfamiliar with sign language.",
  solution:
    "Trained deep learning models on video-based hand gestures to recognize and classify sign language actions in real time.",
  impact:
    "Improved gesture-to-text translation accuracy, enabling more accessible communication support.",
  tech: "Python, OpenCV, Mediapipe/Keypoint Tracking, CNN/LSTM, TensorFlow/PyTorch, Flask/Streamlit",
  github: "https://github.com/Sathwikreddy018/Sign-Language-Action-Detection",
},
{
  id: "bargainbot",
  title: "BargainBot – E-commerce Negotiation AI",
  role: "Creator · NLP + Agentic AI",
  tag: "LLMs · E-commerce",
  timeframe: "Personal Project",
  problem:
    "Shoppers lack automated ways to negotiate better prices across online stores.",
  solution:
    "Built an AI chatbot using GPT-style models and agentic workflows that negotiates prices in real time based on user intent and seller responses.",
  impact:
    "Increased user savings by ~20% and improved conversion rates through adaptive negotiation strategies.",
  tech: "Python, Transformers, SpaCy, TensorFlow, LangChain, React, Node.js, Docker",
  github: "https://github.com/Sathwikreddy018/Bargain-Bot",
},

{
  id: "alpr",
  title: "ALPR – Automatic License Plate Recognition",
  role: "Creator · Computer Vision",
  tag: "CV · OCR",
  timeframe: "Personal Project",
    problem:
      "Manual license plate logging is slow and error-prone for security, parking and access control systems.",
    solution:
      "Built an end-to-end ALPR pipeline that detects vehicles, localizes plates in frames, and performs OCR on characters to extract plate numbers.",
    impact:
      "Demonstrated near real-time inference on video streams, with robust detection under varying lighting and viewing angles.",
    tech: "Python, OpenCV, detection models, OCR (Tesseract/EasyOCR), Flask",
    github: "https://github.com/Sathwikreddy018/License-Plate-Recognition-ALPR",
},
  {
    id: "digital-detox-hub",
    title: "Digital Detox Hub – Screen Time & Focus Assistant",
    role: "Creator · Full-Stack",
    tag: "Productivity · Web App",
    timeframe: "Personal Project",
    problem:
      "People struggle to manage screen time and build consistent digital detox habits.",
    solution:
      "Built a web app that tracks usage patterns, lets users schedule focus sessions, and visualizes progress with streaks and metrics.",
    impact:
      "Helps users plan deep-work blocks and reduce social media distractions through a clean, gamified dashboard.",
    tech: "React, TypeScript, Tailwind CSS, Node.js/Express, MongoDB",
    github: "https://github.com/Sathwikreddy018/Digital-detox-hub",
  },
  {
    id: "ev-charging-forecast",
    title: "Electric Vehicle Charging Demand Forecasting",
    role: "ML Engineer",
    tag: "Time Series · Forecasting",
    timeframe: "Academic Project",
    problem:
      "EV charging stations need demand forecasts to plan capacity, pricing, and reduce wait times.",
    solution:
      "Built a time series pipeline to predict short-term charging demand using historical usage and temporal patterns.",
    impact:
      "Improved planning of station loads by providing hourly demand forecasts with uncertainty bands.",
    tech: "Python, Pandas, scikit-learn, statsmodels/Prophet, Matplotlib",
    github:
      "https://github.com/Sathwikreddy018/Data-Analysis/tree/main/Electric%20Vehicle%20Charging%20Demand%20Forecasting",
  },
  {
    id: "nlp-book-recommender",
    title: "NLP Book Recommender",
    role: "Creator · NLP",
    tag: "NLP · Recommender",
    timeframe: "Personal Project",
    problem:
      "Readers struggle to discover new books aligned with their interests beyond simple ratings.",
    solution:
      "Built a content-based recommender that uses NLP embeddings of book descriptions and user preferences to suggest similar titles.",
    impact:
      "Produces more relevant recommendations than basic genre filters using semantic similarity.",
    tech: "Python, SpaCy/Transformers, scikit-learn, cosine similarity, Flask/Streamlit",
    github: "https://github.com/Sathwikreddy018/NLP-BOOK-RECOMMENDER",
  },
  {
    id: "fastapi-react-crud",
    title: "FastAPI + React CRUD Starter",
    role: "Creator · Full-Stack",
    tag: "Full-Stack · Boilerplate",
    timeframe: "Personal Project",
    problem:
      "Spinning up CRUD backends and UIs for small apps is repetitive.",
    solution:
      "Created a starter template with FastAPI backend and React frontend implementing typical CRUD operations and basic auth.",
    impact:
      "Speeds up building small apps and prototypes with a ready-made structure for APIs and UI.",
    tech: "FastAPI, Python, React, TypeScript, PostgreSQL/SQLite, Docker",
    github: "https://github.com/Sathwikreddy018/FastAPI-React-CRUD",
  },
  {
    id: "ai-email-sender",
    title: "AI Email Sender",
    role: "Creator · LLM Automation",
    tag: "LLMs · Automation",
    timeframe: "Personal Project",
    problem:
      "Writing repetitive emails for similar contexts wastes time and focus.",
    solution:
      "Built a tool that drafts context-aware emails using an LLM, with templates tuned for different professional scenarios.",
    impact:
      "Cuts time spent on routine communication by generating high-quality drafts users can quickly edit and send.",
    tech: "Python, LLM APIs, LangChain, FastAPI, React",
    github: "https://github.com/Sathwikreddy018/ai-email-sender-backend",
  },
  {
  id: "customer-churn",
  title: "Customer Churn Prediction System",
  role: "Data Science · ML",
  tag: "Telecom · Classical ML",
  timeframe: "Academic Project",
  problem:
    "Telecom companies lose significant revenue when customers discontinue services, and early churn identification is challenging.",
  solution:
    "Built a predictive model using customer behavior and service data to classify churn risk and support proactive retention.",
  impact:
    "Achieved ≈85% accuracy and enabled data-driven actions to reduce customer loss.",
  tech: "Python, Pandas, scikit-learn, XGBoost, Matplotlib/Seaborn, SQL, Streamlit/Power BI",
  github:
    "https://github.com/Sathwikreddy018/Data-Analysis/tree/main/Customer%20Churn%20Analysis%20for%20Telecom%20Industry",
},
{
  id: "grade-calculator",
  title: "Grade Calculator – GPA & CGPA Tracker",
  role: "Creator · Full-Stack",
  tag: "EdTech · Web App",
  timeframe: "Personal Project",
  problem:
    "Students often struggle to track grades, calculate GPA/CGPA, and plan target scores across multiple subjects and semesters.",
  solution:
    "Built an interactive grade calculator that supports weighted scores, GPA/CGPA computation, and target-grade planning with a clean, responsive UI.",
  impact:
    "Helps students quickly estimate academic standing and plan required scores for future exams with minimal manual effort.",
  tech: "React, TypeScript, Tailwind CSS, Node.js/Express or Firebase, Vercel/Netlify",
  github: "https://github.com/Sathwikreddy018/Grade-calculator",
},


];

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);

  const project = PROJECTS[index];

  const goNext = () => setIndex((i) => (i + 1) % PROJECTS.length);
  const goPrev = () =>
    setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Featured Projects
            </h2>
            <p className="text-xs text-slate-400 sm:text-sm">
              Swipe through one case study at a time.
            </p>
          </div>
          <p className="text-[11px] text-slate-500">
            {index + 1} / {PROJECTS.length}
          </p>
        </div>

        <div className="relative">
          {/* arrows */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-200 hover:border-cyan-400 hover:text-cyan-100"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-200 hover:border-cyan-400 hover:text-cyan-100"
          >
            →
          </button>

          <div className="mx-10">
            <AnimatePresence mode="wait">
              <motion.article
                key={project.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex-1">
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-400">
                      {project.tag}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-50">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      {project.timeframe} · {project.role}
                    </p>

                    <div className="mt-4 space-y-3 text-xs text-slate-200">
                      <div>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Problem
                        </h4>
                        <p className="mt-1">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Solution
                        </h4>
                        <p className="mt-1">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Impact
                        </h4>
                        <p className="mt-1">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 w-full max-w-xs rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-[11px] text-slate-300 md:mt-0">
                    <p className="font-semibold text-slate-200 mb-1">
                      Tech stack
                    </p>
                    <p>{project.tech}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-cyan-400/70 bg-cyan-500/10 px-3 py-1 font-semibold text-cyan-200 hover:bg-cyan-500/20"
                        >
                          View code ↗
                        </a>
                      )}
                      {project.live && project.live.trim() !== "" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-slate-600 bg-slate-900 px-3 py-1 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
                        >
                          Live demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
