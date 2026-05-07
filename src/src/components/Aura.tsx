import React from 'react';
import { motion } from 'framer-motion';

export function Aura() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-[150%] h-[150%] max-w-none overflow-visible">
        <defs>
          {/* Real Lighting Glow Effect */}
          <filter id="real-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <radialGradient id="center-glow">
            <stop offset="10%" stopColor="#FFEEAA" stopOpacity="0.8" />
            <stop offset="90%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Connecting "Dot" Framework (පලවෙනි image එකේ වගේ සේරම යා කරන තිත් වැල්) */}
        <g opacity="0.6">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 100 100)`}>
              {/* Triangular connectors between medallions */}
              <path d="M 100,60 L 115,85 L 85,85 Z" fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="0.5 1" />
              <circle cx="100" cy="70" r="0.5" fill="white" className="animate-ping" />
            </g>
          ))}
          {/* Main skeleton rings */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="gold" strokeWidth="0.1" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 3" />
        </g>

        {/* 2. Real Budu-Res Walalla (Focused Light system like Image 2) */}
        <g filter="url(#real-glow)">
          <circle cx="100" cy="100" r="30" fill="url(#center-glow)" className="animate-pulse" />
          
          {[32, 35, 38, 41].map((r, i) => (
            <motion.circle
              key={i}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={i % 2 === 0 ? "#FFD700" : "white"}
              strokeWidth="1.2"
              strokeDasharray={i === 0 ? "2 10" : "5 15"}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ repeat: Infinity, duration: 10 + i * 2, ease: "linear" }}
              style={{ transformOrigin: 'center' }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
