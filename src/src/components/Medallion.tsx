import React from 'react';
import { motion } from 'framer-motion';
import { getPattern } from './lightPatterns';

interface MedallionProps {
  image: string; title: string; angle: number; delay: number; patternIndex: number;
}

export function Medallion({ image, title, angle, delay, patternIndex }: MedallionProps) {
  const radian = (angle - 90) * (Math.PI / 180);
  const radius = 38;
  const left = `${50 + radius * Math.cos(radian)}%`;
  const top = `${50 + radius * Math.sin(radian)}%`;
  const pattern = getPattern(patternIndex);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute w-[22%] h-[22%] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{ left, top }}
    >
      {/* Light Rings */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.25] pointer-events-none">
        {pattern.rings.map((ring, i) => (
          <circle
            key={i} cx="50" cy="50" r={46 - i * 4}
            fill="none" stroke={ring.color} strokeWidth={ring.strokeWidth}
            strokeDasharray={ring.dashArray} className={ring.animationClass}
          />
        ))}
      </svg>

      {/* Image */}
      <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-yellow-600 z-10 box-glow">
        <img src={image} className="w-full h-full object-cover" alt={title} />
      </div>

      <div className="absolute -bottom-8 w-[150%] text-center">
        <span className="text-[10px] md:text-sm font-bold text-yellow-400 drop-shadow-md">{title}</span>
      </div>
    </motion.div>
  );
}
