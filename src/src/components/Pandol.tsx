import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { WavingFlag } from './WavingFlag';
import { AudioPlayer } from './AudioPlayer';

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

export default function Pandol() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
      
      <AnimatePresence>
        {!hasStarted ? (
          /* ආරම්භක බොත්තම - මියුසික් වැඩ කිරීමට මෙය අත්‍යවශ්‍යයි */
          <motion.button
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setHasStarted(true)}
            className="z-50 px-10 py-4 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_40px_rgba(255,215,0,0.5)] border-2 border-yellow-400 hover:bg-yellow-500 transition-all"
          >
            තොරණ නැරඹීම ආරම්භ කරන්න
          </motion.button>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="relative w-full max-w-4xl aspect-square flex items-center justify-center"
          >
            {/* 1. Music Player - දැන් වැඩ කරයි */}
            <AudioPlayer />

            {/* 2. බෞද්ධ කොඩිය - තොරණට උඩින්ම */}
            <div className="absolute top-[-10%] z-40 scale-75 md:scale-100">
              <WavingFlag />
            </div>

            {/* 3. තොරණේ ව්‍යුහය (Aura & Dots) */}
            <Aura />

            {/* 4. මැද බුදු පිළිමය */}
            <div className="relative w-[32%] h-[32%] z-30 rounded-full border-4 border-yellow-500 p-1 bg-black shadow-[0_0_60px_rgba(255,215,0,0.4)]">
              <img 
                src="/images/thorana/buddha.png" 
                className="w-full h-full object-cover rounded-full" 
                alt="Buddha"
              />
            </div>

            {/* 5. ජාතක කතා පැනල් 8 */}
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

            {/* 6. පහළ බැනරය */}
            <div className="absolute bottom-[-15%] w-full z-40">
              <Banner />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
