import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import content from '../translations/content.json';

export type Language = 'en' | 'fi';

type TranslationTree = typeof content.en;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: <T = unknown>(path: string) => T;
  translations: TranslationTree;
}

const STORAGE_KEY = 'lumiere-language';

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getNestedValue(obj: unknown, path: string) {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }

    return undefined;
  }, obj);
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  return window.localStorage.getItem(STORAGE_KEY) === 'fi' ? 'fi' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const translations = content[language] as TranslationTree;

    return {
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'fi' : 'en')),
      t: <T,>(path: string) => getNestedValue(translations, path) as T,
      translations,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
