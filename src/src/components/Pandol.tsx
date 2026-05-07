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
    <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden p-4">
      <AnimatePresence>
        {!hasStarted ? (
          <motion.button
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setHasStarted(true)}
            className="z-50 px-10 py-4 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_30px_gold] border-2 border-yellow-400 uppercase"
          >
            තොරණ නැරඹීම ආරම්භ කරන්න (Music සමඟ)
          </motion.button>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="relative w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] flex items-center justify-center"
          >
            {/* Music */}
            <AudioPlayer />

            {/* Flag */}
            <div className="absolute -top-[15%] z-40">
              <WavingFlag />
            </div>

            {/* Aura & Lights (පින්තූරෙ විදියටම) */}
            <Aura />

            {/* Center Buddha Image */}
            <div className="relative w-[35%] h-[35%] z-30 rounded-full border-4 border-yellow-500 overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.6)]">
              <img 
                src="/images/thorana/buddha.png" 
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/200?text=Buddha')}
              />
            </div>

            {/* Medallions (පැනල් 8 රවුමට) */}
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

            {/* Banner */}
            <div className="absolute -bottom-[20%] w-full z-40">
              <Banner />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
