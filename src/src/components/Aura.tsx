import React from 'react';

export const Aura: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
      {/* Buddhist Flag at the Top */}
      <div className="absolute top-[-12%] z-50 flex flex-col items-center">
        <div className="w-1 h-16 bg-yellow-600" />
        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600 border border-white/20 shadow-lg" />
      </div>

      {/* Main Decorative White Dotted Frame */}
      <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] opacity-60">
        <defs>
          <radialGradient id="goldGradient">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
        </defs>
        
        {/* Outer connecting curves (White Design) */}
        <path
          d="M 50,10 Q 70,10 85,25 Q 95,45 90,65 Q 80,90 50,95 Q 20,90 10,65 Q 5,45 15,25 Q 30,10 50,10"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray="1,2"
          className="animate-pulse"
        />

        {/* Small Decorative Circles between panels */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <circle cx="50" cy="12" r="1.5" fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="0.5,0.5" />
            <path d="M 45,8 Q 50,2 55,8" fill="none" stroke="white" strokeWidth="0.2" />
          </g>
        ))}
      </svg>
    </div>
  );
};
