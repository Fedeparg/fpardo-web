const SITE_URL = 'https://fpardo.net'
const SITE_NAME = 'Federico Pardo'
const DEFAULT_TITLE = 'Federico Pardo · AI Engineer'
const OG_IMAGE = '/opengraph-image'

// Next replaces the whole openGraph/twitter object when a page defines one, so
// page metadata must restate every field it needs (image, siteName, type).
// This helper keeps that consistent across routes.
export function pageMetadata({ title, description, path, type = 'website' }) {
  const ogTitle = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
  }
}

export const SEO = { SITE_URL, SITE_NAME, DEFAULT_TITLE, OG_IMAGE }
