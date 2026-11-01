import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <a href="#top" className={`totop ${show ? 'show' : ''}`} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <ArrowUp size={20} />
    </a>
  )
}
