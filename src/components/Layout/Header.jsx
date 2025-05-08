import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import './Header.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header" role="banner">
      <div className="header__container">
        <div className="header__logo">
          <a href="/" aria-label="Retour à l'accueil">
            <img src={logo} alt="Logo de Jordan Moret - Développeur Web" />
          </a>
        </div>
        
        <button 
          className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`} role="navigation" aria-label="Navigation principale">
          <NavLink to="/" className="nav-link" aria-label="Accueil" onClick={closeMenu}>Accueil</NavLink>
          <NavLink to="/projets" className="nav-link" aria-label="Mes projets" onClick={closeMenu}>Projets</NavLink>
          <NavLink to="/competences" className="nav-link" aria-label="Mes compétences" onClick={closeMenu}>Compétences</NavLink>
          <NavLink to="/contact" className="nav-link" aria-label="Me contacter" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header