import { useState, useEffect } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className={`hero__content ${isVisible ? 'fade-in-up' : ''}`}>
          {/* Badge */}
          <div className="hero__badge animate-delay-1">
            <span>🚀 Available for new Students</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero__title animate-delay-2">
            Welcome to <span className="text-gradient">GOA</span>
            <br />
            Best Programming Academy
          </h1>

          {/* Description */}
          <p className="hero__description animate-delay-3">
              The most reliable and only academy in Georgia 
              that will personally approach you and help you 
              solve any life problem. I will set you big goals 
              and help you achieve them to the end <br />
              Sincerely, Nika Keshelava
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions animate-delay-4">
            <a href="https://www.facebook.com/nika11keshelava" className="btn btn--primary">
              View FB
            </a>
            <a href="#contact" className="btn btn--secondary">
              Let's Talk
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats animate-delay-5">
            <div className="stat">
              <div className="stat__number">1000+</div>
              <div className="stat__label">Students</div>
            </div>
            <div className="stat">
              <div className="stat__number">4+</div>
              <div className="stat__label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat__number">100%</div>
              <div className="stat__label">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero__visual slide-in-right">
          <div className="hero__image">
            <div className="floating-card floating-card--1">
              <div className="card__icon">⚡</div>
              <div className="card__text">Fast</div>
            </div>
            <div className="floating-card floating-card--2">
              <div className="card__icon">🎨</div>
              <div className="card__text">Beautiful</div>
            </div>
            <div className="floating-card floating-card--3">
              <div className="card__icon">🔧</div>
              <div className="card__text">Functional</div>
            </div>
            <div className="main-visual">
              <div className="visual-content">
                <div className="code-window">
                  <div className="window-header">
                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="code-content">
                    <pre>{`function learnProgramming(goa) {
  return <BestWayForLearn />;
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero