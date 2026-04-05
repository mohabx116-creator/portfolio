import { Link, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import Container from '../components/Container'
import ButtonLink from '../components/ButtonLink'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import useAppSettings from '../context/useAppSettings'

function FashionExperiencePage() {
  const { content } = useAppSettings()
  const location = useLocation()
  const fashionGallery = content?.fashionGallery || {}
  const screens = Array.isArray(fashionGallery.screens) ? fashionGallery.screens : []
  const [activeScreenId, setActiveScreenId] = useState(screens[0]?.id || 'home-page')
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('Indigo')

  useEffect(() => {
    const hashId = location.hash.replace('#', '')
    if (hashId && screens.some((screen) => screen.id === hashId)) {
      setActiveScreenId(hashId)
    }
  }, [location.hash, screens])

  const activeScreen = useMemo(
    () => screens.find((screen) => screen.id === activeScreenId) || screens[0],
    [activeScreenId, screens],
  )

  const switchScreen = (id) => {
    setActiveScreenId(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <>
      <Navbar />
      <main className="bg-surface px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 sm:mb-10">
            <Link to="/" className="inline-flex min-h-11 items-center rounded-full border border-outline-variant/15 bg-surface-card px-4 py-3 font-headline text-sm font-bold text-on-surface transition-all duration-300 hover:border-primary/30 hover:text-primary sm:px-5">
              {content?.nav?.backHome || 'Back Home'}
            </Link>
            <ButtonLink href="#fashion-shell" variant="ghost" className="w-full sm:w-auto">
              {fashionGallery.viewProject}
            </ButtonLink>
          </div>

          <section id="fashion-shell" className="dashboard-card overflow-hidden rounded-[2rem] bg-gradient-to-br from-surface via-surface-low to-surface-card p-5 shadow-[0_20px_70px_rgba(0,0,0,0.12)] sm:p-7 lg:p-8">
            <div className="mb-7 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="text-start">
                <p className="font-label text-xs uppercase tracking-[0.24em] text-primary">{fashionGallery.eyebrow}</p>
                <h1 className="mt-3 font-headline text-[2rem] font-bold leading-[1.05] text-on-surface sm:text-[2.7rem]">
                  {fashionGallery.title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-on-muted sm:text-base sm:leading-8">
                  {fashionGallery.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {(fashionGallery.highlights || []).slice(0, 4).map((item) => (
                  <span key={item} className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
              <aside className="rounded-[1.6rem] bg-surface-card/80 p-4 ghost-border sm:p-5">
                <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{fashionGallery.caseStudyLabel}</p>
                <div className="mt-4 grid gap-2">
                  {screens.map((screen) => {
                    const isActive = screen.id === activeScreenId

                    return (
                      <button
                        key={screen.id}
                        type="button"
                        onClick={() => switchScreen(screen.id)}
                        className={`rounded-[1.1rem] px-4 py-3 text-start transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-primary/20 to-secondary/10 text-primary'
                            : 'bg-surface-high/60 text-on-muted hover:bg-surface-high hover:text-on-surface'
                        }`}
                      >
                        <p className="font-headline text-sm font-bold">{screen.title}</p>
                        <p className="mt-1 text-xs leading-5">{screen.meta}</p>
                      </button>
                    )
                  })}
                </div>

                <div className="mt-6 rounded-[1.25rem] bg-surface-high/70 p-4 ghost-border">
                  <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">Interactive</p>
                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-on-muted">Size</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(fashionGallery.productSpotlight?.sizes || []).map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`flex h-10 min-w-10 items-center justify-center rounded-xl px-3 text-xs font-semibold transition-colors ${
                            selectedSize === size ? 'bg-primary text-white' : 'bg-surface-card text-on-surface'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-on-muted">Color</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['Indigo', 'Pearl', 'Noir'].map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
                            selectedColor === color ? 'bg-primary text-white' : 'bg-surface-card text-on-surface'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              <div className="space-y-5">
                <div className="rounded-[1.7rem] bg-surface-card/75 p-3 ghost-border sm:p-4">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
                    <div>
                      <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{activeScreen.eyebrow}</p>
                      <h2 className="mt-2 font-headline text-[1.5rem] font-bold text-on-surface sm:text-[1.9rem]">{activeScreen.title}</h2>
                    </div>
                    <span className="rounded-full bg-secondary/10 px-3 py-2 text-xs font-semibold text-secondary">{activeScreen.meta}</span>
                  </div>

                  <div className="overflow-hidden rounded-[1.35rem] bg-surface shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                    <img src={activeScreen.image} alt={activeScreen.title} className="w-full object-cover object-top" />
                  </div>
                </div>

                <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[1.5rem] bg-surface-card/75 p-5 ghost-border">
                    <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{fashionGallery.overviewTitle}</p>
                    <p className="mt-4 text-sm leading-7 text-on-muted sm:text-base sm:leading-8">
                      {activeScreen.description}
                    </p>
                    <div className="mt-5 grid gap-3">
                      {(activeScreen.highlights || []).map((point) => (
                        <div key={point} className="rounded-[1rem] bg-surface-high/70 px-4 py-3 text-sm leading-7 text-on-surface">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] bg-surface-card/75 p-5 ghost-border">
                    <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{fashionGallery.featuresLabel}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(activeScreen.tags || []).map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 rounded-[1.2rem] bg-surface-high/70 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-headline text-lg font-bold text-on-surface">{fashionGallery.productSpotlight?.title}</p>
                          <p className="mt-1 text-sm text-on-muted">{fashionGallery.productSpotlight?.subtitle}</p>
                        </div>
                        <span className="font-headline text-xl font-bold text-primary">{fashionGallery.productSpotlight?.price}</span>
                      </div>
                      <div className="mt-4 text-sm text-on-muted">
                        <span className="font-semibold text-on-surface">Size:</span> {selectedSize}
                      </div>
                      <div className="mt-2 text-sm text-on-muted">
                        <span className="font-semibold text-on-surface">Color:</span> {selectedColor}
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {(activeScreen.related || []).map((item) => (
                        <div key={item.title} className="rounded-[1rem] bg-surface-high/70 p-3">
                          <img src={item.image} alt={item.title} className="aspect-[4/5] w-full rounded-[0.85rem] object-cover object-top" />
                          <p className="mt-3 text-sm font-semibold text-on-surface">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default FashionExperiencePage
