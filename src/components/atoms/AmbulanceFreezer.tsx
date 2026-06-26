import React from 'react';
import type { AmbulanceProps } from './AmbulanceBasic';

export const AmbulanceFreezer: React.FC<AmbulanceProps> = ({
  className = '',
  isHeadlightsOn = false,
  isEmergencyLightsOn = false,
  color = '#3B82F6' // Medical blue for freezer
}) => {
  return (
    <svg 
      viewBox="0 0 400 200" 
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="headlight-glow-freezer" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="emergency-glow-freezer" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Shadow */}
      <ellipse cx="200" cy="185" rx="160" ry="10" fill="rgba(0,0,0,0.2)" />

      {/* Main Body (Slightly cooler tint) */}
      <path d="M 40 160 L 40 70 C 40 60 50 50 60 50 L 260 50 L 300 80 L 350 80 C 360 80 370 90 370 100 L 370 160 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
      
      {/* Accent Stripe (Blue for freezer) */}
      <path d="M 40 120 L 370 120 L 370 135 L 40 135 Z" fill={color} />
      
      {/* Snow/Frost Symbol instead of Red Cross */}
      <g transform="translate(150, 70)">
        <path d="M -15 0 L 15 0 M 0 -15 L 0 15 M -10 -10 L 10 10 M -10 10 L 10 -10" stroke={color} strokeWidth="3" />
      </g>
      

      {/* Windows (Frosted/Tinted heavily) */}
      {/* Cab Window */}
      <path d="M 265 55 L 295 80 L 320 80 L 320 100 L 265 100 Z" fill="#0F172A" />
      {/* Back Window (Small/None for freezer, maybe just a vent) */}
      <rect x="60" y="60" width="40" height="15" rx="2" fill="#94A3B8" />
      <rect x="60" y="78" width="40" height="4" fill="#94A3B8" />
      <rect x="60" y="85" width="40" height="4" fill="#94A3B8" />

      {/* Wheels */}
      <circle cx="90" cy="160" r="22" fill="#1F2937" />
      <circle cx="90" cy="160" r="12" fill="#94A3B8" />
      
      <circle cx="310" cy="160" r="22" fill="#1F2937" />
      <circle cx="310" cy="160" r="12" fill="#94A3B8" />

      {/* Emergency Lights (Top - More subtle/blue heavy for non-critical transport) */}
      <path d="M 270 45 L 290 45 L 285 50 L 275 50 Z" fill="#F59E0B" />
      <path d="M 60 45 L 80 45 L 75 50 L 65 50 Z" fill="#3B82F6" />
      
      {/* Emergency Light Beams */}
      <g style={{ opacity: isEmergencyLightsOn ? 1 : 0, transition: 'opacity 0.2s' }}>
        <circle cx="280" cy="45" r="12" fill="#F59E0B" filter="url(#emergency-glow-freezer)" />
        <circle cx="70" cy="45" r="12" fill="#3B82F6" filter="url(#emergency-glow-freezer)" />
      </g>

      {/* Headlights */}
      <path d="M 365 115 L 372 115 L 372 125 L 365 125 Z" fill="#FCD34D" />
      <path d="M 365 140 L 372 140 L 372 150 L 365 150 Z" fill="#FDE68A" />
      
      {/* Headlight Beams */}
      <g style={{ opacity: isHeadlightsOn ? 0.7 : 0, transition: 'opacity 0.5s' }}>
        <path d="M 372 145 L 450 125 L 450 175 Z" fill="rgba(252, 211, 77, 0.3)" filter="url(#headlight-glow-freezer)" />
      </g>
    </svg>
  );
};
