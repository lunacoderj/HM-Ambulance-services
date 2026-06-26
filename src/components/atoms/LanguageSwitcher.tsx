import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, type Language } from '../../contexts/LanguageContext';

interface LangOption {
  code: Language;
  label: string;
  native: string;
  flag: string;
}

const LANGUAGES: LangOption[] = [
  { code: 'en', label: 'English',  native: 'English', flag: '🇬🇧' },
  { code: 'te', label: 'Telugu',   native: 'తెలుగు',  flag: '🇮🇳' },
  { code: 'hi', label: 'Hindi',    native: 'हिन्दी',   flag: '🇮🇳' },
];

interface LanguageSwitcherProps {
  /** 'dark' = white text for use on dark/transparent headers; 'light' = dark text */
  theme?: 'dark' | 'light';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ theme = 'dark' }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === language)!;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const triggerBase =
    theme === 'dark'
      ? 'text-white bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40'
      : 'text-gray-800 bg-gray-100 hover:bg-gray-200 border-gray-200';

  return (
    <div ref={ref} className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-md
          text-sm font-semibold transition-all duration-200 select-none
          ${triggerBase}
        `}
      >
        <Globe className="w-4 h-4 flex-shrink-0" />
        <span className="hidden sm:inline">{current.native}</span>
        <span
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}
        >
          ▼
        </span>
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div
          role="listbox"
          className="
            absolute right-0 mt-2 w-44 z-[100]
            bg-gray-900/95 backdrop-blur-xl
            border border-white/10 rounded-2xl
            shadow-2xl overflow-hidden
            animate-[fadeDown_0.18s_ease_forwards]
          "
          style={{ animation: 'fadeDown 0.18s ease forwards' }}
        >
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === language;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isActive}
                onClick={() => { setLanguage(lang.code); setOpen(false); }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3
                  text-sm font-medium text-left
                  transition-colors duration-150
                  ${isActive
                    ? 'bg-blue-600/30 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'}
                `}
              >
                <span className="text-lg leading-none flex-shrink-0">{lang.flag}</span>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 leading-none mb-0.5">{lang.label}</span>
                  <span className="leading-none">{lang.native}</span>
                </div>
                {isActive && (
                  <span className="ml-auto text-blue-400 text-xs">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Keyframe for dropdown animation */}
      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>
    </div>
  );
};
