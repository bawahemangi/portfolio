import { useEffect, useState } from 'react'

export default function useTyping(words, speed = 70, pause = 1600) {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [text, setText] = useState(reduce ? words[0] : '')
  useEffect(() => {
    if (reduce) return
    let i = 0, j = 0, del = false, t
    const tick = () => {
      const w = words[i]
      j += del ? -1 : 1
      setText(w.slice(0, j))
      let d = del ? speed / 2 : speed
      if (!del && j === w.length) { del = true; d = pause }
      else if (del && j === 0) { del = false; i = (i + 1) % words.length; d = 350 }
      t = setTimeout(tick, d)
    }
    t = setTimeout(tick, 400)
    return () => clearTimeout(t)
  }, [words, speed, pause, reduce])
  return text
}
