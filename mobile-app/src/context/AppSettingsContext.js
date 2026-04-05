import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { I18nManager } from 'react-native';
import { translations } from '../data/content';
import { palettes } from '../theme/themes';

const STORAGE_KEYS = {
  theme: 'portfolio-mobile-theme',
  language: 'portfolio-mobile-language',
};

const AppSettingsContext = createContext(null);

export function AppSettingsProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('ar');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function hydrate() {
      try {
        const [storedTheme, storedLanguage] = await Promise.all([
          AsyncStorage.getItem(STORAGE_KEYS.theme),
          AsyncStorage.getItem(STORAGE_KEYS.language),
        ]);

        if (!mounted) {
          return;
        }

        if (storedTheme === 'light' || storedTheme === 'dark') {
          setTheme(storedTheme);
        }

        if (storedLanguage === 'ar' || storedLanguage === 'en') {
          setLanguage(storedLanguage);
        }
      } finally {
        if (mounted) {
          setIsReady(true);
        }
      }
    }

    hydrate();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    AsyncStorage.setItem(STORAGE_KEYS.theme, theme);
  }, [isReady, theme]);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    AsyncStorage.setItem(STORAGE_KEYS.language, language);
    I18nManager.allowRTL(language === 'ar');
  }, [isReady, language]);

  const value = useMemo(() => {
    const t = translations[language] || translations.en;

    return {
      theme,
      language,
      isRTL: language === 'ar',
      isReady,
      palette: palettes[theme],
      t,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
      toggleLanguage: () => setLanguage((current) => (current === 'ar' ? 'en' : 'ar')),
    };
  }, [theme, language, isReady]);

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>;
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext);

  if (!context) {
    throw new Error('useAppSettings must be used within AppSettingsProvider');
  }

  return context;
}
