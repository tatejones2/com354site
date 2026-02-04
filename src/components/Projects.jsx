import { useState } from 'react'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'Assignment 1',
    description: 'A picture of something that means something to me, with an explanation of what it means to me.',
    tags: ['Drawing', 'Writing'],
    link: '/class_project_files/assignment1/COM354_assignment1.docx',
    image: '/class_project_files/assignment1/assignment1.png'
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'Streamlined task management application with local storage and smooth animations.',
    tags: ['React', 'State Management', 'UX'],
    link: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with responsive design and location-based features.',
    tags: ['API Integration', 'React', 'CSS Grid'],
    link: '#'
  },
  {
    id: 4,
    title: 'Portfolio Site',
    description: 'This clean and minimal portfolio showcasing mid-century modern design principles.',
    tags: ['React', 'Vite', 'Design'],
    link: '#'
  }
]

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {project.image && (
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
        )}
        <div className="modal-body">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {project.link && project.link !== '#' && (
            <a href={project.link} className="modal-download" download>
              Download Project
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <button className="project-link">View Details →</button>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
