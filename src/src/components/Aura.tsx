import React from 'react';
import { motion } from 'framer-motion';

export function Aura() {
  const colors = ['#FFC627', '#32CD32', '#FFC627', '#FFFFFF', '#32CD32'];
  const rings = Array.from({ length: 12 }).map((_, i) => ({
    radius: 15 + i * 5,
    color: colors[i % colors.length],
    duration: 15 + i * 2,
    isClockwise: i % 2 === 0
  }));

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <svg viewBox="0 0 200 200" className="w-[120%] h-[120%] opacity-80">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {rings.map((ring, i) => (
          <motion.circle
            key={i} cx="100" cy="100" r={ring.radius}
            fill="none" stroke={ring.color} strokeWidth="0.8"
            strokeDasharray="2 4" filter="url(#glow)"
            animate={{ rotate: ring.isClockwise ? 360 : -360 }}
            transition={{ repeat: Infinity, duration: ring.duration, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  );
}
