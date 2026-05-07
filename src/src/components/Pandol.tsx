import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { SideDecoration } from './SideDecoration';
import { WavingFlag } from './WavingFlag';

const baseUrl = import.meta.env.BASE_URL || '/';

const jatakaStories = [
  { id: 1, title: 'ඡද්දන්ත ජාතකය', image: `${baseUrl}images/thorana/panel1.png`, description: 'ඇත් රජව උපන් සමය.' },
  { id: 2, title: 'මහාජනක ජාතකය', image: `${baseUrl}images/thorana/panel2.png`, description: 'නැව ගිලුණු පසු මුහුදේ පිනූ සමය.' },
  { id: 3, title: 'විධුර පණ්ඩිත ජාතකය', image: `${baseUrl}images/thorana/panel3.png`, description: 'ප්‍රඥාව පෙන්වූ සමය.' },
  { id: 4, title: 'වෙස්සන්තර ජාතකය', image: `${baseUrl}images/thorana/panel4.png`, description: 'දන් දුන් උතුම් සමය.' },
  { id: 5, title: 'සාම ජාතකය', image: `${baseUrl}images/thorana/panel5.png`, description: 'මව්පිය උපස්ථානය කළ සමය.' },
  { id: 6, title: 'මහෞෂධ ජාතකය', image: `${baseUrl}images/thorana/panel6.png`, description: 'නුවණින් ගැටලු විසඳූ සමය.' },
  { id: 7, title: 'සීවි ජාතකය', image: `${baseUrl}images/thorana/panel7.png`, description: 'ඇස් දන් දුන් සමය.' },
  { id: 8, title: 'නිමි ජාතකය', image: `${baseUrl}images/thorana/panel8.png`, description: 'දෙව්ලොව සංචාරය කළ සමය.' },
];

export default function Pandol() {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeStory, setActiveStory] = useState<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startThorana = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden p-4">
      <audio ref={audioRef} src={`${baseUrl}vesak-music.mp3`} loop />

      <AnimatePresence>
        {!hasStarted ? (
          <motion.div exit={{ opacity: 0 }} className="flex flex-col items-center gap-6">
            <h1 className="text-yellow-500 text-3xl font-bold animate-pulse">දිජිටල් වෙසක් තොරණ</h1>
            <button
              onClick={startThorana}
              className="px-10 py-4 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_30px_gold] border-2 border-yellow-400 uppercase hover:scale-105 transition-transform"
            >
              නැරඹීම ආරම්භ කරන්න
            </button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="relative w-full max-w-[1000px] h-full flex flex-col items-center justify-center"
          >
            {/* Top Ornament */}
            <div className="absolute top-[5%] z-40 scale-75 md:scale-100">
              <WavingFlag />
            </div>

            {/* Main Thorana Structure */}
            <div className="relative w-[85vmin] h-[85vmin] flex items-center justify-center">
              <Aura />
              
              {/* Buddha Center */}
              <div className="relative w-[30%] h-[30%] z-30 rounded-full border-4 border-yellow-500 overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.6)] bg-black">
                <img 
                  src={`${baseUrl}images/thorana/buddha.png`} 
                  className="w-full h-full object-cover"
                  alt="Buddha"
                />
              </div>

              {/* Medallions */}
              {jatakaStories.map((story, index) => (
                <Medallion
                  key={story.id}
                  image={story.image}
                  title={story.title}
                  angle={index * 45}
                  delay={0.5 + index * 0.1}
                  patternIndex={index + 1}
                  onClick={() => setActiveStory(story)}
                />
              ))}
            </div>

            {/* 🛑 Bottom Banner (දැන් ලොකුයි) 🛑 */}
            <div className="absolute bottom-[2%] w-[95%] md:w-[110%] z-40 transition-all">
              <Banner />
            </div>

            {/* Side Ornaments */}
            <div className="absolute left-[2%] top-[30%] hidden lg:block"> <SideDecoration type="sun" patternIndex={2} delay={1} /> </div>
            <div className="absolute right-[2%] top-[30%] hidden lg:block"> <SideDecoration type="moon" patternIndex={9} delay={1.2} /> </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Story Modal */}
      <AnimatePresence>
        {activeStory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="bg-zinc-900 border-2 border-yellow-500 p-6 rounded-2xl max-w-sm w-full text-center">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">{activeStory.title}</h2>
              <img src={activeStory.image} className="w-full h-48 object-cover rounded-lg mb-4 border border-yellow-500/30" />
              <p className="text-gray-300 mb-6">{activeStory.description}</p>
              <button onClick={() => setActiveStory(null)} className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-full">වසා දමන්න</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
