import { useState } from 'react'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

function ProjectsSection() {
  const { content } = useAppSettings()
  const [selectedProject, setSelectedProject] = useState(null)
  const projectsSection = content?.sections?.projects || {}
  const projects = Array.isArray(content?.projects) ? content.projects : []

  return (
    <>
      <section id="projects" className="bg-surface px-4 py-28 sm:px-6 lg:px-8">
        <Container>
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow={projectsSection.eyebrow}
                title={projectsSection.title}
                description={projectsSection.description}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <a href={content?.contactData?.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-on-muted transition-colors duration-300 hover:text-primary">
                {projectsSection.github}
                <span aria-hidden="true">?</span>
              </a>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title || index} delay={index * 0.08}>
                <ProjectCard {...project} onOpen={() => setSelectedProject(project)} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </>
  )
}

export default ProjectsSection
