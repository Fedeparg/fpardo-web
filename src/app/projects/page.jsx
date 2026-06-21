import ProjectsView from '../../views/ProjectsView.jsx'

const DESCRIPTION =
  'Projects by Federico Pardo, including MoviSound, a multimodal AI platform built during his PhD in Computer Science and AI.'

export const metadata = {
  title: 'Projects',
  description: DESCRIPTION,
  openGraph: { title: 'Projects · Federico Pardo', description: DESCRIPTION },
}

export default function ProjectsPage() {
  return <ProjectsView />
}
