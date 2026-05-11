import React from 'react';
import { motion } from 'framer-motion';

export function Banner() {
  const colors = ['#005EB8', '#FFC627', '#DA291C', '#FFFFFF', '#F2A900'];

  const MiniFlag = ({ reverse = false }: { reverse?: boolean }) => (
    <div style={{ display: 'flex', height: 34, width: 22, overflow: 'hidden', flexShrink: 0, flexDirection: reverse ? 'row-reverse' : 'row' }}>
      {colors.map((c, i) => <div key={i} style={{ flex: 1, background: c }} />)}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {colors.map((c, i) => <div key={i} style={{ flex: 1, background: c }} />)}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      style={{
        width: 'min(90vw, 560px)',
        flexShrink: 0,
        background: 'linear-gradient(135deg, #2d1000, #180800)',
        border: '2px solid #FFD700',
        borderRadius: 6,
        padding: '8px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        boxShadow: '0 0 20px rgba(255,215,0,0.15)',
        zIndex: 10,
      }}
    >
      <MiniFlag />
      <div style={{ flex: 1, textAlign: 'center' }}>
        <div className="sinhala-text" style={{ fontSize: 'clamp(13px, 3.2vw, 22px)', fontWeight: 700, color: '#FFD700', textShadow: '0 0 10px rgba(255,215,0,0.4)' }}>
          සුභ වෙසක් මංගල්‍යයක් වේවා!
        </div>
        <div style={{ fontSize: 'clamp(8px, 1.5vw, 11px)', color: 'rgba(255,220,150,0.75)', fontFamily: 'sans-serif' }}>
          May the blessings of the Noble Triple Gem be with you.
        </div>
      </div>
      <MiniFlag reverse />
    </motion.div>
  );
}
