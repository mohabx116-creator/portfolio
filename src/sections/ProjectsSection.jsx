import { useState } from 'react'
import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import ProjectModal from '../components/ProjectModal'
import ProjectsBackdrop from '../components/ProjectsBackdrop'
import ProjectPreviewCard from '../components/ProjectPreviewCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

function ProjectsSection() {
  const { content } = useAppSettings()
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const projectsSection = content?.sections?.projects || {}
  const upworkUrl = content?.contactData?.upwork
  const projects = Array.isArray(content?.projects) ? content.projects : []
  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.filter === activeFilter)

  const filters = [
    { id: 'all', label: projectsSection.filters?.all || 'All' },
    { id: 'frontend', label: projectsSection.filters?.frontend || 'Frontend' },
    { id: 'fullstack', label: projectsSection.filters?.fullstack || 'Full-Stack' },
    { id: 'tools', label: projectsSection.filters?.tools || 'Tools' },
  ]

  return (
    <section id="projects" className="relative overflow-hidden bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <ProjectsBackdrop />
      <Container className="relative z-10">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between lg:mb-16">
          <Reveal>
            <SectionHeading eyebrow={projectsSection.eyebrow} title={projectsSection.title} description={projectsSection.description} />
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={content?.contactData?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-on-surface/72 transition-colors duration-300 hover:text-primary"
            >
              {projectsSection.github}
              <span aria-hidden="true">-&gt;</span>
            </a>
          </Reveal>
        </div>

        <Reveal>
          <div className="mb-8 flex flex-wrap gap-3 sm:mb-10">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`inline-flex min-h-11 items-center rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-white shadow-[0_14px_32px_rgba(var(--color-primary-container),0.26)]'
                      : 'ghost-border bg-surface-card text-on-surface/78 hover:border-primary/25 hover:text-primary'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {visibleProjects.map((project, index) => (
            <Reveal key={`${project.title}-${activeFilter}-${index}`} delay={index * 0.06}>
              <ProjectPreviewCard project={project} onOpen={setSelectedProject} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-12 rounded-[2rem] border border-outline-variant/15 bg-surface-card/75 p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:mt-14 sm:p-8 lg:mt-16 lg:p-10">
            <p className="section-kicker">{projectsSection.eyebrow}</p>
            <h3 className="headline-gradient mt-3 font-headline text-[1.55rem] font-bold tracking-[-0.02em] sm:text-[2rem]">
              {projectsSection.ctaTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-on-muted sm:text-base sm:leading-8">
              {projectsSection.ctaCopy}
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonLink
                href={upworkUrl || '#contact'}
                target={upworkUrl ? '_blank' : undefined}
                rel={upworkUrl ? 'noopener noreferrer' : undefined}
                className="w-full sm:w-auto sm:min-w-[220px]"
              >
                {projectsSection.ctaAction}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>

      {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  )
}

export default ProjectsSection
