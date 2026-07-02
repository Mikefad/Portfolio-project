// src/sections/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import TiltCard from "./effects/TiltCard";
import Particles from "./Particles";

import codeBoltImg from "./assets/Screenshot 2026-03-11 130820.png";
import resortImg from "./assets/Screenshot 2026-03-11 143029.png";
import resumeStudioImg from "./assets/Screenshot 2025-12-27 180048.png";
import financeVideo from "./assets/Video Project 1.mp4";

const projects = [
  {
    title: "Hotel Finance Manager",
    blurb:
      "A full-stack financial platform for tracking revenue, profit margins, ROE, and operational reports through an accessible business dashboard.",
    tech: ["React", "Flask", "MySQL"],
    href: "https://finance-manager-snowy.vercel.app/login",
    videoSrc: financeVideo,
    featured: true,
    newTag: true,
  },
  {
    title: "CodeBolt Systems — Automation & Micro-SaaS Platform",
    blurb:
      "The product and service platform I founded to deliver AI micro-tools, workflow automation, operational dashboards, and focused software for growing teams.",
    tech: ["Next.js", "Python", "Firebase", "PostgreSQL"],
    imageSrc: codeBoltImg,
    featured: true,
    newTag: true,
  },
  {
    title: "Resume Studio — Analyser & Generator",
    blurb:
      "An AI-assisted workspace that evaluates resumes against target roles, produces actionable recommendations, and generates tailored CV drafts ready for export.",
    tech: ["React", "Python", "AI Integration", "PDF Generation"],
    imageSrc: resumeStudioImg,
    imageFit: "contain",
    featured: true,
    newTag: true,
  },
  {
    title: "Azure Haven — Modern Resort Website",
    blurb:
      "A premium, responsive hospitality website with immersive destination storytelling, suite discovery, and a streamlined booking experience.",
    tech: ["React", "Responsive UI", "Booking UX"],
    imageSrc: resortImg,
    featured: true,
    newTag: true,
  },
];

function ProjectCard({ p, i }) {
  return (
    <TiltCard>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.04 }}
        className="group h-full overflow-hidden rounded-2xl border border-slate-300 bg-white/30 backdrop-blur transition hover:border-slate-400 hover:bg-white/50"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          {p.videoSrc ? (
            <video
              className="h-full w-full object-cover rounded-none"
              controls
              playsInline
              preload="metadata"
            >
              <source src={p.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : p.imageSrc ? (
            <img
              src={p.imageSrc}
              alt={p.title}
              className={`h-full w-full transition duration-300 group-hover:scale-[1.03] ${
                p.imageFit === "contain"
                  ? "bg-slate-950 object-contain"
                  : "object-cover"
              }`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-full w-full flex-col justify-end bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-700 p-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
                {p.label || "Product build"}
              </span>
              <span className="mt-2 max-w-sm text-2xl font-bold leading-tight">{p.title}</span>
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/20" />
              <div className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 rounded-full border border-white/15" />
            </div>
          )}

          <div className="absolute left-3 top-3 flex gap-2">
            {p.featured && (
              <span className="rounded-full bg-indigo-500/20 border border-indigo-300 px-2 py-1 text-[10px] uppercase tracking-wide">
                Featured
              </span>
            )}
            {p.newTag && (
              <span className="rounded-full bg-fuchsia-500/20 border border-fuchsia-300 px-2 py-1 text-[10px] uppercase tracking-wide">
                New
              </span>
            )}
          </div>

          {p.imageSrc && (
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
            </div>
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.title}`}
                className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-white hover:text-indigo-700"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech?.map((t) => (
              <span
                key={t}
                className="rounded-md border border-slate-200 px-2 py-1 text-[11px] text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </TiltCard>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative max-w-6xl mx-auto px-4 py-20">
      {/* particles untouched */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-slate-900"
      >
        My{" "}
        
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">
          Projects
        </span>
      </motion.h2>

      {/* divider left as-is since it's bg; you asked for text/border only */}
      <div className="mt-2 h-px w-24 bg-white/10" />
      <p className="mt-4 max-w-2xl text-slate-600">
        A focused selection of my strongest work across SaaS, AI-assisted tools, business systems, and customer-facing platforms.
      </p>

      {projects.some((p) => p.featured) && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
        </div>
      )}

      {projects.some((p) => !p.featured) && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
        </div>
      )}
    </section>
  );
}
