import './Projects.scss'
import sophieBluelImage from '../../assets/images/SOPHIE-BLUEL.png'
import kasaImage from '../../assets/images/Kasa.png'
import grimoireImage from '../../assets/images/Mon-Vieux-Grimoire.webp'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sophie Bluel",
      image: sophieBluelImage,
      description: "Portfolio d'architecte d'intérieur avec interface d'administration. Développement front-end en JavaScript vanilla avec gestion authentification et manipulation du DOM.",
      github: "https://github.com/Poulidor-Jo/Sophie-Bluel"
    },
    {
      id: 2,
      title: "Kasa",
      image: kasaImage,
      description: "Application de location immobilière développée en React. Mise en place de composants réutilisables, routing avec React Router et animations CSS.",
      github: "https://github.com/Poulidor-Jo/Kasa"
    },
    {
      id: 3,
      title: "Mon Vieux Grimoire",
      image: grimoireImage,
      description: "Site de notation de livres avec backend Node.js/Express et MongoDB. API REST sécurisée, authentification JWT et gestion des fichiers.",
      github: "https://github.com/Poulidor-Jo/Mon-Vieux-Grimoire"
    }
  ]

  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.id} className="project-card">
            <div className="project-card__image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card__content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                Voir sur GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects