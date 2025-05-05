import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faJs, faHtml5, faCss3Alt, faSass, faReact, 
  faBootstrap, faNodeJs, faGithub, faGitAlt, faFigma 
} from '@fortawesome/free-brands-svg-icons'
import { faCode, faServer } from '@fortawesome/free-solid-svg-icons'
import './Home.scss'
import profileImage from '../../assets/images/BFE76322-2A14-4C71-8CBE-39C6FD800BB0.jpeg'

function Home() {
  const skills = {
    frontend: [
      { name: 'JavaScript', icon: faJs },
      { name: 'HTML', icon: faHtml5 },
      { name: 'CSS', icon: faCss3Alt },
      { name: 'Sass', icon: faSass },
      { name: 'React', icon: faReact },
      { name: 'Bootstrap', icon: faBootstrap },
      { name: 'Vite', icon: faCode },
      { name: 'VS Code', icon: faCode }
    ],
    backend: [
      { name: 'Node', icon: faNodeJs },
      { name: 'Express', icon: faServer },
      { name: 'MongoDB', icon: faServer }
    ],
    tools: [
      { name: 'Git', icon: faGitAlt },
      { name: 'GitHub', icon: faGithub },
      { name: 'Figma', icon: faFigma },
      { name: 'Trello', icon: faCode }
    ]
  }

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

      <section className="skills-grid">
        <div className="skills-category">
          <h2>Frontend</h2>
          <div className="skills-logos">
            {skills.frontend.map(skill => (
              <div key={skill.name} className="skill-item">
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="skill-icon"
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2>Backend</h2>
          <div className="skills-logos">
            {skills.backend.map(skill => (
              <div key={skill.name} className="skill-item">
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="skill-icon"
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2>Outils</h2>
          <div className="skills-logos">
            {skills.tools.map(skill => (
              <div key={skill.name} className="skill-item">
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="skill-icon"
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home