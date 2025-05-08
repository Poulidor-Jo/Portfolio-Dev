// Import des assets
import profileImage from '../../assets/images/BFE76322-2A14-4C71-8CBE-39C6FD800BB0.jpeg'
import ParticlesBackground from './ParticlesBackground'

// Import des styles
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <ParticlesBackground />
      <div className="content-container">
        <section className="hero-section">
          <div className="hero-section__image">
            <img src={profileImage} alt="Mon portrait" />
          </div>
          <div className="hero-section__content">
            <h1>Bienvenue sur mon portfolio</h1>
            <p>
              Développeur web passionné, je crée des applications web modernes et 
              performantes. Spécialisé en React et Node.js, je mets mes compétences
              au service de projets innovants.
            </p>
          </div>
        </section>

        <section className="about-sections">
          <div className="about-section">
            <h2>Qui suis-je ?</h2>
            <p>
              Passionné par le développement web, je créer des applications modernes
              et intuitives. Mon parcours m'a permis d'acquérir une expertise solide
              en développement frontend et backend.
            </p>
          </div>

          <div className="about-section">
            <h2>Mon Approche</h2>
            <p>
              Je m'efforce de produire un code propre et maintenable, en suivant
              les meilleures pratiques du développement web. La qualité et
              l'expérience utilisateur sont au cœur de mes préoccupations.
            </p>
          </div>

          <div className="about-section">
            <h2>Objectifs</h2>
            <p>
              Mon objectif est de continuer à évoluer dans le domaine du
              développement web en relevant de nouveaux défis techniques et en
              restant à jour avec les dernières technologies.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home