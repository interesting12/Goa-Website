import { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear message when user starts typing again
    if (message) setMessage('')
  }

  const sendToDiscord = async (data) => {
    const webhookURL = 'https://discord.com/api/webhooks/1350130889421619273/UyMfHDyZ2qTqJD3VE381vAUFB8Yduh7CYj8-jUQMgY-NoPKgVWOpvvejnvtD6IoO7Dyg'
    
    const embed = {
      title: '🎓 New GOA Registration Request',
      color: 0x00ff00,
      fields: [
        {
          name: '👤 Name',
          value: data.name || 'Not provided',
          inline: true
        },
        {
          name: '📧 Email',
          value: data.email || 'Not provided',
          inline: true
        },
        {
          name: '🎯 Interested In',
          value: data.subject || 'Not specified',
          inline: false
        },
        {
          name: '💬 Message',
          value: data.message.length > 1000 ? data.message.substring(0, 1000) + '...' : data.message || 'No message',
          inline: false
        },
        {
          name: '🕒 Submitted At',
          value: new Date().toLocaleString(),
          inline: true
        }
      ],
      footer: {
        text: 'GOA Academy Registration Form'
      },
      timestamp: new Date().toISOString()
    }

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed],
          username: 'GOA Registration',
          avatar_url: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        }),
      })

      if (response.ok) {
        return true
      } else {
        console.error('Discord webhook error:', await response.text())
        return false
      }
    } catch (error) {
      console.error('Error sending to Discord:', error)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      // Send to Discord webhook
      const discordSuccess = await sendToDiscord(formData)
      
      if (discordSuccess) {
        setMessage('✅ Thank you! Your registration request has been sent successfully. We will contact you soon!')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setMessage('❌ There was an error sending your request. Please try again or contact us directly.')
      }
    } catch (error) {
      setMessage('❌ There was an error sending your request. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'goalorientadze@gamil.com',
      link: 'mailto:goalorientadze@gamil.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Delisi Hub',
      link: 'https://maps.app.goo.gl/jr1QBwdn8dzhdqK56'
    }
  ]

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">
            Join <span className="text-gradient">GOA</span>
          </h2>
          <p className="section-subtitle">
            Do you want to learn programming? But you don't know where? join us 
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className={`contact-info ${isVisible ? 'slide-in-left' : ''}`}>
            <h3 className="contact-info-title">Let's Start Your Journey</h3>
            <p className="contact-info-description">
              We accept everyone, regardless of their abilities, <br />
              hurry up, places are limited.
            </p>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-method ${isVisible ? `fade-in-up delay-${index}` : ''}`}
                >
                  <div className="contact-method-icon">{method.icon}</div>
                  <div className="contact-method-content">
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form 
            className={`contact-form ${isVisible ? 'slide-in-right' : ''}`}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your name"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">What do you want to learn?</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Programming, Graphic Design, AI/Algorithms, Robotics"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-textarea"
                placeholder="Tell us about your interests and goals..."
                disabled={isLoading}
              ></textarea>
            </div>

            {/* Status Message */}
            {message && (
              <div className={`form-message ${message.includes('✅') ? 'form-message--success' : 'form-message--error'}`}>
                {message}
              </div>
            )}

            <button 
              type="submit" 
              className={`btn btn--primary btn--full ${isLoading ? 'btn--loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="btn-spinner"></div>
                  Sending...
                </>
              ) : (
                'Send Registration Request'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact