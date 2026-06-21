import '../index.css'
import Providers from './providers.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const SITE_URL = 'https://fpardo.net'
const DESCRIPTION =
  'Federico Pardo - AI Engineer with a PhD specializing in Generative AI, Multimodal Systems, and Scalable Infrastructure'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Federico Pardo · AI Engineer',
    template: '%s · Federico Pardo',
  },
  description: DESCRIPTION,
  authors: [{ name: 'Federico Pardo' }],
  icons: {
    icon: '/assets/favicon.png',
    apple: '/assets/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Federico Pardo',
    title: 'Federico Pardo · AI Engineer',
    description: DESCRIPTION,
    url: SITE_URL,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
