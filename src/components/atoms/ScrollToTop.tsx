import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 p-3 md:p-4 rounded-full
        bg-white/10 backdrop-blur-md border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        text-white hover:bg-white/20 transition-all duration-300 group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};
