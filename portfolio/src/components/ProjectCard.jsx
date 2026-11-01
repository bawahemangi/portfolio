import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ p }) {
  const hasRepo = p.repo && !p.repo.includes('YOUR-')
  return (
    <article className="card project reveal">
      <h3>{p.title}</h3>
      <p className="tagline">{p.tagline}</p>
      <p className="prose">{p.description}</p>
      <ul className="points">
        {p.points.map((x) => <li key={x}>{x}</li>)}
      </ul>
      {p.note && <p className="note">{p.note}</p>}
      <ul className="chips chips--sm" aria-label="Technologies">
        {p.tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <div className="proj-links">
        {p.repo && (
          <a className="btn btn-ghost btn-sm" href={p.repo} target="_blank" rel="noopener noreferrer"
             aria-label={`${p.title} on GitHub`}>
            <Github size={16} /> {hasRepo ? 'Code' : 'Code (add link)'}
          </a>
        )}
        {p.demo && (
          <a className="btn btn-primary btn-sm" href={p.demo} target="_blank" rel="noopener noreferrer"
             aria-label={`${p.title} live demo`}>
            <ExternalLink size={16} /> Live demo
          </a>
        )}
      </div>
    </article>
  )
}
