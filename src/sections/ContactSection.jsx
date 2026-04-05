import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

function ContactSection() {
  const { content } = useAppSettings()
  const prioritizedContacts = [...content.contacts].sort((a, b) => {
    if (a.label === 'WhatsApp') return -1
    if (b.label === 'WhatsApp') return 1
    return 0
  })

  return (
    <section id="contact" className="bg-surface-low px-4 py-32 sm:px-6 lg:px-8">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="text-start">
            <SectionHeading
              eyebrow={content.sections.contact.eyebrow}
              title={content.sections.contact.title}
              description={content.sections.contact.description}
            />
            <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-primary/10 p-5 text-sm leading-7 text-on-surface backdrop-blur-sm">
              <p className="font-headline text-base font-bold text-primary">{content.sections.contact.highlightTitle}</p>
              <p className="mt-2 text-on-muted">{content.sections.contact.highlightCopy}</p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {prioritizedContacts.map((item, index) => {
              const isWhatsApp = item.label === 'WhatsApp'

              return (
                <Reveal key={item.label} delay={index * 0.08}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`dashboard-card flex h-full flex-col justify-between gap-6 p-6 text-start transition-all duration-300 hover:-translate-y-1 ${
                      isWhatsApp
                        ? 'border border-primary/30 bg-gradient-to-br from-primary/12 to-secondary/10 shadow-[0_18px_42px_rgba(128,131,255,0.16)] hover:border-primary/45 hover:shadow-[0_22px_50px_rgba(128,131,255,0.22)] sm:col-span-2'
                        : 'ghost-border hover:border-primary/25 hover:bg-surface-card/90 hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-label text-xs uppercase tracking-[0.2em] text-primary">{item.label}</p>
                        {isWhatsApp ? (
                          <span className="rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                            {content.sections.contact.fastest}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-4 break-words font-headline text-xl font-bold text-on-surface transition-colors duration-300 hover:text-primary">{item.value}</p>
                    </div>
                    <span className="text-sm text-on-muted">{content.sections.contact.action}</span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection

