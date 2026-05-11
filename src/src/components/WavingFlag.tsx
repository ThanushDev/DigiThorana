import React from 'react';
import { motion } from 'framer-motion';

interface WavingFlagProps {
  mirrored?: boolean;
}

export function WavingFlag({ mirrored = false }: WavingFlagProps) {
  const colors = ['#005EB8', '#FFC627', '#DA291C', '#FFFFFF', '#F2A900'];

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: mirrored ? 'row-reverse' : 'row',
      }}
      aria-label="Buddhist flag"
    >
      {/* Flag pole */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFD700', boxShadow: '0 0 10px rgba(255,215,0,0.8)', marginBottom: -2 }} />
        <div style={{ width: 3, height: 55, background: 'linear-gradient(to bottom, #FFD700, #7a5800)', borderRadius: 2, boxShadow: '0 0 6px rgba(255,200,0,0.5)' }} />
      </div>

      {/* Flag cloth */}
      <div style={{ animationName: mirrored ? 'flagWaveR' : 'flagWave', animationDuration: '2.5s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', transformOrigin: mirrored ? 'right center' : 'left center' }}>
        <div style={{
          display: 'flex',
          height: 34, width: 55,
          borderRadius: mirrored ? '3px 0 0 3px' : '0 3px 3px 0',
          overflow: 'hidden',
          boxShadow: '0 3px 12px rgba(0,0,0,0.55)',
          border: '1px solid rgba(255,215,0,0.35)',
          flexDirection: mirrored ? 'row-reverse' : 'row',
        }}>
          {colors.map((color, i) => (
            <div key={i} style={{ flex: 1, height: '100%', background: color }} />
          ))}
          {/* Composite stripe */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {colors.map((color, i) => (
              <div key={i} style={{ flex: 1, background: color }} />
            ))}
          </div>
          {/* Shine */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%)', mixBlendMode: 'overlay', pointerEvents: 'none' }} />
        </div>
      </div>
    </motion.div>
  );
}
