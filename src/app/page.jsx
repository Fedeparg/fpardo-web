import Hero from '../components/Hero.jsx'
import Contact from '../components/Contact.jsx'

export const metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Contact />
    </>
  )
}
