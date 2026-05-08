import React from 'react';
import { motion } from 'framer-motion';

interface MedallionProps {
  image: string; title: string; angle: number; delay: number;
}

export function Medallion({ image, title, angle, delay }: MedallionProps) {
  const radian = (angle - 90) * (Math.PI / 180);
  const radius = 35; // Position on the frame
  const left = `${50 + radius * Math.cos(radian)}%`;
  const top = `${50 + radius * Math.sin(radian)}%`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="absolute w-[22%] h-[22%] flex items-center justify-center z-20"
      style={{ left, top, transform: 'translate(-50%, -50%)' }}
    >
      {/* Light System */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.15]">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#FFC627" strokeWidth="2.5" strokeDasharray="4 8" className="animate-flow" />
        <circle cx="50" cy="50" r="44" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="1 5" strokeLinecap="round" className="animate-flow-fast" />
      </svg>

      {/* Image centered inside lights */}
      <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-yellow-500 bg-[#111] shadow-[0_0_15px_rgba(0,0,0,0.8)]">
        <img 
          src={image} 
          className="w-full h-full object-cover" 
          loading="eager" 
          fetchpriority="high"
        />
      </div>

      <span className="absolute -bottom-7 text-[10px] md:text-[12px] font-bold text-yellow-200 whitespace-nowrap bg-black/60 px-2 py-0.5 rounded shadow-lg">
        {title}
      </span>
    </motion.div>
  );
}
