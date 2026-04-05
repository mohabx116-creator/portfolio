import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import useAppSettings from '../context/useAppSettings'

function CtaSection() {
  const { content } = useAppSettings()

  return (
    <section className="section-divider bg-surface px-4 py-32 sm:px-6 lg:px-8">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] bg-berry-button p-[1px] shadow-[0_24px_80px_rgba(5,102,217,0.18)]">
            <div className="rounded-[calc(2rem-1px)] bg-gradient-to-br from-[rgb(var(--color-primary-container))] via-[rgb(var(--color-primary-container))] to-[rgb(var(--color-secondary-container))] px-8 py-14 text-center text-white sm:px-10 sm:py-16">
              <p className="font-label text-xs uppercase tracking-[0.28em] text-white/70">{content.sections.cta.eyebrow}</p>
              <h2 className="mt-4 font-headline text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-[2.8rem]">
                {content.sections.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                {content.sections.cta.description}
              </p>
              <div className="mt-10 flex justify-center">
                <ButtonLink href="https://wa.me/201027613133" target="_blank" rel="noreferrer" className="bg-white px-9 py-4 text-base text-[rgb(var(--color-secondary-container))] hover:bg-white/90">
                  {content.sections.cta.action}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default CtaSection

