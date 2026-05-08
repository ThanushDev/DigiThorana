import React from 'react';
import { motion } from 'framer-motion';

interface MedallionProps {
  image: string; title: string; x: string; y: string; delay: number; size?: string;
}

export function Medallion({ image, title, x, y, delay, size = "w-[18%] h-[18%]" }: MedallionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 1 }}
      className={`absolute ${size} flex flex-col items-center z-20`}
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      {/* පැනලයේ පිටත ලයිට් සහ Frame එක */}
      <div className="relative w-full aspect-square p-1 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-800 shadow-[0_0_20px_rgba(255,215,0,0.5)]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.15] z-10">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#FFD700" strokeWidth="2" strokeDasharray="4 8" className="animate-light-slow" />
          <circle cx="50" cy="50" r="44" fill="none" stroke="white" strokeWidth="1" strokeDasharray="1 4" className="animate-light-fast" />
        </svg>
        
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-black bg-black">
          <img src={image} className="w-full h-full object-cover" loading="eager" />
        </div>
      </div>
      
      <span className="mt-2 text-[9px] md:text-[11px] font-bold text-yellow-300 sinhala-text text-center bg-black/60 px-2 rounded-md border border-yellow-900/50">
        {title}
      </span>
    </motion.div>
  );
}
