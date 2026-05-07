import React from 'react';
import { motion } from 'framer-motion';

export function Banner() {
  const flagColors = ['bg-buddhist-blue', 'bg-buddhist-yellow', 'bg-buddhist-red', 'bg-buddhist-white', 'bg-buddhist-orange'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative p-1 rounded-2xl bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 box-glow shadow-[0_0_50px_rgba(255,215,0,0.4)]"
    >
      <div className="bg-black rounded-xl p-1">
        <div className="bg-gradient-to-b from-orange-600 to-orange-800 rounded-lg flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 border-2 border-yellow-500/50">
          
          <div className="flex h-16 md:h-20 w-32 md:w-40 rounded shadow-lg overflow-hidden border-2 border-white/40 shrink-0">
            {flagColors.map((color, i) => <div key={i} className={`h-full flex-1 ${color}`} />)}
            <div className="h-full flex-1 flex flex-col">
              {flagColors.map((color, i) => <div key={`c-${i}`} className={`w-full flex-1 ${color}`} />)}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-5xl font-bold text-yellow-300 drop-shadow-lg mb-2">සුභ වෙසක් මංගල්‍යයක් වේවා!</h1>
            <p className="text-sm md:text-xl text-yellow-100">May the blessings of the Noble Triple Gem be with you.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
