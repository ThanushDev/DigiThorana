import React from 'react';
import { getPattern } from './lightPatterns';

interface MedallionProps {
  image: string;
  title: string;
  patternIndex: number;
}

export const Medallion: React.FC<MedallionProps> = ({ image, title, patternIndex }) => {
  const pattern = getPattern(patternIndex);

  return (
    <div className="relative w-full h-full group cursor-pointer flex items-center justify-center">
      {/* White Pattern Outer Ring */}
      <div className="absolute inset-0 rounded-full border border-white/30 border-dashed animate-[spin_10s_linear_infinite]" />

      {/* Light System (SVG) - හරියටම මැදට position කර ඇත */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-110 z-20">
        {pattern.rings.map((ring, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={42 - (i * 4)}
            fill="none"
            stroke={ring.color}
            strokeWidth={ring.strokeWidth}
            strokeDasharray={ring.dashArray}
            className={ring.animationClass}
          />
        ))}
      </svg>
      
      {/* Image Container - හරියටම Light Rings මැදට */}
      <div className="relative w-[65%] h-[65%] rounded-full overflow-hidden border-2 border-yellow-500/50 z-10 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Label */}
      <div className="absolute -bottom-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="px-2 py-0.5 bg-black text-yellow-500 text-[10px] font-bold rounded border border-yellow-500/50">
          {title}
        </span>
      </div>
    </div>
  );
};
