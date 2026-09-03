import Link from 'next/link'
import YouTube from './YouTube.jsx'
import Figure from './Figure.jsx'

// Internal links go through next/link for client-side navigation; external ones
// open in a new tab, matching what the old Notion renderer did.
function Anchor({ href = '', children, ...rest }) {
  if (href.startsWith('/') || href.startsWith('#')) {
    return <Link href={href} {...rest}>{children}</Link>
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}

export const mdxComponents = { a: Anchor, YouTube, Figure }
