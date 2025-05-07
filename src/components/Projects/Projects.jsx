import { useState } from 'react'
import './Projects.scss'
import sophieBluelImage from '../../assets/images/SOPHIE-BLUEL.png'
import kasaImage from '../../assets/images/Kasa.png'
import grimoireImage from '../../assets/images/Mon-Vieux-Grimoire.webp'
import bookiImage from '../../assets/images/Booki.png'
import ninaImage from '../../assets/images/Nina_carducci.png'
import qwentaImage from '../../assets/images/Qwenta.png'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Sophie Bluel",
      image: sophieBluelImage,
      description: "Portfolio d'architecte d'intérieur avec interface d'administration. Développement front-end en JavaScript avec gestion authentification et manipulation du DOM.",
      challenges: [
        "Mise en place d'une authentification sécurisée avec JWT",
        "Création d'une galerie dynamique avec filtrage des projets",
        "Implémentation d'une interface de drag & drop pour le réarrangement des projets",
        "Gestion optimisée du cache pour les images et les données",
      ],
      technos: ["JavaScript", "HTML", "CSS", "API REST"],
      github: "https://github.com/Poulidor-Jo/Sophie-Bluel"
    },
    {
      id: 2,
      title: "Kasa",
      image: kasaImage,
      description: "Application de location immobilière développée en React. Mise en place de composants réutilisables, routing avec React Router et animations CSS.",
      challenges: [
        "Développement de composants React réutilisables et modulaires",
        "Mise en place d'un système de routing complexe avec React Router",
        "Création d'animations fluides pour améliorer l'expérience utilisateur",
        "Optimisation des performances avec React.memo et useCallback",
      ],
      technos: ["React", "Sass", "React Router", "JavaScript"],
      github: "https://github.com/Poulidor-Jo/Kasa"
    },
    {
      id: 3,
      title: "Mon Vieux Grimoire",
      image: grimoireImage,
      description: "Site de notation de livres avec backend Node.js/Express et MongoDB. API REST sécurisée, authentification JWT et gestion des fichiers.",
      challenges: [
        "Conception d'une architecture backend robuste avec Node.js et Express",
        "Implémentation d'un système de notation avec moyenne pondérée",
        "Gestion sécurisée des uploads d'images avec validation et optimisation",
        "Mise en place d'une authentification JWT avec refresh token",
      ],
      technos: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/Poulidor-Jo/Mon-Vieux-Grimoire"
    },
    {
      id: 4,
      title: "Booki",
      image: bookiImage,
      description: "Site de réservation d'hébergements et d'activités. Interface responsive développée en HTML5 et CSS3, respectant la maquette Figma et les bonnes pratiques.",
      challenges: [
        "Intégration pixel-perfect d'une maquette Figma complexe",
        "Développement d'une interface totalement responsive sans framework",
        "Optimisation des performances avec les bonnes pratiques CSS",
        "Mise en place d'une architecture CSS maintenable avec BEM",
      ],
      technos: ["HTML5", "CSS3", "Flexbox", "Grid"],
      github: "https://github.com/Poulidor-Jo/Booki"
    },
    {
      id: 5,
      title: "Nina Carducci",
      image: ninaImage,
      description: "Optimisation SEO et performance d'un site de photographe. Amélioration du référencement, de l'accessibilité et des performances techniques.",
      challenges: [
        "Optimisation des images avec lazy loading et formats modernes",
        "Amélioration du score Lighthouse de 40 à 90+",
        "Implémentation des rich snippets et métadonnées Schema.org",
        "Correction des problèmes d'accessibilité WCAG",
      ],
      technos: ["SEO", "Performance Web", "Schema.org", "Lighthouse"],
      github: "https://github.com/Poulidor-Jo/Nina_carducci"
    },
    {
      id: 6,
      title: "Qwenta",
      image: qwentaImage,
      description: "Planification et documentation technique d'un projet de menu maker. Mise en place d'une méthodologie agile et création de spécifications techniques.",
      challenges: [
        "Élaboration d'une documentation technique détaillée",
        "Création de user stories et d'un backlog product",
        "Planification Agile avec méthode Kanban",
        "Conception de diagrammes UML pour la structure du projet",
      ],
      technos: ["Agile", "Kanban", "UML", "Documentation"],
      github: "https://github.com/Poulidor-Jo/Qwenta"
    }
  ]

  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <article 
            key={project.id} 
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-card__image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card__content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button className="project-card__details-btn">
                Voir les détails
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="project-modal__content" onClick={e => e.stopPropagation()}>
            <button 
              className="project-modal__close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <div className="project-modal__header">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <h2>{selectedProject.title}</h2>
            </div>
            <div className="project-modal__body">
              <div className="project-modal__description">
                <h3>Description</h3>
                <p>{selectedProject.description}</p>
              </div>
              <div className="project-modal__challenges">
                <h3>Défis techniques</h3>
                <ul>
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div className="project-modal__technos">
                <h3>Technologies utilisées</h3>
                <div className="project-modal__tags">
                  {selectedProject.technos.map((techno, index) => (
                    <span key={index} className="project-modal__tag">{techno}</span>
                  ))}
                </div>
              </div>
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-modal__link"
              >
                Voir sur GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects