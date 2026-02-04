import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer and designer focused on creating clean, intuitive digital experiences. With expertise in React and modern web technologies, I build responsive, user-centered applications.
            </p>
            <p>
              My approach combines minimalist design principles with robust functionality, drawing inspiration from mid-century modern aesthetics to create timeless digital products.
            </p>
            <div className="skills">
              <h3>Core Skills</h3>
              <div className="skills-grid">
                <span className="skill">React</span>
                <span className="skill">JavaScript</span>
                <span className="skill">CSS3</span>
                <span className="skill">Responsive Design</span>
                <span className="skill">UX/UI</span>
                <span className="skill">Vite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
