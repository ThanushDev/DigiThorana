import React from 'react';

export function Aura() {
  const colors = ['#005EB8', '#FFC627', '#DA291C', '#FFFFFF', '#F2A900'];
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-125">
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 animate-spin" style={{ animationDuration: '30s' }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <circle
            key={i} cx="100" cy="100" r={10 + i * 8}
            fill="none" stroke={colors[i % colors.length]}
            strokeWidth="1.5" strokeDasharray={i % 2 === 0 ? "5 15" : "10 5"}
            className="animate-light-slow"
          />
        ))}
      </svg>
    </div>
  );
}
