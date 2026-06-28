import React, { useEffect, useRef } from 'react';
import { equipmentList } from '../data/equipment';
import type { Equipment as EquipmentType } from '../data/equipment';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EquipmentProps {
  onEquipmentClick?: (item: EquipmentType) => void;
}

export const Equipment: React.FC<EquipmentProps> = ({ onEquipmentClick }) => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="equipment" ref={sectionRef} className="bg-gray-50 border-t border-gray-100">
      <div className="page-container section">

        {/* Section Header */}
        <div className="section-header">
          <h2>{t.equipment?.title || 'Our Life-Saving Equipment'}</h2>
          <p>{t.equipment?.subtitle || 'State-of-the-art medical equipment ensuring maximum safety and care during transit.'}</p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentList.map((item, index) => {
            const title = language === 'te' && item.titleTe ? item.titleTe : item.title;
            const desc =
              language === 'te' && item.shortDescriptionTe
                ? item.shortDescriptionTe
                : item.shortDescription;
            const features =
              language === 'te' && item.featuresTe ? item.featuresTe : item.features;

            return (
              <div
                key={item.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group overflow-hidden cursor-pointer"
                onClick={() => onEquipmentClick && onEquipmentClick(item)}
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-white flex items-center justify-center p-4">
                  <img loading="lazy" decoding="async" 
                    src={item.image} 
                    alt={title} 
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent pointer-events-none" />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-grow gap-4 border-t border-gray-50">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">{title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>

                  {/* Feature List */}
                  {features && features.length > 0 && (
                    <ul className="flex flex-col gap-2 mb-4">
                      {features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 font-medium leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Push button to bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group-hover:gap-3">
                      {t.equipment?.knowMore || 'KNOW MORE'} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
