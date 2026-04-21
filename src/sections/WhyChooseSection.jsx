import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

const icons = ['</>', '□', '⚡', 'API', 'UX', '◎']

function WhyChooseSection() {
  const { content } = useAppSettings()
  const reasonsSection = content?.sections?.reasons || {}
  const reasons = Array.isArray(reasonsSection.items) ? reasonsSection.items : []

  return (
    <section className="bg-surface-low px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={reasonsSection.eyebrow}
            title={reasonsSection.title}
            description={reasonsSection.description}
            align="center"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title || index} delay={index * 0.08}>
              <div className="dashboard-card ghost-border h-full p-5 text-start transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-surface-card/90 sm:p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 font-headline text-sm font-bold text-primary sm:mb-5 sm:h-12 sm:w-12">
                  {icons[index % icons.length]}
                </div>
                <h3 className="headline-gradient font-headline text-lg font-bold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-on-muted">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseSection
