import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';

const stories = [
  "Vessantara", "Sama", "Temiya", "Mahajanaka", 
  "Nemi", "Mahosadha", "Bhuridatta", "Sivi"
];

export function Pandol() {
  const [active, setActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startThorana = () => {
    setActive(true);
    if (audioRef.current) audioRef.current.play().catch(e => console.log("Music Error:", e));
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Background Music - ඔයාගේ path එක මෙතනට දාන්න */}
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />

      {!active ? (
        <button 
          onClick={startThorana}
          className="z-50 px-10 py-4 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_20px_gold] hover:scale-110 transition-transform"
        >
          තොරණ නරඹන්න (Play Music)
        </button>
      ) : (
        <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
          {/* Main Lighting & Structure */}
          <Aura />

          {/* Center Buddha */}
          <div className="relative w-[32%] h-[32%] z-30 rounded-full border-4 border-yellow-500 p-1 bg-black shadow-[0_0_40px_rgba(255,215,0,0.5)]">
            <img 
              src="https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=400" 
              alt="Buddha" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>

          {/* Panels */}
          {stories.map((name, i) => (
            <Medallion key={i} title={name} angle={i * 45} delay={i * 0.1} />
          ))}
        </div>
      )}
    </div>
  );
}
