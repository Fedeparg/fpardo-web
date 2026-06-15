import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PublicationsPage from './pages/PublicationsPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import PhdProjectPage from './pages/PhdProjectPage.jsx'

function App() {
  return (
    <>
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
