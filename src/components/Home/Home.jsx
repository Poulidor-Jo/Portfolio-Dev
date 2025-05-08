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

        <section className="career-path">
          <h2>Mon Parcours</h2>
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-bubble">
                <div className="timeline-content">
                  <h3>Apprenti</h3>
                  <p className="company">Mr.Bricolage Ceret</p>
                  <p className="period">Septembre 2014 - Septembre 2017</p>
                  <p className="location">Céret, Occitanie</p>
                  <div className="skills">
                    <span className="skill-tag">Formation terrain</span>
                    <span className="skill-tag">Formation pratique</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-bubble">
                <div className="timeline-content">
                  <h3>Gestionnaire rayons Plomberie-Chauffage</h3>
                  <p className="company">Mr.Bricolage Ceret</p>
                  <p className="period">Décembre 2019 - Mars 2024</p>
                  <p className="location">Céret, Occitanie</p>
                  <div className="skills">
                    <span className="skill-tag">Commerce de détail</span>
                    <span className="skill-tag">Management</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-bubble">
                <div className="timeline-content">
                  <h3>Formation Développeur Web</h3>
                  <p className="company">OpenClassrooms</p>
                  <p className="period">Novembre 2023 - Mai 2024</p>
                  <p className="location">Formation en ligne</p>
                  <div className="skills">
                    <span className="skill-tag">Développement Web</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home