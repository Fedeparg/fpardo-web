import About from '../../components/About.jsx'
import Experience from '../../components/Experience.jsx'
import Skills from '../../components/Skills.jsx'
import Education from '../../components/Education.jsx'
import { pageMetadata } from '../../lib/seo.js'

const DESCRIPTION =
  'Federico Pardo, AI Engineer and PhD in Computer Science and AI, including his professional experience, technical skills, and education.'

export const metadata = pageMetadata({ title: 'About', description: DESCRIPTION, path: '/about' })

export default function AboutPage() {
  return (
    <div className="page">
      <About />
      <Experience />
      <Skills />
      <Education />
    </div>
  )
}
