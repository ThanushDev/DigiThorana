import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medallion } from './Medallion';
import { Aura } from './Aura';
import { Banner } from './Banner';

const baseUrl = import.meta.env.BASE_URL || '/';
const panels = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `0${i + 1}`,
  image: `${baseUrl}images/thorana/panel${i + 1}.png`,
  description: `මෙය ${i + 1} වන පැනලයට අදාළ ජාතක කතාවයි.`
}));

export const Pandol: React.FC = () => {
  const [activeStory, setActiveStory] = useState<typeof panels[0] | null>(null);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startThorana = () => {
    setIsReady(true);
    audioRef.current?.play().catch(console.error);
  };

  return (
    <div className="h-screen w-full bg-black overflow-hidden relative flex items-center justify-center">
      <audio ref={audioRef} src={`${baseUrl}vesak-music.mp3`} loop />

      {!isReady ? (
        <button onClick={startThorana} className="z-50 px-10 py-4 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_30px_rgba(202,138,4,0.4)] hover:scale-105 transition-all">
          තොරණ නැරඹීම ආරම්භ කරන්න
        </button>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-full max-w-[85vh] aspect-square flex items-center justify-center scale-90 md:scale-100">
          
          <Aura />

          {/* Buddha Center */}
          <div className="relative z-30 w-[30%] h-[30%] group">
            <div className="absolute inset-[-20%] bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-yellow-500 p-2 bg-black overflow-hidden shadow-[0_0_60px_rgba(234,179,8,0.4)]">
              <img src={`${baseUrl}images/thorana/buddha.png`} alt="Buddha" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Medallions around center */}
          <div className="absolute inset-0">
            {panels.map((panel, index) => {
              const angle = (index * 45) - 90;
              const radius = 38;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div key={panel.id} className="absolute w-[20%] h-[20%]" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }} onClick={() => setActiveStory(panel)}>
                  <Medallion image={panel.image} title={panel.title} patternIndex={index + 1} />
                </div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="absolute bottom-[2%] w-[90%] left-1/2 -translate-x-1/2 z-40">
            <Banner />
          </div>
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {activeStory && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="bg-zinc-900 border border-yellow-500 p-6 rounded-3xl max-w-sm w-full text-center shadow-2xl">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">ජාතක කතාව {activeStory.title}</h2>
              <img src={activeStory.image} className="w-full h-44 object-cover rounded-xl mb-4 border border-yellow-500/20" />
              <p className="text-gray-300 text-sm mb-6">{activeStory.description}</p>
              <button onClick={() => setActiveStory(null)} className="w-full py-3 bg-yellow-500 text-black font-bold rounded-full">වසා දමන්න</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
