import { useState, useEffect, useRef } from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Equipment } from './sections/Equipment';
import { Testimonials } from './sections/Testimonials';
import { CoverageMap } from './sections/CoverageMap';
import { HowItWorks } from './sections/HowItWorks';
import { Contact } from './sections/Contact';
import { EmergencyMode } from './components/modals/EmergencyMode';
import { Header } from './components/organisms/Header';
import { FloatingActions } from './components/molecules/FloatingActions';
import { ServiceDetails } from './components/organisms/ServiceDetails';
import { LanguageProvider } from './contexts/LanguageContext';
import { Footer } from './components/organisms/Footer';
import type { Service } from './data/services';
import { EquipmentDetails } from './components/organisms/EquipmentDetails';
import type { Equipment as EquipmentType } from './data/equipment';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { 
  HeaderSkeleton, HeroSkeleton, AboutSkeleton, ServicesSkeleton, 
  EquipmentSkeleton, HowItWorksSkeleton, CoverageMapSkeleton, 
  TestimonialsSkeleton, ContactSkeleton, FooterSkeleton 
} from './components/skeletons/AppSkeletons';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeEquipment, setActiveEquipment] = useState<EquipmentType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth Scrolling Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [isLoading]);

  const isDetailsView = activeService || activeEquipment;

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col font-sans antialiased">

        {isLoading ? (
          <>
            <HeaderSkeleton />
            <main className="flex-grow">
              <HeroSkeleton />
              <AboutSkeleton />
              <ServicesSkeleton />
              <EquipmentSkeleton />
              <HowItWorksSkeleton />
              <CoverageMapSkeleton />
              <TestimonialsSkeleton />
              <ContactSkeleton />
            </main>
            <FooterSkeleton />
          </>
        ) : (
          <div ref={contentRef}>
            {!isDetailsView && <Header />}

            {activeService ? (
              <ServiceDetails 
                service={activeService} 
                onBack={() => setActiveService(null)} 
              />
            ) : activeEquipment ? (
              <EquipmentDetails 
                equipment={activeEquipment} 
                onBack={() => setActiveEquipment(null)} 
              />
            ) : (
              <>
                <main className="flex-grow">
                  <Hero />
                  
                  <div id="about">
                    <About />
                  </div>

                  <div id="services">
                    <Services onServiceClick={(s) => setActiveService(s)} />
                  </div>

                  <div id="equipment">
                    <Equipment onEquipmentClick={(e) => setActiveEquipment(e)} />
                  </div>

                  <div id="fleet">
                    <HowItWorks />
                  </div>

                  <div id="coverage">
                    <CoverageMap />
                  </div>

                  <Testimonials />

                  <div id="contact">
                    <Contact />
                  </div>
                </main>

                <Footer />
              </>
            )}

            {/* Global Modals & Overlays */}
            {!isDetailsView && (
              <>
                <EmergencyMode />
                <FloatingActions />
              </>
            )}
          </div>
        )}

      </div>
    </LanguageProvider>
  );
}

export default App;
