import { useMemo, useState } from 'react'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FashionGalleryPanel from '../components/FashionGalleryPanel'
import useAppSettings from '../context/useAppSettings'

function ProjectsSection() {
  const { content } = useAppSettings()
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState('all')
  const projectsSection = content?.sections?.projects || {}
  const projects = Array.isArray(content?.projects) ? content.projects : []

  const generalProjects = useMemo(
    () => projects.filter((project) => project.route !== '/projects/fashion-gallery'),
    [projects],
  )

  const tabs = [
    { id: 'all', label: projectsSection.allTab || 'All Work' },
    { id: 'fashion-gallery', label: projectsSection.fashionTab || 'Fashion Gallery' },
  ]

  const visibleProjects = activeTab === 'all' ? projects : generalProjects.filter((project) => project.route.includes('fashion'))

  return (
    <>
      <section id="projects" className="bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Container>
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between lg:mb-16">
            <Reveal>
              <SectionHeading
                eyebrow={projectsSection.eyebrow}
                title={projectsSection.title}
                description={projectsSection.description}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <a href={content?.contactData?.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start text-sm font-medium text-on-muted transition-colors duration-300 hover:text-primary">
                {projectsSection.github}
                <span aria-hidden="true">?</span>
              </a>
            </Reveal>
          </div>

          <Reveal>
            <div className="mb-8 flex flex-wrap gap-3 sm:mb-10">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex min-h-11 items-center rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-surface shadow-[0_14px_32px_rgba(var(--color-primary-container),0.26)]'
                        : 'ghost-border bg-surface-card text-on-muted hover:border-primary/25 hover:text-primary'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </Reveal>

          {activeTab === 'fashion-gallery' ? (
            <FashionGalleryPanel />
          ) : (
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
              {visibleProjects.map((project, index) => (
                <Reveal key={project.title || index} delay={index * 0.08}>
                  <ProjectCard {...project} onOpen={() => setSelectedProject(project)} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </>
  )
}

export default ProjectsSection
