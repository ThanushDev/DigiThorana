import React from 'react';
import { motion } from 'framer-motion';

export function Aura() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-[140%] h-[140%] max-w-none">
        <defs>
          {/* Real Light Glow Effect */}
          <filter id="real-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <radialGradient id="center-sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Connecting Framework (අර පලවෙනි image එකේ වගේ සේරම යා කරන තිත් වැල්) */}
        <g filter="url(#real-glow)" opacity="0.7">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle + 22.5} 100 100)`}>
              {/* Triangular Dot Clusters from your screenshot */}
              <path 
                d="M 85,88 Q 100,70 115,88" 
                fill="none" 
                stroke="white" 
                strokeWidth="0.5" 
                strokeDasharray="0.2 2" 
                className="animate-pulse"
              />
              <path 
                d="M 82,92 Q 100,75 118,92" 
                fill="none" 
                stroke="#FFD700" 
                strokeWidth="0.4" 
                strokeDasharray="0.5 3" 
              />
            </g>
          ))}
          
          {/* Large Outer Connecting Rings */}
          <circle cx="100" cy="100" r="78" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="1 4" opacity="0.5" />
          <circle cx="100" cy="100" r="74" fill="none" stroke="#FFD700" strokeWidth="0.2" strokeDasharray="2 6" opacity="0.4" />
        </g>

        {/* 2. Real Budu Res Walalla (The Focused Center Light System) */}
        <g className="buddha-focus">
          <circle cx="100" cy="100" r="35" fill="url(#center-sun)" className="animate-pulse" />
          
          {/* Multiple layers for realistic light rings */}
          {[36, 38, 40].map((r, i) => (
            <motion.circle
              key={i}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={i % 2 === 0 ? "#FFD700" : "white"}
              strokeWidth={0.8}
              strokeDasharray={i === 1 ? "1 2" : "4 4"}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ repeat: Infinity, duration: 10 + i * 5, ease: "linear" }}
              style={{ transformOrigin: 'center' }}
              filter="url(#real-glow)"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
