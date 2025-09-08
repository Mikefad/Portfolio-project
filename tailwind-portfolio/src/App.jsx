// src/App.jsx
import React from "react";
import GlobalParticles from "./GlobalParticles";
import Header from "./header";
import Hero from "./Hero";
import SkillsLoop from "./SkillsLoop";
import Portfolio from "./portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="min-h-screen relative bg-slate-100 text-black">
      {/* Site-wide particles */}
      <GlobalParticles respectReducedMotion={false} />


      {/* All site content sits above particles */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <SkillsLoop />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
