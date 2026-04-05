import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

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
        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 xl:mt-16 xl:grid-cols-5">
          {reasons.map((reason, index) => (
            <Reveal key={reason || index} delay={index * 0.08}>
              <div className="dashboard-card ghost-border h-full p-5 text-start transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-surface-card/90 sm:p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mb-5 sm:h-11 sm:w-11">?</div>
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
