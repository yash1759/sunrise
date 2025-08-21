"use client";
import { useEffect } from "react";

export default function Sidebar({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const items = [
    { label: "EVENTS", href: "#events" },
    { label: "ARTISTS", href: "#artists" },
    { label: "CALENDAR", href: "#calendar" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 cursor-pointer ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel (right) */}
      <aside
        className={`fixed top-0 right-0 h-full w-[70vw] max-w-[320px] bg-white text-black shadow-2xl transition-transform duration-300 ease-out will-change-transform overflow-hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Main menu"
      >
        {/* Yellow wipe: only on OPEN, bounded to panel width */}
        {open && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-[#ffd54a] animate-[sidebar-wipe_700ms_cubic-bezier(0.2,0.7,0.2,1)_forwards]"
          />
        )}

        {/* Close button (kept above sweep) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-6 top-6 h-12 w-12 grid place-items-center cursor-pointer z-50"
        >
          <span className="relative block h-8 w-8 before:content-[''] after:content-[''] before:absolute before:inset-0 after:absolute after:inset-0 before:rotate-45 after:-rotate-45 before:bg-black after:bg-black before:h-[2px] after:h-[2px] before:top-1/2 after:top-1/2 before:w-full after:w-full" />
        </button>

        {/* Menu list */}
        <nav className="relative z-40 h-full flex flex-col justify-center items-center">
          <ul className="space-y-12 text-center">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block text-3xl sm:text-4xl font-['Orbitron',_sans-serif] tracking-wider hover:text-gray-500 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Keyframes: wipe fills the whole sidebar then exits right, constrained by clip-path */}
      <style jsx global>{`
        @keyframes sidebar-wipe {
          0%   { clip-path: inset(0 100% 0 0); opacity: 1; }
          55%  { clip-path: inset(0 0 0 0);   opacity: 1; }
          100% { clip-path: inset(0 0 0 100%);opacity: 0; }
        }
      `}</style>
    </div>
  );
}
