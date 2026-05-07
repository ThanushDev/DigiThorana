import React from 'react';
import { motion } from 'framer-motion';
export function WavingFlag() {
  const colors = ['#005EB8', '#FFC627', '#DA291C', '#FFFFFF', '#F2A900'];
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 0.3,
        duration: 0.8
      }}
      className="relative flex items-end justify-center mb-2 md:mb-4"
      aria-label="Buddhist flag">
      
      {/* Flag pole */}
      <div className="relative">
        {/* Pole top ornament */}
        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.8)] mx-auto mb-[-2px]"></div>
        {/* Pole */}
        <div className="w-1 md:w-1.5 h-20 md:h-28 bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 rounded-full shadow-[0_0_8px_rgba(255,200,0,0.6)] mx-auto"></div>
      </div>

      {/* Waving flag attached to pole */}
      <div className="absolute left-1/2 top-1 md:top-2 ml-0.5 md:ml-1 origin-left">
        <div className="flag-wave">
          <div className="flex h-12 w-20 md:h-16 md:w-28 rounded-r shadow-[0_4px_15px_rgba(0,0,0,0.6)] overflow-hidden border border-yellow-400/40 relative">
            {colors.map((color, i) =>
            <div
              key={i}
              className="h-full flex-1"
              style={{
                backgroundColor: color
              }} />

            )}
            {/* 6th composite stripe */}
            <div className="h-full flex-1 flex flex-col">
              {colors.map((color, i) =>
              <div
                key={`c-${i}`}
                className="w-full flex-1"
                style={{
                  backgroundColor: color
                }} />

              )}
            </div>
            {/* Subtle shine overlay to enhance wave feel */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/0 via-white/20 to-white/0 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </motion.div>);

}