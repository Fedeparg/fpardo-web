import Link from 'next/link'
import YouTube from './YouTube.jsx'
import Figure from './Figure.jsx'

// Internal links go through next/link for client-side navigation; external ones
// open in a new tab.
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

// A wide table has to scroll inside its own box, otherwise it makes the whole
// page scroll sideways on a phone.
function Table({ children, ...rest }) {
  return (
    <div className="table-wrapper">
      <table {...rest}>{children}</table>
    </div>
  )
}

export const mdxComponents = { a: Anchor, table: Table, YouTube, Figure }
