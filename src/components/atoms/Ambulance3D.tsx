import React from 'react';
import { Plus } from 'lucide-react';

export const Ambulance3D: React.FC = () => {
  return (
    <div className="relative w-40 h-40 group perspective-1000">
      {/* 3D Container - Spins continuously */}
      <div className="w-full h-full relative preserve-3d animate-spin-slow">
        
        {/* Front Face */}
        <div className="absolute inset-0 bg-white border-2 border-gray-200 rounded-lg shadow-inner flex items-center justify-center transform translate-z-20">
          <div className="bg-medical-blue w-full h-4 absolute bottom-0 rounded-b-lg"></div>
          <Plus className="w-16 h-16 text-emergency-red" strokeWidth={3} />
          {/* Headlights */}
          <div className="absolute bottom-2 left-2 w-3 h-3 bg-yellow-200 rounded-full shadow-[0_0_10px_#fef08a]"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-yellow-200 rounded-full shadow-[0_0_10px_#fef08a]"></div>
          {/* Windshield */}
          <div className="absolute top-4 left-4 right-4 h-10 bg-blue-100 border border-blue-200 rounded-md opacity-80"></div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 bg-white border-2 border-gray-200 rounded-lg shadow-inner flex flex-col items-center justify-center transform -translate-z-20 rotate-y-180">
          <div className="bg-medical-blue w-full h-4 absolute bottom-0 rounded-b-lg"></div>
          <div className="flex gap-2">
            <div className="w-10 h-16 border-2 border-gray-300 rounded-sm"></div>
            <div className="w-10 h-16 border-2 border-gray-300 rounded-sm"></div>
          </div>
          {/* Taillights */}
          <div className="absolute bottom-2 left-2 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
        </div>

        {/* Right Face */}
        <div className="absolute inset-0 w-40 h-40 bg-gray-50 border-2 border-gray-200 shadow-inner flex items-center justify-center transform translate-x-20 rotate-y-90">
          <div className="bg-medical-blue w-full h-4 absolute bottom-0"></div>
          <div className="text-navy-dark font-black text-xl transform -rotate-90 tracking-widest opacity-20">AMBULANCE</div>
          <Plus className="absolute w-8 h-8 text-emergency-red" strokeWidth={4} />
        </div>

        {/* Left Face */}
        <div className="absolute inset-0 w-40 h-40 bg-gray-50 border-2 border-gray-200 shadow-inner flex items-center justify-center transform -translate-x-20 -rotate-y-90">
          <div className="bg-medical-blue w-full h-4 absolute bottom-0"></div>
          <div className="text-navy-dark font-black text-xl transform rotate-90 tracking-widest opacity-20">AMBULANCE</div>
          <Plus className="absolute w-8 h-8 text-emergency-red" strokeWidth={4} />
        </div>

        {/* Top Face */}
        <div className="absolute inset-0 w-40 h-40 bg-gray-100 border-2 border-gray-200 transform -translate-y-20 rotate-x-90 flex items-center justify-center">
          {/* Siren */}
          <div className="w-12 h-6 bg-red-500 rounded-full shadow-[0_0_20px_red] animate-pulse"></div>
        </div>

        {/* Bottom Face */}
        <div className="absolute inset-0 w-40 h-40 bg-gray-800 transform translate-y-20 -rotate-x-90 shadow-2xl">
          {/* Wheels (Simplified as dark spots on bottom) */}
          <div className="absolute top-2 left-2 w-8 h-8 bg-black rounded-full"></div>
          <div className="absolute top-2 right-2 w-8 h-8 bg-black rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 bg-black rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-black rounded-full"></div>
        </div>

      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-20 {
          transform: translateZ(5rem);
        }
        .-translate-z-20 {
          transform: translateZ(-5rem) rotateY(180deg);
        }
        .translate-x-20 {
          transform: translateX(5rem) rotateY(90deg);
        }
        .-translate-x-20 {
          transform: translateX(-5rem) rotateY(-90deg);
        }
        .translate-y-20 {
          transform: translateY(5rem) rotateX(-90deg);
        }
        .-translate-y-20 {
          transform: translateY(-5rem) rotateX(90deg);
        }
        @keyframes spin3d {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }
        .animate-spin-slow {
          animation: spin3d 8s linear infinite;
        }
      `}</style>
    </div>
  );
};
