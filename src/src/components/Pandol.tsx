import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { WavingFlag } from './WavingFlag';

const baseUrl = import.meta.env.BASE_URL || '/';

const jatakaStories = [
  { title: 'වෙස්සන්තර ජාතකය', image: `${baseUrl}images/thorana/panel1.png`, x: '20%', y: '35%' },
  { title: 'සාම ජාතකය', image: `${baseUrl}images/thorana/panel2.png`, x: '80%', y: '35%' },
  { title: 'තේමිය ජාතකය', image: `${baseUrl}images/thorana/panel3.png`, x: '15%', y: '60%' },
  { title: 'මහාජනක ජාතකය', image: `${baseUrl}images/thorana/panel4.png`, x: '85%', y: '60%' },
  { title: 'නේමි ජාතකය', image: `${baseUrl}images/thorana/panel5.png`, x: '25%', y: '82%' },
  { title: 'මහෝසධ ජාතකය', image: `${baseUrl}images/thorana/panel6.png`, x: '75%', y: '82%' },
  { title: 'භූරිදත්ත ජාතකය', image: `${baseUrl}images/thorana/panel7.png`, x: '42%', y: '92%' },
  { title: 'සිවි ජාතකය', image: `${baseUrl}images/thorana/panel8.png`, x: '58%', y: '92%' },
];

export default function Pandol() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden">
      <AnimatePresence>
        {!hasStarted ? (
          <motion.button 
            exit={{ opacity: 0 }}
            onClick={() => setHasStarted(true)}
            className="z-50 px-12 py-5 bg-yellow-600 text-white font-bold rounded-full border-4 border-yellow-400 shadow-[0_0_30px_gold] text-xl sinhala-text"
          >
            තොරණ නැරඹීම ආරම්භ කරන්න
          </motion.button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full flex flex-col items-center justify-center p-4">
            
            {/* Top Flag */}
            <div className="z-10 scale-90 mb-[-20px]"><WavingFlag /></div>

            {/* 🎯 MAIN THORANA STRUCTURE 🎯 */}
            <div className="relative w-[95vmin] max-w-[800px] h-[80vh] flex items-center justify-center">
              
              {/* 🖼️ Traditional Wooden-Style Frame (SVG) */}
              <svg viewBox="0 0 500 600" className="absolute inset-0 w-full h-full z-0 opacity-40">
                <path d="M250 50 L450 250 L450 550 L50 550 L50 250 Z" stroke="#8B4513" strokeWidth="15" fill="none" />
                <path d="M250 60 L440 255 L440 540 L60 540 L60 255 Z" stroke="#FFD700" strokeWidth="3" fill="none" className="frame-glow" />
              </svg>

              {/* Center Buddha Section */}
              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] flex items-center justify-center">
                <Aura />
                <img 
                  src={`${baseUrl}images/thorana/buddha.png`} 
                  className="relative z-30 w-[70%] object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.8)]" 
                />
              </div>

              {/* 8 Panels arranged in Thorana Shape */}
              {jatakaStories.map((story, index) => (
                <Medallion 
                  key={index} 
                  image={story.image} 
                  title={story.title} 
                  x={story.x} 
                  y={story.y} 
                  delay={index * 0.15} 
                />
              ))}
            </div>

            {/* Bottom Banner */}
            <div className="w-full max-w-[750px] z-40 mt-[-20px]">
              <Banner />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
