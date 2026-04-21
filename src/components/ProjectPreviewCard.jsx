import useAppSettings from '../context/useAppSettings'
import {
  getProjectExternalActions,
  getProjectPrimaryLabel,
  getProjectShortLabel,
  getProjectShortDescription,
  getProjectTechStack,
  getProjectThumbnail,
  getProjectTypeLabel,
} from '../utils/projectPresentation'

function ProjectPreviewCard({ project, onOpen }) {
  const { content } = useAppSettings()
  const projectsSection = content?.sections?.projects || {}
  const technologies = getProjectTechStack(project).slice(0, 4)
  const thumbnail = getProjectThumbnail(project)
  const shortLabel = getProjectShortLabel(project)
  const shortDescription = getProjectShortDescription(project)
  const projectTypeLabel = getProjectTypeLabel(project)
  const primaryLabel = getProjectPrimaryLabel(project, projectsSection)
  const externalActions = getProjectExternalActions(project, projectsSection)
  const cardHintCopy = externalActions.length ? projectsSection.cardHintCopy : projectsSection.internalOnlyCopy
  const showCategoryBadge = project?.category && project.category !== projectTypeLabel

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpen(project)
    }
  }

  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      className="dashboard-card ghost-border group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.8rem] bg-surface-card/95 text-start transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={thumbnail}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05] group-focus-visible:scale-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/18 to-transparent opacity-82 transition-opacity duration-300 group-hover:opacity-96 group-focus-visible:opacity-96" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.1),rgba(8,10,14,0.16)_38%,rgba(8,10,14,0.9)),radial-gradient(circle_at_top_right,rgba(var(--color-primary-container),0.12),transparent_26%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

        <div className="absolute left-4 right-4 top-4 flex flex-wrap items-center gap-2">
          {project.featured ? (
            <span className="rounded-full border border-primary/25 bg-surface/82 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
              {projectsSection.featuredLabel}
            </span>
          ) : null}
          {projectTypeLabel ? (
            <span className="rounded-full border border-white/10 bg-surface/78 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface backdrop-blur-md">
              {projectTypeLabel}
            </span>
          ) : null}
          {showCategoryBadge ? (
            <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
              {project.category}
            </span>
          ) : null}
        </div>

        <div className="absolute inset-x-4 bottom-4">
          <div className="rounded-[1.4rem] border border-white/12 bg-[rgba(15,23,42,0.72)] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
            {shortLabel ? (
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary/92">
                {shortLabel}
              </p>
            ) : null}
            <h3 className="mt-2 font-headline text-[1.12rem] font-bold leading-7 text-white sm:text-[1.25rem]">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4 py-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <div className="w-full max-w-[21rem] translate-y-3 rounded-[1.35rem] border border-white/10 bg-surface/78 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.22)] backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
              {projectsSection.cardHintTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-on-surface">
              {cardHintCopy}
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={(event) => {
                  stopPropagation(event)
                  onOpen(project)
                }}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:brightness-110 sm:flex-1"
              >
                {primaryLabel}
              </button>
              {externalActions.map((action) => (
                <a
                  key={action.key}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stopPropagation}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-outline-variant/15 bg-surface-card/80 px-4 py-2.5 text-sm font-bold text-on-surface transition-all duration-300 hover:border-primary/25 hover:text-primary sm:flex-1"
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-7 text-on-muted">
          {shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-outline-variant/15 bg-surface-high/85 px-3 py-1.5 text-[11px] font-semibold text-on-surface"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectPreviewCard
