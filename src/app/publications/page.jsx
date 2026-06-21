import Publications from '../../components/Publications.jsx'

const DESCRIPTION =
  'Peer-reviewed research publications by Federico Pardo on AI, multimodal systems, and music information retrieval.'

export const metadata = {
  title: 'Publications',
  description: DESCRIPTION,
  openGraph: { title: 'Publications · Federico Pardo', description: DESCRIPTION },
}

export default function PublicationsPage() {
  return (
    <div className="page">
      <Publications />
    </div>
  )
}
