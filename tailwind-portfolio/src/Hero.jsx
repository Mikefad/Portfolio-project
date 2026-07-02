// src/sections/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import AnimatedText from "./effects/AnimatedText";
import MagneticButton from "./effects/MagneticButton";
import profileSrc from "./assets/face pic 3.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate max-w-6xl mx-auto px-4 pt-24 md:pt-28 text-slate-900">
      {/* Floating blobs */}
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-32 -left-20 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      {/* Stack on small, row on large */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* ===== Mobile/Tablet IMAGE (image IS the div) ===== */}
        <div className="lg:hidden w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // tightly sized: tiny phones → 260, small → 300–320, md → 380
            className="relative w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[320px] md:max-w-[380px]"
          >
            {/* glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/15 to-sky-400/20 blur-2xl" />
            {profileSrc ? (
              <img
                src={profileSrc}
                alt="Michael"
                className="relative z-10 aspect-[4/5] w-full object-cover rounded-2xl border border-slate-200 shadow-2xl bg-white"
              />
            ) : (
              <div className="relative z-10 aspect-[4/5] w-full rounded-2xl border border-slate-200 shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200" />
            )}
          </motion.div>
        </div>

        {/* ===== Text block ===== */}
        <div className="flex-1">
          <AnimatedText
            as="h1"
            text={["I build SaaS products,", "automation, and web platforms."]}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            typingIndex={1}
            typingSteps={24}
            typingDuration="2.6s"
            typingLoop
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 max-w-2xl text-slate-600"
          >
            I’m <span className="font-semibold text-slate-900">Michael Fadairo</span> — a full-stack developer,
            SaaS product builder, and founder of CodeBolt Systems. I turn business problems into reliable
            products with React, Next.js, Vue/Nuxt, Python, Node.js, and modern cloud platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 backdrop-blur hover:bg-white/10"
            >
              View my work{" "}
              <ArrowDownRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <MagneticButton href="#contact">Let’s collaborate</MagneticButton>
            <a
              href="/Michael%20Fadairo%20CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-slate-700 transition hover:border-slate-500 hover:bg-white/50"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* ===== Desktop IMAGE (original circular avatar) ===== */}
        <div className="relative hidden lg:flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500/40 via-fuchsia-500/30 to-sky-400/40 blur-2xl" />
            {profileSrc ? (
              <img
                src={profileSrc}
                alt="Michael"
                className="relative z-10 h-56 w-56 md:h-64 md:w-64 rounded-full object-cover border border-white/10 shadow-2xl"
              />
            ) : (
              <div className="relative z-10 h-56 w-56 md:h-64 md:w-64 rounded-full border border-white/10 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900" />
            )}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Quick overview */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { k: "Focus", v: "SaaS · Automation" },
          { k: "Core stack", v: "React · Python" },
          { k: "Current work", v: "CodeBolt Systems" },
          { k: "Location", v: "Lagos · Remote" },
        ].map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i }}
            className="rounded-xl border border-slate-300 bg-white/5 backdrop-blur hover:border-slate-400 transition p-4 text-center"
          >
            <div className="text-xl font-bold text-slate-900">{s.v}</div>
            <div className="text-xs uppercase tracking-wide text-slate-500">{s.k}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
