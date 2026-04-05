import Container from '../components/Container'
import useAppSettings from '../context/useAppSettings'

function Footer() {
  const { content } = useAppSettings()

  return (
    <footer className="bg-surface px-4 py-10 sm:px-6 lg:px-8">
      <Container>
        <div className="grid gap-8 border-t border-outline-variant/15 pt-8 md:grid-cols-3">
          <div className="text-start">
            <p className="font-headline text-lg font-bold text-on-surface">{content.brandName}</p>
            <p className="mt-2 text-sm leading-7 text-on-muted">{content.footer.description}</p>
          </div>
          <div className="text-start">
            <p className="font-headline text-sm font-bold text-on-surface">{content.footer.quickLinks}</p>
            <div className="mt-3 grid gap-2 text-sm text-on-muted">
              <a href="#services">{content.nav.services}</a>
              <a href="#projects">{content.nav.projects}</a>
              <a href="#contact">{content.nav.contact}</a>
            </div>
          </div>
          <div className="text-start">
            <p className="font-headline text-sm font-bold text-on-surface">{content.footer.directContact}</p>
            <div className="mt-3 grid gap-2 text-sm text-on-muted">
              <a href="https://wa.me/201027613133" target="_blank" rel="noreferrer" className="font-semibold text-primary transition-colors duration-300 hover:text-on-surface">WhatsApp</a>
              <a href={`mailto:${content.contactData.email}`}>{content.contactData.email}</a>
              <a href={content.contactData.khamsat} target="_blank" rel="noreferrer">Khamsat</a>
              <a href={content.contactData.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-on-muted">{content.footer.copyright}</p>
      </Container>
    </footer>
  )
}

export default Footer

