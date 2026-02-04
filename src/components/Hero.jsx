import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-course-main">COM 354</p>
        <p className="hero-course-title">Designing Digital Media</p>
        <p className="hero-course-meta">NJIT | Spring 2026</p>
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Developer & Designer crafting clean, modern experiences</p>
        <button className="hero-cta" onClick={() => {
          document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
        }}>
          View My Work
        </button>
      </div>
    </section>
  )
}
