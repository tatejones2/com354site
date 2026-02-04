import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About This Project</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              This portfolio is a course project for <strong>COM 354: Designing Digital Media</strong> at NJIT in Spring 2026. The goal of this project is to demonstrate proficiency in modern web design and development practices.
            </p>
            <p>
              Built with React and Vite, this site showcases a clean, responsive design inspired by mid-century modern aesthetics. The portfolio emphasizes user experience, accessibility, and thoughtful design principles while maintaining clean, maintainable code.
            </p>
            <div className="skills">
              <h3>Technologies & Skills</h3>
              <div className="skills-grid">
                <span className="skill">React</span>
                <span className="skill">JavaScript</span>
                <span className="skill">CSS3</span>
                <span className="skill">Responsive Design</span>
                <span className="skill">Vite</span>
                <span className="skill">Web Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
