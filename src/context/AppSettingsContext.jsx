import { createContext, useEffect, useMemo, useState } from 'react'
import { portfolioContent } from '../data/i18n'

const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  language: 'portfolio-language',
}

const AppSettingsContext = createContext(null)

function AppSettingsProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEYS.theme) || 'dark')
  const [language, setLanguage] = useState(() => localStorage.getItem(STORAGE_KEYS.language) || 'ar')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.theme, theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.language, language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const value = useMemo(() => {
    const isRTL = language === 'ar'

    return {
      theme,
      language,
      isRTL,
      content: portfolioContent[language],
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
      toggleLanguage: () => setLanguage((current) => (current === 'ar' ? 'en' : 'ar')),
    }
  }, [theme, language])

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>
}

export { AppSettingsContext, AppSettingsProvider }
