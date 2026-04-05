import { useEffect, useState } from 'react'
import useAppSettings from '../context/useAppSettings'

const sectionIds = ['home', 'services', 'projects', 'about', 'contact']

function MobileBottomNav() {
  const { content } = useAppSettings()
  const nav = content?.nav || {}
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-20% 0px -30% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const items = [
    { id: 'home', href: '#home', label: nav.home || 'Home' },
    { id: 'services', href: '#services', label: nav.services || 'Services' },
    { id: 'projects', href: '#projects', label: nav.projects || 'Projects' },
    { id: 'about', href: '#about', label: nav.about || 'About' },
    { id: 'contact', href: '#contact', label: nav.contact || 'Contact' },
  ]

  return (
    <nav className="mobile-bottom-dock fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(0.9rem+env(safe-area-inset-bottom))] pt-3 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-2 rounded-[1.75rem] border border-outline-variant/20 bg-surface-card/85 px-2 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        {items.map((item) => {
          const isActive = activeSection === item.id

          return (
            <a
              key={item.id}
              href={item.href}
              aria-label={item.label}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[1.2rem] px-2 py-2 text-center transition-all duration-300 ${
                isActive ? 'bg-primary/15 text-primary' : 'text-on-muted'
              }`}
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? 'w-6 bg-primary' : 'w-2 bg-outline-variant/40'
                }`}
              />
              <span className="truncate text-[11px] font-semibold">
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileBottomNav
