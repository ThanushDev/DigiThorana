import React from 'react';
import { motion } from 'framer-motion';

export function Aura() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
      <svg
        viewBox="0 0 200 200"
        className="w-[150%] h-[150%] max-w-none overflow-visible"
        style={{ filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.3))' }}
      >
        <defs>
          {/* බුදුරැස් වළල්ලේ රියල් ග්ලෝ එක සඳහා */}
          <filter id="light-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <radialGradient id="central-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* මැද තියෙන ලොකු ග්ලෝ එක */}
        <circle cx="100" cy="100" r="40" fill="url(#central-glow)" />

        {/* 1. Connecting Frame (පින්තූරෙ විදියට පැනල් සේරම යා කරන සැකිල්ල) */}
        <g opacity="0.6">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle + 22.5} 100 100)`}>
              {/* පැනල් දෙකක් අතර තියෙන තිත් වක්‍රය */}
              <path
                d="M 85,88 Q 100,70 115,88"
                fill="none"
                stroke="white"
                strokeWidth="0.4"
                strokeDasharray="0.1 2"
              />
              <path
                d="M 82,92 Q 100,75 118,92"
                fill="none"
                stroke="#FFD700"
                strokeWidth="0.3"
                strokeDasharray="0.5 3"
              />
            </g>
          ))}
          {/* සියල්ල වටා යන රවුම් තිත් වැල */}
          <circle 
            cx="100" 
            cy="100" 
            r="78" 
            fill="none" 
            stroke="white" 
            strokeWidth="0.2" 
            strokeDasharray="2 4" 
            opacity="0.3"
          />
        </g>

        {/* 2. රියල් බුදුරැස් වළල්ල (කැරකෙන ලයිට් සිස්ටම් එක) */}
        <g filter="url(#light-glow)">
          {[34, 38, 42, 46].map((r, i) => (
            <motion.circle
              key={i}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={i % 2 === 0 ? "#FFD700" : "#FFFFFF"}
              strokeWidth={1.2}
              strokeDasharray={i % 2 === 0 ? "4 8" : "1 4"}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{
                repeat: Infinity,
                duration: 8 + i * 2,
                ease: "linear",
              }}
              style={{ transformOrigin: 'center' }}
            />
          ))}
        </g>

        {/* 3. කිරණ විහිදෙන ලයිට් (Inner Spokes) */}
        <g opacity="0.4">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
            <line
              key={a}
              x1="100"
              y1="100"
              x2={100 + 30 * Math.cos((a * Math.PI) / 180)}
              y2={100 + 30 * Math.sin((a * Math.PI) / 180)}
              stroke="#FFD700"
              strokeWidth="0.5"
              strokeDasharray="1 3"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
