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
    <div className="relative w-full h-full flex items-center justify-center group">
      {/* Light Rings - Scaled to fit perfectly around the image */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.1] z-20 pointer-events-none">
        {pattern.rings.map((ring, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={44 - (i * 4)}
            fill="none"
            stroke={ring.color}
            strokeWidth={ring.strokeWidth}
            strokeDasharray={ring.dashArray}
            className={ring.animationClass}
          />
        ))}
      </svg>
      
      {/* Central Image - No Clipping */}
      <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)] z-10 bg-black">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Title Label */}
      <div className="absolute -bottom-2 z-30 bg-black/90 border border-yellow-500 px-2 py-0.5 rounded text-[10px] text-yellow-500 font-bold whitespace-nowrap">
        {title}
      </div>
    </div>
  );
};
