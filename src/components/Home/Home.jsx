// Import des assets
import profileImage from '../../assets/images/BFE76322-2A14-4C71-8CBE-39C6FD800BB0.jpeg'

// Import des styles
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <section className="about-card">
        <div className="about-card__image">
          <img src={profileImage} alt="Mon portrait" />
        </div>
        <div className="about-card__content">
          <h1>Bienvenue sur mon portfolio</h1>
          <p>
            Développeur web passionné, je crée des applications web modernes et 
            performantes. Spécialisé en React et Node.js, je mets mes compétences
            au service de projets innovants.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home