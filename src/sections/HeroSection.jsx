import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import HeroBackdrop from '../components/HeroBackdrop'
import Reveal from '../components/Reveal'
import useAppSettings from '../context/useAppSettings'
import figgyPreview from '../../tmp_pick_7.png'
import oneClickPreview from '../../tmp_pick_5.jpg'

function HeroSection() {
  const { content, isRTL } = useAppSettings()
  const hero = content?.hero || {}
  const trustBadges = Array.isArray(hero.trustBadges) ? hero.trustBadges : []
  const quickLinks = Array.isArray(hero.quickLinks) ? hero.quickLinks : []
  const heroStats = Array.isArray(hero.stats) ? hero.stats : []
  const showcaseLabel = 'creative-showcase.v2'
  const previewCards = [
    {
      id: 'food-app-preview',
      title: 'Figgy React',
      image: figgyPreview,
      position: 'left-4 top-4 w-[84%] sm:left-6 sm:top-6 sm:w-[80%]',
      rotation: '-rotate-[2.5deg] sm:-rotate-[3.5deg]',
      aspect: 'aspect-[16/9]',
      fit: 'object-contain',
      frame: 'bg-[#1f1f1f]',
      layer: 'z-10',
    },
    {
      id: 'one-click-preview',
      title: 'One Click React',
      image: oneClickPreview,
      position: 'bottom-4 right-3 w-[58%] sm:bottom-6 sm:right-4 sm:w-[52%]',
      rotation: 'rotate-[2deg] sm:rotate-[3deg]',
      aspect: 'aspect-[16/10]',
      layer: 'z-20',
    },
  ]
  const buttonAlign = isRTL ? 'justify-end' : 'justify-start'
  const badgeAlign = isRTL ? 'justify-end' : 'justify-start'

  return (
    <section id="home" className="section-divider relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
      <HeroBackdrop />
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
          <Reveal className="text-start">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-surface-card px-4 py-2 text-[11px] tracking-[0.18em] text-on-muted ghost-border sm:text-xs sm:tracking-[0.22em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-tertiary" />
              <span className="truncate">{hero.availability}</span>
            </div>

            <p className="mt-5 font-headline text-base font-semibold text-primary sm:mt-6 sm:text-lg">{content?.brandRole}</p>
            <h1 className="mt-4 max-w-3xl bg-berry-text bg-clip-text font-headline text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-transparent sm:text-[2.9rem] lg:text-[4rem]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-on-muted sm:mt-6 sm:text-[1.05rem] sm:leading-8 lg:text-[1.15rem]">
              {hero.subtitle}
            </p>

            <div className={`mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4 ${buttonAlign}`}>
              <ButtonLink href="#contact" className="soft-glow w-full px-6 py-4 text-base sm:w-auto sm:min-w-[220px] sm:px-10 sm:text-lg">
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink
                href="#projects"
                variant="ghost"
                className="w-full px-6 py-4 text-base shadow-[0_18px_42px_rgba(0,0,0,0.16)] sm:w-auto sm:min-w-[220px] sm:px-8 sm:text-lg"
              >
                {hero.secondaryCta}
              </ButtonLink>
            </div>

            <div className={`mt-5 flex flex-wrap gap-3 ${buttonAlign}`}>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href?.startsWith('http') ? '_blank' : undefined}
                  rel={link.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex min-h-11 items-center rounded-full border border-outline-variant/15 bg-surface-card/75 px-4 py-2 text-sm font-semibold text-on-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className={`mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3 ${badgeAlign}`}>
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className={`dashboard-card ghost-border inline-flex max-w-full items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-on-surface sm:px-4 sm:py-2.5 sm:text-sm ${
                    isRTL ? 'tracking-normal' : 'uppercase tracking-[0.1em] sm:tracking-[0.12em]'
                  }`}
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-tertiary shadow-[0_0_0_4px_rgba(188,110,44,0.12)]" />
                  <span className="break-words">{badge}</span>
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="hero-card relative mx-auto w-full max-w-[34rem] lg:max-w-none">
            <div className="dashboard-card ghost-border relative overflow-hidden rounded-[1.6rem] p-3 shadow-[0_26px_70px_rgba(0,0,0,0.2)] sm:rounded-[2rem] sm:p-5">
              <div className="overflow-hidden rounded-[1.2rem] bg-surface-card/70 sm:rounded-[1.5rem]">
                <div className="flex items-center justify-between border-b border-outline-variant/15 px-3 py-2.5 sm:px-4 sm:py-3">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300/50 sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-tertiary/60 sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/60 sm:h-3 sm:w-3" />
                  </div>
                  <span className="max-w-[58%] truncate text-[9px] uppercase tracking-[0.18em] text-on-muted/60 sm:text-[10px] sm:tracking-[0.22em]">{showcaseLabel}</span>
                </div>

                <div className="p-3 sm:p-5 lg:p-6">
                  <div className="overflow-hidden rounded-[1.2rem] border border-outline-variant/15 bg-[radial-gradient(circle_at_18%_20%,rgba(var(--color-primary-container),0.18),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(var(--color-tertiary),0.12),transparent_24%),linear-gradient(155deg,rgba(var(--color-surface-low),0.98),rgba(var(--color-surface-card),0.94))] shadow-[0_24px_56px_rgba(0,0,0,0.28)] sm:rounded-[1.5rem]">
                    <div className="relative aspect-[5/4] sm:aspect-[4/3]">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-primary/10" />
                      {previewCards.map((card, index) => (
                        <div
                          key={card.id}
                          className={`group absolute overflow-hidden rounded-[1.25rem] border border-white/40 bg-surface/90 shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur transition-transform duration-500 hover:-translate-y-1 hover:rotate-0 ${card.position} ${card.rotation} ${card.layer || ''} ${card.frame || ''}`}
                        >
                          <div className="absolute left-3 top-3 z-20 rounded-full bg-surface-card/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary shadow-[0_8px_18px_rgba(0,0,0,0.08)] sm:left-4 sm:top-4 sm:text-[11px]">
                            {card.title}
                          </div>
                          <img
                            src={card.image}
                            alt={card.title}
                            className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${card.aspect} ${card.fit || 'object-cover'}`}
                            fetchPriority={index === 0 ? 'high' : undefined}
                          />
                        </div>
                      ))}
                      <div className="absolute left-[14%] top-[58%] h-20 w-20 rounded-full bg-primary/12 blur-3xl sm:h-24 sm:w-24" />
                      <div className="absolute right-[16%] top-[16%] h-14 w-14 rounded-full bg-tertiary/14 blur-3xl sm:h-20 sm:w-20" />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {heroStats.map((item) => (
                      <div key={`${item.value}-${item.label}`} className="rounded-2xl border border-outline-variant/15 bg-surface-card/70 p-4">
                        <p className="font-headline text-xl font-bold text-on-surface">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-on-muted">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
