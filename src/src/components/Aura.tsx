import React from 'react';
import { motion } from 'framer-motion';

export function Aura() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-[140%] h-[140%] max-w-none overflow-visible">
        <defs>
          <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Connecting "Dot-Art" Framework (සියලු පැනල් යා කරන තිත් මෝස්තරය) */}
        <g opacity="0.6">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle + 22.5} 100 100)`}>
              {/* Triangular Decorative Clusters */}
              <path d="M 85,88 Q 100,72 115,88" fill="none" stroke="white" strokeWidth="0.4" strokeDasharray="0.1 1.5" strokeLinecap="round" />
              <path d="M 82,92 Q 100,76 118,92" fill="none" stroke="#FFD700" strokeWidth="0.3" strokeDasharray="0.5 2" />
              
              {/* Connecting vines between panels */}
              <path d="M 100,75 L 100,65" stroke="white" strokeWidth="0.2" strokeDasharray="1 2" opacity="0.5" />
            </g>
          ))}
          {/* Main outer ring connecting everything */}
          <circle cx="100" cy="100" r="77" fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="2 4" />
        </g>

        {/* 2. Real Budu-Res Walalla (බුදුහාමුදුරුවන් පිටුපස ඇති සැබෑ ආලෝක පද්ධතිය) */}
        <g filter="url(#gold-glow)">
          {/* Central Brightness */}
          <circle cx="100" cy="100" r="32" fill="rgba(255, 215, 0, 0.2)" className="animate-pulse" />
          
          {[34, 36.5, 39, 41.5].map((r, i) => (
            <motion.circle
              key={i}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={i % 2 === 0 ? "#FFD700" : "#FFFFFF"}
              strokeWidth={0.8}
              strokeDasharray={i % 2 === 0 ? "4 6" : "1 3"}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ repeat: Infinity, duration: 8 + i * 4, ease: "linear" }}
              style={{ transformOrigin: 'center' }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
