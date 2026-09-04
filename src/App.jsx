import { useState, useEffect, useCallback, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Education from './components/Education'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectDrawer from './components/ProjectDrawer'
import EasterEgg from './components/EasterEgg'
import Toast from './components/Toast'
import { PROJECTS } from './data/resume'

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a', 'b', 'a',
]

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [toast, setToast] = useState({ show: false, msg: '' })
  const [eggShow, setEggShow] = useState(false)
  const konamiIdx = useRef(0)
  const toastTimer = useRef(null)

  const showToast = useCallback((msg) => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast({ show: true, msg })
  }, [])

  const copyText = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        showToast('已复制 ✓')
      } catch {
        const ta = document.createElement('textarea')
        ta.value = text
        document.body.appendChild(ta)
        ta.select()
        try {
          document.execCommand('copy')
          showToast('已复制 ✓')
        } catch {
          showToast('复制失败')
        }
        document.body.removeChild(ta)
      }
    },
    [showToast],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (eggShow) { setEggShow(false); return }
        if (activeProject) setActiveProject(null)
        return
      }
      const expected = KONAMI[konamiIdx.current]
      if (e.key.toLowerCase() === expected.toLowerCase()) {
        konamiIdx.current++
        if (konamiIdx.current === KONAMI.length) {
          konamiIdx.current = 0
          setEggShow(true)
          document.body.classList.add('konami-shake')
          setTimeout(() => document.body.classList.remove('konami-shake'), 1000)
        }
      } else {
        konamiIdx.current = e.key.toLowerCase() === KONAMI[0].toLowerCase() ? 1 : 0
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeProject, eggShow])

  return (
    <>
      <Nav />
      <Hero />
      <Education />
      <Internship />
      <Projects onOpenProject={(id) => setActiveProject(PROJECTS.find((p) => p.id === id))} />
      <Contact />

      <ProjectDrawer project={activeProject} onClose={() => setActiveProject(null)} />
      <EasterEgg show={eggShow} onClose={() => setEggShow(false)} />
      <Toast show={toast.show} message={toast.msg} />

      <span style={{ display: 'none' }} data-version={PROJECTS.length} />
    </>
  )
}
