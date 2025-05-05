import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-link">Accueil</NavLink>
        <NavLink to="/projets" className="nav-link">Projets</NavLink>
        <NavLink to="/competences" className="nav-link">Compétences</NavLink>
        <NavLink to="/a-propos" className="nav-link">À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header