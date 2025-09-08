// src/components/Background.jsx
import React, { useEffect, useRef } from "react";

export default function Background() {
  const gridRef = useRef(null);

  // Tiny parallax on the grid
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const move = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 8;
      const y = (e.clientY / h - 0.5) * 8;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* subtle noise layer */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;64&quot; height=&quot;64&quot; viewBox=&quot;0 0 64 64&quot;><filter id=&quot;n&quot;><feTurbulence type=&quot;fractalNoise&quot; baseFrequency=&quot;0.8&quot; numOctaves=&quot;2&quot; stitchTiles=&quot;stitch&quot;/><feColorMatrix type=&quot;saturate&quot; values=&quot;0&quot;/></filter><rect width=&quot;64&quot; height=&quot;64&quot; filter=&quot;url(%23n)&quot; opacity=&quot;0.03&quot;/></svg>')]"/>
      
      {/* soft gradient orbs (add keyframes in index.css; not required to run) */}
      <div className="absolute -top-20 -left-20 h-[420px] w-[420px] rounded-full bg-fuchsia-600/20 blur-3xl animate-pulse-slow" />
      <div className="absolute top-[40%] -right-16 h-[380px] w-[380px] rounded-full bg-indigo-600/20 blur-3xl animate-pulse-slower" />

      {/* animated grid that parallax with mouse */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px, 48px 48px",
        }}
      />
    </div>
  );
}
