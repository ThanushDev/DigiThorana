import React from 'react';
import { motion } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { SideDecoration } from './SideDecoration';
import { WavingFlag } from './WavingFlag';

const baseUrl = import.meta.env.BASE_URL || '/';

const jatakaStories = [
  { title: 'ඡද්දන්ත ජාතකය', image: `${baseUrl}images/thorana/panel1.png` },
  { title: 'මහාජනක ජාතකය', image: `${baseUrl}images/thorana/panel2.png` },
  { title: 'විධුර පණ්ඩිත ජාතකය', image: `${baseUrl}images/thorana/panel3.png` },
  { title: 'වෙස්සන්තර ජාතකය', image: `${baseUrl}images/thorana/panel4.png` },
  { title: 'සාම ජාතකය', image: `${baseUrl}images/thorana/panel5.png` },
  { title: 'මහෞෂධ ජාතකය', image: `${baseUrl}images/thorana/panel6.png` },
  { title: 'සීවි ජාතකය', image: `${baseUrl}images/thorana/panel7.png` },
  { title: 'නිමි ජාතකය', image: `${baseUrl}images/thorana/panel8.png` },
];

export function Pandol() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative">
      
      <WavingFlag />

      <div className="relative w-full max-w-5xl flex flex-col items-center z-10">
        <div className="w-full flex items-end justify-center gap-4">
          
          <div className="hidden sm:block pb-20">
            <SideDecoration type="sun" patternIndex={2} delay={1} />
          </div>

          {/* Main Thorana Structure */}
          <div className="w-full max-w-3xl aspect-square relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Aura />
              
              {/* Central Buddha */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-[32%] h-[32%] z-30 rounded-full border-4 border-yellow-500 p-1 bg-black box-glow"
              >
                <img 
                  src={`${baseUrl}images/thorana/buddha.png`} 
                  alt="Buddha" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </motion.div>
            </div>

            {/* Medallions */}
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

          <div className="hidden sm:block pb-20">
            <SideDecoration type="moon" patternIndex={9} delay={1.2} />
          </div>
        </div>

        <div className="w-full mt-8 px-4">
          <Banner />
        </div>
      </div>
    </div>
  );
}
