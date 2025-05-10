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
              Je me présente, je m'appelle Jordan Moret, j'ai 28 ans et je suis 
              Développeur Web. Passionné par les nouvelles technologies, j'aime créer 
              des applications web modernes et intuitives. Mon expertise en tant que developpeur 
               me permet de développer des solutions performantes et innovantes 
              pour répondre aux besoins spécifiques de chaque projet.
            </p>
          </div>
        </section>

        <section className="about-sections">
          <div className="about-section">
            <h2>Qui suis-je ?</h2>
            <p>
              Passionné par le développement web, je crée des applications modernes
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
                  <h3>Apprenti Vendeur</h3>
                  <p className="company">Mr.Bricolage Ceret</p>
                  <p className="period">Septembre 2014 - Septembre 2017</p>
                  <p className="location">Céret, Occitanie</p>
                  <p className="description">
                    Durant mon apprentissage, j'ai développé une solide base de connaissances
                    techniques dans le domaine du bricolage et de la quincaillerie. Cette 
                    expérience m'a permis d'acquérir des compétences essentielles en gestion 
                    de stocks, conseil client et travail d'équipe. J'ai appris à être méthodique,
                    à résoudre des problèmes techniques et à m'adapter aux besoins spécifiques
                    de chaque client.
                  </p>
                  <div className="skills">
                    <span className="skill-tag">Service client</span>
                    <span className="skill-tag">Gestion des stocks</span>
                    <span className="skill-tag">Conseil technique</span>
                    <span className="skill-tag">Travail d'équipe</span>
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
                  <p className="description">
                    En tant que gestionnaire de rayons, j'ai développé des compétences
                    avancées en gestion commerciale et management. J'étais responsable de
                    l'optimisation des stocks, de la négociation avec les fournisseurs,
                    et de la formation des nouveaux collaborateurs. Cette expérience m'a 
                    permis de développer un esprit analytique, des capacités de planification
                    et une expertise technique pointue dans le domaine de la plomberie et
                    du chauffage.
                  </p>
                  <div className="skills">
                    <span className="skill-tag">Management d'équipe</span>
                    <span className="skill-tag">Gestion commerciale</span>
                    <span className="skill-tag">Négociation</span>
                    <span className="skill-tag">Planification</span>
                    <span className="skill-tag">Formation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-bubble">
                <div className="timeline-content">
                  <h3>Formation Développeur Web</h3>
                  <p className="company">OpenClassrooms</p>
                  <p className="period">Novembre 2024 - Mai 2025</p>
                  <p className="location">Formation en ligne</p>
                  <p className="description">
                    Cette formation intensive m'a permis d'acquérir une expertise complète
                    en développement web moderne. À travers 6 projets professionnels, j'ai
                    maîtrisé les technologies frontend et backend essentielles. J'ai appris
                    à concevoir des applications web performantes, à gérer des API RESTful,
                    et à implémenter des fonctionnalités complexes tout en suivant les
                    meilleures pratiques du développement web.
                  </p>
                  <div className="skills">
                    <span className="skill-tag">React/Node.js</span>
                    <span className="skill-tag">JavaScript/HTML/CSS</span>
                    <span className="skill-tag">API REST</span>
                    <span className="skill-tag">Git/GitHub</span>
                    <span className="skill-tag">Méthodes Agiles</span>
                    <span className="skill-tag">MongoDB</span>
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