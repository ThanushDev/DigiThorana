import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { motion } from 'framer-motion';
export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  // Using a reliable royalty-free ambient/meditation track URL
  const audioUrl =
  'https://cdn.pixabay.com/download/audio/2022/01/26/audio_d0c6ff1cb8.mp3?filename=meditation-bowl-singing-bowl-zen-music-111820.mp3';
  useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = 0.5;
    audioRef.current.play().catch((e) => console.log("Auto-play blocked:", e));
    setIsPlaying(true);
  }
}, []);
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.
        play().
        catch((e) => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 1
      }}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-yellow-500/30 p-2 rounded-full box-glow">
      
      <audio ref={audioRef} src={audioUrl} loop />

      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400">
        <Music size={16} className={isPlaying ? 'animate-pulse' : ''} />
      </div>

      <button
        onClick={togglePlay}
        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}>
        
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>

      <button
        onClick={toggleMute}
        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white mr-1"
        aria-label={isMuted ? 'Unmute' : 'Mute'}>
        
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </motion.div>);

}
