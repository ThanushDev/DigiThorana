import React from 'react';
import { motion } from 'framer-motion';

interface MedallionProps {
  image: string; title: string; x: string; y: string; delay: number;
}

export function Medallion({ image, title, x, y, delay }: MedallionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1 }}
      className="absolute w-[20%] h-[20%] flex flex-col items-center"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      {/* Ornate Frame for each panel */}
      <div className="relative w-full h-full p-1 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-800 shadow-[0_0_15px_rgba(255,215,0,0.4)]">
        {/* Chasing lights around image */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.1] z-10">
          <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 6" className="light-medium" />
        </svg>
        
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-black bg-black">
          <img src={image} className="w-full h-full object-cover" loading="eager" />
        </div>
      </div>
      
      <span className="mt-2 text-[9px] md:text-[11px] font-bold text-yellow-400 sinhala-text text-center leading-tight drop-shadow-md">
        {title}
      </span>
    </motion.div>
  );
}
