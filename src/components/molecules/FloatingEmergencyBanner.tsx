import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { PhoneCall, Radio } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const FloatingEmergencyBanner: React.FC = () => {
  const { t } = useLanguage();
  const contactInfo = siteConfig.contact;

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-4xl bg-gradient-to-r from-gray-900 to-[#0a1122] border border-white/10 rounded-2xl p-5 md:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-5 md:gap-6 backdrop-blur-xl z-50">
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/30">
          <Radio className="w-4 h-4 md:w-5 md:h-5 text-red-500 animate-pulse" />
        </div>
        <div>
          <h3 className="text-white font-black text-base md:text-xl uppercase tracking-widest">{t.footer.dispatchActive}</h3>
          <p className="text-gray-400 text-[10px] md:text-sm mt-0.5 md:mt-1">{t.footer.standby}</p>
        </div>
      </div>
      <a
        href={`tel:${contactInfo.emergencyPhoneRaw}`}
        className="w-full md:w-auto flex items-center justify-center gap-2 md:gap-3 bg-red-600 hover:bg-red-500 text-white font-black px-6 md:px-8 py-3 md:py-3.5 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 hover:scale-105 text-sm md:text-base"
      >
        <PhoneCall className="w-4 h-4 md:w-5 md:h-5" />
        {t.footer.callNow}
      </a>
    </div>
  );
};
