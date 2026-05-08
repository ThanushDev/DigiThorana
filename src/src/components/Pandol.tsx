import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { WavingFlag } from './WavingFlag';

const baseUrl = import.meta.env.BASE_URL || '/';

const jatakaStories = [
  { title: 'Vessantara', image: `${baseUrl}images/thorana/panel1.png` },
  { title: 'Sama', image: `${baseUrl}images/thorana/panel2.png` },
  { title: 'Temiya', image: `${baseUrl}images/thorana/panel3.png` },
  { title: 'Mahajanaka', image: `${baseUrl}images/thorana/panel4.png` },
  { title: 'Nemi', image: `${baseUrl}images/thorana/panel5.png` },
  { title: 'Mahosadha', image: `${baseUrl}images/thorana/panel6.png` },
  { title: 'Bhuridatta', image: `${baseUrl}images/thorana/panel7.png` },
  { title: 'Sivi', image: `${baseUrl}images/thorana/panel8.png` },
];

export default function Pandol() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const start = () => {
    setHasStarted(true);
    if (audioRef.current) audioRef.current.play();
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
      <audio ref={audioRef} src={`${baseUrl}vesak-music.mp3`} loop />

      {hasStarted && (
        <button onClick={toggleMute} className="absolute top-6 right-6 z-[100] p-3 bg-yellow-600/20 border border-yellow-500 rounded-full text-yellow-500 shadow-lg">
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      )}

      <AnimatePresence>
        {!hasStarted ? (
          <motion.button exit={{ opacity: 0 }} onClick={start} className="z-50 px-12 py-5 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_40px_gold] border-2 border-yellow-400 text-xl">
            තොරණ නැරඹීම ආරම්භ කරන්න
          </motion.button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full flex flex-col items-center justify-between py-2 relative">
            
            <div className="z-10 scale-75 md:scale-90 mt-2">
              <WavingFlag />
            </div>

            {/* Main Center Container - සියල්ල එකම තැනක */}
            <div className="relative w-[88vmin] h-[88vmin] flex items-center justify-center">
              
              {/* 1. රැස් වළල්ල (Aura) - පිටුපස */}
              <div className="absolute inset-0 z-0">
                <Aura />
              </div>

              {/* 2. මැද බුදුරූපය - Aura එකට උඩින් */}
              <div className="relative w-[32%] h-[32%] z-30 flex items-center justify-center">
                <img 
                  src={`${baseUrl}images/thorana/buddha.png`} 
                  className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]" 
                />
              </div>

              {/* 3. පැනල 8 - එකම කේන්ද්‍රයක */}
              {jatakaStories.map((story, index) => (
                <Medallion 
                  key={index} 
                  image={story.image} 
                  title={story.title} 
                  angle={index * 45} 
                  delay={index * 0.1} 
                  patternIndex={index + 1} 
                />
              ))}
            </div>

            {/* Bottom Banner */}
            <div className="w-[95%] max-w-[800px] z-40 mb-4 scale-90 md:scale-100">
              <Banner />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
