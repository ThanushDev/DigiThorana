import React from 'react';
import { motion } from 'framer-motion';

interface MedallionProps {
  image: string; title: string; angle: number; delay: number;
}

export function Medallion({ image, title, angle, delay }: MedallionProps) {
  // ගණිතමය වශයෙන් හරියටම රවුමක මැදට ගැනීම
  const radian = (angle - 90) * (Math.PI / 180);
  const radius = 34; // කේන්ද්‍රයේ සිට දුර
  const left = `${50 + radius * Math.cos(radian)}%`;
  const top = `${50 + radius * Math.sin(radian)}%`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      className="absolute w-[22%] h-[22%] flex items-center justify-center z-20"
      style={{ left, top, transform: 'translate(-50%, -50%)' }} // මේක අනිවාර්යයි Center වෙන්න
    >
      {/* 🎡 ලයිට් සිස්ටම් (Tight Fit) 🎡 */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.12] pointer-events-none">
        
        {/* පිටත රවුම: දුවන ලයිට් */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="#FFC627" strokeWidth="2" strokeDasharray="6 4" className="light-chase" />
        
        {/* මැද රවුම: බල්බ් වගේ හැඩය (Dotted Bulbs) */}
        <circle cx="50" cy="50" r="44" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="0 8" strokeLinecap="round" className="light-chase-reverse" />
        
        {/* ඇතුළත රවුම: වේගවත් කොළ ලයිට් */}
        <circle cx="50" cy="50" r="41" fill="none" stroke="#32CD32" strokeWidth="1.5" strokeDasharray="12 6" className="light-chase-fast" />
      </svg>

      {/* 🖼️ Image Panel */}
      <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-yellow-500 bg-black relative z-10 shadow-[0_0_15px_rgba(255,215,0,0.6)]">
        <img src={image} className="w-full h-full object-cover" fetchpriority="high" />
      </div>

      {/* Title */}
      <span className="absolute -bottom-7 text-[11px] md:text-[13px] font-bold text-yellow-300 drop-shadow-[0_3px_5px_rgba(0,0,0,1)] uppercase bg-black/50 px-2 rounded-full">
        {title}
      </span>
    </motion.div>
  );
}
