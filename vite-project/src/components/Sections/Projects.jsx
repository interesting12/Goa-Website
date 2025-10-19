import { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      codeLink: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      tags: ['React', 'Firebase', 'Material-UI'],
      liveLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '🌤️',
      tags: ['React', 'API', 'Chart.js'],
      liveLink: '#',
      codeLink: '#',
      featured: false
    },
        {
      title: 'Social Media Platform',
      description: 'A modern social platform with real-time messaging, photo sharing, and community features.',
      image: '📱',
      tags: ['React Native', 'Firebase', 'Redux'],
      liveLink: '#',
      codeLink: '#',
      featured: true
    },
    {
      title: 'EcoTracker Mobile App',
      description: 'An environmental footprint tracker that helps users monitor their carbon emissions, waste production, and sustainable habits with personalized insights.',
      image: '🌱',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
      liveLink: '#',
      codeLink: '#',
      featured: true
    },
    {
      title: 'Recipe Sharing Community',
      description: 'A social cooking platform where users can share recipes, create meal plans, and connect with food enthusiasts through video tutorials.',
      image: '👨‍🍳',
      tags: ['React Native', 'Firebase', 'Redux', 'YouTube API'],
      liveLink: '#',
      codeLink: '#',
      featured: false 
    }

  ]

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Here are some of our students recent projects that showcase them skills and experience
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card ${project.featured ? 'project-card--featured' : ''} ${
                isVisible ? `fade-in-up delay-${index + 1}` : ''
              }`}
            >
              {project.featured && (
                <div className="project-badge">Featured</div>
              )}
              
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.liveLink} className="btn btn--primary btn--small">
                    Live Demo
                  </a>
                  <a href={project.codeLink} className="btn btn--secondary btn--small">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects