import React from 'react';
import { motion } from 'framer-motion';
import { getPattern } from './lightPatterns';
interface SideDecorationProps {
  type: 'sun' | 'moon';
  patternIndex: number;
  delay: number;
}
export function SideDecoration({
  type,
  patternIndex,
  delay
}: SideDecorationProps) {
  const pattern = getPattern(patternIndex);
  const radii = [46, 40, 34];
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 80
      }}
      className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center"
      aria-hidden="true">
      
      {/* Outer dotted rings */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full pointer-events-none">
        
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

      {/* Sun or Moon face */}
      <div className="relative w-[50%] h-[50%] flex items-center justify-center">
        {type === 'sun' ?
        <svg viewBox="0 0 60 60" className="w-full h-full">
            {/* Sun rays */}
            {Array.from({
            length: 12
          }).map((_, i) => {
            const angle = i * 30 * Math.PI / 180;
            const x1 = 30 + Math.cos(angle) * 18;
            const y1 = 30 + Math.sin(angle) * 18;
            const x2 = 30 + Math.cos(angle) * 26;
            const y2 = 30 + Math.sin(angle) * 26;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FFC627"
                strokeWidth="2"
                strokeLinecap="round" />);


          })}
            {/* Sun face */}
            <circle
            cx="30"
            cy="30"
            r="14"
            fill="#FFC627"
            stroke="#F2A900"
            strokeWidth="1" />
          
            <circle cx="25" cy="27" r="1.5" fill="#000" />
            <circle cx="35" cy="27" r="1.5" fill="#000" />
            <path
            d="M 24 33 Q 30 38 36 33"
            stroke="#000"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round" />
          
          </svg> :

        <svg viewBox="0 0 60 60" className="w-full h-full">
            {/* Crescent moon */}
            <path
            d="M 38 12 Q 22 18 22 30 Q 22 42 38 48 Q 28 42 28 30 Q 28 18 38 12 Z"
            fill="#FFFFFF"
            stroke="#FFC627"
            strokeWidth="1" />
          
            <circle cx="32" cy="26" r="1" fill="#000" />
            <path
            d="M 30 33 Q 33 35 36 33"
            stroke="#000"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round" />
          
          </svg>
        }
      </div>
    </motion.div>);

}