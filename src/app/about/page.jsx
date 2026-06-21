import About from '../../components/About.jsx'
import Experience from '../../components/Experience.jsx'
import Skills from '../../components/Skills.jsx'
import { pageMetadata } from '../../lib/seo.js'

const DESCRIPTION =
  'Federico Pardo, AI Engineer and PhD in Computer Science, including his background in generative AI and multimodal systems, professional experience, and technical skills.'

export const metadata = pageMetadata({ title: 'About', description: DESCRIPTION, path: '/about' })

export default function AboutPage() {
  return (
    <div className="page">
      <About />
      <Experience />
      <Skills />
    </div>
  )
}
