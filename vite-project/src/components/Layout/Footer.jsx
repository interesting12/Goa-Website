const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo__text">Goal-Oriented-Academy</span>
              </div>
              <p className="footer-description">
                Learning how to create beautiful, functional websites and applications 
                with modern technologies and best practices.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © {currentYear} George Shavadze. Student of Goal-Oriented-Academy.
            </div>
            <div className="footer-social">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map(social => (
                <a key={social} href="#" className="social-link">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer