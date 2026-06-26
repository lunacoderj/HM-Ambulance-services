import React from 'react';

export interface AmbulanceProps {
  className?: string;
  isHeadlightsOn?: boolean;
  isEmergencyLightsOn?: boolean;
  color?: string; // Main accent color
}

export const AmbulanceBasic: React.FC<AmbulanceProps> = ({
  className = '',
  isHeadlightsOn = false,
  isEmergencyLightsOn = false,
  color = '#EF4444' // Emergency red
}) => {
  return (
    <svg 
      viewBox="0 0 400 200" 
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="headlight-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="emergency-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Shadow */}
      <ellipse cx="200" cy="185" rx="160" ry="10" fill="rgba(0,0,0,0.2)" />

      {/* Main Body */}
      <path d="M 40 160 L 40 70 C 40 60 50 50 60 50 L 260 50 L 300 80 L 350 80 C 360 80 370 90 370 100 L 370 160 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      
      {/* Accent Stripe */}
      <path d="M 40 110 L 370 110 L 370 130 L 40 130 Z" fill={color} />
      
      {/* Red Cross */}
      <rect x="130" y="65" width="40" height="12" fill={color} />
      <rect x="144" y="51" width="12" height="40" fill={color} />
      

      {/* Windows */}
      {/* Cab Window */}
      <path d="M 265 55 L 295 80 L 320 80 L 320 100 L 265 100 Z" fill="#374151" />
      {/* Back Window */}
      <rect x="50" y="60" width="30" height="30" rx="4" fill="#374151" />

      {/* Wheels */}
      <circle cx="90" cy="160" r="22" fill="#1F2937" />
      <circle cx="90" cy="160" r="12" fill="#D1D5DB" />
      
      <circle cx="310" cy="160" r="22" fill="#1F2937" />
      <circle cx="310" cy="160" r="12" fill="#D1D5DB" />

      {/* Emergency Lights (Top) */}
      <path d="M 270 45 L 290 45 L 285 50 L 275 50 Z" fill="#EF4444" />
      <path d="M 60 45 L 80 45 L 75 50 L 65 50 Z" fill="#3B82F6" />
      
      {/* Emergency Light Beams (Animated visibility) */}
      <g style={{ opacity: isEmergencyLightsOn ? 1 : 0, transition: 'opacity 0.2s' }}>
        <circle cx="280" cy="45" r="15" fill="#EF4444" filter="url(#emergency-glow)" />
        <circle cx="70" cy="45" r="15" fill="#3B82F6" filter="url(#emergency-glow)" />
      </g>

      {/* Headlights */}
      <path d="M 365 115 L 372 115 L 372 125 L 365 125 Z" fill="#FBBF24" />
      <path d="M 365 140 L 372 140 L 372 150 L 365 150 Z" fill="#FCD34D" />
      
      {/* Headlight Beams */}
      <g style={{ opacity: isHeadlightsOn ? 0.8 : 0, transition: 'opacity 0.5s' }}>
        <path d="M 372 145 L 450 120 L 450 180 Z" fill="rgba(252, 211, 77, 0.4)" filter="url(#headlight-glow)" />
      </g>
    </svg>
  );
};
