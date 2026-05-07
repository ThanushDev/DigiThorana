import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Medallion } from './Medallion';
import { Aura } from './Aura';
import { Banner } from './Banner';

const baseUrl = import.meta.env.BASE_URL || '/';

export const Pandol: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <div className="h-screen w-full bg-black overflow-hidden relative flex items-center justify-center">
      <audio ref={audioRef} src={`${baseUrl}vesak-music.mp3`} loop />

      {!isReady ? (
        <button onClick={() => { setIsReady(true); audioRef.current?.play(); }} className="z-50 px-8 py-3 bg-yellow-600 text-white font-bold rounded-full">
          තොරණ ආරම්භ කරන්න
        </button>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-full max-w-[85vh] aspect-square flex items-center justify-center">
          
          <Aura />

          {/* Buddha with specific position */}
          <div className="relative z-30 w-[30%] h-[30%] rounded-full border-4 border-yellow-500 p-1 bg-black overflow-hidden box-glow shadow-[0_0_50px_rgba(234,179,8,0.3)]">
            <img src={`${baseUrl}images/thorana/buddha.png`} alt="Buddha" className="w-full h-full object-cover rounded-full" />
          </div>

          {/* Medallions in circle */}
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, index) => {
              const angle = (index * 45) - 90;
              const radius = 38;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div key={index} className="absolute w-[20%] h-[20%]" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                  <Medallion image={`${baseUrl}images/thorana/panel${index + 1}.png`} title={`0${index + 1}`} patternIndex={index + 1} />
                </div>
              );
            })}
          </div>

          {/* Banner at bottom */}
          <div className="absolute bottom-[2%] w-[90%] left-1/2 -translate-x-1/2 z-40">
            <Banner />
          </div>
        </motion.div>
      )}
    </div>
  );
};
