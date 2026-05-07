import React from 'react';

interface MedallionProps {
  image: string;
  title: string;
  isActive?: boolean;
}

export const Medallion: React.FC<MedallionProps> = ({ image, title, isActive }) => {
  return (
    <div className={`relative w-full h-full group cursor-pointer ${isActive ? 'scale-110' : ''}`}>
      <div className={`absolute -inset-2 rounded-full blur-md transition-opacity duration-500 ${isActive ? 'bg-yellow-500/40 opacity-100' : 'bg-blue-500/20 opacity-0 group-hover:opacity-100'}`} />
      
      {/* Image Container with strict round fitting */}
      <div className={`relative w-full h-full rounded-full overflow-hidden border-2 transition-all duration-500 ${isActive ? 'border-yellow-400 box-glow scale-105' : 'border-white/20 group-hover:border-white/40'}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-40 group-hover:opacity-0'}`} />
      </div>

      <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <span className="px-3 py-1 bg-black/80 text-yellow-500 text-xs font-bold rounded-full border border-yellow-500/30">
          {title}
        </span>
      </div>
    </div>
  );
};
