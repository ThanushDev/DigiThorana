import React from 'react';

interface MedallionProps {
  image: string;
  title: string;
  isActive?: boolean;
}

export const Medallion: React.FC<MedallionProps> = ({ image, title, isActive }) => {
  return (
    <div className={`relative w-full h-full group cursor-pointer transition-transform duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'}`}>
      {/* Light Glow Effect */}
      <div className={`absolute -inset-2 rounded-full blur-md transition-opacity duration-500 ${isActive ? 'bg-yellow-500/60 opacity-100' : 'bg-yellow-500/20 opacity-0 group-hover:opacity-100'}`} />
      
      {/* Image Container */}
      <div className={`relative w-full h-full rounded-full overflow-hidden border-2 transition-all duration-500 ${isActive ? 'border-yellow-400 box-glow' : 'border-yellow-600/50 group-hover:border-yellow-400'}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy" // images ඉක්මනින් ලෝඩ් වෙන්න උදව් වෙනවා
        />
        {/* Overlay for better visibility */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-30 group-hover:opacity-0'}`} />
      </div>

      {/* Label */}
      <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 w-max ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <span className="px-2 py-0.5 bg-black/90 text-yellow-500 text-[10px] md:text-xs font-bold rounded-full border border-yellow-500/50 shadow-lg">
          {title.split('.')[0]}
        </span>
      </div>
    </div>
  );
};
