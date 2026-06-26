import React from 'react';
import {
  Phone,
  Clock,
  Users,
  Ambulance,
  MapPin,
  Navigation,
  Truck,
  AlertTriangle,
  Eye,
} from 'lucide-react';

interface StepItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface FlowSection {
  number: number;
  heading: string;
  color: string;
  steps: StepItem[];
}

import { useLanguage } from '../contexts/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const flows: FlowSection[] = [
    {
      number: 1,
      heading: 'CALL / WHATSAPP CLICKED',
      color: 'teal',
      steps: [
        { icon: <Phone className="w-6 h-6" />, title: 'Connect With Us', desc: 'Reach out to us anytime, anywhere.' },
        { icon: <Users className="w-6 h-6" />, title: 'Our Team Confirms', desc: 'Immediate confirmation & dispatch.' },
        { icon: <Ambulance className="w-6 h-6" />, title: 'Ambulance On The Way!', desc: 'Nearest vehicle dispatched fast.' },
      ],
    },
    {
      number: 2,
      heading: 'SHARE LOCATION CLICKED',
      color: 'blue',
      steps: [
        { icon: <MapPin className="w-6 h-6" />, title: 'We Get Your Location', desc: 'Pinpoint GPS coordinates.' },
        { icon: <Navigation className="w-6 h-6" />, title: 'Nearest Ambulance Dispatched', desc: 'Closest unit routes to you.' },
        { icon: <Clock className="w-6 h-6" />, title: 'Reaches You Within Minutes!', desc: 'Fast. Reliable. Life-saving.' },
      ],
    },
    {
      number: 3,
      heading: 'EMERGENCY MODE ACTIVATED',
      color: 'red',
      steps: [
        { icon: <AlertTriangle className="w-6 h-6" />, title: 'Emergency Mode ON', desc: 'One tap activates help screen.' },
        { icon: <Eye className="w-6 h-6" />, title: 'Only Help Shows', desc: 'Everything else hides instantly.' },
        { icon: <Truck className="w-6 h-6" />, title: 'Fast. Simple. Life Saving.', desc: 'Three options to take action.' },
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; numBg: string; glow: string }> = {
    teal: { bg: 'bg-teal-950/20', border: 'border-teal-500/20', text: 'text-teal-400', numBg: 'bg-teal-600', glow: 'shadow-[0_0_30px_rgba(20,184,166,0.15)]' },
    blue: { bg: 'bg-blue-950/20', border: 'border-blue-500/20', text: 'text-blue-400', numBg: 'bg-blue-500', glow: 'shadow-[0_0_30px_rgba(59,130,246,0.15)]' },
    red: { bg: 'bg-red-950/20', border: 'border-red-500/20', text: 'text-red-400', numBg: 'bg-red-500', glow: 'shadow-[0_0_30px_rgba(239,68,68,0.15)]' },
  };

  return (
    <section className="bg-[#040810] py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="page-container relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t.howItWorks?.title || 'How Our Response Works'}</h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">
              {t.howItWorks?.subtitle || 'Lightning Fast Action'}
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
        </div>

        {/* Flows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {flows.map((flow) => {
            const c = colorMap[flow.color];
            const flowKey = `flow${flow.number}` as 'flow1' | 'flow2' | 'flow3';
            const flowData = t.howItWorks?.[flowKey];

            return (
              <div
                key={flow.number}
                className={`group relative rounded-3xl border ${c.border} ${c.bg} backdrop-blur-md p-8 flex flex-col gap-8 ${c.glow} hover:-translate-y-2 transition-all duration-500`}
              >
                {/* Glowing border effect on hover */}
                <div className={`absolute inset-0 border-2 rounded-3xl border-transparent group-hover:${c.border.replace('20', '40')} transition-colors duration-500 pointer-events-none`} />

                {/* Flow Header */}
                <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                  <span className={`w-10 h-10 rounded-full ${c.numBg} text-white text-lg font-black flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {flow.number}
                  </span>
                  <span className={`text-sm font-black uppercase tracking-widest ${c.text}`}>
                    {flowData?.heading || flow.heading}
                  </span>
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-8 relative">
                  {/* Connecting Line */}
                  <div className="absolute left-6 top-10 bottom-6 w-px bg-gradient-to-b from-white/20 to-transparent -z-10" />

                  {flow.steps.map((step, i) => {
                    const stepNum = i + 1;
                    const stepTitleKey = `s${stepNum}Title` as keyof typeof flowData;
                    const stepDescKey = `s${stepNum}Desc` as keyof typeof flowData;
                    return (
                      <div key={i} className="flex items-start gap-5 group/step">
                        <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${c.text} flex-shrink-0 group-hover/step:scale-110 group-hover/step:bg-white/10 transition-all duration-300 backdrop-blur-sm`}>
                          {step.icon}
                        </div>
                        <div className="pt-2">
                          <div className="text-white text-base font-bold mb-1 tracking-wide">{flowData?.[stepTitleKey] || step.title}</div>
                          <div className="text-gray-400 text-sm leading-relaxed font-medium">{flowData?.[stepDescKey] || step.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
