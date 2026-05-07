import React from 'react';
import { motion } from 'framer-motion';
export function Aura() {
  // Buddhist flag colors for the aura rings
  const colors = [
  '#005EB8',
  '#FFC627',
  '#DA291C',
  '#FFFFFF',
  '#F2A900' // Orange
  ];
  // Generate concentric rings
  const rings = Array.from({
    length: 15
  }).map((_, i) => {
    const radius = 25 + i * 5; // Start at 25%, increase by 5%
    const color = colors[i % colors.length];
    const isForward = i % 2 === 0;
    return {
      radius,
      color,
      isForward
    };
  });
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
      <svg
        viewBox="0 0 200 200"
        className="w-[150%] h-[150%] max-w-none opacity-80">
        
        <defs>
          <radialGradient id="aura-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFC627" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#005EB8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r="90" fill="url(#aura-glow)" />

        {rings.map((ring, i) =>
        <motion.circle
          key={i}
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: i * 0.1,
            duration: 1
          }}
          cx="100"
          cy="100"
          r={ring.radius}
          fill="none"
          stroke={ring.color}
          strokeWidth={i < 5 ? '1' : '1.5'}
          strokeDasharray="2 4"
          strokeLinecap="round"
          className={
          ring.isForward ? 'light-ring-forward' : 'light-ring-backward'
          }
          style={{
            transformOrigin: 'center'
          }} />

        )}
      </svg>
    </div>);

}