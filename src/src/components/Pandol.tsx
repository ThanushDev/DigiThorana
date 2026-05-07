import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medallion } from './Medallion';
import { Aura } from './Aura';
import { Banner } from './Banner';
import { SideDecoration } from './SideDecoration';
import { WavingFlag } from './WavingFlag';

const baseUrl = import.meta.env.BASE_URL || '/';

const panels = [
  { id: 1, title: '01', image: `${baseUrl}images/thorana/panel1.png`, description: 'ඡද්දන්ත ජාතකය' },
  { id: 2, title: '02', image: `${baseUrl}images/thorana/panel2.png`, description: 'මහාජනක ජාතකය' },
  { id: 3, title: '03', image: `${baseUrl}images/thorana/panel3.png`, description: 'විධුර පණ්ඩිත ජාතකය' },
  { id: 4, title: '04', image: `${baseUrl}images/thorana/panel4.png`, description: 'වෙස්සන්තර ජාතකය' },
  { id: 5, title: '05', image: `${baseUrl}images/thorana/panel5.png`, description: 'සාම ජාතකය' },
  { id: 6, title: '06', image: `${baseUrl}images/thorana/panel6.png`, description: 'මහෞෂධ ජාතකය' },
  { id: 7, title: '07', image: `${baseUrl}images/thorana/panel7.png`, description: 'සීවි ජාතකය' },
  { id: 8, title: '08', image: `${baseUrl}images/thorana/panel8.png`, description: 'නිමි ජාතකය' },
];

const buddhaImage = `${baseUrl}images/thorana/buddha.png`;

export const Pandol: React.FC = () => {
  const [activeStory, setActiveStory] = useState<typeof panels[0] | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // පින්තූර ඔක්කොම එකපාර ලෝඩ් කරන Preloader එක
  useEffect(() => {
    const imageUrls = [...panels.map(p => p.image), buddhaImage];
    let loadedCount = 0;

    imageUrls.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) setImagesLoaded(true);
      };
    });
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-yellow-500 animate-pulse text-xl sinhala-text">තොරණ සූදානම් වෙමින් පවතී...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8 bg-black overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl aspect-square flex items-center justify-center">
        
        <Aura />
        <WavingFlag />

        {/* Central Buddha Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-30 w-[32%] h-[32%] cursor-pointer"
        >
          <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="relative w-full h-full rounded-full border-4 border-yellow-500 p-2 box-glow bg-black overflow-hidden">
            <img src={buddhaImage} alt="Buddha" className="w-full h-full object-cover rounded-full" />
          </div>
        </motion.div>

        {/* Story Panels around the center */}
        <div className="absolute inset-0">
          {panels.map((panel, index) => {
            const angle = (index * 45) - 90; 
            const radius = 38; 
            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={panel.id}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '18%',
                  height: '18%',
                }}
                onClick={() => setActiveStory(panel)}
              >
                <Medallion image={panel.image} title={panel.title} patternIndex={index + 1} />
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 left-0 sm:block hidden">
           <SideDecoration type="sun" patternIndex={2} delay={1} />
        </div>
        <div className="absolute top-0 right-0 sm:block hidden">
           <SideDecoration type="moon" patternIndex={9} delay={1.2} />
        </div>

        <div className="absolute bottom-[-5%] w-full px-4">
          <Banner />
        </div>
      </div>

      {/* Modal - Click කළාම විස්තරේ පේන්න */}
      <AnimatePresence>
        {activeStory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="absolute inset-0 bg-black/90" onClick={() => setActiveStory(null)} />
            <motion.div initial={{scale:0.9}} animate={{scale:1}} className="relative bg-zinc-900 p-6 rounded-2xl border border-yellow-500 max-w-sm w-full text-center shadow-2xl">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4 sinhala-text">{activeStory.title} - {activeStory.description}</h2>
              <img src={activeStory.image} className="w-full h-48 object-cover rounded-lg mb-4" />
              <button onClick={() => setActiveStory(null)} className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-full">Close</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
