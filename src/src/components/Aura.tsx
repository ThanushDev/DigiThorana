import React from 'react';

export function Aura() {
  const colors = ['#005EB8', '#FFC627', '#DA291C', '#FFFFFF', '#F2A900'];
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-[160%] h-[160%] opacity-80 animate-spin" style={{ animationDuration: '20s' }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <circle
            key={i} cx="100" cy="100" r={20 + i * 6}
            fill="none" stroke={colors[i % colors.length]}
            strokeWidth="1.2" strokeDasharray={i % 2 === 0 ? "5 10" : "10 5"}
            className="animate-flow"
          />
        ))}
      </svg>
    </div>
  );
}
