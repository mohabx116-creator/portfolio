import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import useAppSettings from '../context/useAppSettings'
import heroFigmaReactPromo from '../assets/hero-figma-react-promo.png'

function HeroSection() {
  const { content, isRTL } = useAppSettings()
  const buttonAlign = isRTL ? 'justify-end' : 'justify-start'
  const badgeAlign = isRTL ? 'justify-end' : 'justify-start'
  const hero = content?.hero || {}
  const trustBadges = Array.isArray(hero.trustBadges) ? hero.trustBadges : []

  return (
    <section id="home" className="section-divider relative min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-36">
      <div className="absolute inset-0 bg-berry-glow opacity-100" />
      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="text-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-card px-4 py-2 text-xs tracking-[0.22em] text-on-muted ghost-border">
              <span className="h-2 w-2 rounded-full bg-tertiary" />
              {hero.availability}
            </div>

            <p className="mt-6 font-headline text-xl font-semibold text-primary">{content?.brandRole}</p>
            <h1 className="mt-4 max-w-3xl bg-berry-text bg-clip-text font-headline text-4xl font-extrabold leading-[1.12] tracking-[-0.03em] text-transparent sm:text-5xl lg:text-[4rem]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-muted sm:text-[1.15rem]">
              {hero.subtitle}
            </p>

            <div className={`mt-10 flex flex-wrap gap-5 ${buttonAlign}`}>
              <ButtonLink href="#contact" className="soft-glow min-w-[260px] px-12 py-5 text-xl sm:min-w-[300px] sm:px-14 sm:py-6 sm:text-2xl">
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink
                href="#projects"
                variant="ghost"
                className="min-w-[220px] border border-outline-variant/15 bg-surface-card px-10 py-5 text-xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-primary/25 hover:bg-surface-high sm:min-w-[270px] sm:px-12 sm:py-6 sm:text-2xl"
              >
                {hero.secondaryCta}
              </ButtonLink>
            </div>

            <div className={`mt-8 flex flex-wrap gap-3 ${badgeAlign}`}>
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className={`dashboard-card ghost-border inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-on-surface ${
                    isRTL ? 'tracking-normal' : 'uppercase tracking-[0.12em]'
                  }`}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-tertiary shadow-[0_0_0_4px_rgba(188,110,44,0.12)]" />
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="hero-card relative">
            <div className="dashboard-card ghost-border relative overflow-hidden rounded-[2rem] p-4 shadow-[0_26px_70px_rgba(0,0,0,0.2)] sm:p-5">
              <div className="overflow-hidden rounded-[1.5rem] bg-surface-card/70">
                <div className="flex items-center justify-between border-b border-outline-variant/15 px-4 py-3">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-300/50" />
                    <span className="h-3 w-3 rounded-full bg-tertiary/60" />
                    <span className="h-3 w-3 rounded-full bg-primary/60" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-on-muted/60">{hero?.mock?.file}</span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="overflow-hidden rounded-[1.5rem] border border-outline-variant/15 bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                    <img
                      src={heroFigmaReactPromo}
                      alt={hero.title}
                      className="w-full object-cover transition-transform duration-500 hover:scale-[1.01]"
                    />
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
