import { Link, useLocation } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Container from '../components/Container'
import ButtonLink from '../components/ButtonLink'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import useAppSettings from '../context/useAppSettings'

function RestaurantExperiencePage() {
  const { content } = useAppSettings()
  const location = useLocation()
  const restaurantGallery = content?.restaurantGallery || {}
  const screens = useMemo(
    () => (Array.isArray(restaurantGallery.screens) ? restaurantGallery.screens : []),
    [restaurantGallery.screens],
  )
  const [activeScreenId, setActiveScreenId] = useState(() => {
    const hashId = window.location.hash.replace('#', '')
    return hashId || screens[0]?.id || 'restaurant-home'
  })
  const [dayPart, setDayPart] = useState('today')

  const activeScreen = useMemo(
    () => {
      const hashId = location.hash.replace('#', '')
      return screens.find((screen) => screen.id === (hashId || activeScreenId)) || screens[0]
    },
    [activeScreenId, location.hash, screens],
  )

  const switchScreen = (id) => {
    setActiveScreenId(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  const timeline = {
    today: { revenue: '$8.4k', orders: '124', service: '92%' },
    weekend: { revenue: '$16.2k', orders: '238', service: '95%' },
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
            <ButtonLink href="#restaurant-shell" variant="ghost" className="w-full sm:w-auto">
              {restaurantGallery.viewProject}
            </ButtonLink>
          </div>

          <section id="restaurant-shell" className="dashboard-card overflow-hidden rounded-[2rem] bg-gradient-to-br from-surface via-surface-low to-surface-card p-5 shadow-[0_20px_70px_rgba(0,0,0,0.14)] sm:p-7 lg:p-8">
            <div className="mb-7 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="text-start">
                <p className="font-label text-xs uppercase tracking-[0.24em] text-primary">{restaurantGallery.eyebrow}</p>
                <h1 className="mt-3 font-headline text-[2rem] font-bold leading-[1.05] text-on-surface sm:text-[2.7rem]">
                  {restaurantGallery.title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-on-muted sm:text-base sm:leading-8">
                  {restaurantGallery.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {(restaurantGallery.highlights || []).slice(0, 3).map((item) => (
                  <span key={item} className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
              <aside className="rounded-[1.6rem] bg-surface-card/80 p-4 ghost-border sm:p-5">
                <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{restaurantGallery.caseStudyLabel}</p>
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
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setDayPart('today')}
                      className={`rounded-full px-3 py-2 text-xs font-semibold ${dayPart === 'today' ? 'bg-primary text-white' : 'bg-surface-card text-on-muted'}`}
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      onClick={() => setDayPart('weekend')}
                      className={`rounded-full px-3 py-2 text-xs font-semibold ${dayPart === 'weekend' ? 'bg-primary text-white' : 'bg-surface-card text-on-muted'}`}
                    >
                      Weekend
                    </button>
                  </div>
                  <div className="mt-4 grid gap-3">
                    <div className="rounded-xl bg-surface-card px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-on-muted">Revenue</p>
                      <p className="mt-1 font-headline text-xl font-bold text-on-surface">{timeline[dayPart].revenue}</p>
                    </div>
                    <div className="rounded-xl bg-surface-card px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-on-muted">Orders</p>
                      <p className="mt-1 font-headline text-xl font-bold text-on-surface">{timeline[dayPart].orders}</p>
                    </div>
                    <div className="rounded-xl bg-surface-card px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-on-muted">Service</p>
                      <p className="mt-1 font-headline text-xl font-bold text-on-surface">{timeline[dayPart].service}</p>
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
                    <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{restaurantGallery.overviewTitle}</p>
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
                    <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{restaurantGallery.featuresLabel}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(activeScreen.tags || []).map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {(activeScreen.related || []).map((item) => (
                        <div key={item.title} className="rounded-[1rem] bg-surface-high/70 p-3">
                          <img src={item.image} alt={item.title} className="aspect-[4/3] w-full rounded-[0.85rem] object-cover object-top" />
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

export default RestaurantExperiencePage
