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
    <div className="relative w-full h-full group flex items-center justify-center">
      {/* Outer Rotating White Glow */}
      <div className="absolute inset-[-10%] rounded-full border border-white/20 border-dashed animate-spin-slow opacity-50" />

      {/* Image Container - Strictly centered */}
      <div className="relative w-[75%] h-[75%] rounded-full overflow-hidden border-2 border-yellow-500/50 z-10 box-glow bg-black">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Light Rings - Positioned exactly over the image */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.15] z-20 pointer-events-none">
        {pattern.rings.map((ring, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={40 - (i * 4)}
            fill="none"
            stroke={ring.color}
            strokeWidth={ring.strokeWidth}
            strokeDasharray={ring.dashArray}
            className={ring.animationClass}
          />
        ))}
      </svg>

      {/* Caption */}
      <div className="absolute -bottom-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="px-2 py-0.5 bg-black/80 text-yellow-500 text-[10px] font-bold rounded-full border border-yellow-500/50 shadow-lg">
          {title}
        </span>
      </div>
    </div>
  );
};
