import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern React-based e-commerce site with product filtering and cart management.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: '#'
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

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
