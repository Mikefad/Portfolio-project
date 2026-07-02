// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Menu, X, Download, Eye } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavItem = ({ to, children }) => (
    <ScrollLink
      to={to}
      spy
      smooth
      offset={-80}
      duration={500}
      className="cursor-pointer hover:opacity-80 transition"
      onClick={() => setOpen(false)}
    >
      {children}
    </ScrollLink>
  );

  // === Résumé URLs ===
  const LOCAL_RESUME = "/Michael%20Fadairo%20CV.pdf"; // served from /public
  const DRIVE_RESUME =
    "https://drive.google.com/uc?export=download&id=1FbKjH6XYPqlb1oHGO-tgJ7l57istC2YV"; // direct download fallback

  const checkLocalResume = async () => {
    try {
      const res = await fetch(LOCAL_RESUME, { method: "HEAD" });
      return res.ok;
    } catch {
      return false;
    }
  };

  const handleViewResume = async (e) => {
    e.preventDefault();
    const ok = await checkLocalResume();
    const href = ok ? LOCAL_RESUME : DRIVE_RESUME;
    window.open(href, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  const handleDownloadResume = async (e) => {
    const ok = await checkLocalResume();
    if (!ok) {
      // Use Drive direct link if local is missing
      e.preventDefault();
      window.location.href = DRIVE_RESUME;
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`flex items-center justify-between rounded-2xl border backdrop-blur-md px-4 py-3 transition-all ${
          scrolled ? "bg-slate-900/70 border-white/10 shadow-lg" : "bg-white/5 border-white/10"
        }`}
      >
        <ScrollLink to="hero" spy smooth offset={-80} duration={500}>
          <div className="font-bold text-2xl md:text-3xl tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">
          ℳdev
        </span>
            
          </div>
        </ScrollLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-8 text-sm">
            <NavItem to="portfolio">Portfolio</NavItem>
            <NavItem to="experience">Experience</NavItem>
            <NavItem to="about">About</NavItem>
            <NavItem to="contact">Contact</NavItem>
            <a
              href="https://github.com/Mikefad"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-white/15 hover:border-white/30 transition"
            >
              GitHub
            </a>
          </div>

          {/* Résumé actions */}
          <a
            href={LOCAL_RESUME}
            target="_blank"
            rel="noreferrer"
            onClick={handleViewResume}
            className="ml-3 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:border-white/30 transition"
            aria-label="View résumé"
          >
            <Eye size={16} />
            View Résumé
          </a>

          <a
            href={LOCAL_RESUME}
            download
            onClick={handleDownloadResume}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition"
            aria-label="Download résumé"
          >
            <Download size={16} />
            Download PDF
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 border border-white/15"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-2 rounded-2xl border text-slate-300 border-white/10 bg-slate-900/80 backdrop-blur-md p-4"
          >
            <ul className="grid gap-3 text-sm">
              <li><NavItem to="hero">Home</NavItem></li>
              <li><NavItem to="portfolio">Portfolio</NavItem></li>
              <li><NavItem to="experience">Experience</NavItem></li>
              <li><NavItem to="about">About</NavItem></li>
              <li><NavItem to="contact">Contact</NavItem></li>
            </ul>

            {/* Mobile résumé actions */}
            <div className="mt-4 grid gap-2">
              <a
                href={LOCAL_RESUME}
                target="_blank"
                rel="noreferrer"
                onClick={handleViewResume}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm hover:border-white/30 transition"
                aria-label="View résumé"
              >
                <Eye size={16} />
                View Résumé
              </a>
              <a
                href={LOCAL_RESUME}
                download
                onClick={handleDownloadResume}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition"
                aria-label="Download résumé"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
