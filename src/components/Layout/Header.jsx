import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import './Header.scss'

function Header() {
  return (
    <header className="header" role="banner">
      <div className="header__container">
        <div className="header__logo">
          <a href="/" aria-label="Retour à l'accueil">
            <img src={logo} alt="Logo de Jordan Moret - Développeur Web" />
          </a>
        </div>
        <nav className="nav" role="navigation" aria-label="Navigation principale">
          <NavLink to="/" className="nav-link" aria-label="Accueil">Accueil</NavLink>
          <NavLink to="/projets" className="nav-link" aria-label="Mes projets">Projets</NavLink>
          <NavLink to="/competences" className="nav-link" aria-label="Mes compétences">Compétences</NavLink>
          <NavLink to="/a-propos" className="nav-link" aria-label="À propos de moi">À propos</NavLink>
          <NavLink to="/contact" className="nav-link" aria-label="Me contacter">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header