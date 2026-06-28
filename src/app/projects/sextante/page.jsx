import SextanteProjectView from '../../../views/SextanteProjectView.jsx'
import { pageMetadata } from '../../../lib/seo.js'

const DESCRIPTION =
  'Sextante, a serious personal-finance product for Spain: FIRE and tax calculators, an aggregated portfolio with live quotes, and a remote MCP server with OAuth 2.1 so you can connect your own AI assistant. Built by Federico Pardo.'

export const metadata = pageMetadata({
  title: 'Sextante',
  description: DESCRIPTION,
  path: '/projects/sextante',
  type: 'article',
})

export default function SextanteProjectPage() {
  return <SextanteProjectView />
}
