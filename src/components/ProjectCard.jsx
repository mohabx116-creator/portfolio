import ButtonLink from './ButtonLink'
import useAppSettings from '../context/useAppSettings'

function ProjectCard({
  title,
  description,
  image,
  category,
  stack,
  technologies = [],
  problem,
  solution,
  impact,
  route,
  liveUrl,
  liveLabel,
  githubUrl,
  featured = false,
}) {
  const { content } = useAppSettings()
  const projectsSection = content?.sections?.projects || {}
  const isExternalLiveProject = typeof liveUrl === 'string' && /^https?:\/\//.test(liveUrl)
  const primaryCtaLabel = liveLabel || projectsSection.liveDemo

  return (
    <article
      className={`dashboard-card ghost-border group overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_24px_56px_rgba(0,0,0,0.22)] ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`grid h-full ${featured ? 'lg:grid-cols-[1.05fr_0.95fr]' : ''}`}>
        <div className={`relative overflow-hidden bg-surface-high ${featured ? 'min-h-[19rem] lg:min-h-full' : 'h-56 sm:h-60'}`}>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/20 to-transparent opacity-90" />
          <div className="absolute left-4 right-4 top-4 flex flex-wrap items-center gap-2">
            {featured ? (
              <span className="rounded-full border border-primary/30 bg-surface/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
                {projectsSection.featuredLabel}
              </span>
            ) : null}
            <span className="rounded-full border border-white/10 bg-surface/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface backdrop-blur-md">
              {category}
            </span>
            <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
              {stack}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div className="rounded-2xl border border-white/10 bg-surface/70 px-4 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{projectsSection.cardHintTitle}</p>
              <p className="mt-2 text-sm leading-6 text-on-surface">{projectsSection.cardHintCopy}</p>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col p-5 text-start sm:p-6 lg:p-7">
          <h3 className="font-headline text-[1.28rem] font-bold leading-8 text-on-surface transition-colors duration-300 group-hover:text-primary sm:text-[1.5rem]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-on-surface/90 sm:text-[0.98rem]">{description}</p>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{projectsSection.problem}</p>
              <p className="mt-1.5 text-sm leading-6 text-on-muted">{problem}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{projectsSection.solution}</p>
              <p className="mt-1.5 text-sm leading-6 text-on-muted">{solution}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{projectsSection.impact}</p>
              <p className="mt-1.5 text-sm leading-6 text-on-muted">{impact}</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{projectsSection.technologies}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-outline-variant/15 bg-surface-high/80 px-3 py-1.5 text-[11px] font-semibold text-on-surface"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-4">
            <ButtonLink
              href={liveUrl || route}
              target={isExternalLiveProject ? '_blank' : undefined}
              rel={isExternalLiveProject ? 'noopener noreferrer' : undefined}
              className={`w-full sm:min-w-[11rem] sm:flex-1 ${isExternalLiveProject ? 'scale-100 shadow-[0_20px_54px_rgba(var(--color-primary-container),0.32)] hover:scale-[1.02] hover:shadow-[0_24px_64px_rgba(var(--color-primary-container),0.4)]' : ''}`}
            >
              {primaryCtaLabel}
            </ButtonLink>
            <ButtonLink
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              className="w-full sm:flex-[0.88]"
            >
              {projectsSection.githubCta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
