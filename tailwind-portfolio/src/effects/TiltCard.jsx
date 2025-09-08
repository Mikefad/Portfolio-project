// src/components/effects/TiltCard.jsx
import React, { useRef } from "react";

export default function TiltCard({ children, max = 12, className = "" }) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0 → 1
    const py = (e.clientY - rect.top) / rect.height; // 0 → 1
    const rx = (py - 0.5) * -max; // tilt X
    const ry = (px - 0.5) *  max; // tilt Y
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      className={`[transform-style:preserve-3d] transition-transform duration-150 ${className}`}
      style={{ perspective: 1000 }}
    >
      {children}
    </div>
  );
}
