import { Box, Database, PlugZap, ServerCog } from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

const icons = [ServerCog, Database, Box, PlugZap]

function BackendProofSection() {
  const { content } = useAppSettings()
  const section = content?.sections?.backendProof || {}
  const items = Array.isArray(section.items) ? section.items : []

  return (
    <section id="backend-proof" className="bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length]

            return (
              <Reveal key={item.title} delay={index * 0.07}>
                <article className="dashboard-card ghost-border group h-full p-5 text-start transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-high/80 sm:p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/15">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-headline text-lg font-bold leading-7 text-on-surface">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-on-muted">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default BackendProofSection
