import { GraduationCap } from 'lucide-react'
import Section from './Section.jsx'
import { about } from '../data/portfolio.js'

export default function About() {
  const { education: e } = about
  return (
    <Section id="about" title="About me">
      <div className="about-grid">
        <div className="reveal">
          {about.paragraphs.map((p) => <p key={p} className="prose">{p}</p>)}
          <ul className="chips">
            {about.interests.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div className="card edu reveal">
          <GraduationCap size={26} aria-hidden="true" />
          <h3>{e.degree}</h3>
          <p>{e.school}</p>
          <p className="muted">{e.year}</p>
        </div>
      </div>
    </Section>
  )
}
