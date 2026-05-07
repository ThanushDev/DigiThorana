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
      className="absolute flex flex-col items-center justify-center"
      style={{ left, top, width: '21%', height: '21%' }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Dynamic Light Rings from your 2nd image logic */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.2] pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          {pattern.rings.map((ring: any, i: number) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={45 - i * 4}
              fill="none"
              stroke={ring.color}
              strokeWidth={ring.strokeWidth}
              strokeDasharray={ring.dashArray}
              className={ring.animationClass}
            />
          ))}
        </svg>

        {/* Image Container - FULL VIEW */}
        <div className="w-[88%] h-[88%] rounded-full overflow-hidden border-2 border-yellow-500/50 z-10 bg-black shadow-[0_0_15px_rgba(234,179,8,0.3)]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="absolute -bottom-8 bg-black/70 px-2 py-0.5 rounded border border-yellow-600/30">
        <span className="text-[9px] md:text-xs font-bold text-yellow-500 whitespace-nowrap uppercase tracking-tighter">
          {title}
        </span>
      </div>
    </motion.div>
  );
}
