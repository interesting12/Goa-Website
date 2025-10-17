import { useState, useEffect, useRef } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const skills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 75 },
  ]

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          {/* Text Content */}
          <div className={`about__content ${isVisible ? 'slide-in-left' : ''}`}>
            <h2 className="section-title">
              About <span className="text-gradient">Us</span>
            </h2>
            <p className="about__description">
            With us you will learn discipline,a healthy lifestyle,
            and while learning programming, you will be 
            able to build websites,games, designs, and program boards.
            </p>
            <p className="about__description">
              Our goal is not just to learn programming, 
              here you learn leadership, teamwork and individual work, 
              and acquire the skills needed to be a professional programmer.
            </p>

            <div className="about__stats">
              <div className="stat-card">
                <div className="stat-card__number">20+</div>
                <div className="stat-card__label">Mentor</div>
              </div>
              <div className="stat-card">
                <div className="stat-card__number">4+</div>
                <div className="stat-card__label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-card__number">+∞</div>
                <div className="stat-card__label">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className={`about__skills ${isVisible ? 'slide-in-right' : ''}`}>
            <h3 className="skills-title">Your skills at the end of the course</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transition: `width 1s ease ${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About