import React from 'react';
// src/App.tsx එකේ ඉඳන් බලද්දී components තියෙන්නේ src/components/ වල නම්:
import { AudioPlayer } from './src/components/AudioPlayer'; 
import Pandol from './src/components/Pandol'; 

export function App() {
  return (
    <main className="min-h-screen bg-black">
      <Pandol />
    </main>
  );
}
