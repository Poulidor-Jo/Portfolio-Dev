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
      { name: 'Vite', icon: faBolt, level: 65 },
      { name: 'VS Code', icon: faCode, level: 90 }
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
      { name: 'Trello', icon: faListCheck, level: 75 }
    ]
  }

  return (
    <div className="skills">
      <h1>Mes Compétences</h1>
      <div className="skills-container">
        <div className="skills-category">
          <h2>Frontend</h2>
          <div className="skills-logos">
            {skills.frontend.map(skill => (
              <div key={skill.name} className="skill-item">
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="skill-icon"
                  data-icon={skill.name.toLowerCase()}
                />
                <span className="skill-name">{skill.name}</span>
                <div className="skill-progress">
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
        </div>

        <div className="skills-category">
          <h2>Backend</h2>
          <div className="skills-logos">
            {skills.backend.map(skill => (
              <div key={skill.name} className="skill-item">
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="skill-icon"
                  data-icon={skill.name.toLowerCase()}
                />
                <span className="skill-name">{skill.name}</span>
                <div className="skill-progress">
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
        </div>

        <div className="skills-category">
          <h2>Outils</h2>
          <div className="skills-logos">
            {skills.tools.map(skill => (
              <div key={skill.name} className="skill-item">
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="skill-icon"
                  data-icon={skill.name.toLowerCase()}
                />
                <span className="skill-name">{skill.name}</span>
                <div className="skill-progress">
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
        </div>
      </div>
    </div>
  )
}

export default Skills