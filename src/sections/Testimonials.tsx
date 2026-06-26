import React from 'react';
import { testimonials } from '../data/testimonials';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();

  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);

  const renderCard = (tItem: any, idx: number) => {
    const quote = language === 'te' && tItem.quoteTe ? tItem.quoteTe : tItem.quote;
    const name = language === 'te' && tItem.nameTe ? tItem.nameTe : tItem.name;
    const location = language === 'te' && tItem.locationTe ? tItem.locationTe : tItem.location;
    const initials = name?.charAt(0) ?? '?';

    return (
      <div
        key={`${tItem.id}-${idx}`}
        className="w-[280px] md:w-[350px] bg-[#0a1220]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col gap-3 hover:bg-white/5 hover:border-white/20 transition-all duration-300 flex-shrink-0 cursor-pointer group"
      >
        <div className="flex justify-between items-start mb-1">
          <Quote className="w-6 h-6 text-blue-500/40 group-hover:text-blue-500/80 transition-colors" />
          <div className="flex gap-1">
            {[...Array(tItem.stars || 5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-amber-400 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
            ))}
          </div>
        </div>

        <p className="text-gray-300 italic leading-relaxed flex-grow text-xs md:text-sm">
          "{quote}"
        </p>

        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0 shadow-lg">
            {initials}
          </div>
          <div>
            <div className="font-bold text-white text-xs">{name}</div>
            <div className="text-[10px] text-teal-400 font-medium mt-0.5">{location}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#040810] py-16 md:py-20 relative overflow-hidden isolate border-t border-white/5">
      {/* Background Tech Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="page-container relative z-10 mb-8 md:mb-12 text-center">
        <div className="inline-block mb-3 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
          {t.testimonials.trusted || 'Trusted by Thousands'}
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-3">{t.testimonials.title}</h2>
        <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
      </div>

      {/* Marquee Container */}
      <div className="w-full relative marquee-container flex flex-col gap-6">
        
        {/* Fading Edges to blend with the background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#040810] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#040810] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Marquee Left */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-6 animate-marquee-left w-max pr-6">
            {[...row1, ...row1, ...row1].map((item, idx) => renderCard(item, idx))}
          </div>
        </div>

        {/* Row 2: Marquee Right */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-6 animate-marquee-right w-max pr-6">
            {[...row2, ...row2, ...row2].map((item, idx) => renderCard(item, idx))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
