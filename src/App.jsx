import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <p style={{ padding: '4rem 2rem 6rem', color: 'var(--text-muted)' }}>Migración en progreso…</p>
    </>
  )
}

export default App
