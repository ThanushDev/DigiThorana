import React, { useState } from 'react';
import { Medallion } from './Medallion';
import { Aura } from './Aura';
import { Banner } from './Banner';
import { SideDecoration } from './SideDecoration';
import { WavingFlag } from './WavingFlag';

// Base URL එක ගන්නවා (GitHub Pages වල path එකට ගැලපෙන්න)
const baseUrl = import.meta.env.BASE_URL;

const panels = [
  { id: 1, title: '01', image: `${baseUrl}images/thorana/panel1.png`, description: 'The story of the six-tusked elephant.' },
  { id: 2, title: '02', image: `${baseUrl}images/thorana/panel2.png`, description: 'The story of the prince who survived a shipwreck.' },
  { id: 3, title: '03', image: `${baseUrl}images/thorana/panel3.png`, description: 'The story of the wise minister Vidura.' },
  { id: 4, title: '04', image: `${baseUrl}images/thorana/panel4.png`, description: 'The story of the ultimate generosity.' },
  { id: 5, title: '05', image: `${baseUrl}images/thorana/panel5.png`, description: 'The story of the devoted son.' },
  { id: 6, title: '06', image: `${baseUrl}images/thorana/panel6.png`, description: 'The story of the wise Mahosadha.' },
  { id: 7, title: '07', image: `${baseUrl}images/thorana/panel7.png`, description: 'The story of King Sivi\'s sacrifice.' },
  { id: 8, title: '08', image: `${baseUrl}images/thorana/panel8.png`, description: 'The story of the righteous kingdom.' },
];

export const Pandol: React.FC = () => {
  const [activeStory, setActiveStory] = useState<typeof panels[0] | null>(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden bg-gradient-to-b from-blue-900/20 via-black to-black">
      <div className="relative z-10 w-full max-w-5xl aspect-square flex items-center justify-center">
        
        <Aura />
        <WavingFlag />
        <SideDecoration type="sun" patternIndex={2} delay={1.8} />
        <Banner />

        {/* Central Buddha Image */}
        <div className="relative z-30 w-1/3 h-1/3 group cursor-pointer" onClick={() => setActiveStory(null)}>
          <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-3xl group-hover:bg-yellow-500/40 transition-colors duration-700" />
          <div className="relative w-full h-full rounded-full border-4 border-yellow-500/50 p-2 box-glow bg-black overflow-hidden">
            <img 
              src={`${baseUrl}images/thorana/buddha.png`} 
              alt="Lord Buddha" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Story Panels */}
        <div className="absolute inset-0 pointer-events-none">
          {panels.map((panel, index) => {
            const angle = (index * 45) - 90;
            const radius = 38;
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

        {/* Story Modal */}
        {activeStory && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in zoom-in duration-300 rounded-3xl overflow-hidden border border-white/10">
            <div className="max-w-md text-center p-8">
              <h2 className="text-3xl font-bold mb-4 text-yellow-500 sinhala-text">{activeStory.title}</h2>
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 border-2 border-yellow-500/30">
                <img src={activeStory.image} alt={activeStory.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-lg text-gray-200 mb-8">{activeStory.description}</p>
              <button 
                onClick={() => setActiveStory(null)}
                className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-full"
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
