import { useState, useEffect, useRef } from 'react'

const Skills = () => {
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

  const skillCategories = [
    {
      category: 'Frontend',
      icon: '💻',
      skills: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Jest']
    }
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">
             <span className="text-gradient">Skills </span>you will learn
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className={`skill-category ${isVisible ? `fade-in-up delay-${index}` : ''}`}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.category}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills