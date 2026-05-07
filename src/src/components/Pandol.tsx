import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';

const baseUrl = import.meta.env.BASE_URL || '/';

const jatakaStories = [
  { title: "වෙස්සන්තර", img: `${baseUrl}images/thorana/panel1.png` },
  { title: "සාම", img: `${baseUrl}images/thorana/panel2.png` },
  { title: "තේමිය", img: `${baseUrl}images/thorana/panel3.png` },
  { title: "මහාජනක", img: `${baseUrl}images/thorana/panel4.png` },
  { title: "නේමි", img: `${baseUrl}images/thorana/panel5.png` },
  { title: "මහෝෂධ", img: `${baseUrl}images/thorana/panel6.png` },
  { title: "භූරිදත්ත", img: `${baseUrl}images/thorana/panel7.png` },
  { title: "සීවි", img: `${baseUrl}images/thorana/panel8.png` },
];

export function Pandol() {
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startThorana = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Music error: ", e));
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* 1. මියුසික් ෆයිල් එක - music.mp3 නමින් public folder එකේ තියෙන්න ඕනේ */}
      <audio ref={audioRef} src={`${baseUrl}music.mp3`} loop />

      {!started ? (
        <button 
          onClick={startThorana}
          className="z-50 px-12 py-5 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_30px_gold] uppercase tracking-widest hover:scale-105 transition-all"
        >
          තොරණ නැරඹීම ආරම්භ කරන්න
        </button>
      ) : (
        <div className="relative w-full max-w-5xl aspect-square flex items-center justify-center">
          
          {/* 2. බෞද්ධ කොඩිය (Flag) */}
          <div className="absolute top-[0%] z-50 animate-bounce">
             <img src={`${baseUrl}images/thorana/flag.png`} className="w-16 h-auto" alt="Flag" />
          </div>

          <Aura />

          {/* 3. මැද බුදු පිළිමය සහ ග්ලෝ එක */}
          <div className="relative w-[32%] h-[32%] z-30 rounded-full border-4 border-yellow-500 p-1 bg-black shadow-[0_0_100px_rgba(255,215,0,0.6)]">
            <img 
              src={`${baseUrl}images/thorana/buddha.png`} 
              className="w-full h-full object-cover rounded-full" 
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400?text=Buddha')}
            />
          </div>

          {/* 4. පැනල් 8 (Medallions) */}
          {jatakaStories.map((story, i) => (
            <Medallion 
              key={i} 
              title={story.title} 
              image={story.img} 
              angle={i * 45} 
              delay={i * 0.1} 
              patternIndex={i + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
