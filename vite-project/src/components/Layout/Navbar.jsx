import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <div className="logo">
            <span className="logo__text">Goal-Oriented-Academy</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar__links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="navbar__link"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/*  Button */}
        <div className="navbar__cta">
          <a href="#contact" className="btn btn--primary">
            Register
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar