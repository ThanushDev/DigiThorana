import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioPlayer } from './AudioPlayer';
import { Banner } from './Banner';
import { WavingFlag } from './WavingFlag';

const baseUrl = import.meta.env.BASE_URL || '/';

// ── Panel data – 8 panels ──
const panels = [
  { n: '01', title: 'වෙස්සන්තර', src: `${baseUrl}images/thorana/panel1.png` },
  { n: '02', title: 'සාම',       src: `${baseUrl}images/thorana/panel2.png` },
  { n: '03', title: 'තේමිය',    src: `${baseUrl}images/thorana/panel3.png` },
  { n: '04', title: 'මහාජනක',  src: `${baseUrl}images/thorana/panel4.png` },
  { n: '05', title: 'නේමි',     src: `${baseUrl}images/thorana/panel5.png` },
  { n: '06', title: 'මහෝසධ',   src: `${baseUrl}images/thorana/panel6.png` },
  { n: '07', title: 'භූරිදත්ත', src: `${baseUrl}images/thorana/panel7.png` },
  { n: '08', title: 'සිවි',     src: `${baseUrl}images/thorana/panel8.png` },
];

/*
  Lotus petal layout – matches the Siyatha screenshot exactly.
  cx/cy = center as % of thorana container
  w/h   = size as % of container width
  rot   = rotation in degrees
*/
const layout = [
  { cx: 50, cy: 13, w: 14, h: 20, rot: 0,   idx: 0 }, // top-peak
  { cx: 30, cy: 21, w: 15, h: 19, rot: -32, idx: 1 }, // upper-left
  { cx: 70, cy: 21, w: 15, h: 19, rot:  32, idx: 2 }, // upper-right
  { cx: 15, cy: 41, w: 17, h: 20, rot: -58, idx: 3 }, // mid-left
  { cx: 85, cy: 41, w: 17, h: 20, rot:  58, idx: 4 }, // mid-right
  { cx:  7, cy: 64, w: 19, h: 21, rot: -78, idx: 5 }, // low-left
  { cx: 93, cy: 64, w: 19, h: 21, rot:  78, idx: 6 }, // low-right
  { cx: 50, cy: 82, w: 22, h: 18, rot:   0, idx: 7 }, // bottom-center
];

// ── Twinkling dot canvas ──
function DotCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const tRef = useRef(0);

  useEffect(() => {
    const cv = canvasRef.current;
    const co = containerRef.current;
    if (!cv || !co) return;

    const colors = ['#FFD700','#FF4500','#00BFFF','#FF69B4','#7FFF00','#FFFFFF','#FFA500'];

    type Dot = { x: number; y: number; c: string; phase: number; r: number };
    let dots: Dot[] = [];

    function buildDots() {
      dots = [];
      const W = cv!.width = co!.offsetWidth;
      const H = cv!.height = co!.offsetHeight;
      // outer gold ring – semicircle
      const N = 70;
      for (let i = 0; i < N; i++) {
        const a = (Math.PI * i) / (N - 1);
        dots.push({
          x: W / 2 + W * 0.43 * Math.cos(Math.PI - a),
          y: H     - H * 0.98 * Math.sin(a) * 0.97,
          c: colors[i % colors.length],
          phase: i * 0.18,
          r: 3,
        });
      }
      // inner cyan ring
      const M = 50;
      for (let i = 0; i < M; i++) {
        const a = (Math.PI * i) / (M - 1);
        dots.push({
          x: W / 2 + W * 0.34 * Math.cos(Math.PI - a),
          y: H     - H * 0.80 * Math.sin(a) * 0.97,
          c: ['#00BFFF','#00FFFF','#FFFFFF'][i % 3],
          phase: i * 0.22 + 1.5,
          r: 2,
        });
      }
    }

    function draw() {
      const ctx = cv!.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, cv!.width, cv!.height);
      const now = tRef.current * 0.04;
      dots.forEach(d => {
        const bright = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(now + d.phase));
        ctx.globalAlpha = bright;
        ctx.fillStyle = d.c;
        ctx.shadowColor = d.c;
        ctx.shadowBlur = 7;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }

    function loop() {
      tRef.current++;
      draw();
      frameRef.current = requestAnimationFrame(loop);
    }

    buildDots();
    loop();

    const ro = new ResizeObserver(() => { buildDots(); });
    ro.observe(co);

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
  );
}

// ── Single petal ──
interface PetalProps {
  layout: typeof layout[0];
  panel: typeof panels[0];
  onClick: () => void;
}
function Petal({ layout: L, panel: p, onClick }: PetalProps) {
  const delay = L.idx * 0.5;
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.15, duration: 0.6, type: 'spring' }}
      onClick={onClick}
      style={{
        position: 'absolute',
        width:  `${L.w}%`,
        height: `${L.h}%`,
        left:   `${L.cx - L.w / 2}%`,
        top:    `${L.cy - L.h / 2}%`,
        transform: `rotate(${L.rot}deg)`,
        zIndex: 20 - L.idx,
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <div className="petal-frame" style={{ animationDelay: `${delay}s` }}>
        <img
          src={p.src}
          alt={p.title}
          onError={e => { (e.target as HTMLImageElement).style.opacity = '0'; }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.9 }}
        />
        {/* Number badge – counter-rotated so it's always upright */}
        <span
          className="petal-num"
          style={{ transform: `rotate(${-L.rot}deg)` }}
        >{p.n}</span>
        {/* Label – counter-rotated */}
        <span
          className="petal-label sinhala-text"
          style={{ transform: `translateX(-50%) rotate(${-L.rot}deg)` }}
        >{p.title}</span>
      </div>
    </motion.button>
  );
}

