import './Footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__text">
          <p>Portfolio développé avec React & Vite</p>
        </div>
        <div className="footer__legal">
          <p>© {currentYear} - Tous droits réservés</p>
          <p>Développeur Web Full Stack</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer