import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <nav aria-label="Footer">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`}>{i}</a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
