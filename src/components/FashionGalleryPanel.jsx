import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import useAppSettings from '../context/useAppSettings'

function FashionGalleryPanel() {
  const { content } = useAppSettings()
  const projectsSection = content?.sections?.projects || {}
  const fashionGallery = content?.fashionGallery || {}
  const screens = Array.isArray(fashionGallery.screens) ? fashionGallery.screens : []

  return (
    <div className="space-y-6">
      <Reveal>
        <div className="dashboard-card ghost-border overflow-hidden rounded-[1.75rem] p-5 sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="text-start">
              <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{projectsSection.fashionTab || 'Fashion Gallery'}</p>
              <h3 className="mt-3 font-headline text-[1.7rem] font-bold leading-tight text-on-surface sm:text-[2rem]">
                {fashionGallery.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-on-muted sm:text-base sm:leading-8">
                {fashionGallery.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {(fashionGallery.highlights || []).map((item) => (
                  <span key={item} className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  to={fashionGallery.route}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-berry-button px-5 py-3 font-headline text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  {fashionGallery.caseStudyCta}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {screens.map((screen) => (
                <a
                  key={screen.id}
                  href={`${fashionGallery.route}#${screen.id}`}
                  className="group overflow-hidden rounded-[1.25rem] bg-surface-high/70 p-2 ghost-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="overflow-hidden rounded-[0.95rem]">
                    <img src={screen.image} alt={screen.title} className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-3 truncate text-center text-xs font-semibold text-on-surface sm:text-sm">{screen.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        {screens.map((screen, index) => (
          <Reveal key={screen.id} delay={index * 0.08}>
            <a
              href={`${fashionGallery.route}#${screen.id}`}
              className="dashboard-card ghost-border group block overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_20px_48px_rgba(0,0,0,0.18)]"
            >
              <div className="relative h-56 overflow-hidden bg-surface-high sm:h-60">
                <img src={screen.image} alt={screen.title} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-card via-surface-card/20 to-transparent px-5 pb-5 pt-10">
                  <p className="font-label text-[10px] uppercase tracking-[0.18em] text-primary">{screen.eyebrow}</p>
                  <h4 className="mt-2 font-headline text-lg font-bold text-on-surface">{screen.title}</h4>
                </div>
              </div>
              <div className="p-5 text-start">
                <p className="text-sm leading-7 text-on-muted">{screen.description}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="rounded-md bg-secondary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-secondary">
                    {screen.meta}
                  </span>
                  <span className="text-sm font-semibold text-primary">{projectsSection.viewDetailsLabel || 'View Details'}</span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default FashionGalleryPanel
