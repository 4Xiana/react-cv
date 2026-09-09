import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

const EXIT_MS = 240

export default function DetailPaperModal({ data, onClose }) {
  const [mounted, setMounted] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (data) {
      setMounted(true)
      const t = setTimeout(() => setShown(true), 20)
      return () => clearTimeout(t)
    }
    setShown(false)
  }, [data])

  useEffect(() => {
    if (mounted && !shown && !data) {
      const t = setTimeout(() => setMounted(false), EXIT_MS)
      return () => clearTimeout(t)
    }
  }, [mounted, shown, data])

  useEffect(() => {
    if (!mounted) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [mounted, onClose])

  if (!mounted || !data) return null

  const { detail, title } = data
  const src = `${import.meta.env.BASE_URL}${String(detail.src).replace(/^\//, '')}`
  const isHtml = detail.type === 'html'

  return createPortal(
    <div
      className={`dpm-overlay${shown ? ' in' : ''}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="dpm-paper">
        <span className="dpm-tape" aria-hidden="true" />
        <button className="dpm-close" onClick={onClose} aria-label="关闭弹窗">
          <X size={17} strokeWidth={2.6} />
        </button>

        <div className="dpm-head">
          <span className="dpm-stamp">{isHtml ? 'Demo' : 'Diagram'}</span>
          <h3 className="dpm-title">{detail.title || title}</h3>
        </div>

        <div className="dpm-body">
          {isHtml ? (
            <iframe
              className="dpm-frame"
              src={src}
              title={title}
              loading="lazy"
            />
          ) : (
            <figure className="dpm-fig">
              <img className="dpm-img" src={src} alt={detail.title || title} />
              {detail.caption && <figcaption className="dpm-cap">{detail.caption}</figcaption>}
            </figure>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
