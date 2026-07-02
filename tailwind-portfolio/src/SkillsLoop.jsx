// src/sections/SkillsLoop.jsx
import React from "react";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiFirebase,
  SiGithub,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiVuedotjs />, title: "Vue", href: "https://vuejs.org" },
  { node: <SiNuxtdotjs />, title: "Nuxt", href: "https://nuxt.com" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
];

export default function SkillsLoop() {
  return (
    <section
      aria-label="Skills logos"
      className="relative max-w-6xl mx-auto px-4 py-8 md:py-12"
    >
      <div
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={44}
          gap={48}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000" // blends with the black background
          ariaLabel="Technologies I use"
        />
      </div>
    </section>
  );
}
