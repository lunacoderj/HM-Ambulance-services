import React, { useEffect, useState } from 'react';
import { AlertTriangle, PhoneCall, MapPin, X } from 'lucide-react';
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

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="bg-emergency-red p-6 text-white text-center relative">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl font-black uppercase tracking-wider mb-2">Emergency Mode</h2>
          <p className="text-red-100 font-medium">Do not panic. We are here to help.</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <p className="text-center text-gray-600 font-medium">
            Tap the button below to immediately dial our dispatch center. Ensure you are ready to share your location.
          </p>

          <a href={`tel:${siteConfig.contact.emergencyPhoneRaw}`} className="bg-white text-emergency-red px-8 py-4 rounded-2xl font-black text-2xl md:text-3xl hover:bg-red-50 hover:scale-105 transition-all shadow-xl text-center shadow-red-900/20 active:scale-95 flex items-center justify-center gap-3">
            <PhoneCall className="w-8 h-8 animate-pulse" />
            {siteConfig.contact.emergencyPhone}
          </a>
          
          <a href={`https://wa.me/${siteConfig.contact.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-xl md:text-2xl hover:bg-[#1ebd57] hover:scale-105 transition-all shadow-xl text-center flex items-center justify-center gap-3">
            WhatsApp Emergency
          </a>

          <div className="flex gap-4">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-navy-dark py-4 rounded-2xl font-bold flex flex-col items-center justify-center gap-2 transition-colors">
              <MapPin className="w-6 h-6 text-medical-blue" />
              <span>Share Location</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
