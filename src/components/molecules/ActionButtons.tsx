import React from 'react';
import { Button } from '../atoms/Button';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const ActionButtons: React.FC = () => {
  const handleCall = () => {
    window.location.href = `tel:${siteConfig.contact.emergencyPhoneRaw}`;
  };

  const handleWhatsApp = () => {
    // Format for WhatsApp: remove + and spaces
    const waNumber = siteConfig.contact.whatsappRaw.replace(/\+/g, '');
    window.location.href = `https://wa.me/${waNumber}?text=Emergency! I need an ambulance at my location.`;
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const waNumber = siteConfig.contact.whatsappRaw.replace(/\+/g, '');
          const message = encodeURIComponent(`Emergency! Here is my location: https://maps.google.com/?q=${lat},${lng}`);
          window.location.href = `https://wa.me/${waNumber}?text=${message}`;
        },
        (error) => {
          console.error("Error getting location", error);
          alert("Please enable location services so we can find you quickly.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-3xl mx-auto z-20">
      <Button 
        variant="primary" 
        size="large" 
        onClick={handleCall}
        className="w-full sm:w-1/3 shadow-glow-red hover:shadow-xl hover:-translate-y-1"
        aria-label="Call Now"
      >
        <Phone className="mr-2 h-5 w-5" />
        CALL NOW
      </Button>

      <Button 
        variant="secondary" 
        size="large" 
        onClick={handleWhatsApp}
        className="w-full sm:w-1/3 shadow-glow-green hover:shadow-xl hover:-translate-y-1"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        WHATSAPP
      </Button>

      <Button 
        variant="tertiary" 
        size="large" 
        onClick={handleLocation}
        className="w-full sm:w-1/3 shadow-glow-blue hover:shadow-xl hover:-translate-y-1"
        aria-label="Share Location"
      >
        <MapPin className="mr-2 h-5 w-5" />
        LOCATION
      </Button>
    </div>
  );
};
