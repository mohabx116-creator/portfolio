import { useEffect } from 'react'
import ButtonLink from './ButtonLink'
import useAppSettings from '../context/useAppSettings'
import {
  getProjectExternalActions,
  getProjectFullDescription,
  getProjectTechStack,
  getProjectThumbnail,
  getProjectTypeLabel,
} from '../utils/projectPresentation'

function ProjectModal({ project, onClose }) {
  const { content, isRTL } = useAppSettings()
  const closeSide = isRTL ? 'left-3 sm:left-4' : 'right-3 sm:right-4'
  const projectData = project || {}
  const projectTechnologies = getProjectTechStack(projectData)
  const projectImage = getProjectThumbnail(projectData)
  const projectTypeLabel = getProjectTypeLabel(projectData)
  const projectDescription = getProjectFullDescription(projectData)
  const externalActions = getProjectExternalActions(projectData, content?.sections?.projects || {})
  const hasExternalActions = externalActions.length > 0
  const showCategoryBadge = projectData.category && projectData.category !== projectTypeLabel
  const projectModal = content?.sections?.projects?.modal || {}
  const projectsSection = content?.sections?.projects || {}
  const backText = projectModal.back || projectModal.close || 'Back'

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[70] bg-surface/70 p-3 backdrop-blur-md sm:p-4" onClick={onClose}>
      <div className="flex min-h-full items-center justify-center">
        <div
          role="dialog"
          aria-modal="true"
          aria-label={projectData.title}
          className="dashboard-card ghost-border relative max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-y-auto rounded-[1.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.24)] animate-[fadeIn_.28s_ease] sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2rem]"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className={`absolute top-3 z-20 flex h-10 min-w-10 items-center justify-center rounded-full border border-outline-variant/15 bg-surface/85 px-3 text-sm font-bold text-on-surface backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:text-primary sm:top-4 sm:px-4 ${closeSide}`}
            aria-label={projectModal.close || 'Close'}
          >
            {backText}
          </button>

          <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
            <div className="relative overflow-hidden bg-surface-high">
              <div className="absolute inset-x-4 top-4 z-10 flex flex-wrap gap-2 sm:inset-x-5 sm:top-5">
                {projectTypeLabel ? (
                  <span className="rounded-full border border-primary/25 bg-surface/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
                    {projectTypeLabel}
                  </span>
                ) : null}
                {showCategoryBadge ? (
                  <span className="rounded-full border border-white/10 bg-surface/78 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface backdrop-blur-md">
                    {projectData.category}
                  </span>
                ) : null}
                {projectData.stack ? (
                  <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                    {projectData.stack}
                  </span>
                ) : null}
              </div>

              <div className="relative min-h-[220px] sm:min-h-[280px]">
                <img src={projectImage} alt={projectData.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/18 to-transparent opacity-90" />
              </div>

              <div className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-5 sm:bottom-5">
                <div className="rounded-[1.2rem] border border-white/10 bg-surface/78 px-4 py-4 backdrop-blur-md">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                    {projectsSection.cardHintTitle}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-on-surface">
                    {hasExternalActions ? projectsSection.cardHintCopy : projectsSection.internalOnlyCopy}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-outline-variant/10 bg-surface-card p-5 text-start sm:p-7 lg:p-8">
              <h3 className="font-headline text-[1.8rem] font-bold leading-tight tracking-[-0.02em] text-on-surface sm:text-[2.2rem]">
                {projectData.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-on-muted sm:text-base sm:leading-8">
                {projectDescription}
              </p>

              <div className="mt-7 space-y-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                    {projectsSection.problem}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-on-muted">
                    {projectData.problem}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                    {projectsSection.solution}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-on-muted">
                    {projectData.solution}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                    {projectsSection.impact}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-on-muted">
                    {projectData.impact}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                  {projectsSection.technologies}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {projectTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-outline-variant/15 bg-surface-high/80 px-3 py-1.5 text-[11px] font-semibold text-on-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {hasExternalActions ? (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  {externalActions.map((action) => {
                    const hasPrimaryAction = externalActions.some((item) => item.key === 'live-demo')
                    const variant = action.key === 'github' && hasPrimaryAction ? 'ghost' : undefined

                    return (
                      <ButtonLink
                        key={action.key}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant={variant}
                        className="w-full sm:flex-1"
                      >
                        {action.label}
                      </ButtonLink>
                    )
                  })}
                </div>
              ) : (
                <div className="mt-8 rounded-[1.35rem] border border-outline-variant/12 bg-surface-high/70 p-4 sm:p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                    {projectsSection.internalOnlyLabel}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-on-muted">
                    {projectsSection.internalOnlyCopy}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
