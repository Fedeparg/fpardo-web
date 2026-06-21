import PhdProjectView from '../../../views/PhdProjectView.jsx'

const DESCRIPTION =
  'MoviSound, a multimodal AI platform for emotion-aware music recommendation built during Federico Pardo PhD in Computer Science and AI.'

export const metadata = {
  title: 'MoviSound',
  description: DESCRIPTION,
  openGraph: {
    type: 'article',
    title: 'MoviSound · Federico Pardo',
    description: DESCRIPTION,
  },
}

export default function PhdProjectPage() {
  return <PhdProjectView />
}
