import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PublicationsPage from './pages/PublicationsPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import PhdProjectPage from './pages/projects/PhdProjectPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/phd" element={<PhdProjectPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
