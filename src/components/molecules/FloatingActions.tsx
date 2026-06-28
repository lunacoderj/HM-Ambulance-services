import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const FloatingActions: React.FC = () => {
  const handleCall = () => {
    window.location.href = `tel:${siteConfig.contact.sosPhoneRaw}`;
  };

  const handleWhatsApp = () => {
    const n = siteConfig.contact.whatsappRaw.replace(/\+/g, '');
    window.location.href = `https://wa.me/${n}?text=Emergency! I need an ambulance at my location.`;
  };

  return (
    <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 p-2">
      {/* SOS Button */}
      <button
        onClick={() => window.dispatchEvent(new Event('open-emergency-mode'))}
        className="group relative flex flex-col items-center justify-center w-14 h-16 bg-black hover:bg-gray-900 text-red-500 rounded-l-xl shadow-[0_0_20px_rgba(0,0,0,0.6)] transition-all duration-300 hover:w-16 hover:-translate-x-1 border border-red-500/50"
      >
        <div className="absolute inset-0 bg-red-600/20 rounded-l-xl animate-ping opacity-50" />
        <span className="text-[12px] font-black uppercase tracking-widest text-center leading-tight z-10 animate-pulse">SOS</span>
      </button>
      {/* Call Button */}
      <button
        onClick={handleCall}
        className="group relative flex flex-col items-center justify-center w-14 h-16 bg-red-600 hover:bg-red-700 text-white rounded-l-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 hover:w-16 hover:-translate-x-1 border border-red-500/50"
      >
        <Phone className="w-5 h-5 mb-1" />
        <span className="text-[9px] font-black uppercase tracking-wider text-center leading-tight">Call<br/>Now</span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="group relative flex flex-col items-center justify-center w-14 h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-l-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 hover:w-16 hover:-translate-x-1 border border-emerald-500/50"
      >
        <MessageCircle className="w-5 h-5 mb-1" />
        <span className="text-[9px] font-black uppercase tracking-wider text-center leading-tight">Chat<br/>Now</span>
      </button>
    </div>
  );
};
