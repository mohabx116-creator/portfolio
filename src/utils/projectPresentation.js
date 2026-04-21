const EXTERNAL_URL_PATTERN = /^https?:\/\//i
const GITHUB_REPO_PATTERN = /^https?:\/\/github\.com\/[^/]+\/[^/]+\/?$/i

export function getProjectThumbnail(project) {
  return project?.thumbnail || project?.image || ''
}

export function getProjectShortDescription(project) {
  return project?.shortDescription || project?.description || ''
}

export function getProjectFullDescription(project) {
  return project?.fullDescription || getProjectShortDescription(project)
}

export function getProjectTechStack(project) {
  if (Array.isArray(project?.techStack) && project.techStack.length) {
    return project.techStack
  }

  return Array.isArray(project?.technologies) ? project.technologies : []
}

export function getProjectTypeLabel(project) {
  return project?.projectTypeLabel || project?.category || ''
}

export function getProjectShortLabel(project) {
  return project?.shortLabel || project?.stack || project?.category || ''
}

export function getProjectPrimaryLabel(project, labels = {}) {
  if (project?.detailLabel) {
    return project.detailLabel
  }

  if (project?.projectType === 'case-study') {
    return labels.viewCaseStudyLabel || 'View Case Study'
  }

  return labels.viewDetailsLabel || 'View Project'
}

export function getProjectLiveDemo(project) {
  const value = project?.liveDemo || project?.liveUrl
  return typeof value === 'string' && EXTERNAL_URL_PATTERN.test(value) ? value : ''
}

export function getProjectGitHub(project) {
  const value = project?.github || project?.githubUrl

  if (typeof value !== 'string' || !EXTERNAL_URL_PATTERN.test(value)) {
    return ''
  }

  return GITHUB_REPO_PATTERN.test(value) ? value : ''
}

export function getProjectExternalActions(project, labels = {}) {
  const actions = []
  const liveDemo = getProjectLiveDemo(project)
  const github = getProjectGitHub(project)

  if (liveDemo) {
    actions.push({
      key: 'live-demo',
      href: liveDemo,
      label: labels.liveDemo || 'Live Demo',
    })
  }

  if (github) {
    actions.push({
      key: 'github',
      href: github,
      label: labels.githubCta || 'GitHub',
    })
  }

  return actions
}
