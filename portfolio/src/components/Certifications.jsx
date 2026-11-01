import { Award } from 'lucide-react'
import Section from './Section.jsx'
import { certifications } from '../data/portfolio.js'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="cert-grid">
        {certifications.map((c) => (
          <div key={c.title} className="card cert reveal">
            <Award size={24} aria-hidden="true" />
            <h3>{c.title}</h3>
            <p className="muted">{c.issuer}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
