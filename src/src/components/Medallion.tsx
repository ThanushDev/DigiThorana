import React from 'react';
import { motion } from 'framer-motion';

interface MedallionProps {
  image: string; title: string; angle: number; delay: number;
}

export function Medallion({ image, title, angle, delay }: MedallionProps) {
  const radian = (angle - 90) * (Math.PI / 180);
  const radius = 33; 
  const left = `${50 + radius * Math.cos(radian)}%`;
  const top = `${50 + radius * Math.sin(radian)}%`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      className="absolute w-[24%] h-[24%] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ left, top }}
    >
      {/* 🎡 ලයිට් සිස්ටම් එක (Creative Light Patterns) */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-110 pointer-events-none">
        {/* පිටත රවුම - දුවන ලයිට් */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="#FFC627" strokeWidth="2" strokeDasharray="4 4" className="animate-chase" />
        
        {/* මැද රවුම - නිවී නිවී පත්තුවෙන ලයිට් */}
        <circle cx="50" cy="50" r="44" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="1 3" className="animate-blink" />
        
        {/* ඇතුළත රවුම - කොළ පාට දුවන ලයිට් */}
        <circle cx="50" cy="50" r="41" fill="none" stroke="#32CD32" strokeWidth="1" strokeDasharray="8 4" className="animate-chase" style={{ animationDirection: 'reverse' }} />
      </svg>

      {/* පැනලයේ Image එක */}
      <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-yellow-500 shadow-[0_0_20px_rgba(255,215,0,0.4)] bg-black relative z-10">
        <img src={image} className="w-full h-full object-cover" fetchpriority="high" />
      </div>

      <span className="absolute -bottom-8 text-[10px] md:text-[13px] font-bold text-yellow-300 whitespace-nowrap drop-shadow-[0_2px_4px_black]">
        {title}
      </span>
    </motion.div>
  );
}
