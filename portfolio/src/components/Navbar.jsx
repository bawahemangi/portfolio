import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio.js'

const items = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="logo" aria-label={`${profile.name}, home`}>
          <span className="logo-mark">HB</span>
          <span className="logo-text">{profile.name}</span>
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="nav-links" className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {items.map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setOpen(false)}>{i}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
