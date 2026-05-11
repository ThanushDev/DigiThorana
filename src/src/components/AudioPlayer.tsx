import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const baseUrl = import.meta.env.BASE_URL || '/';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    // Try autoplay on first user interaction
    const tryPlay = () => {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
      document.removeEventListener('click', tryPlay);
    };
    document.addEventListener('click', tryPlay, { once: true });
    return () => document.removeEventListener('click', tryPlay);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(p => !p);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(m => !m);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        position: 'fixed', top: 12, right: 12, zIndex: 50,
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'rgba(0,0,0,0.68)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,215,0,0.35)',
        borderRadius: 30, padding: '6px 14px',
      }}
    >
      <audio ref={audioRef} src={`${baseUrl}vesak-music.mp3`} loop />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,215,0,0.18)', color: '#FFD700' }}>
        <Music size={15} className={isPlaying ? 'animate-pulse' : ''} />
      </div>

      <button
        onClick={togglePlay}
        style={{ background: 'none', border: 'none', color: '#FFD700', cursor: 'pointer', padding: 4, lineHeight: 1, borderRadius: '50%' }}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={17} /> : <Play size={17} />}
      </button>

      <button
        onClick={toggleMute}
        style={{ background: 'none', border: 'none', color: '#FFD700', cursor: 'pointer', padding: 4, lineHeight: 1, borderRadius: '50%' }}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
      </button>
    </motion.div>
  );
}
