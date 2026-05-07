import React, { useState } from 'react';
import { Medallion } from './Medallion';
import { Aura } from './Aura';
import { Banner } from './Banner';
import { SideDecoration } from './SideDecoration';
import { WavingFlag } from './WavingFlag';

const panels = [
  { id: 1, title: '01', image: '/images/thorana/panel1.png', description: 'The story of the six-tusked elephant.' },
  { id: 2, title: '02', image: '/images/thorana/panel2.png', description: 'The story of the prince who survived a shipwreck.' },
  { id: 3, title: '03', image: '/images/thorana/panel3.png', description: 'The story of the wise minister Vidura.' },
  { id: 4, title: '04', image: '/images/thorana/panel4.png', description: 'The story of the ultimate generosity.' },
  { id: 5, title: '05', image: '/images/thorana/panel5.png', description: 'The story of the devoted son.' },
  { id: 6, title: '06', image: '/images/thorana/panel6.png', description: 'The story of the wise Mahosadha.' },
  { id: 7, title: '07', image: '/images/thorana/panel7.png', description: 'The story of King Sivi\'s sacrifice.' },
  { id: 8, title: '08', image: '/images/thorana/panel8.png', description: 'The story of the righteous kingdom.' },
];

export const Pandol: React.FC = () => {
  const [activeStory, setActiveStory] = useState<typeof panels[0] | null>(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden bg-gradient-to-b from-blue-900/20 via-black to-black">
      <div className="relative z-10 w-full max-w-5xl aspect-square flex items-center justify-center">
        
        {/* Decorative Background Elements */}
        <Aura />
        <WavingFlag position="left" />
        <WavingFlag position="right" />
        <SideDecoration side="left" />
        <SideDecoration side="right" />
        <Banner />

        {/* Central Buddha Image */}
        <div className="relative z-30 w-1/3 h-1/3 group cursor-pointer" onClick={() => setActiveStory(null)}>
          <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-3xl group-hover:bg-yellow-500/40 transition-colors duration-700" />
          <div className="relative w-full h-full rounded-full border-4 border-yellow-500/50 p-2 box-glow bg-black overflow-hidden">
             {/* Center Buddha Image with proper fitting */}
            <img 
              src="/images/thorana/buddha.png" 
              alt="Lord Buddha" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Story Panels */}
        <div className="absolute inset-0 pointer-events-none">
          {panels.map((panel, index) => {
            const angle = (index * 45) - 90; // Start from top
            const radius = 38; // Percentage of container
            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={panel.id}
                className="absolute pointer-events-auto transition-transform duration-500 hover:scale-110"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '18%',
                  height: '18%',
                }}
                onClick={() => setActiveStory(panel)}
              >
                <Medallion 
                  image={panel.image} 
                  title={panel.title} 
                  isActive={activeStory?.id === panel.id}
                />
              </div>
            );
          })}
        </div>

        {/* Story Modal/Overlay */}
        {activeStory && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in zoom-in duration-300 rounded-3xl overflow-hidden border border-white/10">
            <div className="max-w-md text-center p-8">
              <h2 className="text-3xl font-bold mb-4 text-yellow-500 sinhala-text drop-shadow-lg">{activeStory.title}</h2>
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 border-2 border-yellow-500/30">
                <img src={activeStory.image} alt={activeStory.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-lg leading-relaxed text-gray-200 mb-8">{activeStory.description}</p>
              <button 
                onClick={() => setActiveStory(null)}
                className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/20"
              >
                Close Story
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
