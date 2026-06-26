import React from 'react';
import { Navigation, Radio, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteConfig } from '../data/siteConfig';

const COVERAGE_AREAS = [
  'Guntur City Proper',
  'Mangalagiri & Tadepalle',
  'Tenali Region',
  'Narasaraopet & Sattenapalli',
  'Outstation transfers to Hyd/VJA',
];

export const CoverageMap: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen lg:min-h-0 lg:h-[800px] bg-[#040810] overflow-hidden isolate flex flex-col lg:block border-t border-white/5">
      
      {/* Background Map - Top on mobile, full background on desktop */}
      <div className="relative lg:absolute inset-0 w-full h-[50vh] min-h-[400px] lg:h-full lg:min-h-full -z-20">
        <iframe
          title="Guntur Coverage Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122393.18956903332!2d80.35406730784961!3d16.32356502758156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f799cb5549812ab!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ 
            border: 0, 
            filter: 'invert(1) grayscale(1) hue-rotate(200deg) contrast(1.5) brightness(0.7)' 
          }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full scale-[1.05]"
        />
        
        {/* Gradients to blend the map seamlessly into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040810] lg:to-transparent lg:bg-gradient-to-r lg:from-[#040810] lg:via-transparent lg:to-[#040810] pointer-events-none opacity-90 lg:opacity-80" />
      </div>

      {/* Radar Sweep Effect (Visible primarily on desktop or tablet) */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center -z-10 opacity-30 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-blue-500/20 absolute" />
        <div className="w-[600px] h-[600px] rounded-full border border-blue-500/20 absolute animate-[ping_4s_ease-in-out_infinite]" />
        <div className="w-[400px] h-[400px] rounded-full border border-teal-500/20 absolute animate-[ping_3s_ease-in-out_infinite_0.5s]" />
      </div>

      {/* Main Content Overlay - Pulled up on mobile to overlap the map */}
      <div className="page-container relative z-10 flex-grow flex flex-col justify-start lg:justify-center -mt-24 lg:mt-0 lg:h-full pb-16 lg:pb-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Glass Panel */}
          <div className="col-span-1 lg:col-span-5 relative group mx-2 sm:mx-0">
            
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/30 to-teal-500/30 rounded-[2rem] blur-xl opacity-80 lg:opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-[#0a1220]/90 lg:bg-[#0a1220]/80 backdrop-blur-xl md:backdrop-blur-2xl border border-white/10 p-6 sm:p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl overflow-hidden">
              
              {/* Live Indicator */}
              <div className="flex items-center gap-3 mb-6 md:mb-8 bg-white/5 w-fit px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                <div className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-teal-500"></span>
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-teal-400">
                  {t.coverage.liveDispatch || 'Live Dispatch Grid'}
                </span>
              </div>

              {/* Header */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 md:mb-3 leading-tight">
                {t.coverage.title}
              </h2>
              <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed mb-6 md:mb-8">
                {t.coverage.subtitle}
              </p>

              {/* Coverage List */}
              <div className="mb-8 md:mb-10">
                <h3 className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-blue-500" />
                  {t.coverage.primaryZones || 'Primary Zones'}
                </h3>
                <ul className="flex flex-col gap-2.5 md:gap-3">
                  {COVERAGE_AREAS.map((area) => (
                    <li key={area} className="flex items-center gap-3 md:gap-4 text-gray-300 font-medium group/item cursor-default">
                      <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/50 transition-colors">
                        <Navigation className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-400 group-hover/item:text-blue-300" />
                      </div>
                      <span className="text-xs md:text-sm group-hover/item:text-white transition-colors">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency CTA */}
              <div className="bg-gradient-to-r from-red-500/10 to-transparent border-l-4 border-red-500 p-3 sm:p-4 md:p-5 rounded-r-xl">
                <div className="flex items-center gap-2 font-black text-red-400 text-[9px] sm:text-[10px] uppercase tracking-widest mb-1.5 md:mb-2">
                  <ShieldAlert className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  {t.coverage.emergencyContact}
                </div>
                <a
                  href={`tel:${siteConfig.contact.emergencyPhoneRaw}`}
                  className="text-xl sm:text-2xl font-black text-white hover:text-red-400 transition-colors block drop-shadow-md"
                >
                  {siteConfig.contact.emergencyPhone}
                </a>
                <p className="text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase tracking-wider mt-1">{t.coverage.available}</p>
              </div>

            </div>
          </div>
          
          {/* Spacer for desktop to push panel left */}
          <div className="hidden lg:block lg:col-span-7" />
        </div>
      </div>
    </section>
  );
};
