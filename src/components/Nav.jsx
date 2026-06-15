import { NavLink, Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" className="logo">FP</Link>
        <div className="nav-links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/publications">Publications</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
