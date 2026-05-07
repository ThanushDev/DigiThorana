import React from 'react';
import { motion } from 'framer-motion';
import { getPattern } from './lightPatterns';

export function Medallion({ image, title, angle, delay, patternIndex }: any) {
  const radian = (angle - 90) * (Math.PI / 180);
  const radius = 38; 
  const left = `${50 + radius * Math.cos(radian)}%`;
  const top = `${50 + radius * Math.sin(radian)}%`;
  const pattern = getPattern(patternIndex);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
      animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      className="absolute flex items-center justify-center"
      style={{ left, top, width: '22%', height: '22%' }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated Pattern Rings from Image 2 Logic */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.25] pointer-events-none">
          {pattern.rings.map((ring: any, i: number) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={46 - i * 5}
              fill="none"
              stroke={ring.color}
              strokeWidth={ring.strokeWidth}
              strokeDasharray={ring.dashArray}
              className={ring.animationClass}
            />
          ))}
        </svg>

        {/* Central Image - NO CROPPING */}
        <div className="w-[86%] h-[86%] rounded-full overflow-hidden border-2 border-yellow-500/50 z-10 bg-black box-glow">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="absolute -bottom-8">
        <span className="text-[10px] md:text-xs font-bold text-yellow-500 bg-black/80 px-2 py-0.5 rounded-full border border-yellow-600/40 whitespace-nowrap uppercase">
          {title}
        </span>
      </div>
    </motion.div>
  );
}
