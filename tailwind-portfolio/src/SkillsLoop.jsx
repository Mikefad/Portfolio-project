// src/sections/SkillsLoop.jsx
import React from "react";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiMongodb,
  SiTableau,
  SiGithub,
  SiFramer,
  SiVite,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiTableau />, title: "Tableau", href: "https://www.tableau.com" },
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
