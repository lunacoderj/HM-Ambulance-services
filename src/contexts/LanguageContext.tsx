import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { en } from '../locales/en';
import { te } from '../locales/te';
import { hi } from '../locales/hi';

export type Language = 'en' | 'te' | 'hi';
type Dictionary = typeof en;

interface LanguageContextProps {
  language: Language;
  t: Dictionary;
  setLanguage: (lang: Language) => void;
}

const dictionaries: Record<Language, Dictionary> = { en, te, hi };

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const t = dictionaries[language];

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
