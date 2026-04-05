import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import useAppSettings from '../context/useAppSettings'

function ServicesSection() {
  const { content } = useAppSettings()
  const servicesSection = content?.sections?.services || {}
  const services = Array.isArray(content?.services) ? content.services : []

  return (
    <section id="services" className="bg-surface-low px-4 py-28 sm:px-6 lg:px-8">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={servicesSection.eyebrow}
            title={servicesSection.title}
            description={servicesSection.description}
            align="center"
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title || index} delay={index * 0.08}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
