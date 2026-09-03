import Hero from '../components/Hero.jsx'
import SelectedWork from '../components/SelectedWork.jsx'
import LatestWriting from '../components/LatestWriting.jsx'
import Contact from '../components/Contact.jsx'
import { getBlogPosts } from '../lib/posts.js'

// The landing shows the two most recent posts and links to the rest.
const LATEST_POSTS = 2

export const metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <LatestWriting posts={getBlogPosts().slice(0, LATEST_POSTS)} />
      <Contact />
    </>
  )
}
