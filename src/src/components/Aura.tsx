import React from 'react';

export function Aura() {
  const colors = ['#005EB8', '#FFC627', '#DA291C', '#FFFFFF', '#F2A900'];
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-[-5%]">
      <svg viewBox="0 0 200 200" className="w-[180%] h-[180%] opacity-60 animate-spin" style={{ animationDuration: '40s' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={i} cx="100" cy="100" r={15 + i * 8}
            fill="none" stroke={colors[i % colors.length]}
            strokeWidth="1.5" strokeDasharray="10 20"
            className="light-slow"
          />
        ))}
      </svg>
    </div>
  );
}
