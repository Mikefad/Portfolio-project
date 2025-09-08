// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-600">
        © {new Date().getFullYear()} Michael Fadairo — Built with React + Tailwind + Framer Motion
      </div>
    </footer>
  );
}
