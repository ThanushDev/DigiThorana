import React from 'react';
import { motion } from 'framer-motion';
import { getPattern } from './lightPatterns';

interface MedallionProps {
  image: string;
  title: string;
  angle: number;
  delay: number;
  patternIndex: number;
}

export function Medallion({ image, title, angle, delay, patternIndex }: MedallionProps) {
  const radian = (angle - 90) * (Math.PI / 180);
  const radius = 38; // Constant radius for perfect circle
  const left = `${50 + radius * Math.cos(radian)}%`;
  const top = `${50 + radius * Math.sin(radian)}%`;
  const pattern = getPattern(patternIndex);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
      animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      className="absolute flex flex-col items-center justify-center"
      style={{ left, top, width: '22%', height: '22%' }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated Light Rings */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.2] pointer-events-none">
          {pattern.rings.map((ring, i) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={45 - i * 5}
              fill="none"
              stroke={ring.color}
              strokeWidth={ring.strokeWidth}
              strokeDasharray={ring.dashArray}
              className={ring.animationClass}
            />
          ))}
        </svg>

        {/* Fully Visible Image */}
        <div className="w-[88%] h-[88%] rounded-full overflow-hidden border-2 border-yellow-500 z-10 bg-black box-glow">
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* Label beneath medallion */}
      <div className="absolute -bottom-8 whitespace-nowrap z-20">
        <span className="text-[10px] md:text-xs font-bold text-yellow-400 bg-black/80 px-2 py-0.5 rounded-full border border-yellow-600/50 shadow-lg">
          {title}
        </span>
      </div>
    </motion.div>
  );
}
