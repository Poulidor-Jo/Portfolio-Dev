import './About.scss'
import profileImage from '../../assets/images/BFE76322-2A14-4C71-8CBE-39C6FD800BB0.jpeg'

function About() {
  return (
    <div className="about">
      <h1>À Propos</h1>
      
      <div className="about__content">
        <div className="about__image">
          <img src={profileImage} alt="Mon portrait" />
        </div>
        
        <div className="about__text">
          <section className="about__section">
            <h2>Qui suis-je ?</h2>
            <p>
              Passionné par le développement web, je crée des applications modernes
              et intuitives. Mon parcours m'a permis d'acquérir une expertise solide
              en développement frontend et backend.
            </p>
          </section>

          <section className="about__section">
            <h2>Mon Approche</h2>
            <p>
              Je m'efforce de produire un code propre et maintenable, en suivant
              les meilleures pratiques du développement web. La qualité et
              l'expérience utilisateur sont au cœur de mes préoccupations.
            </p>
          </section>

          <section className="about__section">
            <h2>Objectifs</h2>
            <p>
              Mon objectif est de continuer à évoluer dans le domaine du
              développement web en relevant de nouveaux défis techniques et en
              restant à jour avec les dernières technologies.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About