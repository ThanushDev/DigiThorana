import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence>
        {!hasStarted ? (
          <motion.button 
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setHasStarted(true)}
            className="z-50 px-12 py-5 bg-gradient-to-b from-yellow-500 to-yellow-700 text-black font-black rounded-full shadow-[0_0_50px_gold] border-4 border-yellow-300 text-2xl uppercase"
          >
            තොරණ නැරඹීම ආරම්භ කරන්න
          </motion.button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full flex flex-col items-center justify-center relative p-4">
            
            {/* Top Flag Decoration */}
            <div className="absolute top-4 z-10 scale-75 md:scale-90"><WavingFlag /></div>

            {/* 🎯 MAIN STRUCTURE (ONE FRAME) 🎯 */}
            <div className="relative w-full max-w-[85vh] aspect-square flex items-center justify-center thorana-frame-glow">
              
              {/* 🖼️ The Decorative Ornate Frame (බිත්තිය/සැකිල්ල) */}
              <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full z-0 fill-none">
                {/* Outer frame structure like your screenshot */}
                <circle cx="250" cy="250" r="240" stroke="#8B4513" strokeWidth="8" opacity="0.5" />
                <circle cx="250" cy="250" r="230" stroke="#FFD700" strokeWidth="4" />
                {/* Decorative gold ornaments */}
                {Array.from({ length: 24 }).map((_, i) => (
                  <circle 
                    key={i} 
                    cx={250 + 230 * Math.cos(i * 15 * Math.PI / 180)} 
                    cy={250 + 230 * Math.sin(i * 15 * Math.PI / 180)} 
                    r="6" fill="#FFD700" className="animate-pulse"
                  />
                ))}
              </svg>

              {/* 1. Center Aura */}
              <div className="absolute w-[45%] h-[45%] z-10"><Aura /></div>

              {/* 2. Central Buddha Image */}
              <div className="relative w-[38%] h-[38%] z-30 flex items-center justify-center">
                <img 
                  src={`${baseUrl}images/thorana/buddha.png`} 
                  className="w-full h-full object-contain drop-shadow-[0_0_30px_gold]"
                  fetchpriority="high"
                />
              </div>

              {/* 3. 8 Jataka Medallions (Inside the frame) */}
              {jatakaStories.map((story, index) => (
                <Medallion 
                  key={index} 
                  image={story.image} 
                  title={story.title} 
                  angle={index * 45} 
                  delay={index * 0.1} 
                />
              ))}
            </div>

            {/* 4. Bottom Banner - Integrated into layout */}
            <div className="w-full max-w-[800px] z-40 -mt-8 md:-mt-12 scale-90 md:scale-100">
              <Banner />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
