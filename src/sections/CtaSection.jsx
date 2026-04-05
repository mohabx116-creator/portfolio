import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import useAppSettings from '../context/useAppSettings'

function CtaSection() {
  const { content } = useAppSettings()

  return (
    <section className="section-divider bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] bg-berry-button p-[1px] shadow-[0_24px_80px_rgba(5,102,217,0.18)]">
            <div className="rounded-[calc(2rem-1px)] bg-gradient-to-br from-[rgb(var(--color-primary-container))] via-[rgb(var(--color-primary-container))] to-[rgb(var(--color-secondary-container))] px-5 py-10 text-center text-white sm:px-8 sm:py-14 lg:px-10 lg:py-16">
              <p className="font-label text-xs uppercase tracking-[0.28em] text-white/70">{content.sections.cta.eyebrow}</p>
              <h2 className="mt-4 font-headline text-[1.9rem] font-bold tracking-[-0.02em] leading-[1.15] sm:text-[2.3rem] lg:text-[2.8rem]">
                {content.sections.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 text-white/85 sm:text-base sm:leading-8 lg:text-lg">
                {content.sections.cta.description}
              </p>
              <div className="mt-8 flex justify-center sm:mt-10">
                <ButtonLink href="https://wa.me/201027613133" target="_blank" rel="noreferrer" className="w-full bg-white px-7 py-4 text-base text-[rgb(var(--color-secondary-container))] hover:bg-white/90 sm:w-auto sm:px-9">
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

