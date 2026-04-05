import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ButtonLink from './ButtonLink'
import Container from './Container'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import useAppSettings from '../context/useAppSettings'

function FashionCaseStudyPage() {
  const { content } = useAppSettings()
  const fashionGallery = content?.fashionGallery || {}
  const screens = Array.isArray(fashionGallery.screens) ? fashionGallery.screens : []
  const listing = fashionGallery.listingShowcase || {}
  const product = fashionGallery.productSpotlight || {}

  useEffect(() => {
    if (!window.location.hash) {
      return
    }

    const target = document.getElementById(window.location.hash.slice(1))
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="bg-surface px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
        <Container>
          <div className="mb-8 sm:mb-10">
            <Link to="/" className="inline-flex min-h-11 items-center rounded-full border border-outline-variant/15 bg-surface-card px-4 py-3 font-headline text-sm font-bold text-on-surface transition-all duration-300 hover:border-primary/30 hover:text-primary sm:px-5">
              {content?.nav?.backHome || 'Back Home'}
            </Link>
          </div>

          <section className="dashboard-card ghost-border overflow-hidden rounded-[1.8rem] p-5 sm:p-7 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10">
              <div className="text-start">
                <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{fashionGallery.eyebrow}</p>
                <h1 className="mt-4 font-headline text-[2rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-on-surface sm:text-[2.7rem] lg:text-[3.35rem]">
                  {fashionGallery.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-on-muted sm:text-lg sm:leading-8">
                  {fashionGallery.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {(fashionGallery.highlights || []).map((item) => (
                    <span key={item} className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {(fashionGallery.metrics || []).map((metric) => (
                    <div key={metric.label} className="rounded-[1.25rem] bg-surface-high/70 p-4 ghost-border">
                      <p className="font-headline text-2xl font-bold text-primary">{metric.value}</p>
                      <p className="mt-2 text-sm leading-6 text-on-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink href="#fashion-screens" className="w-full sm:w-auto">
                    {fashionGallery.viewProject}
                  </ButtonLink>
                  <ButtonLink href="#fashion-overview" variant="ghost" className="w-full sm:w-auto">
                    {fashionGallery.caseStudyLabel}
                  </ButtonLink>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {screens.map((screen, index) => (
                  <div key={screen.id} className={`overflow-hidden rounded-[1.4rem] bg-surface-high/70 p-2 ghost-border ${index === 1 ? 'sm:translate-y-8' : ''}`}>
                    <img src={screen.image} alt={screen.title} className="aspect-[4/5] w-full rounded-[1rem] object-cover object-top" />
                    <p className="mt-3 text-center text-xs font-semibold text-on-surface sm:text-sm">{screen.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="fashion-overview" className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
            <div className="dashboard-card ghost-border rounded-[1.6rem] p-5 sm:p-6">
              <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{fashionGallery.caseStudyLabel}</p>
              <h2 className="mt-3 font-headline text-[1.65rem] font-bold text-on-surface sm:text-[2rem]">{fashionGallery.overviewTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-on-muted sm:text-base sm:leading-8">{fashionGallery.overview}</p>
            </div>

            <div className="dashboard-card ghost-border rounded-[1.6rem] p-5 sm:p-6">
              <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{fashionGallery.featuresLabel}</p>
              <div className="mt-4 grid gap-3">
                {(fashionGallery.featurePoints || []).map((feature) => (
                  <div key={feature} className="rounded-2xl bg-surface-high/70 px-4 py-3 text-sm leading-7 text-on-surface ghost-border">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="fashion-screens" className="mt-10 space-y-8">
            {screens.map((screen) => (
              <article key={screen.id} id={screen.id} className="dashboard-card ghost-border overflow-hidden rounded-[1.75rem] p-5 sm:p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-8">
                  <div className="text-start">
                    <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{screen.eyebrow}</p>
                    <h3 className="mt-3 font-headline text-[1.7rem] font-bold text-on-surface sm:text-[2.1rem]">{screen.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-on-muted sm:text-base sm:leading-8">{screen.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {(screen.tags || []).map((tag) => (
                        <span key={tag} className="rounded-full border border-outline-variant/15 bg-surface-high px-4 py-2 text-xs font-semibold text-on-surface">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-3">
                      {(screen.highlights || []).map((point) => (
                        <div key={point} className="rounded-2xl bg-surface-high/70 px-4 py-3 text-sm leading-7 text-on-surface ghost-border">
                          {point}
                        </div>
                      ))}
                    </div>

                    {screen.id === 'product-listing' ? (
                      <div className="mt-7 rounded-[1.35rem] bg-surface-high/70 p-4 ghost-border sm:p-5">
                        <div className="flex flex-wrap gap-2">
                          {(listing.filters || []).map((item) => (
                            <span key={item} className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                              {item}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-on-muted">
                          <span>{listing.sortLabel}</span>
                          <span className="font-semibold text-on-surface">{listing.sortValue}</span>
                        </div>
                      </div>
                    ) : null}

                    {screen.id === 'product-details' ? (
                      <div className="mt-7 rounded-[1.35rem] bg-surface-high/70 p-4 ghost-border sm:p-5">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="font-headline text-lg font-bold text-on-surface">{product.title}</p>
                            <p className="mt-1 text-sm text-on-muted">{product.subtitle}</p>
                          </div>
                          <p className="font-headline text-xl font-bold text-primary">{product.price}</p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {(product.sizes || []).map((size) => (
                            <span key={size} className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-outline-variant/15 bg-surface px-3 text-xs font-semibold text-on-surface">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-[1.5rem] bg-surface-high/70 p-3 ghost-border sm:p-4">
                      <img src={screen.image} alt={screen.title} className="aspect-[4/5] w-full rounded-[1.15rem] object-cover object-top" />
                    </div>

                    {screen.related?.length ? (
                      <div className="grid grid-cols-2 gap-3">
                        {screen.related.map((item) => (
                          <div key={item.title} className="rounded-[1.2rem] bg-surface-high/70 p-3 ghost-border">
                            <img src={item.image} alt={item.title} className="aspect-[4/5] w-full rounded-[0.95rem] object-cover object-top" />
                            <p className="mt-3 text-sm font-semibold text-on-surface">{item.title}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </section>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default FashionCaseStudyPage
