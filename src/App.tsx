import React from 'react';
import { AudioPlayer } from './src/components/AudioPlayer';
import { Pandol } from './src/components/Pandol';
export function App() {
  return (
    <main className="bg-black min-h-screen w-full relative selection:bg-yellow-500/30">
      <AudioPlayer />
      <Pandol />
    </main>);

}