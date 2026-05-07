import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';

const baseUrl = import.meta.env.BASE_URL || '/';

const jatakaStories = [
  { title: "Vessantara", img: `${baseUrl}images/thorana/panel1.png` },
  { title: "Sama", img: `${baseUrl}images/thorana/panel2.png` },
  { title: "Temiya", img: `${baseUrl}images/thorana/panel3.png` },
  { title: "Mahajanaka", img: `${baseUrl}images/thorana/panel4.png` },
  { title: "Nemi", img: `${baseUrl}images/thorana/panel5.png` },
  { title: "Mahosadha", img: `${baseUrl}images/thorana/panel6.png` },
  { title: "Bhuridatta", img: `${baseUrl}images/thorana/panel7.png` },
  { title: "Sivi", img: `${baseUrl}images/thorana/panel8.png` },
];

export function Pandol() {
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    setIsStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play failed", err));
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Music file path එක public folder එකේ තිබිය යුතුයි */}
      <audio ref={audioRef} src={`${baseUrl}music.mp3`} loop />

      {!isStarted ? (
        <button 
          onClick={handleStart}
          className="z-50 px-12 py-5 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_30px_gold] uppercase tracking-widest hover:scale-105 transition-all"
        >
          තොරණ නැරඹීම ආරම්භ කරන්න
        </button>
      ) : (
        <div className="relative w-full max-w-5xl aspect-square flex items-center justify-center scale-90 md:scale-100">
          
          {/* බෞද්ධ කොඩිය (Flag) */}
          <div className="absolute top-[-5%] z-50">
             <img src={`${baseUrl}images/thorana/flag.png`} className="w-14 md:w-20 h-auto" alt="Buddhist Flag" />
          </div>

          <Aura />

          {/* මැද බුදු පිළිමය */}
          <div className="relative w-[30%] h-[30%] z-30 rounded-full border-4 border-yellow-500 p-1 bg-black shadow-[0_0_80px_rgba(255,215,0,0.5)]">
            <img 
              src={`${baseUrl}images/thorana/buddha.png`} 
              className="w-full h-full object-cover rounded-full" 
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400?text=Buddha')}
            />
          </div>

          {/* ජාතක කතා පැනල් (Medallions) */}
          {jatakaStories.map((story, i) => (
            <Medallion 
              key={i} 
              title={story.title} 
              image={story.img} 
              angle={i * 45} 
              delay={0.5 + (i * 0.1)} 
              patternIndex={i + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
