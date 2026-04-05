import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

function WhyChooseSection() {
  const { content } = useAppSettings()

  return (
    <section className="bg-surface-low px-4 py-28 sm:px-6 lg:px-8">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.reasons.eyebrow}
            title={content.sections.reasons.title}
            description={content.sections.reasons.description}
            align="center"
          />
        </Reveal>
        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {content.sections.reasons.items.map((reason, index) => (
            <Reveal key={reason} delay={index * 0.08}>
              <div className="dashboard-card ghost-border h-full p-6 text-start transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-surface-card/90">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">✓</div>
                <p className="text-sm font-medium leading-7 text-on-surface">{reason}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseSection

