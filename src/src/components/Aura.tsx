import React from 'react';
import { motion } from 'framer-motion';

export function Aura() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-[160%] h-[160%] overflow-visible">
        {/* Real Glow Light Effect */}
        <defs>
          <filter id="gold-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* පැනල් යා කරන තිත් වැල් */}
        <g opacity="0.4" stroke="#FFD700" fill="none" strokeWidth="0.5">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <path
              key={angle}
              d="M 100,20 A 80,80 0 0,1 160,50"
              transform={`rotate(${angle} 100 100)`}
              strokeDasharray="1 3"
            />
          ))}
        </g>

        {/* කැරකෙන බුදුරැස් වළල්ල */}
        <g filter="url(#gold-glow)">
          {[35, 40, 45, 50].map((r, i) => (
            <motion.circle
              key={i}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={i % 2 === 0 ? "#FFD700" : "#FFFFFF"}
              strokeWidth="1.5"
              strokeDasharray={i % 2 === 0 ? "5 10" : "2 5"}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
