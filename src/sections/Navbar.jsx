import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import useAppSettings from '../context/useAppSettings'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { content, theme, language, toggleTheme, toggleLanguage, isRTL } = useAppSettings()
  const menuRef = useRef(null)
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/projects/')
  const nav = content?.nav || {}
  const controlsContent = content?.controls || {}
  const ctaSection = content?.sections?.cta || {}

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const navLinks = isProjectPage
    ? [{ label: nav.backHome || 'Back Home', href: '/' }]
    : [
        { label: nav.home || 'Home', href: '#home' },
        { label: nav.services || 'Services', href: '#services' },
        { label: nav.projects || 'Projects', href: '#projects' },
        { label: nav.about || 'About', href: '#about' },
        { label: nav.contact || 'Contact', href: '#contact' },
      ]

  const controls = (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={controlsContent.theme || 'Toggle theme'}
        className="flex h-10 min-w-10 items-center justify-center rounded-full border border-outline-variant/15 bg-surface-high px-3 text-xs font-bold text-on-surface transition-all duration-300 hover:border-primary/30 hover:text-primary"
      >
        {theme === 'dark' ? controlsContent.light : controlsContent.dark}
      </button>
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={controlsContent.language || 'Toggle language'}
        className="flex h-10 min-w-10 items-center justify-center rounded-full border border-outline-variant/15 bg-surface-high px-3 text-xs font-bold text-on-surface transition-all duration-300 hover:border-primary/30 hover:text-primary"
      >
        {language === 'ar' ? controlsContent.en : controlsContent.ar}
      </button>
    </>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div ref={menuRef} className={`glass-panel mt-4 px-4 py-3 shadow-ambient transition-all duration-300 ${isOpen ? 'rounded-[2rem]' : 'rounded-full'}`}>
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="font-headline text-lg font-bold text-on-surface">
              <span className="bg-berry-text bg-clip-text text-transparent">{content?.brandName}</span>
            </Link>

            <div className="hidden items-center gap-3 md:flex">
              {controls}
              {isProjectPage ? (
                <ButtonLink href="https://wa.me/201027613133" target="_blank" rel="noreferrer" variant="primary" className="cta-attention rounded-full bg-gradient-to-r from-primary-container via-[#5f75ff] to-secondary-container px-7 py-3.5 text-base shadow-[0_18px_44px_rgba(var(--color-primary-container),0.34)]">
                  {ctaSection.action || 'Contact'}
                </ButtonLink>
              ) : (
                <ButtonLink href="#contact" variant="primary" className="cta-attention rounded-full bg-gradient-to-r from-primary-container via-[#5f75ff] to-secondary-container px-7 py-3.5 text-base shadow-[0_18px_44px_rgba(var(--color-primary-container),0.34)]">
                  {nav.contactCta || 'Contact Me'}
                </ButtonLink>
              )}

              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant/15 bg-surface-high text-on-surface transition-all duration-300 hover:border-primary/30 hover:text-primary"
                onClick={() => setIsOpen((value) => !value)}
                aria-label={controlsContent.menu || 'Open menu'}
              >
                <span className="text-xl leading-none">?</span>
              </button>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-high text-on-surface md:hidden"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={controlsContent.menu || 'Open menu'}
            >
              <span className="text-lg">?</span>
            </button>
          </div>

          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[36rem] pt-5 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col gap-4 border-t border-outline-variant/15 pt-5">
              <div className="grid gap-3">
                {navLinks.map((link, index) => (
                  isProjectPage ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="group flex items-center justify-between rounded-2xl border border-outline-variant/15 bg-surface-card/70 px-4 py-3 text-sm font-semibold text-on-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-high/80"
                      onClick={() => setIsOpen(false)}
                      style={{ transitionDelay: `${index * 30}ms` }}
                    >
                      <span>{link.label}</span>
                      <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">{isRTL ? '?' : '?'}</span>
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between rounded-2xl border border-outline-variant/15 bg-surface-card/70 px-4 py-3 text-sm font-semibold text-on-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-high/80"
                      onClick={() => setIsOpen(false)}
                      style={{ transitionDelay: `${index * 30}ms` }}
                    >
                      <span>{link.label}</span>
                      <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">{isRTL ? '?' : '?'}</span>
                    </a>
                  )
                ))}
              </div>

              <div className={`flex gap-3 pt-1 md:hidden ${isRTL ? 'justify-end' : 'justify-start'}`}>
                {controls}
              </div>

              {isProjectPage ? (
                <ButtonLink href="https://wa.me/201027613133" className="mt-1 w-full" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                  {ctaSection.action || 'Contact'}
                </ButtonLink>
              ) : (
                <ButtonLink href="#contact" className="mt-1 w-full" onClick={() => setIsOpen(false)}>
                  {nav.contactCta || 'Contact Me'}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
