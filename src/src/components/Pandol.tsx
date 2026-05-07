import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medallion } from './Medallion';
import { Aura } from './Aura';
import { Banner } from './Banner';
import { SideDecoration } from './SideDecoration';
import { WavingFlag } from './WavingFlag';

const baseUrl = import.meta.env.BASE_URL || '/';

const panels = [
  { id: 1, title: '01', image: `${baseUrl}images/thorana/panel1.png`, description: 'ඡද්දන්ත ජාතකය' },
  { id: 2, title: '02', image: `${baseUrl}images/thorana/panel2.png`, description: 'මහාජනක ජාතකය' },
  { id: 3, title: '03', image: `${baseUrl}images/thorana/panel3.png`, description: 'විධුර පණ්ඩිත ජාතකය' },
  { id: 4, title: '04', image: `${baseUrl}images/thorana/panel4.png`, description: 'වෙස්සන්තර ජාතකය' },
  { id: 5, title: '05', image: `${baseUrl}images/thorana/panel5.png`, description: 'සාම ජාතකය' },
  { id: 6, title: '06', image: `${baseUrl}images/thorana/panel6.png`, description: 'මහෞෂධ ජාතකය' },
  { id: 7, title: '07', image: `${baseUrl}images/thorana/panel7.png`, description: 'සීවි ජාතකය' },
  { id: 8, title: '08', image: `${baseUrl}images/thorana/panel8.png`, description: 'නිමි ජාතකය' },
];

export const Pandol: React.FC = () => {
  const [activeStory, setActiveStory] = useState<typeof panels[0] | null>(null);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio පටන් ගන්න සහ තොරණ පෙන්වන්න
  const startThorana = () => {
    setIsReady(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  return (
    <div className="h-screen w-full bg-black overflow-hidden relative flex flex-col items-center justify-center">
      {/* Background Audio */}
      <audio ref={audioRef} src={`${baseUrl}vesak-music.mp3`} loop />

      {!isReady ? (
        <div className="flex flex-col items-center gap-6">
          <div className="text-yellow-500 text-2xl animate-pulse sinhala-text font-bold">දිජිටල් වෙසක් තොරණ</div>
          <button 
            onClick={startThorana}
            className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:scale-110 transition-transform shadow-[0_0_20px_rgba(234,179,8,0.5)]"
          >
            තොරණ නරඹන්න
          </button>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="relative w-full h-full max-w-[90vh] aspect-square flex items-center justify-center"
        >
          <Aura />
          <WavingFlag />

          {/* Central Buddha */}
          <div className="relative z-30 w-[28%] h-[28%] rounded-full border-4 border-yellow-500 p-1 box-glow bg-black overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.3)]">
            <img src={`${baseUrl}images/thorana/buddha.png`} alt="Buddha" className="w-full h-full object-cover rounded-full" />
          </div>

          {/* Medallions */}
          <div className="absolute inset-0">
            {panels.map((panel, index) => {
              const angle = (index * 45) - 90;
              const radius = 38;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div key={panel.id} className="absolute w-[18%] h-[18%]" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }} onClick={() => setActiveStory(panel)}>
                  <Medallion image={panel.image} title={panel.title} patternIndex={index + 1} />
                </div>
              );
            })}
          </div>

          {/* Decorations */}
          <div className="absolute top-[5%] left-0"> <SideDecoration type="sun" patternIndex={2} delay={0.5} /> </div>
          <div className="absolute top-[5%] right-0"> <SideDecoration type="moon" patternIndex={9} delay={0.7} /> </div>
          
          {/* Bottom Banner */}
          <div className="absolute bottom-[2%] w-[90%] left-1/2 -translate-x-1/2">
            <Banner />
          </div>
        </motion.div>
      )}

      {/* Story Modal */}
      <AnimatePresence>
        {activeStory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-zinc-900 border border-yellow-500 p-6 rounded-2xl max-w-sm w-full text-center">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4 sinhala-text">{activeStory.title}</h2>
              <img src={activeStory.image} className="w-full h-40 object-cover rounded-lg mb-4 border border-yellow-500/30" />
              <p className="text-gray-300 mb-6 sinhala-text">{activeStory.description}</p>
              <button onClick={() => setActiveStory(null)} className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-full">වසා දමන්න</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
