import React from 'react';
import { motion } from 'framer-motion';
import { getPattern } from './lightPatterns';

interface MedallionProps {
  image: string; title: string; angle: number; delay: number; patternIndex: number;
}

export function Medallion({ image, title, angle, delay, patternIndex }: MedallionProps) {
  const radian = (angle - 90) * (Math.PI / 180);
  const radius = 33; // කලින් 38 තිබ්බ එක 33 කළා (දැන් රවුම ඇතුළේ මැදට එනවා)
  const left = `${50 + radius * Math.cos(radian)}%`;
  const top = `${50 + radius * Math.sin(radian)}%`;
  const pattern = getPattern(patternIndex);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute w-[20%] h-[20%] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ left, top }}
    >
      {/* ⚪ සුදු පාට සැකිල්ල (White Ornate Skeleton) ⚪ */}
      <div className="absolute inset-0 scale-[1.6] opacity-40 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-none stroke-current">
          <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="48" strokeWidth="0.2" strokeDasharray="1 1" />
        </svg>
      </div>

      {/* Light Rings */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.2]">
        {pattern.rings.map((ring, i) => (
          <circle key={i} cx="50" cy="50" r={46 - i * 4} fill="none" stroke={ring.color} 
          strokeWidth={ring.strokeWidth} strokeDasharray={ring.dashArray} className={ring.animationClass} />
        ))}
      </svg>

      {/* Image with prioritized loading */}
      <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-yellow-500 shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-zinc-900">
        <img src={image} className="w-full h-full object-cover" fetchpriority="high" />
      </div>

      <span className="absolute -bottom-6 text-[9px] md:text-[11px] font-bold text-yellow-300 whitespace-nowrap drop-shadow-lg uppercase tracking-tighter">
        {title}
      </span>
    </motion.div>
  );
}
