import React from 'react';
import { motion } from 'framer-motion';

export function Aura() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-[150%] h-[150%] overflow-visible">
        <defs>
          <filter id="budu-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. සේරම පැනල් එකට යා කරන තිත් වැල් (Connecting Layout) */}
        <g opacity="0.6" filter="url(#budu-glow)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle + 22.5} 100 100)`}>
              <path d="M 85,88 Q 100,72 115,88" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="0.1 2" />
              <path d="M 82,92 Q 100,76 118,92" fill="none" stroke="#FFD700" strokeWidth="0.4" strokeDasharray="0.5 3" />
            </g>
          ))}
          <circle cx="100" cy="100" r="78" fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="2 4" />
        </g>

        {/* 2. රියල් බුදුරැස් වළල්ල (Lighting System) */}
        <g filter="url(#budu-glow)">
          <circle cx="100" cy="100" r="32" fill="rgba(255, 215, 0, 0.4)" className="animate-pulse" />
          {[34, 37, 40, 43, 46].map((r, i) => (
            <motion.circle
              key={i}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={i % 2 === 0 ? "#FFD700" : "white"}
              strokeWidth={1.5}
              strokeDasharray={i % 2 === 0 ? "5 10" : "2 5"}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ repeat: Infinity, duration: 6 + i * 2, ease: "linear" }}
              style={{ transformOrigin: 'center' }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
