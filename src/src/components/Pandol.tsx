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
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#030303] flex flex-col items-center justify-center overflow-hidden relative">
      <audio ref={audioRef} src={`${baseUrl}vesak-music.mp3`} loop />

      {/* Mute Button */}
      {hasStarted && (
        <button onClick={toggleMute} className="absolute top-4 right-4 md:top-8 md:right-8 z-[100] p-3 bg-yellow-600/20 border-2 border-yellow-500 rounded-full text-yellow-500 hover:bg-yellow-500/40 transition-colors">
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      )}

      <AnimatePresence>
        {!hasStarted ? (
          <motion.button 
            exit={{ opacity: 0, scale: 0.9 }} 
            onClick={start} 
            className="z-50 px-10 py-5 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-black rounded-full shadow-[0_0_60px_rgba(255,215,0,0.6)] border-4 border-yellow-300 text-xl md:text-3xl uppercase tracking-wider"
          >
            තොරණ නැරඹීම ආරම්භ කරන්න
          </motion.button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full flex flex-col items-center justify-center relative">
            
            {/* Top Flag */}
            <div className="z-10 scale-75 md:scale-90 absolute top-[2%]">
              <WavingFlag />
            </div>

            {/* 🎯 PERFECTLY CENTERED MAIN THORANA CONTAINER 🎯 */}
            <div className="relative w-[95vmin] max-w-[800px] aspect-square flex items-center justify-center mx-auto mt-4">
              
              {/* 1. රැස් වළල්ල (Aura) */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <Aura />
              </div>

              {/* 2. මැද බුදුරූපය */}
              <div className="relative w-[34%] h-[34%] z-30 flex items-center justify-center">
                <img 
                  src={`${baseUrl}images/thorana/buddha.png`} 
                  className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,215,0,0.9)]" 
                />
              </div>

              {/* 3. පැනල 8 */}
              {jatakaStories.map((story, index) => (
                <Medallion 
                  key={index} 
                  image={story.image} 
                  title={story.title} 
                  angle={index * 45} 
                  delay={index * 0.15} 
                />
              ))}
            </div>

            {/* Bottom Banner */}
            <div className="absolute bottom-[2%] w-[90%] max-w-[900px] z-40">
              <Banner />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
