import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { getPattern } from './lightPatterns';
interface MedallionProps {
  image: string;
  title: string;
  angle: number; // in degrees, 0 is top
  delay: number;
  patternIndex: number;
}
export function Medallion({
  image,
  title,
  angle,
  delay,
  patternIndex
}: MedallionProps) {
  const radian = (angle - 90) * (Math.PI / 180);
  const radius = 38;
  const left = `${50 + radius * Math.cos(radian)}%`;
  const top = `${50 + radius * Math.sin(radian)}%`;
  const pattern = getPattern(patternIndex);
  const radii = [46, 42, 38]; // outer, middle, inner
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        x: '-50%',
        y: '-50%'
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: '-50%',
        y: '-50%'
      }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 15
      }}
      className="absolute flex flex-col items-center justify-center"
      style={{
        left,
        top,
        width: '22%',
        height: '22%'
      }}>
      
      <div className="relative w-full h-full rounded-full flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full scale-[1.25] pointer-events-none drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
          
          {pattern.rings.map((ring, i) =>
          <circle
            key={i}
            cx="50"
            cy="50"
            r={radii[i]}
            fill="none"
            stroke={ring.color}
            strokeWidth={ring.strokeWidth}
            strokeDasharray={ring.dashArray}
            strokeLinecap="round"
            className={ring.animationClass} />

          )}
        </svg>

        <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-yellow-600 relative z-10 box-glow">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy" />
          
          <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: delay + 0.5
        }}
        className="absolute -bottom-6 md:-bottom-8 w-[150%] text-center">
        
        <span className="text-[8px] md:text-xs lg:text-sm font-semibold text-yellow-400 text-glow whitespace-nowrap bg-black/60 px-2 py-0.5 rounded-full border border-yellow-500/30">
          {title}
        </span>
      </motion.div>
    </motion.div>);

}