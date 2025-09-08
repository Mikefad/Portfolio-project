// src/components/effects/MagneticButton.jsx
import React, { useRef } from "react";

export default function MagneticButton({ href = "#", children }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  return (
    <a
      href={href}
      className="relative inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-white shadow-lg overflow-hidden border border-white/15 bg-gradient-to-r from-indigo-500 to-fuchsia-500"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      ref={ref}
    >
      <span className="absolute inset-0 opacity-20 bg-[radial-gradient(120px_60px_at_var(--x,50%)_var(--y,50%),#fff,transparent_60%)]" />
      <span className="relative z-10">{children}</span>
    </a>
  );
}
