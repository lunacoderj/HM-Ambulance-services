import React from 'react';

export interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '',
  variant = 'light' 
}) => {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1F2937';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Image Logo */}
      <img src="/fevicon.png" alt="HM Ambulance Logo" className="w-[78px] h-[78px] object-contain drop-shadow-md" />
      
      {/* Text */}
      <div className="flex flex-col justify-center">
        <span 
          className="text-[18px] font-bold tracking-tight leading-none" 
          style={{ color: textColor }}
        >
          HM AMBULANCE
        </span>
        <span 
          className="text-[8px] font-medium tracking-widest uppercase opacity-80 mt-1" 
          style={{ color: textColor }}
        >
          Always Ready
        </span>
      </div>
    </div>
  );
};
