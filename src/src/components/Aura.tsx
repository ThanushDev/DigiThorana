import React from 'react';

export const Aura: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
      {/* Buddhist Flag - Topmost position */}
      <div className="absolute top-[-8%] z-50 flex flex-col items-center">
        <div className="w-1.5 h-16 bg-gradient-to-b from-yellow-700 to-yellow-500 shadow-lg" />
        <div className="w-14 h-9 border-2 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)] flex">
          <div className="flex-1 bg-[#0000FF]" /><div className="flex-1 bg-[#FFFF00]" />
          <div className="flex-1 bg-[#FF0000]" /><div className="flex-1 bg-[#FFFFFF]" />
          <div className="flex-1 bg-[#FF8000]" />
          <div className="flex-1 flex flex-col">
            <div className="flex-1 bg-[#0000FF]" /><div className="flex-1 bg-[#FFFF00]" />
            <div className="flex-1 bg-[#FF0000]" /><div className="flex-1 bg-[#FFFFFF]" />
            <div className="flex-1 bg-[#FF8000]" />
          </div>
        </div>
      </div>

      {/* Traditional White Dot Art Framework */}
      <svg viewBox="0 0 100 100" className="w-[120%] h-[120%] opacity-80 overflow-visible">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Traditional Connecting Patterns (Triangular fill with dots) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 50 50)`} filter="url(#glow)">
            {/* The "V" shaped connecting dots from your images */}
            <path d="M 40,15 Q 50,5 60,15" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="0.1,1.5" strokeLinecap="round" />
            <path d="M 42,18 Q 50,10 58,18" fill="none" stroke="white" strokeWidth="0.4" strokeDasharray="0.1,1.2" strokeLinecap="round" />
            <path d="M 44,21 Q 50,15 56,21" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="0.1,1" strokeLinecap="round" />
            
            {/* Outer Decorative Arches */}
            <path d="M 35,10 Q 50,-5 65,10" fill="none" stroke="white" strokeWidth="0.6" strokeDasharray="0.1,2" strokeLinecap="round" />
          </g>
        ))}

        {/* Large Concentric Dot Rings around Center */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="0.1,2.5" />
        <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="0.1,2" />
      </svg>
    </div>
  );
};
