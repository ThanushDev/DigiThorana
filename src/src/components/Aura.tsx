import React from 'react';
import { motion } from 'framer-motion';

export function Aura() {
  // Yellow and Green focused Buddhist colors
  const colors = ['#FFC627', '#32CD32', '#FFC627', '#FFFFFF', '#32CD32'];

  const rings = Array.from({ length: 15 }).map((_, i) => ({
    radius: 25 + i * 4.5, // ඇතුළට ගත්තා (Centered)
    color: colors[i % colors.length],
    isForward: i % 2 === 0,
  }));

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0">
      <svg viewBox="0 0 200 200" className="w-[130%] h-[130%] opacity-90">
        <defs>
          <radialGradient id="aura-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFC627" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#32CD32" stopOpacity="0.1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#aura-glow)" />
        {rings.map((ring, i) => (
          <motion.circle
            key={i}
            cx="100" cy="100" r={ring.radius}
            fill="none" stroke={ring.color}
            strokeWidth="0.8" strokeDasharray="1 3"
            animate={{ rotate: ring.isForward ? 360 : -360 }}
            transition={{ repeat: Infinity, duration: 10 + i, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  );
}
