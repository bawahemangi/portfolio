import Section from './Section.jsx'
import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((x) => (
          <li key={x.role} className="tl-item reveal">
            <div className="card">
              <h3>{x.role}</h3>
              <p className="company">{x.company}</p>
              <p className="muted">{x.period}</p>
              <ul className="points">
                {x.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
