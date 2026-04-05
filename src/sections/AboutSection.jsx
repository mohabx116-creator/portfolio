import food1 from '../assets/food1.png'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

function AboutSection() {
  const { content, isRTL } = useAppSettings()
  const aboutSection = content?.sections?.about || {}
  const highlights = Array.isArray(aboutSection.highlights) ? aboutSection.highlights : []

  return (
    <section id="about" className="bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className={isRTL ? 'order-2 lg:order-1' : 'order-2'}>
            <div className="dashboard-card ghost-border overflow-hidden rounded-[2rem]">
              <img src={food1} alt={aboutSection.imageAlt} className="h-full min-h-[260px] w-full object-cover sm:min-h-[320px]" />
            </div>
          </Reveal>

          <Reveal className={isRTL ? 'order-1 lg:order-2 text-start' : 'order-1 text-start'}>
            <SectionHeading
              eyebrow={aboutSection.eyebrow}
              title={aboutSection.title}
              description={aboutSection.description}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="dashboard-card ghost-border p-4 text-start transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 sm:p-5">
                  <p className="font-headline text-lg font-bold text-primary sm:text-xl">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-on-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
