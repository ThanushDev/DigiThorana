import React from 'react';
import { motion } from 'framer-motion';

export function Banner() {
  const flagColors = [
    'bg-buddhist-blue',
    'bg-buddhist-yellow',
    'bg-buddhist-red',
    'bg-buddhist-white',
    'bg-buddhist-orange'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="w-full mx-auto relative z-20"
    >
      {/* Ornate Border Wrapper - 🛑 දැන් ලොකුයි! 🛑 */}
      <div className="relative p-1.5 rounded-2xl bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 box-glow shadow-[0_0_60px_rgba(255,215,0,0.4)]">
        <div className="bg-black rounded-xl p-1.5">
          {/* Inner Content Area - 🛑 padding සහ gap වැඩි කරා 🛑 */}
          <div className="bg-gradient-to-b from-orange-600 to-orange-800 rounded flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8 border-2 border-yellow-500/50 relative overflow-hidden">
            {/* Decorative dots background */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '12px 12px'
              }}
            >
            </div>

            {/* Buddhist Flag - 🛑 flag size එක වැඩි කරා 🛑 */}
            <div className="flex h-16 md:h-20 w-32 md:w-40 rounded-lg shadow-lg overflow-hidden border-2 border-white/40 shrink-0 relative z-10">
              {flagColors.map((color, i) =>
                <div key={i} className={`h-full flex-1 ${color}`} />
              )}
              {/* 6th composite stripe */}
              <div className="h-full flex-1 flex flex-col">
                {flagColors.map((color, i) =>
                  <div key={`comp-${i}`} className={`w-full flex-1 ${color}`} />
                )}
              </div>
            </div>

            {/* Text Content - 🛑 font size එක වැඩි කරා 🛑 */}
            <div className="flex-1 text-center md:text-left relative z-10">
              <h1 className="sinhala-text text-2xl md:text-4xl font-bold text-yellow-300 text-glow mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                සුභ වෙසක් මංගල්‍යයක් වේවා!
              </h1>
              <p className="text-sm md:text-lg text-yellow-100 font-medium tracking-wide">
                May the blessings of the Noble Triple Gem be with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
