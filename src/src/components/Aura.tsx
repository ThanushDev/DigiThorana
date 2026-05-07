import React from 'react';

export const Aura: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
      
      {/* 1. Buddhist Flag at the very Top */}
      <div className="absolute top-[-10%] z-50 flex flex-col items-center">
        {/* Flag Pole */}
        <div className="w-1 h-12 bg-gradient-to-b from-yellow-800 to-yellow-600" />
        {/* Flag Body */}
        <div className="w-12 h-8 border border-white/40 shadow-lg flex overflow-hidden">
          <div className="flex-1 bg-blue-600" />
          <div className="flex-1 bg-yellow-400" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-orange-500" />
          <div className="flex-1 flex flex-col">
            <div className="flex-1 bg-blue-600" />
            <div className="flex-1 bg-yellow-400" />
            <div className="flex-1 bg-red-600" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-orange-500" />
          </div>
        </div>
      </div>

      {/* 2. The White Decorative Framework (Connecting all panels) */}
      <svg viewBox="0 0 100 100" className="w-[115%] h-[115%] opacity-60">
        {/* Outer connection path (The white combined design) */}
        <path
          d="M 50,12 Q 72,12 85,28 Q 95,45 90,65 Q 80,88 50,92 Q 20,88 10,65 Q 5,45 15,28 Q 28,12 50,12"
          fill="none"
          stroke="white"
          strokeWidth="0.4"
          strokeDasharray="1,1.5"
          className="animate-pulse"
        />

        {/* Decorative elements between medallions */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            {/* White petal designs around each panel position */}
            <path d="M 46,10 Q 50,2 54,10" fill="none" stroke="white" strokeWidth="0.3" />
            <circle cx="50" cy="11" r="0.6" fill="white" />
            
            {/* Dotted lines pointing towards center */}
            <line x1="50" y1="13" x2="50" y2="18" stroke="white" strokeWidth="0.1" strokeDasharray="0.5,0.5" />
          </g>
        ))}
        
        {/* Background glow circle */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.05" strokeDasharray="2,2" opacity="0.3" />
      </svg>
    </div>
  );
};
