// src/components/GlobalParticles.jsx
import React, { useEffect, useState } from "react";
import Particles from "./Particles";

export default function GlobalParticles({ respectReducedMotion = true }) {
  const [count, setCount] = useState(240);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const area = (w * h) / (1280 * 720);
      const base = Math.round(220 * Math.min(1.6, Math.max(0.6, area)));
      setCount(base);
      setEnabled(respectReducedMotion ? !mq.matches : true);
    };
    update();
    window.addEventListener("resize", update);
    mq.addEventListener?.("change", update);
    return () => {
      window.removeEventListener("resize", update);
      mq.removeEventListener?.("change", update);
    };
  }, [respectReducedMotion]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={count}
        particleSpread={10}
        speed={0.12}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}
