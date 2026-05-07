import React from 'react';
// Pandol කොම්පෝනන්ට් එක Named Import එකක් විදිහට ගන්නවා
import { Pandol } from './src/components/Pandol'; 
import './index.css';

export function App() {
  return (
    <div className="w-full h-screen bg-black">
      {/* ඔයාගේ අලුත් Pandol කොම්පෝනන්ට් එක */}
      <Pandol />
    </div>
  );
}

export default App;
