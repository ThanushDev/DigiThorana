import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { WavingFlag } from './WavingFlag';

const baseUrl = import.meta.env.BASE_URL || '/';

const jatakaStories = [
  { title: 'වෙස්සන්තර', image: `${baseUrl}images/thorana/panel1.png`, x: '50%', y: '10%', size: 'w-[16%] h-[16%]' }, // Peak
  { title: 'සාම', image: `${baseUrl}images/thorana/panel2.png`, x: '25%', y: '28%' }, // Upper Left
  { title: 'තේමිය', image: `${baseUrl}images/thorana/panel3.png`, x: '75%', y: '28%' }, // Upper Right
  { title: 'මහාජනක', image: `${baseUrl}images/thorana/panel4.png`, x: '18%', y: '52%' }, // Mid Left
  { title: 'නේමි', image: `${baseUrl}images/thorana/panel5.png`, x: '82%', y: '52%' }, // Mid Right
  { title: 'මහෝසධ', image: `${baseUrl}images/thorana/panel6.png`, x: '25%', y: '82%' }, // Bottom Left
  { title: 'භූරිදත්ත', image: `${baseUrl}images/thorana/panel7.png`, x: '50%', y: '88%' }, // Bottom Center
  { title: 'සිවි', image: `${baseUrl}images/thorana/panel8.png`, x: '75%', y: '82%' }, // Bottom Right
];

export default function Pandol() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden p-2">
      <AnimatePresence>
        {!hasStarted ? (
          <motion.button 
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setHasStarted(true)}
            className="z-50 px-12 py-5 bg-gradient-to-b from-yellow-500 to-yellow-800 text-black font-black rounded-full border-4 border-yellow-300 shadow-[0_0_50px_gold] text-2xl sinhala-text"
          >
            තොරණ නැරඹීම ආරම්භ කරන්න
          </motion.button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-full flex flex-col items-center justify-between py-4">
            
            {/* Top Flag */}
            <div className="z-10 scale-75 md:scale-90 absolute top-2"><WavingFlag /></div>

            {/* 🎯 THE TRADITIONAL PANDOL STRUCTURE 🎯 */}
            <div className="relative w-full max-w-[min(95vw,85vh)] aspect-[3/4] flex items-center justify-center mt-12 md:mt-16">
              
              {/* 🖼️ Ornate Wooden Frame SVG (Traditional Arch) */}
              <svg viewBox="0 0 500 700" className="absolute inset-0 w-full h-full z-0 opacity-40 thorana-frame">
                {/* Main Arch Shape */}
                <path 
                  d="M250 20 L480 250 L480 680 L20 680 L20 250 Z" 
                  fill="none" stroke="#5d3a1a" strokeWidth="15" 
                />
                <path 
                  d="M250 30 L470 255 L470 670 L30 670 L30 255 Z" 
                  fill="none" stroke="#FFD700" strokeWidth="4" 
                />
                {/* Vertical Support lines */}
                <line x1="150" y1="250" x2="150" y2="670" stroke="#FFD700" strokeWidth="1" opacity="0.3" />
                <line x1="350" y1="250" x2="350" y2="670" stroke="#FFD700" strokeWidth="1" opacity="0.3" />
              </svg>

              {/* 1. Center Buddha Section */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] flex items-center justify-center z-10">
                <Aura />
                <img 
                  src={`${baseUrl}images/thorana/buddha.png`} 
                  className="relative z-30 w-[85%] object-contain drop-shadow-[0_0_40px_gold]" 
                />
              </div>

              {/* 2. 8 Panels (Positioned in Tower Shape) */}
              {jatakaStories.map((story, index) => (
                <Medallion 
                  key={index} 
                  image={story.image} 
                  title={story.title} 
                  x={story.x} 
                  y={story.y} 
                  size={story.size}
                  delay={index * 0.1} 
                />
              ))}
            </div>

            {/* 3. Bottom Banner */}
            <div className="w-full max-w-[800px] z-40 mt-[-10px] scale-90 md:scale-100">
              <Banner />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
