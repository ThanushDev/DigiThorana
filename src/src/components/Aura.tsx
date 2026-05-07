import React from 'react';
import { motion } from 'framer-motion';

export function Aura() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-[140%] h-[140%] max-w-none">
        <defs>
          <filter id="white-glow">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Main Connecting Circular Dot Paths */}
        <circle cx="100" cy="100" r="76" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="0.5 3" opacity="0.6" />
        <circle cx="100" cy="100" r="72" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="0.2 2" opacity="0.4" />

        {/* 2. Traditional Triangular Dot Clusters (Connecting the Medallions) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle + 22.5} 100 100)`} filter="url(#white-glow)">
            {/* The V-shaped decorative dots from your screenshots */}
            <path 
              d="M 85,90 Q 100,75 115,90" 
              fill="none" 
              stroke="white" 
              strokeWidth="0.6" 
              strokeDasharray="0.1 2" 
              strokeLinecap="round" 
              opacity="0.8"
            />
            <path 
              d="M 88,94 Q 100,82 112,94" 
              fill="none" 
              stroke="white" 
              strokeWidth="0.4" 
              strokeDasharray="0.1 1.5" 
              strokeLinecap="round" 
              opacity="0.6"
            />
            {/* Small diamond dot clusters in between */}
            <circle cx="100" cy="82" r="0.6" fill="white" />
            <circle cx="98" cy="85" r="0.4" fill="white" opacity="0.5" />
            <circle cx="102" cy="85" r="0.4" fill="white" opacity="0.5" />
          </g>
        ))}

        {/* 3. Center Buddha Aura Dots */}
        <circle cx="100" cy="100" r="38" fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="1 4" className="light-ring-forward" />
      </svg>
    </div>
  );
}
