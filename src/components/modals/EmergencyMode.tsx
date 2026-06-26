import React, { useEffect, useState } from 'react';
import { AlertTriangle, PhoneCall, MapPin, X, Activity } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const EmergencyMode: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Trigger on Alt+E
      if (e.altKey && e.key.toLowerCase() === 'e') {
        setIsOpen(true);
      }
      // Close on Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleOpenEvent = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-emergency-mode', handleOpenEvent);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-emergency-mode', handleOpenEvent);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Cinematic Strobe & Blur Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300" />
      <div className="absolute inset-0 bg-red-900/20 animate-pulse mix-blend-screen pointer-events-none" />
      
      {/* Overlay Content */}
      <div className="relative w-full max-w-lg bg-black border-2 border-red-600/50 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.4)] animate-in zoom-in-95 duration-500">
        
        {/* Heartbeat Header */}
        <div className="relative bg-gradient-to-b from-red-900/40 to-black p-8 text-center border-b border-red-500/20 overflow-hidden">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Animated EKG Background inside header */}
          <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center">
            <div className="w-[200%] h-px bg-red-500" />
            <Activity className="absolute left-1/2 -translate-x-1/2 text-red-500 w-full h-full scale-150 animate-pulse" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(220,38,38,0.8)] animate-pulse">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest mb-2">SOS Activated</h2>
            <p className="text-red-400 font-medium tracking-wide">CRITICAL DISPATCH STANDBY</p>
          </div>
        </div>

        {/* Action Body */}
        <div className="p-8 flex flex-col gap-6 relative">
          <p className="text-center text-gray-400 font-medium text-sm md:text-base leading-relaxed">
            You are about to trigger a priority emergency response. Tap below to connect directly to our dispatch center.
          </p>

          <a 
            href={`tel:${siteConfig.contact.emergencyPhoneRaw}`} 
            className="relative overflow-hidden group bg-red-600 text-white p-6 rounded-3xl flex flex-col items-center justify-center gap-3 shadow-[0_10px_40px_rgba(220,38,38,0.3)] transition-all hover:scale-105 active:scale-95 border border-red-500"
          >
            {/* Radar Sweep Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            
            <PhoneCall className="w-10 h-10 animate-bounce" />
            <span className="font-black text-2xl md:text-3xl tracking-wider">CALL NOW</span>
            <span className="text-red-200 text-sm font-bold tracking-widest uppercase opacity-80">{siteConfig.contact.emergencyPhone}</span>
          </a>
          
          <div className="grid grid-cols-2 gap-4 mt-2">
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#121b16] border border-[#25D366]/30 text-[#25D366] py-4 rounded-2xl font-bold flex flex-col items-center justify-center gap-2 transition-all hover:bg-[#25D366] hover:text-black"
            >
              WhatsApp SOS
            </a>
            <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white py-4 rounded-2xl font-bold flex flex-col items-center justify-center gap-2 transition-all">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Location</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
