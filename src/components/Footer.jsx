import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Tate Jones. All rights reserved.</p>
        <div className="social-links">
          <a href="#" className="social-link">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