// ── Buddha center ──
function BuddhaCenter() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{
      position: 'absolute', left: '50%', bottom: 0,
      transform: 'translateX(-50%)',
      width: '22%', aspectRatio: '0.6/1',
      zIndex: 25, display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }}>
      {/* Aura glow */}
      <div className="buddha-aura" />
      {/* Rotating Buddhist-color rings */}
      <svg
        className="buddha-rings"
        viewBox="0 0 200 200"
        style={{ position: 'absolute', width: '200%', height: '200%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      >
        {[
          { r: 82, c: '#005EB8', da: '6 10' },
          { r: 70, c: '#FFC627', da: '9 7'  },
          { r: 58, c: '#DA291C', da: '3 9'  },
          { r: 46, c: '#FFFFFF', da: '2 6'  },
          { r: 34, c: '#F2A900', da: '4 4'  },
        ].map((ring, i) => (
          <circle key={i} cx="100" cy="100" r={ring.r}
            fill="none" stroke={ring.c} strokeWidth="1.5"
            strokeDasharray={ring.da} opacity="0.55" />
        ))}
      </svg>
      {/* Fallback silhouette shown until real image loads */}
      {!loaded && (
        <svg viewBox="0 0 100 160" style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', filter: 'drop-shadow(0 0 18px rgba(255,165,0,0.9))' }}>
          <ellipse cx="50" cy="22" rx="18" ry="20" fill="#F4A460"/>
          <ellipse cx="50" cy="12" rx="11" ry="8" fill="#DEB887"/>
          <circle  cx="50" cy="7"  r="3.5" fill="#FFD700" opacity=".9"/>
          <circle  cx="50" cy="21" r="2.5" fill="#FFD700"/>
          <ellipse cx="50" cy="90"  rx="34" ry="52" fill="#FF8C00" opacity=".85"/>
          <ellipse cx="50" cy="70"  rx="22" ry="28" fill="#FFA500" opacity=".7"/>
          <ellipse cx="50" cy="138" rx="42" ry="16" fill="#FF8C00" opacity=".6"/>
        </svg>
      )}
      <img
        src={`${baseUrl}images/thorana/buddha.png`}
        alt="Buddha"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        style={{
          position: 'relative', zIndex: 3,
          width: '100%', height: '100%', objectFit: 'contain',
          filter: 'drop-shadow(0 0 20px rgba(255,165,0,0.9))',
          display: loaded ? 'block' : 'none',
        }}
      />
    </div>
  );
}

// ── Panel popup ──
interface PopupProps {
  panel: typeof panels[0] | null;
  onClose: () => void;
}
function PanelPopup({ panel, onClose }: PopupProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => { setImgLoaded(false); }, [panel]);

  return (
    <AnimatePresence>
      {panel && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="popup-box"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button className="popup-close" onClick={onClose}>✕</button>
            {!imgLoaded && (
              <div className="popup-placeholder">
                <span style={{ fontSize: 36, marginBottom: 8 }}>🖼️</span>
                <span style={{ fontSize: 12, color: 'rgba(255,215,0,0.45)' }}>{panel.src}</span>
              </div>
            )}
            <img
              src={panel.src}
              alt={panel.title}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgLoaded(false)}
              style={{ display: imgLoaded ? 'block' : 'none' }}
              className="popup-img"
            />
            <div className="popup-title sinhala-text">{panel.title}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Main Pandol ──
export default function Pandol() {
  const [started, setStarted] = useState(false);
  const [activePanel, setActivePanel] = useState<typeof panels[0] | null>(null);

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 80%, #1a0000 0%, #000 70%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', overflow: 'hidden' }}>

      {/* Start screen */}
      <AnimatePresence>
        {!started && (
          <motion.div
            exit={{ opacity: 0, scale: 0.9 }}
            style={{ position: 'absolute', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setStarted(true)}
              className="start-btn sinhala-text"
            >
              තොරණ නැරඹීම ආරම්භ කරන්න
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {started && (
        <>
          {/* Audio player */}
          <AudioPlayer />

          {/* Flags row */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '0 8%', zIndex: 30, pointerEvents: 'none' }}>
            <WavingFlag />
            <WavingFlag mirrored />
          </div>

          {/* ── THORANA ── */}
          <div className="thorana-container">

            {/* Red LED body */}
            <div className="thorana-body" />
            {/* Gold outer glow ring */}
            <div className="thorana-ring-gold" />
            {/* Cyan inner ring */}
            <div className="thorana-ring-cyan" />

            {/* Twinkling dot canvas */}
            <DotCanvas />

            {/* 8 lotus petals */}
            {layout.map((L) => (
              <Petal
                key={L.idx}
                layout={L}
                panel={panels[L.idx]}
                onClick={() => setActivePanel(panels[L.idx])}
              />
            ))}

            {/* Buddha */}
            <BuddhaCenter />
          </div>

          {/* Banner */}
          <Banner />
        </>
      )}

      {/* Panel popup */}
      <PanelPopup panel={activePanel} onClose={() => setActivePanel(null)} />
    </div>
  );
}
