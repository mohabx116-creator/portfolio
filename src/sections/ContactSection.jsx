import ContactCard from '../components/ContactCard'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

function ContactSection() {
  const { content } = useAppSettings()
  const contactSection = content?.sections?.contact || {}
  const contacts = Array.isArray(content?.contacts) ? content.contacts : []

  return (
    <section id="contact" className="bg-surface-low px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-start lg:gap-14 xl:gap-16">
          <Reveal className="text-start">
            <SectionHeading
              eyebrow={contactSection.eyebrow}
              title={contactSection.title}
              description={contactSection.description}
              className="max-w-2xl"
              titleClassName="text-[2.1rem] leading-[1.08] sm:text-[2.7rem] lg:text-[3.35rem]"
              descriptionClassName="mt-5 max-w-xl text-[1rem] leading-8 sm:text-[1.08rem] sm:leading-9"
            />

            <div className="mt-8 rounded-[1.9rem] border border-primary/18 bg-gradient-to-br from-primary/10 via-surface-card/65 to-secondary/10 p-6 shadow-[0_20px_50px_rgba(128,131,255,0.1)] backdrop-blur-sm sm:mt-10 sm:p-7">
              <p className="font-headline text-lg font-bold text-primary">{contactSection.highlightTitle}</p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-on-muted sm:text-base sm:leading-8">{contactSection.highlightCopy}</p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {contacts.map((item, index) => (
              <Reveal
                key={item.label || index}
                delay={index * 0.06}
                className={item.label === 'WhatsApp' ? 'sm:col-span-2' : ''}
              >
                <ContactCard
                  {...item}
                  featured={item.label === 'WhatsApp'}
                  badge={item.label === 'WhatsApp' ? contactSection.fastest : undefined}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
