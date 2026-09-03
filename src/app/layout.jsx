import { Archivo, Public_Sans, IBM_Plex_Mono } from 'next/font/google'
import '../index.css'
import Providers from './providers.jsx'

// next/font descarga las fuentes en build y las sirve desde nuestro propio
// dominio, así que no hay petición a Google en runtime ni salto de layout.
// Archivo y Public Sans son variables: sin `weight` se carga todo el rango.
const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-public-sans',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
})

const fontVariables = `${archivo.variable} ${publicSans.variable} ${plexMono.variable}`
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
    <html lang="en" className={fontVariables}>
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
