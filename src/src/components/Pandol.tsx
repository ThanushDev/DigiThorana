import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { WavingFlag } from './WavingFlag';
import { AudioPlayer } from './AudioPlayer';

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
    <div className="h-screen w-full bg-[#020202] flex flex-col items-center justify-center overflow-hidden relative">
      <AnimatePresence>
        {!hasStarted ? (
          <motion.button 
            exit={{ opacity: 0, scale: 0.8 }} 
            onClick={() => setHasStarted(true)} 
            className="z-50 px-12 py-5 bg-gradient-to-r from-yellow-700 to-yellow-500 text-white font-black rounded-full shadow-[0_0_50px_rgba(255,215,0,0.5)] border-4 border-yellow-300 text-2xl uppercase tracking-widest transition-transform hover:scale-110 active:scale-95"
          >
            තොරණ නැරඹීම ආරම්භ කරන්න
          </motion.button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full flex flex-col items-center justify-between py-2 relative">
            
            <AudioPlayer />
            
            <div className="z-10 scale-75 md:scale-90 mt-2">
              <WavingFlag />
            </div>

            {/* 🏯 MAIN PANDOL - වීඩියෝ එකේ වගේමයි */}
            <div className="relative w-[90vmin] h-[90vmin] flex items-center justify-center -mt-10 lg:-mt-16">
              
              {/* 1. බුදුරූපය පිටුපස කැරකෙන රැස් වළල්ල (Aura) */}
              <div className="absolute w-[50%] h-[50%] z-0">
                <Aura />
              </div>

              {/* 2. මැද බුදුරූපය (Transparent) */}
              <div className="relative w-[38%] h-[38%] z-30 flex items-center justify-center">
                <img 
                  src={`${baseUrl}images/thorana/buddha.png`} 
                  className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.8)]" 
                />
              </div>

              {/* 3. පැනල 8 - ලස්සන රවුමකට (Creative Medallions) */}
              <div className="absolute inset-0 w-full h-full animate-rotate-slow">
                 {/* මුළු පැනල පද්ධතියම හෙමින් කැරකෙන්න සැලැස්විය හැකියි අවශ්‍ය නම් */}
              </div>
              
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
            <div className="w-[95%] max-w-[850px] z-40 mb-2 scale-90 md:scale-100">
              <Banner />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
