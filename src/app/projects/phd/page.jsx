import PhdProjectView from '../../../views/PhdProjectView.jsx'
import { pageMetadata } from '../../../lib/seo.js'

const DESCRIPTION =
  'MoviSound, a multimodal AI platform for emotion-aware music recommendation built during Federico Pardo PhD in Computer Science and AI.'

export const metadata = pageMetadata({
  title: 'MoviSound',
  description: DESCRIPTION,
  path: '/projects/phd',
  type: 'article',
})

export default function PhdProjectPage() {
  return <PhdProjectView />
}
