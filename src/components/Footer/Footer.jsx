import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <a 
            href="https://github.com/Poulidor-Jo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jordan-moret-5359b4236/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="footer__text">
          <p>Portfolio développé avec React & Vite</p>
        </div>
        <div className="footer__legal">
          <p>© {currentYear} - Tous droits réservés</p>
          <p>Développeur Web</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer