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
    <section id="services" className="bg-surface-low px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={servicesSection.eyebrow}
            title={servicesSection.title}
            description={servicesSection.description}
            align="center"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
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
