import React from 'react';

interface MedallionProps {
  image: string;
  title: string;
  isActive?: boolean;
}

export const Medallion: React.FC<MedallionProps> = ({ image, title, isActive }) => {
  return (
    <div className={`relative w-full h-full group cursor-pointer ${isActive ? 'scale-110' : ''}`}>
      {/* Outer Glow Ring */}
      <div className={`absolute -inset-2 rounded-full blur-md transition-opacity duration-500 ${isActive ? 'bg-yellow-500/40 opacity-100' : 'bg-blue-500/20 opacity-0 group-hover:opacity-100'}`} />
      
      {/* Rotating Border Pattern */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
        <circle
          cx="50%"
          cy="50%"
          r="48%"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className={`text-yellow-500/30 ${isActive ? 'light-ring-fast' : 'light-ring-slow'}`}
          strokeDasharray="4 8"
        />
        <circle
          cx="50%"
          cy="50%"
          r="44%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-white/20 ${isActive ? 'light-ring-very-fast' : 'light-ring-medium'}`}
          strokeDasharray="2 4"
        />
      </svg>

      {/* Image Container */}
      <div className={`relative w-full h-full rounded-full overflow-hidden border-2 transition-all duration-500 ${isActive ? 'border-yellow-400 box-glow scale-105' : 'border-white/20 group-hover:border-white/40'}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay for inactive states */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-40 group-hover:opacity-0'}`} />
      </div>

      {/* Story Label (Hidden by default, shown on hover/active) */}
      <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 pointer-events-none ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
        <span className="px-3 py-1 bg-black/80 text-yellow-500 text-xs font-bold rounded-full border border-yellow-500/30 sinhala-text">
          {title}
        </span>
      </div>
    </div>
  );
};
