import { useEffect } from 'react'
import ButtonLink from './ButtonLink'
import useAppSettings from '../context/useAppSettings'

function ProjectModal({ project, onClose }) {
  const { content, isRTL } = useAppSettings()
  const closeSide = isRTL ? 'left-4' : 'right-4'
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
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-surface/70 p-4 backdrop-blur-md" onClick={onClose}>
      <div
        className="dashboard-card ghost-border relative w-full max-w-5xl overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.24)] animate-[fadeIn_.28s_ease]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className={`absolute top-4 z-10 flex h-10 min-w-10 items-center justify-center rounded-full border border-outline-variant/15 bg-surface/80 px-4 text-sm font-bold text-on-surface backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:text-primary ${closeSide}`}
          aria-label={projectModal.close || 'Close'}
        >
          {backText}
        </button>

        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[280px] bg-surface-high lg:min-h-[520px]">
            <img src={projectData.image} alt={projectData.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-70" />
          </div>

          <div className="p-8 text-start sm:p-10">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                {projectData.category}
              </span>
              <span className="rounded-md bg-secondary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">
                {projectData.stack}
              </span>
            </div>

            <h3 className="mt-6 font-headline text-3xl font-bold tracking-[-0.02em] text-on-surface">
              {projectData.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-on-muted">
              {projectData.description}
            </p>

            <div className="mt-8 rounded-[1.25rem] bg-surface-high/80 p-5 ghost-border">
              <p className="font-label text-xs uppercase tracking-[0.24em] text-primary">
                {projectModal.preview || 'Preview'}
              </p>
              <p className="mt-3 text-sm leading-7 text-on-muted">
                {projectModal.action || ''}
              </p>
            </div>

            <div className="mt-8">
              <p className="font-label text-xs uppercase tracking-[0.24em] text-primary">
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

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="https://wa.me/201027613133" target="_blank" rel="noreferrer">
                {content?.sections?.cta?.action || 'Contact'}
              </ButtonLink>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-xl bg-surface-high px-6 py-3 font-headline text-sm font-bold text-on-surface transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
              >
                {projectModal.close || 'Close'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
