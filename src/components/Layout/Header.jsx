import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Logo professionnel" />
        </div>
        <nav className="nav">
          <NavLink to="/" className="nav-link">Accueil</NavLink>
          <NavLink to="/projets" className="nav-link">Projets</NavLink>
          <NavLink to="/competences" className="nav-link">Compétences</NavLink>
          <NavLink to="/a-propos" className="nav-link">À propos</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header