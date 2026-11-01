import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Things I've built, and what each one actually does.">
      <div className="projects-grid">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </Section>
  )
}
