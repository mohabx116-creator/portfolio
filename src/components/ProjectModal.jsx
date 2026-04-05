import { useEffect } from 'react'
import ButtonLink from './ButtonLink'
import useAppSettings from '../context/useAppSettings'

function ProjectModal({ project, onClose }) {
  const { content, isRTL } = useAppSettings()
  const closeSide = isRTL ? 'left-3 sm:left-4' : 'right-3 sm:right-4'
  const projectData = project || {}
  const projectTags = Array.isArray(projectData.tags) ? projectData.tags : []
  const projectModal = content?.sections?.projects?.modal || {}
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
          className="dashboard-card ghost-border relative max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-y-auto rounded-[1.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.24)] animate-[fadeIn_.28s_ease] sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2rem]"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className={`absolute top-3 z-10 flex h-10 min-w-10 items-center justify-center rounded-full border border-outline-variant/15 bg-surface/85 px-3 text-sm font-bold text-on-surface backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:text-primary sm:top-4 sm:px-4 ${closeSide}`}
            aria-label={projectModal.close || 'Close'}
          >
            {backText}
          </button>

          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[220px] bg-surface-high sm:min-h-[280px] lg:sticky lg:top-0 lg:min-h-full">
              <img src={projectData.image} alt={projectData.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-70" />
            </div>

            <div className="p-5 pt-14 text-start sm:p-8 sm:pt-16 lg:p-10 lg:pt-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary sm:tracking-[0.18em]">
                  {projectData.category}
                </span>
                <span className="rounded-md bg-secondary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-secondary sm:tracking-[0.18em]">
                  {projectData.stack}
                </span>
              </div>

              <h3 className="mt-5 font-headline text-[1.8rem] font-bold tracking-[-0.02em] leading-tight text-on-surface sm:mt-6 sm:text-[2.2rem]">
                {projectData.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-on-muted sm:text-base sm:leading-8">
                {projectData.description}
              </p>

              <div className="mt-7 rounded-[1.25rem] bg-surface-high/80 p-5 ghost-border sm:mt-8">
                <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">
                  {projectModal.preview || 'Preview'}
                </p>
                <p className="mt-3 text-sm leading-7 text-on-muted">
                  {projectModal.action || ''}
                </p>
              </div>

              <div className="mt-7 sm:mt-8">
                <p className="font-label text-xs uppercase tracking-[0.22em] text-primary">
                  {projectModal.tags || 'Tags'}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {projectTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-outline-variant/15 bg-surface-high px-4 py-2 text-xs font-semibold text-on-surface">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <ButtonLink href="https://wa.me/201027613133" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  {content?.sections?.cta?.action || 'Contact'}
                </ButtonLink>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-surface-high px-6 py-3 font-headline text-sm font-bold text-on-surface transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  {projectModal.close || 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
