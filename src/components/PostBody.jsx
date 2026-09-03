import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { mdxComponents } from './mdx/index.jsx'

// gray-matter already stripped the frontmatter in lib/posts.js, so MDXRemote
// must not try to parse it again. remark-gfm covers tables, strikethrough,
// autolinks and task lists, which plain MDX would render as literal text.
const options = { mdxOptions: { remarkPlugins: [remarkGfm] } }

export default function PostBody({ source, lang }) {
  return (
    <div className="post-content" lang={lang}>
      <MDXRemote source={source} components={mdxComponents} options={options} />
    </div>
  )
}
