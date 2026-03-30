import { useState } from 'react'
import './Projects.css'

// Projects data with all assignments
const projectsData = [
  {
    id: 1,
    title: 'Assignment 1',
    description: 'A picture of something that means something to me, with an explanation of what it means to me.',
    tags: ['Drawing', 'Writing'],
    link: '/class_project_files/assignment1/COM354_assignment1.docx',
    image: `${import.meta.env.BASE_URL}images/assignment1.png`
  },
  {
    id: 2,
    title: 'Assignment 2',
    description: 'A link to my website for COM 354.',
    tags: ['Web Design', 'GitHub'],
    link: '#',
    image: `${import.meta.env.BASE_URL}images/assignment2.png`
  },
  {
    id: 3,
    title: 'Assignment 3',
    description: 'An audio project created with Audacity.',
    tags: ['Audio', 'Audacity'],
    link: '/class_project_files/assignment3/Assignment3.aup3',
    image: `${import.meta.env.BASE_URL}images/assignment3.png`
  },
  {
    id: 4,
    title: 'Assignment 4',
    description: 'A photography project containing 5 photos with different techniques.',
    tags: ['Photography'],
    link: '/class_project_files/assignment4/PhotoAssignment.pptx',
    image: `${import.meta.env.BASE_URL}images/assignment4.jpg`
  },
  {
    id: 5,
    title: 'Assignment 5',
    description: 'Assignment 5 project content coming soon.',
    tags: ['In Progress'],
    link: '#',
    image: null
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
