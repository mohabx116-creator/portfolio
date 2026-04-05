import { useEffect, useRef, useState } from 'react'

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} reveal ${isVisible ? 'reveal-visible' : ''}`.trim()}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

export default Reveal

