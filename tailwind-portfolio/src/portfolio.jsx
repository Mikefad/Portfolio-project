// src/sections/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import TiltCard from "./effects/TiltCard";
import Particles from "./Particles";

import consultingImg from "./assets/Screenshot (168).png";
// import financeHotelVidLocal from "./assets/Vite + React - Google Chrome 2025-05-07 23-01-28.mp4";
import deliveryLandingImg from "./assets/Screenshot (192).png";
import ecommerceAlcoholImg from "./assets/Screenshot (170).png";
import airbnbDashImg from "./assets/Screenshot (64).png";
import figmaProjectImg from "./assets/Screenshot (97).png";
import automationBotImg from "./assets/Screenshot (107).png";

import wheelSpinnerImg from "./assets/Screenshot (163).png";
import magicLetterImg from "./assets/Screenshot (178).png";

const FINANCE_VIDEO =
  "https://res.cloudinary.com/dcbk2d6pl/video/upload/f_auto,q_auto:eco/Vite_React_-_Google_Chrome_2025-05-07_23-01-28_jnquiw.mp4";

const projects = [
  {
    title: "Finance Dashboard for Hotel Business",
    blurb:
      "Interactive finance KPIs (ROE, margin), charts, and report views for hotel operations with a friendly UI.",
    tech: ["React", "Python", "MySQL"],
    href: "https://finance-manager-snowy.vercel.app/login",
    videoSrc: FINANCE_VIDEO,
    featured: true,
    newTag: true,
  },
  {
    title: "Business Website for Consulting Agency",
    blurb:
      "Sleek multi-page site with services, case studies, and contact flow. Fast, responsive, and SEO-friendly.",
    tech: ["React", "Firebase", "Tailwind"],
    href: "https://consulting-agency-website-rmfk.vercel.app/",
    imageSrc: consultingImg,
    featured: true,
    newTag: true,
  },
  {
    title: "Custom Delivery Service Landing Page",
    blurb:
      "Conversion-focused landing page with hero CTA, feature highlights, and contact capture.",
    tech: ["React", "Tailwind"],
    href: "https://delivery-service-website.vercel.app/",
    imageSrc: deliveryLandingImg,
    newTag: true,
  },
  {
    title: "Custom E-commerce for Alcohol Distribution",
    blurb:
      "Product catalog, cart, and checkout prototype with admin-friendly product management.",
    tech: ["React", "Node", "MongoDB"],
    href: "https://alcohol-companywebsite.vercel.app/",
    imageSrc: ecommerceAlcoholImg,
    newTag: true,
  },
  {
    title: "Airbnb Data Dashboard (Seattle Market)",
    blurb:
      "Pricing trends, availability and neighborhood insights with an interactive Tableau dashboard.",
    tech: ["Tableau", "Excel"],
    href: "https://public.tableau.com/app/profile/michael.fadairo/viz/firstdataanalysis/Dashboard1",
    imageSrc: airbnbDashImg,
    newTag: true,
  },
  {
    title: "Figma → Pixel-Perfect Website",
    blurb:
      "Converted UI from Figma to a live, responsive site with animations and clean components.",
    tech: ["React", "Tailwind", "Vercel"],
    href: "https://raintor-project.vercel.app/",
    imageSrc: figmaProjectImg,
  },
  {
    title: "Zoom Bot Automation",
    blurb:
      "Python bot that joins Zoom meetings automatically using schedules and credentials.",
    tech: ["Python", "Selenium", "Schedule"],
    href: "https://github.com/Mikefad/zoom-bot-automation",
    imageSrc: automationBotImg,
  },
  {
    title: "Custom Wheel Spinner (Admin Controls)",
    blurb:
      "Prize wheel with weighted outcomes, cooldowns, and admin panel for managing items, odds, play limits, and audit logs.",
    tech: ["React", "Express", "MongoDB", "Tailwind", "JWT"],
    href: "https://custom-wheel-lovat.vercel.app/",
    imageSrc: wheelSpinnerImg,
  },
  {
    title: "Magic Letter — Digital Message Generator",
    blurb:
      "Transforms any message into a beautiful, animated digital letter with templates, share links, and export.",
    tech: ["React", "Framer Motion", "Tailwind"],
    href: "https://magic-letter-chi.vercel.app/",
    imageSrc: magicLetterImg,
  },
];

function ProjectCard({ p, i }) {
  return (
    <TiltCard>
      <motion.a
        href={p.href || "#"}
        target={p.href ? "_blank" : undefined}
        rel={p.href ? "noreferrer" : undefined}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.04 }}
        className="group block overflow-hidden rounded-2xl border border-slate-300 bg-white/5 backdrop-blur hover:border-slate-400 transition"
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
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-slate-900 to-black" />
          )}

          {/* badges — only border color changed */}
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

          {!p.videoSrc && (
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
            </div>
            <ExternalLink
              size={18}
              className="text-slate-400 group-hover:text-slate-600 shrink-0 mt-1"
            />
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
      </motion.a>
    </TiltCard>
  );
}

export default function Portfolio() {
  const ordered = [
    ...projects.filter((p) => p.featured || p.newTag),
    ...projects.filter((p) => !p.featured && !p.newTag),
  ];

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
        A curated selection of recent work — from polished websites to data dashboards and automation.
      </p>

      {ordered.some((p) => p.featured) && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ordered
            .filter((p) => p.featured)
            .map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ordered
          .filter((p) => !p.featured)
          .map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
      </div>
    </section>
  );
}
