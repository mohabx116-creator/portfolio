import { Link, useParams } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import FashionCaseStudyPage from '../components/FashionCaseStudyPage'
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

  if (project.template === 'fashion-gallery') {
    return <FashionCaseStudyPage />
  }

  return (
    <>
      <Navbar />
      <main className="bg-surface px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
        <Container>
          <div className="mb-8 sm:mb-10">
            <Link to="/" className="inline-flex min-h-11 items-center rounded-full border border-outline-variant/15 bg-surface-card px-4 py-3 font-headline text-sm font-bold text-on-surface transition-all duration-300 hover:border-primary/30 hover:text-primary sm:px-5">
              {content?.nav?.backHome || 'Back Home'}
            </Link>
          </div>

          <section className="dashboard-card ghost-border overflow-hidden rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10">
              <div className="text-start">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary sm:tracking-[0.18em]">
                    {project.category}
                  </span>
                  <span className="rounded-md bg-secondary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-secondary sm:tracking-[0.18em]">
                    {project.stack}
                  </span>
                </div>
                <p className="section-kicker">{project.eyebrow}</p>
                <h1 className="mt-4 font-headline text-[2rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-on-surface sm:text-[2.7rem] lg:text-[3.2rem]">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-on-muted sm:text-lg sm:leading-8">
                  {project.subtitle}
                </p>

                <div className="mt-7 rounded-[1.5rem] bg-surface-high/70 p-5 ghost-border sm:mt-8 sm:p-6">
                  <p className="text-base leading-7 text-on-muted sm:leading-8">{project.summary}</p>
                </div>

                <div className="mt-7 sm:mt-8">
                  <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{projectPageLabels.featuresLabel || 'Highlights'}</p>
                  <div className="mt-4 grid gap-3">
                    {features.map((feature) => (
                      <div key={feature} className="rounded-2xl bg-surface-high/70 px-4 py-3 text-sm leading-7 text-on-surface ghost-border">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 sm:mt-8">
                  <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{projectPageLabels.techLabel || 'Tech Stack'}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {tech.map((item) => (
                      <span key={item} className="rounded-full border border-outline-variant/15 bg-surface-high px-4 py-2 text-xs font-semibold text-on-surface">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                  <ButtonLink href="https://wa.me/201027613133" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                    {projectPageLabels.contactCta || 'Start on WhatsApp'}
                  </ButtonLink>
                  <ButtonLink href="/" variant="ghost" className="w-full sm:w-auto">
                    {content?.nav?.backHome || 'Back Home'}
                  </ButtonLink>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.5rem] bg-surface-high/70 p-3 ghost-border sm:rounded-[1.75rem] sm:p-4">
                  <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{projectPageLabels.previewLabel || 'Preview'}</p>
                  <div className="mt-4 overflow-hidden rounded-[1.2rem] bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.14)] sm:rounded-[1.5rem]">
                    <img src={images[0]} alt={project.title} className="max-h-[28rem] w-full object-cover object-top sm:max-h-none" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 sm:mt-10">
            <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">{projectPageLabels.galleryLabel || 'Gallery'}</p>
            <div className="mt-5 grid gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6">
              {images.map((image, index) => (
                <div key={`${project.slug}-${index}`} className="dashboard-card ghost-border overflow-hidden rounded-[1.5rem] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <img src={image} alt={`${project.title} ${index + 1}`} className="aspect-[4/3] w-full rounded-[1.1rem] object-cover object-top" />
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
