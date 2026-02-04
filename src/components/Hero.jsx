import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Developer & Designer crafting clean, modern experiences</p>
        <p className="hero-course">COM 354: Designing Digital Media | NJIT | Spring 2026</p>
        <button className="hero-cta" onClick={() => {
          document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
        }}>
          View My Work
        </button>
      </div>
    </section>
  )
}
