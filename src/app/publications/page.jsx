import Publications from '../../components/Publications.jsx'
import { pageMetadata } from '../../lib/seo.js'

const DESCRIPTION =
  'Peer-reviewed research publications by Federico Pardo on AI, multimodal systems, and music information retrieval.'

export const metadata = pageMetadata({
  title: 'Publications',
  description: DESCRIPTION,
  path: '/publications',
})

export default function PublicationsPage() {
  return (
    <div className="page">
      <Publications />
    </div>
  )
}
