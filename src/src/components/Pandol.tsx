import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medallion } from './Medallion';
import { Aura } from './Aura';
import { Banner } from './Banner';
import { SideDecoration } from './SideDecoration';
import { WavingFlag } from './WavingFlag';

// GitHub Pages වල path එක නිවැරදිව ගන්න
const baseUrl = import.meta.env.BASE_URL || '/';

const panels = [
  { id: 1, title: '01', image: `${baseUrl}images/thorana/panel1.png`, description: '01' },
  { id: 2, title: '02', image: `${baseUrl}images/thorana/panel2.png`, description: '02' },
  { id: 3, title: '03', image: `${baseUrl}images/thorana/panel3.png`, description: '03' },
  { id: 4, title: '04', image: `${baseUrl}images/thorana/panel4.png`, description: '04' },
  { id: 5, title: '05', image: `${baseUrl}images/thorana/panel5.png`, description: '05' },
  { id: 6, title: '06', image: `${baseUrl}images/thorana/panel6.png`, description: '06' },
  { id: 7, title: '07', image: `${baseUrl}images/thorana/panel7.png`, description: '07' },
  { id: 8, title: '08', image: `${baseUrl}images/thorana/panel8.png`, description: 'දෙ08' },
];

export const Pandol: React.FC = () => {
  const [activeStory, setActiveStory] = useState<typeof panels[0] | null>(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden bg-black">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-black to-black" />

      <div className="relative z-10 w-full max-w-[95vw] md:max-w-5xl aspect-square flex items-center justify-center">
        
        <Aura />
        <WavingFlag />
        
        {/* Decorations */}
        <div className="absolute top-0 left-0">
           <SideDecoration type="sun" patternIndex={2} delay={1.8} />
        </div>
        <div className="absolute top-0 right-0">
           <SideDecoration type="moon" patternIndex={9} delay={2} />
        </div>

        {/* Central Buddha Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-30 w-[30%] h-[30%] cursor-pointer"
          onClick={() => setActiveStory(null)}
        >
          <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-full h-full rounded-full border-4 border-yellow-500 p-1 md:p-2 box-glow bg-black overflow-hidden">
            <img 
              src={`${baseUrl}images/thorana/buddha.png`} 
              alt="Lord Buddha" 
              className="w-full h-full object-cover rounded-full"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Circular Story Panels */}
        <div className="absolute inset-0 pointer-events-none">
          {panels.map((panel, index) => {
            const angle = (index * 45) - 90; // Start from top
            const radius = 38; // Distance from center
            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={panel.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index, type: 'spring', stiffness: 100 }}
                className="absolute pointer-events-auto"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '20%',
                  height: '20%',
                }}
                onClick={() => setActiveStory(panel)}
              >
                <Medallion 
                  image={panel.image} 
                  title={panel.title} 
                  isActive={activeStory?.id === panel.id}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="absolute bottom-[-10%] md:bottom-[-5%] w-full">
           <Banner />
        </div>

        {/* Story Modal */}
        <AnimatePresence>
          {activeStory && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 bg-black/90 backdrop-blur-md rounded-3xl" onClick={() => setActiveStory(null)} />
              <div className="relative bg-gradient-to-b from-yellow-900/40 to-black p-6 md:p-8 rounded-2xl border border-yellow-500/50 max-w-lg w-full text-center shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400 sinhala-text">{activeStory.title}</h2>
                <div className="w-full aspect-video rounded-lg overflow-hidden mb-6 border-2 border-yellow-500/30">
                  <img src={activeStory.image} alt={activeStory.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">{activeStory.description}</p>
                <button 
                  onClick={() => setActiveStory(null)}
                  className="px-10 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
