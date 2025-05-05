import './Skills.scss'

function Skills() {
  const skillCategories = [
    {
      title: "Développement Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 85 },
        { name: "Sass", level: 80 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Développement Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "API REST", level: 80 }
      ]
    },
    {
      title: "Outils & Méthodes",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 },
        { name: "Méthodes Agiles", level: 75 }
      ]
    }
  ]

  return (
    <div className="skills">
      <h1>Mes Compétences</h1>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <section key={index} className="skills-section">
            <h2>{category.title}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-bar">
                  <div className="skill-bar__info">
                    <span className="skill-bar__name">{skill.name}</span>
                    <span className="skill-bar__percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar__progress">
                    <div 
                      className="skill-bar__progress-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Skills