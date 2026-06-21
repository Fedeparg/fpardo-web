import ProjectsView from '../../views/ProjectsView.jsx'
import { pageMetadata } from '../../lib/seo.js'

const DESCRIPTION =
  'Projects by Federico Pardo, including MoviSound, a multimodal AI platform built during his PhD in Computer Science and AI.'

export const metadata = pageMetadata({ title: 'Projects', description: DESCRIPTION, path: '/projects' })

export default function ProjectsPage() {
  return <ProjectsView />
}
