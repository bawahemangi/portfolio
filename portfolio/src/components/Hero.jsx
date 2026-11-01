import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile, links } from '../data/portfolio.js'
import useTyping from '../hooks/useTyping.js'
import Terminal from './Terminal.jsx'

export default function Hero() {
  const typed = useTyping(profile.roles)
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hello">Hi, I'm {profile.name}</p>
          <h1>{profile.headline}</h1>
          <p className="typing" aria-live="off">
            <span>{typed}</span><i className="caret" aria-hidden="true" />
          </p>
          <p className="lead">{profile.blurb}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#projects">View projects <ArrowDown size={18} /></a>
            <a className="btn btn-ghost" href={profile.resume} download>
              <Download size={18} /> Resume
            </a>
          </div>
          <ul className="social" aria-label="Social links">
            <li><a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a></li>
            <li><a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a></li>
            <li><a href={`mailto:${links.email}`} aria-label="Email"><Mail size={20} /></a></li>
          </ul>
        </div>
        <Terminal />
      </div>
    </section>
  )
}
