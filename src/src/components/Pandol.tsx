import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { SideDecoration } from './SideDecoration';
import { WavingFlag } from './WavingFlag';

const baseUrl = import.meta.env.BASE_URL || '/';

const jatakaStories = [
  { title: 'Vessantara', image: `${baseUrl}images/thorana/panel1.png` },
  { title: 'Sama', image: `${baseUrl}images/thorana/panel2.png` },
  { title: 'Temiya', image: `${baseUrl}images/thorana/panel3.png` },
  { title: 'Mahajanaka', image: `${baseUrl}images/thorana/panel4.png` },
  { title: 'Nemi', image: `${baseUrl}images/thorana/panel5.png` },
  { title: 'Mahosadha', image: `${baseUrl}images/thorana/panel6.png` },
  { title: 'Bhuridatta', image: `${baseUrl}images/thorana/panel7.png` },
  { title: 'Sivi', image: `${baseUrl}images/thorana/panel8.png` },
];

export default function Pandol() {
  const [hasStarted, setHasStarted] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const totalImages = jatakaStories.length + 2; // +1 for Buddha, +1 for Flag

  const handleImageLoad = () => {
    setLoadedImagesCount(prev => prev + 1);
  };

  const startThorana = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  const allImagesLoaded = loadedImagesCount >= totalImages;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative sinhala-text">
      
      {/* Background Music */}
      <audio ref={audioRef} src={`${baseUrl}vesak-music.mp3`} loop />

      {!allImagesLoaded && (
        <div className="z-50 text-center text-yellow-500 text-xl font-bold animate-pulse">
          තොරණ සූදානම් වෙමින් පවතිනවා... {Math.round((loadedImagesCount / totalImages) * 100)}%
        </div>
      )}

      {allImagesLoaded && (
        <AnimatePresence>
          {!hasStarted ? (
            <motion.button
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleStart}
              className="z-50 px-10 py-4 bg-yellow-600 text-white font-bold rounded-full shadow-[0_0_40px_rgba(255,215,0,0.5)] border-2 border-yellow-400 uppercase"
            >
              තොරණ නැරඹීම ආරම්භ කරන්න (Music සමඟ)
            </motion.button>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="relative w-full max-w-[1200px] flex flex-col items-center"
            >
              {/* Top: Waving Flag */}
              <div className="relative mb-8 md:mb-12">
                 <WavingFlag onImageLoad={handleImageLoad} />
              </div>

              {/* Central Pandol Container */}
              <div className="relative w-full aspect-square flex items-center justify-center scale-90 md:scale-100 -mt-8 md:-mt-12">
                
                {/* Aura */}
                <Aura />

                {/* Buddha Center */}
                <div className="relative w-[32%] h-[32%] z-30 rounded-full border-4 border-yellow-500 overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.5)] bg-black">
                  <img 
                    src={`${baseUrl}images/thorana/buddha.png`} 
                    className="w-full h-full object-cover"
                    alt="Buddha"
                    onLoad={handleImageLoad}
                    onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/200?text=Buddha')}
                  />
                </div>

                {/* Medallions (පැනල් 8) */}
                {jatakaStories.map((story, index) => (
                  <Medallion
                    key={index}
                    image={story.image}
                    title={story.title}
                    angle={index * 45}
                    delay={0.5 + index * 0.15}
                    patternIndex={index + 1}
                    onImageLoad={handleImageLoad}
                  />
                ))}
              </div>

              {/* 🛑 bottom banner - දැන් ලොකුයි සහ පළලයි! 🛑 */}
              <div className="w-full max-w-7xl z-40 -mt-16 md:-mt-24 pb-8 md:pb-12">
                <Banner />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
