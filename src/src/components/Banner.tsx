import React from 'react';
import { motion } from 'framer-motion';

export function Banner() {
  const colors = ['bg-buddhist-blue', 'bg-buddhist-yellow', 'bg-buddhist-red', 'bg-buddhist-white', 'bg-buddhist-orange'];

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="w-full">
      <div className="relative p-2 rounded-3xl bg-gradient-to-r from-yellow-700 via-yellow-300 to-yellow-700 shadow-[0_0_60px_rgba(255,215,0,0.3)]">
        <div className="bg-black rounded-2xl p-1.5">
          <div className="bg-gradient-to-b from-orange-700 to-orange-900 rounded-xl flex flex-col md:flex-row items-center p-6 md:p-10 gap-6 border-2 border-yellow-500/50">
            
            <div className="flex h-16 w-32 rounded shadow-2xl overflow-hidden border border-white/30 shrink-0">
              {colors.map((c, i) => <div key={i} className={`h-full flex-1 ${c}`} />)}
              <div className="h-full flex-1 flex flex-col">
                {colors.map((c, i) => <div key={i} className={`w-full flex-1 ${c}`} />)}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-5xl font-bold text-yellow-300 drop-shadow-lg mb-2">සුභ වෙසක් මංගල්‍යයක් වේවා!</h1>
              <p className="text-sm md:text-xl text-yellow-100 opacity-90 font-medium">May the blessings of the Noble Triple Gem be with you.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
