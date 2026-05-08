import React from 'react';

export function Aura() {
  const colors = ['#FFC627', '#32CD32', '#DA291C', '#FFFFFF', '#005EB8', '#FFC627'];
  
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      {/* Background Glow */}
      <div className="absolute w-[70%] h-[70%] bg-yellow-500/30 blur-[80px] rounded-full animate-pulse" />
      
      {/* Rotating Aura SVG */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full scale-[1.8] opacity-90">
        
        {/* Layer 1: Clockwise Rings */}
        <g className="aura-spin">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={`cw-${i}`} cx="100" cy="100" r={15 + i * 5}
              fill="none" stroke={colors[i % colors.length]}
              strokeWidth="1.5" strokeDasharray="3 5"
              className="light-chase"
            />
          ))}
        </g>

        {/* Layer 2: Counter-Clockwise Thin Rings (Adds complex patterns) */}
        <g className="aura-spin-reverse">
          {Array.from({ length: 6 }).map((_, i) => (
            <circle
              key={`ccw-${i}`} cx="100" cy="100" r={20 + i * 7}
              fill="none" stroke={colors[(i + 2) % colors.length]}
              strokeWidth="0.8" strokeDasharray="10 10"
              className="light-chase-reverse"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
