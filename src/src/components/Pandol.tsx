import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { WavingFlag } from './WavingFlag';

const jatakaStories = [
  { title: 'Vessantara', image: '/images/thorana/panel1.png' },
  { title: 'Sama', image: '/images/thorana/panel2.png' },
  { title: 'Temiya', image: '/images/thorana/panel3.png' },
  { title: 'Mahajanaka', image: '/images/thorana/panel4.png' },
  { title: 'Nemi', image: '/images/thorana/panel5.png' },
  { title: 'Mahosadha', image: '/images/thorana/panel6.png' },
  { title: 'Bhuridatta', image: '/images/thorana/panel7.png' },
  { title: 'Sivi', image: '/images/thorana/panel8.png' },
];

export function Pandol() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative font-sans">
      {/* Background Music */}
      <audio ref={audioRef} src="/vesak-music.mp3" loop />

      {!isPlaying ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="z-50 text-center">
          <h1 className="text-yellow-500 text-3xl font-bold mb-8">ඩිජිටල් වෙසක් තොරණ 2026</h1>
          <button 
            onClick={handleStart}
            className="px-12 py-4 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-500 transition-all shadow-[0_0_30px_rgba(234,179,8,0.5)] uppercase tracking-widest"
          >
            තොරණ නැරඹීම ආරම්භ කරන්න
          </button>
        </motion.div>
      ) : (
        <div className="relative w-full max-w-5xl aspect-square flex items-center justify-center">
          <WavingFlag />
          
          {/* Main Structure & Combined Aura */}
          <Aura />

          {/* Central Buddha with Realistic Lighting */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-[30%] h-[30%] z-30 rounded-full border-4 border-yellow-500 p-1 bg-black shadow-[0_0_60px_rgba(255,215,0,0.4)]"
          >
            <img src="/images/thorana/buddha.png" alt="Buddha" className="w-full h-full object-cover rounded-full" />
          </motion.div>

          {/* Medallions (Panels) connected by Aura */}
          {jatakaStories.map((story, index) => (
            <Medallion
              key={index}
              image={story.image}
              title={story.title}
              angle={index * 45}
              delay={0.5 + index * 0.15}
              patternIndex={index + 1}
            />
          ))}

          {/* Bottom Banner */}
          <div className="absolute bottom-[2%] w-[90%] left-1/2 -translate-x-1/2 z-40">
            <Banner />
          </div>
        </div>
      )}
    </div>
  );
}
