import { Github, Linkedin, Mail } from 'lucide-react'
import Section from './Section.jsx'
import { links } from '../data/portfolio.js'

export default function Contact() {
  const rows = [
    { Icon: Mail, label: 'Email', value: links.email, href: `mailto:${links.email}` },
    { Icon: Github, label: 'GitHub', value: links.github.replace('https://', ''), href: links.github },
    { Icon: Linkedin, label: 'LinkedIn', value: links.linkedin.replace('https://www.', ''), href: links.linkedin },
  ]
  return (
    <Section id="contact" title="Let's talk" intro="I'm looking for internships and entry-level software roles. Send me a message.">
      <div className="contact-grid">
        {rows.map(({ Icon, label, value, href }) => (
          <a key={label} className="card contact reveal" href={href}
             target={label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer">
            <Icon size={22} aria-hidden="true" />
            <span><b>{label}</b><small>{value}</small></span>
          </a>
        ))}
      </div>
    </Section>
  )
}
