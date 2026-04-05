import { Link } from 'react-router-dom'
import useAppSettings from '../context/useAppSettings'

function ProjectCard({ title, description, image, category, stack, route }) {
  const { isRTL, content } = useAppSettings()
  const iconPosition = isRTL ? 'left-4' : 'right-4'
  const projectsSection = content?.sections?.projects || {}

  return (
    <Link
      to={route}
      className="dashboard-card ghost-border group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_20px_48px_rgba(0,0,0,0.22)]"
    >
      <div className="relative h-56 overflow-hidden bg-surface-high sm:h-60 lg:h-64">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/15 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 to-transparent opacity-70" />
        <div className="absolute inset-x-0 bottom-0 translate-y-4 px-4 pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:px-6 sm:pb-6">
          <div className="rounded-2xl border border-white/10 bg-surface/75 px-4 py-3 text-start backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{projectsSection.cardHintTitle}</p>
            <p className="mt-2 text-sm leading-6 text-on-surface">{projectsSection.cardHintCopy}</p>
          </div>
        </div>
        <div className={`absolute top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-primary backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-surface-top/90 sm:top-4 ${iconPosition}`}>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
      <div className="p-5 text-start sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary sm:tracking-[0.18em]">{category}</span>
          <span className="rounded-md bg-secondary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-secondary sm:tracking-[0.18em]">{stack}</span>
        </div>
        <h3 className="font-headline text-[1.2rem] font-bold leading-7 text-on-surface transition-colors duration-300 group-hover:text-primary sm:text-[1.32rem] sm:leading-8">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-on-muted">{description}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
