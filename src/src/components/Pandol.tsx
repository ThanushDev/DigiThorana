import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medallion } from './Medallion';
import { Aura } from './Aura';
import { Banner } from './Banner';

const baseUrl = import.meta.env.BASE_URL || '/';
const panels = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `ජාතක කතාව 0${i + 1}`,
  image: `${baseUrl}images/thorana/panel${i + 1}.png`
}));

export const Pandol: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <div className="h-screen w-full bg-black overflow-hidden relative flex items-center justify-center">
      <audio ref={audioRef} src={`${baseUrl}vesak-music.mp3`} loop />

      {!isReady ? (
        <div className="flex flex-col items-center gap-6 z-50">
           <h1 className="text-yellow-500 text-3xl font-bold animate-pulse">ඩිජිටල් වෙසක් තොරණ</h1>
           <button onClick={() => { setIsReady(true); audioRef.current?.play(); }} className="px-10 py-4 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-500 transition-all shadow-2xl">නැරඹීම ආරම්භ කරන්න</button>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-full max-w-[90vh] aspect-square flex items-center justify-center scale-95 md:scale-100">
          
          <Aura />

          {/* Central Buddha - Perfectly Centered */}
          <div className="relative z-30 w-[30%] h-[30%] rounded-full border-4 border-yellow-500 p-1 bg-black overflow-hidden shadow-[0_0_60px_rgba(234,179,8,0.5)]">
            <img src={`${baseUrl}images/thorana/buddha.png`} alt="Buddha" className="w-full h-full object-cover rounded-full" />
          </div>

          {/* Medallions (Panels) - Full view */}
          <div className="absolute inset-0">
            {panels.map((panel, index) => {
              const angle = (index * 45) - 90;
              const radius = 38;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div key={panel.id} className="absolute w-[22%] h-[22%]" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                  <Medallion image={panel.image} title={panel.title} patternIndex={index + 1} />
                </div>
              );
            })}
          </div>

          {/* Footer Banner */}
          <div className="absolute bottom-[2%] w-[90%] left-1/2 -translate-x-1/2 z-40">
            <Banner />
          </div>
        </motion.div>
      )}
    </div>
  );
};
