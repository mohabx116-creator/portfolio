import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

function TestimonialsSection() {
  const { content } = useAppSettings()
  const testimonialsSection = content?.sections?.testimonials || {}
  const items = Array.isArray(testimonialsSection.items) ? testimonialsSection.items : []

  return (
    <section className="bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={testimonialsSection.eyebrow}
            title={testimonialsSection.title}
            description={testimonialsSection.description}
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3 lg:gap-6">
          {items.map((item, index) => (
            <Reveal key={`${item.author}-${index}`} delay={index * 0.08}>
              <article className="dashboard-card ghost-border h-full p-5 text-start transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-surface-card/90 sm:p-6">
                <p className="text-base leading-8 text-on-surface">"{item.quote}"</p>
                <div className="mt-6 border-t border-outline-variant/15 pt-4">
                  <p className="font-headline text-base font-bold text-on-surface">{item.author}</p>
                  <p className="mt-1 text-sm text-on-muted">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
