import { FaLinkedin } from 'react-icons/fa'
import { SiGithub, SiX, SiYoutube, SiGooglescholar } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

export const EMAIL = 'federico.pardog@gmail.com'

export const SCHOLAR_URL =
  'https://scholar.google.es/citations?user=Jj6W9GMAAAAJ&hl=es&oi=ao'

// Single source of truth for every profile link on the site. The JSON-LD in
// app/layout.jsx and the lists in the UI all read from here, so a handle that
// changes only has to change once. `handle` is what the contact list shows
// next to the network name.
export const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'federico-pardog',
    href: 'https://linkedin.com/in/federico-pardog',
    icon: FaLinkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'fedeparg',
    href: 'https://github.com/fedeparg',
    icon: SiGithub,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@fedepardog',
    href: 'https://www.youtube.com/@fedepardog',
    icon: SiYoutube,
  },
  {
    id: 'x',
    label: 'X',
    handle: '@fedepardog',
    href: 'https://x.com/fedepardog',
    icon: SiX,
  },
  {
    id: 'scholar',
    label: 'Google Scholar',
    handle: 'Federico Pardo',
    href: SCHOLAR_URL,
    icon: SiGooglescholar,
  },
]

export const emailLink = {
  id: 'email',
  label: 'Email',
  handle: EMAIL,
  href: `mailto:${EMAIL}`,
  icon: MdEmail,
}
