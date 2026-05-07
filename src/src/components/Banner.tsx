import React from 'react';
import { motion } from 'framer-motion';
export function Banner() {
  const flagColors = [
  'bg-buddhist-blue',
  'bg-buddhist-yellow',
  'bg-buddhist-red',
  'bg-buddhist-white',
  'bg-buddhist-orange'];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 2,
        duration: 0.8
      }}
      className="w-full max-w-2xl mx-auto mt-8 md:mt-12 relative z-20">
      
      {/* Ornate Border Wrapper */}
      <div className="relative p-1 rounded-xl bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 box-glow">
        <div className="bg-black rounded-lg p-1">
          {/* Inner Content Area */}
          <div className="bg-gradient-to-b from-orange-600 to-orange-800 rounded flex flex-col md:flex-row items-center p-3 md:p-4 gap-4 border border-yellow-500/50 relative overflow-hidden">
            {/* Decorative dots background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '10px 10px'
              }}>
            </div>

            {/* Buddhist Flag */}
            <div className="flex h-12 md:h-16 w-24 md:w-32 rounded shadow-lg overflow-hidden border border-white/20 shrink-0 relative z-10">
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

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left relative z-10">
              <h1 className="sinhala-text text-xl md:text-3xl font-bold text-yellow-300 text-glow mb-1 drop-shadow-md">
                සුභ වෙසක් මංගල්‍යයක් වේවා!
              </h1>
              <p className="text-xs md:text-sm text-yellow-100 font-medium tracking-wide">
                May the blessings of the Noble Triple Gem be with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>);

}