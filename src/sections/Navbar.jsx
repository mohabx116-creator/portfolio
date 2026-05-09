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
        className="flex h-11 min-w-11 items-center justify-center rounded-full border border-outline-variant/15 bg-surface-high px-3 text-xs font-bold text-on-surface transition-all duration-300 hover:border-primary/30 hover:text-primary"
      >
        {theme === 'dark' ? controlsContent.light : controlsContent.dark}
      </button>
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={controlsContent.language || 'Toggle language'}
        className="flex h-11 min-w-11 items-center justify-center rounded-full border border-outline-variant/15 bg-surface-high px-3 text-xs font-bold text-on-surface transition-all duration-300 hover:border-primary/30 hover:text-primary"
      >
        {language === 'ar' ? controlsContent.en : controlsContent.ar}
      </button>
    </>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-3 sm:pt-4">
        <div
          ref={menuRef}
          className={`glass-panel shadow-ambient transition-all duration-300 ${
            isOpen ? 'rounded-[1.75rem]' : 'rounded-[1.35rem] sm:rounded-full'
          }`}
        >
          <div className="flex items-center gap-3 px-3 py-3 sm:px-4">
            <Link to="/" className="min-w-0 flex-1 font-headline text-base font-bold text-on-surface sm:text-lg">
              <span className="block truncate bg-berry-text bg-clip-text text-transparent">{content?.brandName}</span>
            </Link>

            <div className="hidden items-center gap-2 lg:flex xl:gap-3">
              {navLinks.map((link) => (
                isProjectPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="rounded-full px-3 py-2 text-sm font-semibold text-on-muted transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-3 py-2 text-sm font-semibold text-on-muted transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              {controls}
              {isProjectPage ? (
                <ButtonLink
                  href="https://wa.me/201027613133"
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  className="cta-attention whitespace-nowrap rounded-full px-5 py-3 text-sm lg:px-6"
                >
                  {ctaSection.action || 'Contact'}
                </ButtonLink>
              ) : (
                <ButtonLink
                  href="#contact"
                  variant="primary"
                  className="cta-attention whitespace-nowrap rounded-full px-5 py-3 text-sm lg:px-6"
                >
                  {nav.contactCta || 'Contact Me'}
                </ButtonLink>
              )}
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/15 bg-surface-high text-on-surface transition-all duration-300 hover:border-primary/30 hover:text-primary md:h-12 md:w-12"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={controlsContent.menu || 'Open menu'}
            >
              <span className="text-lg leading-none">{isOpen ? '×' : '☰'}</span>
            </button>
          </div>

          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[38rem] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="border-t border-outline-variant/15 px-3 pb-4 pt-4 sm:px-4">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  isProjectPage ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="group flex items-center justify-between rounded-2xl border border-outline-variant/15 bg-surface-card/70 px-4 py-3 text-sm font-semibold text-on-surface transition-all duration-300 hover:border-primary/30 hover:bg-surface-high/80"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">{isRTL ? '←' : '→'}</span>
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between rounded-2xl border border-outline-variant/15 bg-surface-card/70 px-4 py-3 text-sm font-semibold text-on-surface transition-all duration-300 hover:border-primary/30 hover:bg-surface-high/80"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">{isRTL ? '←' : '→'}</span>
                    </a>
                  )
                ))}
              </div>

              <div className={`mt-4 flex flex-wrap gap-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                {controls}
              </div>

              {isProjectPage ? (
                <ButtonLink href="https://wa.me/201027613133" className="mt-4 w-full" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                  {ctaSection.action || 'Contact'}
                </ButtonLink>
              ) : (
                <ButtonLink href="#contact" className="mt-4 w-full" onClick={() => setIsOpen(false)}>
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
