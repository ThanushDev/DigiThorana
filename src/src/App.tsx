import React from 'react';
import { AudioPlayer } from './components/AudioPlayer';
import { Pandol } from './components/Pandol';
export function App() {
  return (
    <main className="bg-black min-h-screen w-full relative selection:bg-yellow-500/30">
      <AudioPlayer />
      <Pandol />
    </main>);

}