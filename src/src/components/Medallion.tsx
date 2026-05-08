import React from 'react';
import { motion } from 'framer-motion';
import { getPattern } from './lightPatterns';

interface MedallionProps {
  image: string; title: string; angle: number; delay: number; patternIndex: number;
}

export function Medallion({ image, title, angle, delay, patternIndex }: MedallionProps) {
  const radian = (angle - 90) * (Math.PI / 180);
  const radius = 33; 
  const left = `${50 + radius * Math.cos(radian)}%`;
  const top = `${50 + radius * Math.sin(radian)}%`;
  const pattern = getPattern(patternIndex);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute w-[22%] h-[22%] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ left, top }}
    >
      {/* Light Rings - Image එකේ ගෑවෙන්නම සකස් කර ඇත */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.05]">
        {pattern.rings.map((ring, i) => (
          <circle
            key={i} cx="50" cy="50" 
            r={48 - i * 3.5} // Radii අඩු කරලා image එකට කිට්ටු කළා
            fill="none" stroke={ring.color} 
            strokeWidth={ring.strokeWidth + 0.5} 
            strokeDasharray={ring.dashArray} 
            className={ring.animationClass} 
          />
        ))}
      </svg>

      {/* Jataka Image - No extra space */}
      <div className="w-[88%] h-[88%] rounded-full overflow-hidden border border-yellow-500/50 bg-black relative z-10">
        <img src={image} className="w-full h-full object-cover" fetchpriority="high" />
      </div>

      <span className="absolute -bottom-7 text-[10px] md:text-[12px] font-bold text-yellow-300 whitespace-nowrap drop-shadow-lg">
        {title}
      </span>
    </motion.div>
  );
}
