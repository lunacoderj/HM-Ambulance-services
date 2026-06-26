import React, { useEffect, useRef } from 'react';
import { services } from '../data/services';
import type { Service } from '../data/services';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServicesProps {
  onServiceClick?: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
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
    <section ref={sectionRef} className="bg-white border-t border-gray-100">
      <div className="page-container section">

        {/* Section Header */}
        <div className="section-header">
          <h2>{t.services.title}</h2>
          <p>{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent =
              (LucideIcons as any)[service.icon] ||
              LucideIcons.Activity;
            const title = language === 'te' && service.titleTe ? service.titleTe : service.title;
            const desc =
              language === 'te' && service.shortDescriptionTe
                ? service.shortDescriptionTe
                : service.shortDescription;
            const features =
              language === 'te' && service.featuresTe ? service.featuresTe : service.features;

            return (
              <div
                key={service.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group overflow-hidden cursor-pointer"
                onClick={() => onServiceClick && onServiceClick(service)}
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <IconComponent className="w-16 h-16" />
                    </div>
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  
                  {/* Icon floating */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-grow gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>

                  {/* Feature List */}
                  {features && features.length > 0 && (
                    <ul className="flex flex-col gap-2 mb-4">
                      {features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                          <LucideIcons.CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Push button to bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group-hover:gap-3">
                      {t.equipment?.knowMore || 'KNOW MORE'} <LucideIcons.ArrowRight className="w-4 h-4" />
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
