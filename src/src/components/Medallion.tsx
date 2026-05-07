import React from 'react';
import { getPattern } from './lightPatterns';

interface MedallionProps {
  image: string;
  title: string;
  patternIndex: number;
}

export const Medallion: React.FC<MedallionProps> = ({ image, title, patternIndex }) => {
  const pattern = getPattern(patternIndex);
  const radii = [48, 44, 40]; // SVG එක මැදට එන radii values

  return (
    <div className="relative w-full h-full group cursor-pointer flex items-center justify-center">
      
      {/* Light Pattern Rings (SVG) */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full scale-[1.2] pointer-events-none z-20"
      >
        {pattern.rings.map((ring, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={radii[i]}
            fill="none"
            stroke={ring.color}
            strokeWidth={ring.strokeWidth}
            strokeDasharray={ring.dashArray}
            className={ring.animationClass}
          />
        ))}
      </svg>
      
      {/* Central Image */}
      <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden border-2 border-yellow-500/50 z-10 box-glow transition-transform duration-500 group-hover:scale-105">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="eager" // Preloader එක නිසා මෙතන eager දැම්මම එකපාර පේනවා
        />
        <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
      </div>

      {/* Number Label */}
      <div className="absolute -bottom-2 z-30">
        <span className="px-2 py-0.5 bg-black/80 text-yellow-500 text-[10px] font-bold rounded-full border border-yellow-500/50">
          {title}
        </span>
      </div>
    </div>
  );
};
