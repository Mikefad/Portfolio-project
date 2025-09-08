// src/components/effects/AnimatedText.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({
  text = [],
  as = "h1",
  className = "",
  typingIndex = null,        // which line types (0-based)
  typingSteps = 24,          // number of steps (characters)
  typingDuration = "2.4s",   // how long one type/erase cycle takes
  typingLoop = false,        // if true, type↔erase forever
}) {
  const Tag = as;
  return (
    <div>
      {text.map((line, i) => {
        const isTyping = i === typingIndex;
        return (
          <Tag key={i} className={className}>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`text-slate-900 ${isTyping ? (typingLoop ? "typing-loop" : "typing") : ""}`}
              style={
                isTyping
                  ? { ["--typing-steps"]: typingSteps, ["--typing-duration"]: typingDuration }
                  : undefined
              }
            >
              {line}
            </motion.span>
          </Tag>
        );
      })}
    </div>
  );
}
