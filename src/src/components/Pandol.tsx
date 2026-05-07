import React from 'react';
import { motion } from 'framer-motion';
import { Aura } from './Aura';
import { Medallion } from './Medallion';
import { Banner } from './Banner';
import { SideDecoration } from './SideDecoration';
import { WavingFlag } from './WavingFlag';
const jatakaStories = [
{
  title: 'Vessantara Jataka',
  image:
  'https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=400&auto=format&fit=crop'
},
{
  title: 'Sama Jataka',
  image:
  'https://images.unsplash.com/photo-1590845947376-2638caa89309?q=80&w=400&auto=format&fit=crop'
},
{
  title: 'Temiya Jataka',
  image:
  'https://images.unsplash.com/photo-1588693959306-423547d16a52?q=80&w=400&auto=format&fit=crop'
},
{
  title: 'Mahajanaka Jataka',
  image:
  'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=400&auto=format&fit=crop'
},
{
  title: 'Nemi Jataka',
  image:
  'https://images.unsplash.com/photo-1515005617138-7ce328292787?q=80&w=400&auto=format&fit=crop'
},
{
  title: 'Mahosadha Jataka',
  image:
  'https://images.unsplash.com/photo-1584281722354-91224f20101b?q=80&w=400&auto=format&fit=crop'
},
{
  title: 'Bhuridatta Jataka',
  image:
  'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=400&auto=format&fit=crop'
},
{
  title: 'Chandakumara Jataka',
  image:
  'https://images.unsplash.com/photo-1625834317364-b32c140fd360?q=80&w=400&auto=format&fit=crop'
}];

export function Pandol() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start p-4 md:p-8 overflow-hidden relative">
      {/* Background Twinkling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({
          length: 60
        }).map((_, i) =>
        <div
          key={i}
          className="absolute bg-white rounded-full twinkle"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }} />

        )}
      </div>

      {/* Top: Waving Buddhist Flag */}
      <WavingFlag />

      {/* Unified Pandol Structure (medallions + side decorations + banner connected) */}
      <div className="relative w-full max-w-5xl flex flex-col items-center z-10">
        {/* Row containing side decorations + main pandol */}
        <div className="w-full flex items-end justify-center gap-2 md:gap-4">
          {/* Left side: Sun decoration */}
          <div className="hidden sm:flex flex-col items-center justify-end pb-12 md:pb-20">
            <SideDecoration type="sun" patternIndex={2} delay={1.8} />
          </div>

          {/* Main Pandol Container */}
          <div className="w-full max-w-3xl aspect-square relative">
            {/* Center Buddha & Aura - UNCHANGED from original */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Aura />

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeOut'
                }}
                className="relative w-[35%] h-[35%] z-10 rounded-full flex items-center justify-center">
                
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full scale-[1.15] pointer-events-none">
                  
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeDasharray="1 3"
                    className="light-ring-forward" />
                  
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#FFC627"
                    strokeWidth="2"
                    strokeDasharray="2 4"
                    className="light-ring-backward" />
                  
                </svg>

                <div className="w-full h-full rounded-full overflow-hidden border-4 border-yellow-500 box-glow relative">
                  <img
                    src="https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=600&auto=format&fit=crop"
                    alt="Lord Buddha"
                    className="w-full h-full object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </div>

            {/* 8 Jataka Medallions - each with unique pattern */}
            {jatakaStories.map((story, index) => {
              const angle = index * 45;
              return (
                <Medallion
                  key={index}
                  image={story.image}
                  title={story.title}
                  angle={angle}
                  delay={0.5 + index * 0.15}
                  patternIndex={index + 1} // patterns 1-8 for medallions
                />);

            })}
          </div>

          {/* Right side: Moon/Heart decoration */}
          <div className="hidden sm:flex flex-col items-center justify-end pb-12 md:pb-20">
            <SideDecoration type="moon" patternIndex={9} delay={2} />
          </div>
        </div>

        {/* Mobile-only side decorations row */}
        <div className="flex sm:hidden items-center justify-around w-full px-4 -mt-4 mb-2">
          <SideDecoration type="sun" patternIndex={2} delay={1.8} />
          <SideDecoration type="moon" patternIndex={9} delay={2} />
        </div>

        {/* Bottom Banner - connected to pandol structure */}
        <div className="w-full -mt-4 md:-mt-6 px-4">
          <Banner />
        </div>
      </div>
    </div>);

}