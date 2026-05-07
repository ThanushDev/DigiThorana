import React from 'react';
import { motion } from 'framer-motion';

export function Medallion({ image, title, angle, delay }: any) {
  const radian = (angle - 90) * (Math.PI / 180);
  const radius = 38; 
  const left = `${50 + radius * Math.cos(radian)}%`;
  const top = `${50 + radius * Math.sin(radian)}%`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring' }}
      className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{ left, top, width: '22%', height: '22%' }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated Light Rings for each panel */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[1.3]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="gold" strokeWidth="1" strokeDasharray="2 4" className="animate-spin" style={{ animationDuration: '8s' }} />
          <circle cx="50" cy="50" r="42" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" className="animate-spin" style={{ animationDuration: '12s', direction: 'reverse' }} />
        </svg>

        {/* Panel Image */}
        <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-yellow-500 z-10 bg-gray-900 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
          <img 
            src={image || `https://picsum.photos/seed/${angle}/200`} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      
      <div className="absolute -bottom-8 bg-black/80 px-2 py-0.5 rounded border border-yellow-600/50">
        <span className="text-[9px] font-bold text-yellow-500 whitespace-nowrap uppercase tracking-tighter italic">
          {title}
        </span>
      </div>
    </motion.div>
  );
}
