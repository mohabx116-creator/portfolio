import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import useAppSettings from '../context/useAppSettings'

function HeroSection() {
  const { content, isRTL } = useAppSettings()
  const buttonAlign = isRTL ? 'justify-end' : 'justify-start'
  const badgeAlign = isRTL ? 'justify-end' : 'justify-start'
  const floatingPosition = isRTL ? 'sm:-right-6 -right-5' : 'sm:-left-6 -left-5'

  return (
    <section id="home" className="section-divider relative min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-36">
      <div className="absolute inset-0 bg-berry-glow opacity-100" />
      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="text-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-card px-4 py-2 text-xs tracking-[0.22em] text-on-muted ghost-border">
              <span className="h-2 w-2 rounded-full bg-tertiary" />
              {content.hero.availability}
            </div>

            <p className="mt-6 font-headline text-xl font-semibold text-primary">{content.brandRole}</p>
            <h1 className="mt-4 max-w-3xl bg-berry-text bg-clip-text font-headline text-4xl font-extrabold leading-[1.12] tracking-[-0.03em] text-transparent sm:text-5xl lg:text-[4rem]">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-muted sm:text-[1.15rem]">
              {content.hero.subtitle}
            </p>

            <div className={`mt-10 flex flex-wrap gap-4 ${buttonAlign}`}>
              <ButtonLink href="#contact" className="soft-glow px-8 py-3.5 text-base">{content.hero.primaryCta}</ButtonLink>
              <ButtonLink href="#projects" variant="ghost" className="px-7 py-3.5">{content.hero.secondaryCta}</ButtonLink>
            </div>

            <div className={`mt-8 flex flex-wrap gap-3 ${badgeAlign}`}>
              {content.hero.trustBadges.map((badge) => (
                <span key={badge} className="glass-panel ghost-border inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-on-surface">
                  <span className="h-2 w-2 rounded-full bg-tertiary" />
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="hero-card relative">
            <div className="dashboard-card ghost-border relative overflow-hidden rounded-[2rem] p-4 shadow-[0_26px_70px_rgba(0,0,0,0.2)] sm:p-5">
              <div className="rounded-[1.5rem] bg-surface-card/70">
                <div className="flex items-center justify-between border-b border-outline-variant/15 px-4 py-3">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-300/50" />
                    <span className="h-3 w-3 rounded-full bg-tertiary/60" />
                    <span className="h-3 w-3 rounded-full bg-primary/60" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-on-muted/60">{content.hero.mock.file}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 p-5 sm:p-6">
                  <div className="col-span-2 rounded-2xl bg-surface-high p-4 ghost-border">
                    <div className="mb-4 h-2 w-1/3 rounded-full bg-outline-variant/40" />
                    <div className="flex items-end gap-2">
                      <div className="h-16 flex-1 rounded-t-lg bg-primary-container/20" />
                      <div className="h-20 flex-1 rounded-t-lg bg-primary-container/35" />
                      <div className="h-12 flex-1 rounded-t-lg bg-primary-container/15" />
                      <div className="h-24 flex-1 rounded-t-lg bg-primary-container/55" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-surface-high p-4 ghost-border transition-transform duration-300 hover:-translate-y-0.5">
                    <div className="mb-3 h-2 w-1/2 rounded-full bg-outline-variant/40" />
                    <p className="font-headline text-2xl font-bold text-primary">98%</p>
                    <p className="mt-2 text-xs text-on-muted">{content.hero.mock.performance}</p>
                  </div>
                  <div className="rounded-2xl bg-surface-high p-4 ghost-border transition-transform duration-300 hover:-translate-y-0.5">
                    <div className="mb-3 h-2 w-1/2 rounded-full bg-outline-variant/40" />
                    <p className="font-headline text-2xl font-bold text-tertiary">24/7</p>
                    <p className="mt-2 text-xs text-on-muted">{content.hero.mock.availability}</p>
                  </div>
                </div>
              </div>

              <div className={`absolute -bottom-5 rounded-2xl bg-surface-top p-4 shadow-panel ghost-border ${floatingPosition}`}>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">&lt;/&gt;</div>
                  <div>
                    <p className="text-xs text-on-muted">{content.hero.mock.completedPrefix}</p>
                    <p className="font-headline text-lg font-bold text-on-surface">{content.hero.mock.completedValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16 grid gap-4 md:grid-cols-3">
          {content.hero.stats.map((item) => (
            <div key={item.label} className="dashboard-card ghost-border p-5 text-start transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-surface-high/70">
              <p className="font-headline text-3xl font-bold text-primary">{item.value}</p>
              <p className="mt-3 text-sm leading-7 text-on-muted">{item.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}

export default HeroSection

