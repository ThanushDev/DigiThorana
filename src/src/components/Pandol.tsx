import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const start = () => {
    setHasStarted(true);
    if (audioRef.current) audioRef.current.play().catch(() => {});
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <audio ref={audioRef} src={`${baseUrl}vesak-music.mp3`} loop />

      <AnimatePresence>
        {!hasStarted ? (
          <motion.button
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={start}
            className="z-50 px-12 py-5 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_50px_gold] border-2 border-yellow-400 text-xl"
          >
            තොරණ නැරඹීම ආරම්භ කරන්න
          </motion.button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full max-w-[1200px] flex flex-col items-center">
            
            {/* Top Flag */}
            <div className="z-10 -mb-8 md:-mb-12">
              <WavingFlag />
            </div>

            {/* Main Structure Container */}
            <div className="flex items-center justify-center w-full relative">
              
              {/* Left Decoration */}
              <div className="hidden lg:block absolute left-0 z-10">
                <SideDecoration type="sun" patternIndex={12} delay={1.5} />
              </div>

              {/* Central Pandol */}
              <div className="relative w-[90vmin] h-[90vmin] flex items-center justify-center">
                <Aura />
                
                {/* Buddha Image */}
                <div className="relative w-[30%] h-[30%] z-30 rounded-full border-4 border-yellow-500 overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.5)] bg-black">
                  <img src={`${baseUrl}images/thorana/buddha.png`} className="w-full h-full object-cover" />
                </div>

                {/* 8 Medallions */}
                {jatakaStories.map((story, index) => (
                  <Medallion
                    key={index}
                    image={story.image}
                    title={story.title}
                    angle={index * 45}
                    delay={0.5 + index * 0.1}
                    patternIndex={index + 1}
                  />
                ))}
              </div>

              {/* Right Decoration */}
              <div className="hidden lg:block absolute right-0 z-10">
                <SideDecoration type="moon" patternIndex={14} delay={1.8} />
              </div>
            </div>

            {/* Bottom Banner (The Base) */}
            <div className="w-[100%] md:w-[120%] -mt-10 md:-mt-16 z-40">
              <Banner />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
