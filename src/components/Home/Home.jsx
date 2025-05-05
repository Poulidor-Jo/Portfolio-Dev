import './Home.scss'
import profileImage from '../../assets/images/BFE76322-2A14-4C71-8CBE-39C6FD800BB0.jpeg'

function Home() {
  const skills = {
    frontend: ['JavaScript', 'HTML', 'CSS', 'Sass', 'React', 'Vite', 'VS Code'],
    backend: ['Node', 'Express', 'MongoDB'],
    tools: ['Git', 'GitHub', 'Figma', 'Trello']
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
              <div key={skill} className="skill-item">
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2>Backend</h2>
          <div className="skills-logos">
            {skills.backend.map(skill => (
              <div key={skill} className="skill-item">
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2>Outils</h2>
          <div className="skills-logos">
            {skills.tools.map(skill => (
              <div key={skill} className="skill-item">
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home