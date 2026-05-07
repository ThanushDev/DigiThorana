import React from 'react';
import { motion } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { WavingFlag } from './WavingFlag';

const jatakaStories = [
  { title: 'Vessantara Jataka', image: '/images/thorana/panel1.png' },
  { title: 'Sama Jataka', image: '/images/thorana/panel2.png' },
  { title: 'Temiya Jataka', image: '/images/thorana/panel3.png' },
  { title: 'Mahajanaka Jataka', image: '/images/thorana/panel4.png' },
  { title: 'Nemi Jataka', image: '/images/thorana/panel5.png' },
  { title: 'Mahosadha Jataka', image: '/images/thorana/panel6.png' },
  { title: 'Bhuridatta Jataka', image: '/images/thorana/panel7.png' },
  { title: 'Chandakumara Jataka', image: '/images/thorana/panel8.png' },
];

export function Pandol() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <WavingFlag />

      <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
        {/* The Aura and Connecting Light Framework */}
        <Aura />

        {/* Center Focused Buddha with Real Light System */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-[32%] h-[32%] z-30 rounded-full border-4 border-yellow-500 p-1 bg-black shadow-[0_0_50px_rgba(255,215,0,0.4)]"
        >
          <img src="/images/thorana/buddha.png" alt="Buddha" className="w-full h-full object-cover rounded-full" />
        </motion.div>

        {/* Medallions (All connected by Aura) */}
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

      <div className="w-full max-w-2xl mt-12 z-40">
        <Banner />
      </div>
    </div>
  );
}
