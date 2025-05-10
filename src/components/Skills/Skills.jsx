import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBootstrap,
  faCss3Alt,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import { 
  faBolt,
  faCode,
  faDatabase,
  faListCheck,
  faServer,
} from '@fortawesome/free-solid-svg-icons'

import './Skills.scss'

function Skills() {
  const skills = {
    frontend: [
      { name: 'JavaScript', icon: faJs, level: 70 },
      { name: 'HTML', icon: faHtml5, level: 80 },
      { name: 'CSS', icon: faCss3Alt, level: 80 },
      { name: 'Sass', icon: faSass, level: 70 },
      { name: 'React', icon: faReact, level: 70 },
      { name: 'Bootstrap', icon: faBootstrap, level: 75 },
      { name: 'Vite', icon: faBolt, level: 65 }
    ],
    backend: [
      { name: 'Node', icon: faNodeJs, level: 70 },
      { name: 'Express', icon: faServer, level: 70 },
      { name: 'MongoDB', icon: faDatabase, level: 65 }
    ],
    tools: [
      { name: 'Git', icon: faGit, level: 80 },
      { name: 'GitHub', icon: faGithub, level: 80 },
      { name: 'Figma', icon: faFigma, level: 70 },
      { name: 'Trello', icon: faListCheck, level: 75 },
      { name: 'VS Code', icon: faCode, level: 75 }
    ]
  }

  return (
    <div className="skills" role="main">
      <h1>Mes Compétences</h1>
      <div className="skills-container">
        <section className="skills-category" aria-labelledby="frontend-title">
          <h2 id="frontend-title">Frontend</h2>
          <div className="skills-logos" role="list">
            {skills.frontend.map(skill => (
              <div 
                key={skill.name} 
                className="skill-item"
                role="listitem"
                tabIndex="0"
                aria-label={`${skill.name}: ${skill.level}% de maîtrise`}
              >
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="skill-icon"
                  data-icon={skill.name.toLowerCase()}
                  aria-hidden="true"
                />
                <span className="skill-name">{skill.name}</span>
                <div 
                  className="skill-progress"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="skill-progress__bar">
                    <div 
                      className="skill-progress__fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="skill-progress__percentage">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-category" aria-labelledby="backend-title">
          <h2 id="backend-title">Backend</h2>
          <div className="skills-logos" role="list">
            {skills.backend.map(skill => (
              <div 
                key={skill.name} 
                className="skill-item"
                role="listitem"
                tabIndex="0"
                aria-label={`${skill.name}: ${skill.level}% de maîtrise`}
              >
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="skill-icon"
                  data-icon={skill.name.toLowerCase()}
                  aria-hidden="true"
                />
                <span className="skill-name">{skill.name}</span>
                <div 
                  className="skill-progress"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="skill-progress__bar">
                    <div 
                      className="skill-progress__fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="skill-progress__percentage">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-category" aria-labelledby="tools-title">
          <h2 id="tools-title">Outils</h2>
          <div className="skills-logos" role="list">
            {skills.tools.map(skill => (
              <div 
                key={skill.name} 
                className="skill-item"
                role="listitem"
                tabIndex="0"
                aria-label={`${skill.name}: ${skill.level}% de maîtrise`}
              >
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="skill-icon"
                  data-icon={skill.name.toLowerCase()}
                  aria-hidden="true"
                />
                <span className="skill-name">{skill.name}</span>
                <div 
                  className="skill-progress"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="skill-progress__bar">
                    <div 
                      className="skill-progress__fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="skill-progress__percentage">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Skills