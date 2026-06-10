import { useState, useEffect } from 'react'
import logo from '../assets/logo.webp'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a className="navbar-logo" href="#home" onClick={() => handleNav('#home')}>
          <img src={logo} alt="Pins & Pleats by Prakalya Logo" width="48" height="48" />
          <span className="navbar-brand">
            Pins <span>&</span> Pleats
            <small>by Prakalya</small>
          </span>
        </a>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => handleNav(link.href)}>
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="navbar-cta">
            Book Now
          </a>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
