import { createContext, useEffect, useMemo, useState } from 'react'
import { portfolioContent } from '../data/i18n'

const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  language: 'portfolio-language',
}

const AppSettingsContext = createContext(null)
const VALID_THEMES = new Set(['dark', 'light'])
const VALID_LANGUAGES = new Set(['ar', 'en'])
const FALLBACK_LANGUAGE = 'en'

function getStoredValue(key, validValues, fallback) {
  try {
    const value = localStorage.getItem(key)
    return validValues.has(value) ? value : fallback
  } catch {
    return fallback
  }
}

function asArray(value, fallback = []) {
  return Array.isArray(value) ? value : fallback
}

function normalizeContent(rawContent) {
  const fallback = portfolioContent[FALLBACK_LANGUAGE] || {}
  const source = rawContent || fallback
  const fallbackSections = fallback.sections || {}
  const sourceSections = source.sections || {}
  const fallbackHero = fallback.hero || {}
  const sourceHero = source.hero || {}
  const fallbackAbout = fallbackSections.about || {}
  const sourceAbout = sourceSections.about || {}
  const fallbackReasons = fallbackSections.reasons || {}
  const sourceReasons = sourceSections.reasons || {}
  const fallbackProjects = fallbackSections.projects || {}
  const sourceProjects = sourceSections.projects || {}
  const fallbackFashionGallery = fallback.fashionGallery || {}
  const sourceFashionGallery = source.fashionGallery || {}

  return {
    ...fallback,
    ...source,
    nav: {
      ...(fallback.nav || {}),
      ...(source.nav || {}),
    },
    controls: {
      ...(fallback.controls || {}),
      ...(source.controls || {}),
    },
    hero: {
      ...fallbackHero,
      ...sourceHero,
      trustBadges: asArray(sourceHero.trustBadges, asArray(fallbackHero.trustBadges)),
      stats: asArray(sourceHero.stats, asArray(fallbackHero.stats)),
      mock: {
        ...(fallbackHero.mock || {}),
        ...(sourceHero.mock || {}),
      },
    },
    sections: {
      ...fallbackSections,
      ...sourceSections,
      services: {
        ...(fallbackSections.services || {}),
        ...(sourceSections.services || {}),
      },
      projects: {
        ...fallbackProjects,
        ...sourceProjects,
        modal: {
          ...((fallbackProjects && fallbackProjects.modal) || {}),
          ...((sourceProjects && sourceProjects.modal) || {}),
        },
      },
      reasons: {
        ...fallbackReasons,
        ...sourceReasons,
        items: asArray(sourceReasons.items, asArray(fallbackReasons.items)),
      },
      about: {
        ...fallbackAbout,
        ...sourceAbout,
        highlights: asArray(sourceAbout.highlights, asArray(fallbackAbout.highlights)),
      },
      cta: {
        ...(fallbackSections.cta || {}),
        ...(sourceSections.cta || {}),
      },
      contact: {
        ...(fallbackSections.contact || {}),
        ...(sourceSections.contact || {}),
      },
      projectPage: {
        ...(fallbackSections.projectPage || {}),
        ...(sourceSections.projectPage || {}),
      },
    },
    footer: {
      ...(fallback.footer || {}),
      ...(source.footer || {}),
    },
    services: asArray(source.services, asArray(fallback.services)),
    contacts: asArray(source.contacts, asArray(fallback.contacts)),
    projects: asArray(source.projects, asArray(fallback.projects)),
    projectPages: {
      ...(fallback.projectPages || {}),
      ...(source.projectPages || {}),
    },
    fashionGallery: {
      ...fallbackFashionGallery,
      ...sourceFashionGallery,
      highlights: asArray(sourceFashionGallery.highlights, asArray(fallbackFashionGallery.highlights)),
      featurePoints: asArray(sourceFashionGallery.featurePoints, asArray(fallbackFashionGallery.featurePoints)),
      metrics: asArray(sourceFashionGallery.metrics, asArray(fallbackFashionGallery.metrics)),
      screens: asArray(sourceFashionGallery.screens, asArray(fallbackFashionGallery.screens)),
      listingShowcase: {
        ...(fallbackFashionGallery.listingShowcase || {}),
        ...(sourceFashionGallery.listingShowcase || {}),
      },
      productSpotlight: {
        ...(fallbackFashionGallery.productSpotlight || {}),
        ...(sourceFashionGallery.productSpotlight || {}),
        sizes: asArray(sourceFashionGallery.productSpotlight?.sizes, asArray(fallbackFashionGallery.productSpotlight?.sizes)),
      },
    },
    contactData: {
      ...(fallback.contactData || {}),
      ...(source.contactData || {}),
    },
  }
}

function AppSettingsProvider({ children }) {
  const [theme, setTheme] = useState(() => getStoredValue(STORAGE_KEYS.theme, VALID_THEMES, 'dark'))
  const [language, setLanguage] = useState(() => getStoredValue(STORAGE_KEYS.language, VALID_LANGUAGES, 'ar'))

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
    const safeLanguage = VALID_LANGUAGES.has(language) ? language : 'ar'
    const isRTL = safeLanguage === 'ar'
    const content = normalizeContent(portfolioContent[safeLanguage])

    return {
      theme,
      language: safeLanguage,
      isRTL,
      content,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
      toggleLanguage: () => setLanguage((current) => (current === 'ar' ? 'en' : 'ar')),
    }
  }, [theme, language])

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>
}

export { AppSettingsContext, AppSettingsProvider }
