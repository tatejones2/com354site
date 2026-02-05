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
          </div>
        </div>

        <div className="profile-section">
          <div className="profile-image">
            <img src={`${import.meta.env.BASE_URL}images/socon_champ_tate.jpg`} alt="Tate Jones" />
          </div>
          <div className="profile-info">
            <h3>Tate Jones</h3>
            <p className="profile-detail"><strong>Major:</strong> Information Technology</p>
            <p className="profile-detail"><strong>Class:</strong> Sophomore</p>
            <p className="profile-detail"><strong>School:</strong> New Jersey Institute of Technology (NJIT)</p>
            <p className="profile-bio">
              Passionate about design, development, and creating meaningful digital experiences. 
              Focused on combining clean code with thoughtful user interface design.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
