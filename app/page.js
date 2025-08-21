'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Background image with zoom-in on load */}
      <img
        className="bg-zoom absolute inset-0 h-full w-full object-cover z-0 will-change-transform"
        src="/backk.jpg"
        alt="Background"
      />

      {/* Gray transparent overlay */}
      <div className="absolute inset-0 bg-[#4f52577a] z-10" />

      {/* Top bar (menu icon) */}
      <header className="absolute top-6 right-6 z-30">
        <button
          aria-label="Open Menu"
          onClick={() => setMenuOpen(true)}
          className="flex flex-col justify-center items-center gap-1"
        >
          <span className="h-[2px] w-7 bg-white" />
          <span className="h-[2px] w-7 bg-white" />
          <span className="h-[2px] w-7 bg-white" />
        </button>
      </header>

      {/* Centered content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        {/* Top pair */}
        <div className="grid grid-cols-2 gap-x-40 mb-6 w-[41%]">
          <a
            href="#events"
            className="btn btn--blue glass w-64 h-12 flex items-center justify-center animate-btn-wipe anim-delay-300"
          >
            EVENTS
          </a>
          <a
            href="#artists"
            className="btn glass w-64 h-12 flex items-center justify-center animate-btn-wipe anim-delay-750"
          >
            ARTISTS
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center my-6">
          <img src="/logo.png" alt="Logo" className="h-24 w-24 object-contain" />
        </div>

        {/* Bottom pair */}
        <div className="grid grid-cols-2 gap-x-40 mt-6 w-[41%]">
          <a
            href="#calendar"
            className="btn glass w-64 h-12 flex items-center justify-center animate-btn-wipe anim-delay-1000"
          >
            CALENDAR
          </a>
          <a
            href="#contact"
            className="btn glass w-64 h-12 flex items-center justify-center animate-btn-wipe anim-delay-1250"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* Sidebar */}
      {menuOpen && (
        <Sidebar
          open={true}
          onClose={() => setMenuOpen(false)}
        />
      )}

      {/* Animations & helpers */}
      <style jsx global>{`
        /* --- Background zoom-in --- */
        .bg-zoom {
          animation: bg-zoom-in 6s ease-out both;
          transform-origin: center;
        }
        @keyframes bg-zoom-in {
          0% { transform: scale(1); }
          100% { transform: scale(1.10); }
        }

        /* --- Button base --- */
        .glass { background-color: rgba(255, 255, 255, 0.3); color: #000; }
        .btn {
          position: relative;
          overflow: hidden;
          text-align: center;
          font-size: 1.2rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          font-family: 'Orbitron', sans-serif;
          transition: color .2s ease, background-color .2s ease;
          /* default wipe color (yellow) */
          --wipe-color: #ffd54a;
        }
        .btn:hover { color: #fff; }

        /* EVENTS button uses blue for its wipe */
        .btn--blue { --wipe-color: #7f40f1; } /* Tailwind blue-500 */

        /* One-time wipe using the variable color, then back to normal */
        .animate-btn-wipe { animation: btn-wipe-seq 1.1s ease-out forwards; }
        @keyframes btn-wipe-seq {
          0%   { background-color: var(--wipe-color); }
          70%  { background-color: var(--wipe-color); }
          100% { background-color: rgba(255, 255, 255, 0.3); }
        }

        /* Animation delay helpers */
        .anim-delay-300  { animation-delay: 300ms; }
        .anim-delay-750  { animation-delay: 750ms; }
        .anim-delay-1000 { animation-delay: 1000ms; }
        .anim-delay-1250 { animation-delay: 1250ms; }
      `}</style>
    </main>
  );
}
