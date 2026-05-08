import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { SideDecoration } from './SideDecoration';
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

      {/* 🔊 Volume Button (Top Right) 🔊 */}
      {hasStarted && (
        <button onClick={toggleMute} className="absolute top-4 right-4 z-[100] p-2 bg-yellow-600/20 border border-yellow-500 rounded-full text-yellow-500 hover:bg-yellow-600/40 transition-all">
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}

      <AnimatePresence>
        {!hasStarted ? (
          <motion.button exit={{ opacity: 0 }} onClick={start} className="z-50 px-10 py-4 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_30px_gold] border-2 border-yellow-400">
            තොරණ නැරඹීම ආරම්භ කරන්න
          </motion.button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full flex flex-col items-center justify-between py-2 md:py-6 relative">
            
            <div className="z-10 scale-75 md:scale-90">
              <WavingFlag />
            </div>

            {/* Central Structure */}
            <div className="relative w-[80vmin] h-[80vmin] flex items-center justify-center -mt-8">
              
              {/* 🕸️ Background White Skeleton 🕸️ */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20 text-white pointer-events-none z-0">
                <circle cx="50" cy="50" r="33" fill="none" stroke="currentColor" strokeWidth="0.1" />
                {[...Array(8)].map((_, i) => (
                  <line key={i} x1="50" y1="50" x2={50 + 33 * Math.cos(i * 45 * Math.PI / 180)} y2={50 + 33 * Math.sin(i * 45 * Math.PI / 180)} stroke="currentColor" strokeWidth="0.1" />
                ))}
              </svg>

              <Aura />
              
              {/* Buddha Center */}
              <div className="relative w-[28%] h-[28%] z-30 rounded-full border-4 border-yellow-500 overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.4)] bg-black">
                <img src={`${baseUrl}images/thorana/buddha.png`} className="w-full h-full object-cover" />
              </div>

              {jatakaStories.map((story, index) => (
                <Medallion key={index} image={story.image} title={story.title} angle={index * 45} delay={index * 0.1} patternIndex={index + 1} />
              ))}
            </div>

            {/* Bottom Banner */}
            <div className="w-[95%] max-w-[900px] z-40 mb-2">
              <Banner />
            </div>

            {/* Side Ornaments (Reduced scale to fit screen) */}
            <div className="absolute left-[2%] top-[40%] hidden lg:block scale-75"> <SideDecoration type="sun" patternIndex={12} delay={1.5} /> </div>
            <div className="absolute right-[2%] top-[40%] hidden lg:block scale-75"> <SideDecoration type="moon" patternIndex={14} delay={1.5} /> </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
