import React from 'react';

export const Aura: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
      {/* Buddhist Flag at the very Top */}
      <div className="absolute top-[-10%] z-50 flex flex-col items-center">
        <div className="w-1 h-12 bg-yellow-700/50" />
        <div className="w-10 h-7 border border-white/40 shadow-lg flex">
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

      {/* The White Decorative Framework (SVG) */}
      <svg viewBox="0 0 100 100" className="w-[115%] h-[115%] opacity-70 animate-pulse-slow">
        {/* Connecting Curves between panels */}
        <path
          d="M 50,12 Q 75,12 88,30 Q 98,50 88,70 Q 75,88 50,88 Q 25,88 12,70 Q 2,50 12,30 Q 25,12 50,12"
          fill="none"
          stroke="white"
          strokeWidth="0.4"
          strokeDasharray="1,1"
        />
        
        {/* Outer dotted glow circles */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="0.5,2" />
        
        {/* Decorative elements around each panel position */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
             {/* Small decorative "petals" like in your screenshot */}
             <path d="M 46,10 Q 50,2 54,10" fill="none" stroke="white" strokeWidth="0.3" />
             <circle cx="50" cy="11" r="0.8" fill="white" className="animate-ping" style={{ animationDuration: '3s' }} />
          </g>
        ))}
      </svg>
    </div>
  );
};
