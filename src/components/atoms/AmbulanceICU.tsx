import React from 'react';
import type { AmbulanceProps } from './AmbulanceBasic';

export const AmbulanceICU: React.FC<AmbulanceProps> = ({
  className = '',
  isHeadlightsOn = false,
  isEmergencyLightsOn = false,
  color = '#EF4444' // Emergency red
}) => {
  return (
    <svg 
      viewBox="0 0 440 220" 
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="headlight-glow-icu" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="emergency-glow-icu" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Shadow */}
      <ellipse cx="220" cy="205" rx="180" ry="12" fill="rgba(0,0,0,0.25)" />

      {/* Main Body (Larger, more boxy for ICU) */}
      <path d="M 30 180 L 30 60 C 30 50 40 40 50 40 L 280 40 L 330 80 L 390 80 C 400 80 410 90 410 100 L 410 180 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      
      {/* Accent Stripe (Double stripe for ICU) */}
      <path d="M 30 120 L 410 120 L 410 140 L 30 140 Z" fill={color} />
      <path d="M 30 145 L 410 145 L 410 150 L 30 150 Z" fill="#FBBF24" />
      
      {/* Red Cross & Star of Life */}
      <rect x="150" y="60" width="45" height="15" fill={color} />
      <rect x="165" y="45" width="15" height="45" fill={color} />
      <circle cx="172.5" cy="67.5" r="18" fill="none" stroke={color} strokeWidth="2" />
      

      {/* Windows */}
      {/* Cab Window */}
      <path d="M 290 45 L 325 80 L 360 80 L 360 110 L 290 110 Z" fill="#1F2937" />
      {/* Back Windows (Multiple) */}
      <rect x="45" y="60" width="30" height="35" rx="4" fill="#374151" />
      <rect x="85" y="60" width="30" height="35" rx="4" fill="#374151" />

      {/* Wheels */}
      <circle cx="95" cy="180" r="24" fill="#1F2937" />
      <circle cx="95" cy="180" r="14" fill="#9CA3AF" />
      <circle cx="95" cy="180" r="6" fill="#374151" />
      
      <circle cx="340" cy="180" r="24" fill="#1F2937" />
      <circle cx="340" cy="180" r="14" fill="#9CA3AF" />
      <circle cx="340" cy="180" r="6" fill="#374151" />

      {/* Emergency Lights (Top Lightbar) */}
      <path d="M 290 35 L 320 35 L 315 40 L 295 40 Z" fill="#EF4444" />
      <path d="M 50 35 L 80 35 L 75 40 L 55 40 Z" fill="#3B82F6" />
      <rect x="150" y="36" width="30" height="4" fill="#EF4444" />
      
      {/* Emergency Light Beams (Animated) */}
      <g style={{ opacity: isEmergencyLightsOn ? 1 : 0, transition: 'opacity 0.2s' }}>
        <circle cx="305" cy="35" r="20" fill="#EF4444" filter="url(#emergency-glow-icu)" />
        <circle cx="65" cy="35" r="20" fill="#3B82F6" filter="url(#emergency-glow-icu)" />
        <circle cx="165" cy="35" r="15" fill="#EF4444" filter="url(#emergency-glow-icu)" />
      </g>

      {/* Headlights (More intense for ICU) */}
      <path d="M 405 125 L 415 125 L 415 135 L 405 135 Z" fill="#FBBF24" />
      <path d="M 405 155 L 415 155 L 415 165 L 405 165 Z" fill="#FCD34D" />
      
      {/* Headlight Beams */}
      <g style={{ opacity: isHeadlightsOn ? 0.9 : 0, transition: 'opacity 0.5s' }}>
        <path d="M 415 160 L 520 130 L 520 200 Z" fill="rgba(252, 211, 77, 0.5)" filter="url(#headlight-glow-icu)" />
      </g>
    </svg>
  );
};
