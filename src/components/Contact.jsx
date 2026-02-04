import './Contact.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for reaching out!')
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">I'd love to hear from you. Feel free to reach out!</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="form-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="form-input"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className="form-textarea"
            ></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
