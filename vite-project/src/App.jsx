import { useState, useEffect } from 'react'
import Navbar from './components/Layout/Navbar.jsx'
import Hero from './components/Sections/Hero.jsx'
import About from './components/Sections/About.jsx'
import Projects from './components/Sections/Projects.jsx'
import Skills from './components/Sections/Skills.jsx'
import Contact from './components/Sections/Contact.jsx'
import Footer from './components/Layout/Footer.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-circle"></div>
          <p>Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App