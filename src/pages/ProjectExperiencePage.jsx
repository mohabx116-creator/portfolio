import { Link, useParams } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import useAppSettings from '../context/useAppSettings'

function ProjectExperiencePage() {
  const { slug } = useParams()
  const { content } = useAppSettings()
  const projectPages = content?.projectPages || {}
  const project = projectPages[slug] || null
  const features = Array.isArray(project?.features) ? project.features : []
  const tech = Array.isArray(project?.tech) ? project.tech : []
  const images = Array.isArray(project?.images) ? project.images : []
  const projectPageLabels = content?.sections?.projectPage || {}

  if (!project) {
    return null
  }

  return (
    <>
      <Navbar />
      <main className="bg-surface px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <Container>
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center rounded-full border border-outline-variant/15 bg-surface-card px-5 py-3 font-headline text-sm font-bold text-on-surface transition-all duration-300 hover:border-primary/30 hover:text-primary">
              {content?.nav?.backHome || 'Back Home'}
            </Link>
          </div>

          <section className="dashboard-card ghost-border overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="text-start">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                    {project.category}
                  </span>
                  <span className="rounded-md bg-secondary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">
                    {project.stack}
                  </span>
                </div>
                <p className="section-kicker">{project.eyebrow}</p>
                <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-[-0.03em] text-on-surface sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-on-muted">
                  {project.subtitle}
                </p>

                <div className="mt-8 rounded-[1.5rem] bg-surface-high/70 p-6 ghost-border">
                  <p className="text-base leading-8 text-on-muted">{project.summary}</p>
                </div>

                <div className="mt-8">
                  <p className="font-label text-xs uppercase tracking-[0.24em] text-primary">{projectPageLabels.featuresLabel || 'Highlights'}</p>
                  <div className="mt-4 grid gap-3">
                    {features.map((feature) => (
                      <div key={feature} className="rounded-2xl bg-surface-high/70 px-4 py-3 text-sm leading-7 text-on-surface ghost-border">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="font-label text-xs uppercase tracking-[0.24em] text-primary">{projectPageLabels.techLabel || 'Tech Stack'}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {tech.map((item) => (
                      <span key={item} className="rounded-full border border-outline-variant/15 bg-surface-high px-4 py-2 text-xs font-semibold text-on-surface">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ButtonLink href="https://wa.me/201027613133" target="_blank" rel="noreferrer">
                    {projectPageLabels.contactCta || 'Start on WhatsApp'}
                  </ButtonLink>
                  <ButtonLink href="/" variant="ghost">
                    {content?.nav?.backHome || 'Back Home'}
                  </ButtonLink>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.75rem] bg-surface-high/70 p-4 ghost-border">
                  <p className="font-label text-xs uppercase tracking-[0.24em] text-primary">{projectPageLabels.previewLabel || 'Preview'}</p>
                  <div className="mt-4 overflow-hidden rounded-[1.5rem] bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.14)]">
                    <img src={images[0]} alt={project.title} className="w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <p className="font-label text-xs uppercase tracking-[0.24em] text-primary">{projectPageLabels.galleryLabel || 'Gallery'}</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {images.map((image, index) => (
                <div key={`${project.slug}-${index}`} className="dashboard-card ghost-border overflow-hidden rounded-[1.5rem] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <img src={image} alt={`${project.title} ${index + 1}`} className="w-full rounded-[1.1rem] object-cover" />
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default ProjectExperiencePage
