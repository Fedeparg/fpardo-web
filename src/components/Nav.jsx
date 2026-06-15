import { useState, useEffect } from 'react'

function Nav() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    function onScroll() {
      const scrollY = window.pageYOffset

      if (scrollY < sections[0].offsetTop - 100) {
        setActiveSection('')
        return
      }

      const atBottom = window.innerHeight + scrollY >= document.body.scrollHeight - 10
      if (atBottom) {
        setActiveSection(sections[sections.length - 1].getAttribute('id'))
        return
      }

      for (const section of sections) {
        const top = section.offsetTop - 100

        if (scrollY >= top && scrollY < top + section.offsetHeight) {
          setActiveSection(section.getAttribute('id'))
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav className="nav">
      <div className="container">
        <a href="#" className="logo">FP</a>
        <div className="nav-links">
          <a href="#about"        className={activeSection === 'about'        ? 'active' : ''}>About</a>
          <a href="#experience"   className={activeSection === 'experience'   ? 'active' : ''}>Experience</a>
          <a href="#publications" className={activeSection === 'publications' ? 'active' : ''}>Publications</a>
          <a href="#contact"      className={activeSection === 'contact'      ? 'active' : ''}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
