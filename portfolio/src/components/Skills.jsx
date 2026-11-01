import { Code2, Layout, Server, Database, Wrench } from 'lucide-react'
import Section from './Section.jsx'
import { skills } from '../data/portfolio.js'

const icons = { Code2, Layout, Server, Database, Wrench }

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use to build and ship.">
      <div className="skills-grid">
        {skills.map(({ group, icon, items }) => {
          const Icon = icons[icon]
          return (
            <div key={group} className="card skill reveal">
              <h3><Icon size={20} aria-hidden="true" /> {group}</h3>
              <ul className="chips">
                {items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
