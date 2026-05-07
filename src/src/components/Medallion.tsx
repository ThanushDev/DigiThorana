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
      {/* Light Rings - පින්තූරයට වඩා චුට්ටක් ලොකුවට හරියටම උඩින් වැටෙනවා */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.12] z-20 pointer-events-none">
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
      
      {/* Central Image - හරියටම මැදට */}
      <div className="relative w-[75%] h-[75%] rounded-full overflow-hidden border-2 border-yellow-500/50 z-10 box-glow bg-black">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
      </div>
    </div>
  );
};
