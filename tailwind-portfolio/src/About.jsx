// src/sections/About.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import fullpic from "./assets/My Prof Pic.jpg";

/** Primary (Simple Icons) colored */
const si = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex.replace("#", "")}`;
const siMono = (slug) => `https://cdn.simpleicons.org/${slug}`;
const iconify = (slug, hex) =>
  `https://api.iconify.design/simple-icons/${slug}.svg?color=${encodeURIComponent(hex)}`;
const devicon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

function logoSources(slug, hex) {
  if (slug === "css3") {
    return [si("css3", hex), iconify("css3", hex), devicon("css3/css3-original.svg"), siMono("css3")];
  }
  if (slug === "visualstudiocode") {
    return [si("visualstudiocode", hex), iconify("visualstudiocode", hex), devicon("vscode/vscode-original.svg"), siMono("visualstudiocode")];
  }
  if (slug === "powerbi") {
    return [si("powerbi", hex), iconify("powerbi", hex), siMono("powerbi")];
  }
  if (slug === "tableau") {
    return [si("tableau", hex), iconify("tableau", hex), siMono("tableau")];
  }
  if (slug === "microsoftexcel") {
    return [si("microsoftexcel", hex), iconify("microsoftexcel", hex), siMono("microsoftexcel")];
  }
  return [si(slug, hex), siMono(slug)];
}

const groups = [
  {
    title: "Frontend Development",
    items: [
      { key: "react", label: "React.js", hex: "#61DAFB" },
      { key: "nextdotjs", label: "Next.js", hex: "#000000" },
      { key: "vuedotjs", label: "Vue.js", hex: "#4FC08D" },
      { key: "nuxt", label: "Nuxt", hex: "#00DC82" },
      { key: "typescript", label: "TypeScript", hex: "#3178C6" },
      { key: "tailwindcss", label: "Tailwind CSS", hex: "#06B6D4" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { key: "python", label: "Python / Flask", hex: "#3776AB" },
      { key: "nodedotjs", label: "Node.js", hex: "#339933" },
      { key: "express", label: "Express.js", hex: "#000000" },
      { key: "laravel", label: "Laravel", hex: "#FF2D20" },
      { key: "dart", label: "Dart", hex: "#0175C2" },
      { key: "postman", label: "RESTful APIs", hex: "#FF6C37" },
    ],
  },
  {
    title: "Databases & Validation",
    items: [
      { key: "postgresql", label: "PostgreSQL", hex: "#4169E1" },
      { key: "mysql", label: "MySQL", hex: "#4479A1" },
      { key: "mongodb", label: "MongoDB", hex: "#47A248" },
      { key: "prisma", label: "Prisma ORM", hex: "#2D3748" },
      { key: "zod", label: "Zod", hex: "#3E67B1" },
    ],
  },
  {
    title: "Cloud, DevOps & Delivery",
    items: [
      { key: "firebase", label: "Firebase", hex: "#DD2C00" },
      { key: "googlecloud", label: "Google Cloud", hex: "#4285F4" },
      { key: "vercel", label: "Vercel", hex: "#000000" },
      { key: "docker", label: "Docker", hex: "#2496ED" },
      { key: "gitlab", label: "GitLab CI/CD", hex: "#FC6D26" },
      { key: "git", label: "Git", hex: "#F05032" },
    ],
  },
  {
    title: "Product Engineering",
    items: [
      { key: "stripe", label: "Stripe Webhooks", hex: "#635BFF" },
      { key: "json", label: "SDK & API Design", hex: "#000000" },
      { key: "selenium", label: "Selenium", hex: "#43B02A" },
      { key: "jest", label: "Jest", hex: "#C21325" },
      { key: "github", label: "GitHub", hex: "#181717" },
    ],
  },
  {
    title: "Data Analytics",
    items: [
      { key: "microsoftexcel", label: "Excel", hex: "#217346" },
      { key: "tableau", label: "Tableau", hex: "#E97627" },
      { key: "powerbi", label: "Power BI", hex: "#F2C811" },
      { key: "pandas", label: "Pandas (Python)", hex: "#150458" },
      { key: "python", label: "Pandas", hex: "#3776AB" },
    ],
  },
];

function SkillLogo({ item, delay = 0 }) {
  const sources = logoSources(item.key, item.hex);
  const [idx, setIdx] = useState(0);
  const isLast = idx >= sources.length - 1;
  const src = sources[idx];

  const isMono = src === siMono(item.key) || (src.includes("/simple-icons/") && !src.includes("color="));
  const forceWhiteStyle = isMono ? { filter: "brightness(0) saturate(100%) invert(1)" } : undefined;

  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.25 }}
      className="flex items-center gap-3 rounded-lg border border-slate-300 bg-white/5 px-3 py-2"
    >
      <img
        src={src}
        alt={`${item.label} logo`}
        width={44}
        height={44}
        className="h-10 w-10 md:h-12 md:w-12 object-contain"
        loading="lazy"
        decoding="async"
        onError={() => !isLast && setIdx((n) => n + 1)}
        style={forceWhiteStyle}
      />
      <span className="text-sm md:text-base text-slate-800">{item.label}</span>
    </motion.li>
  );
}

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-slate-900"
      >
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">
          Me
        </span>
      </motion.h2>
      <div className="mt-2 h-px w-24 bg-slate-200" />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/15 to-sky-400/20 blur-2xl" />
            <img
              src={fullpic}
              alt="Michael"
              className="relative z-10 aspect-[4/5] w-full object-cover rounded-2xl border border-slate-200 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Bio + Skills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <p className="text-slate-600">
            I’m <span className="font-semibold text-slate-900">Michael Fadairo</span>, a full-stack developer,
            SaaS product builder, and founder of CodeBolt Systems. I build software that helps early-stage teams
            launch faster and helps businesses replace repetitive work with focused, usable systems.
          </p>

          <p className="text-slate-600 mt-4">
            My experience spans startup product development at <span className="font-medium text-slate-900">VentureSeed/AORTEM</span>,
            enterprise technology at <span className="font-medium text-slate-900">Airtel Networks</span>, and full-stack
            delivery at <span className="font-medium text-slate-900">ReadWrite Data Solutions</span>. That work includes
            frontend platforms, developer SDKs, secure billing flows, cloud automation, REST APIs, and analytics dashboards.
          </p>

          <p className="text-slate-700 mt-6 font-medium">
            Current technical toolkit
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {groups.map((g, gi) => (
              <div key={g.title} className="rounded-2xl border border-slate-300 bg-white/5 p-4">
                <h3 className="text-sm font-semibold tracking-wide text-slate-700">{g.title}</h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {g.items.map((it, ii) => (
                    <SkillLogo key={`${g.title}-${it.key}`} item={it} delay={0.02 * (ii + gi)} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
