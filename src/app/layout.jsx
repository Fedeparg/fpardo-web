import '../index.css'
import Providers from './providers.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { SEO } from '../lib/seo.js'

const SITE_URL = SEO.SITE_URL
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
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Federico Pardo',
      url: SITE_URL,
      jobTitle: 'AI Engineer',
      description: DESCRIPTION,
      sameAs: [
        'https://linkedin.com/in/federico-pardog',
        'https://github.com/fedeparg',
        'https://x.com/fedepardog',
        'https://www.youtube.com/@federicopardog',
      ],
    },
    {
      '@type': 'WebSite',
      name: 'Federico Pardo',
      url: SITE_URL,
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
