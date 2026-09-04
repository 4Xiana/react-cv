import { useEffect, useState } from 'react'
import imgSulong from '../img/sulong.webp'

export default function EasterEgg({ show, onClose }) {
  const [mounted, setMounted] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (show) {
      setMounted(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true))
      })
    }
  }, [show, onClose])

  if (!mounted) return null

  return (
    <div
      className={`easter-egg-overlay ${animating ? 'in' : 'out'}`}
      onClick={() => {
        setAnimating(false)
        setTimeout(() => {
          setMounted(false)
          onClose?.()
        }, 400)
      }}
    >
      <div className="easter-egg-card" onClick={(e) => e.stopPropagation()}>
        <div className="easter-egg-sulong">
          <img src={imgSulong} alt="素龙" />
        </div>
        <div className="easter-egg-tape tape-tl" />
        <div className="easter-egg-tape tape-tr" />
        <div className="easter-egg-content">
          <div className="easter-egg-eyebrow">✦ A Little Secret ✦</div>
          <h2 className="easter-egg-title">你发现了彩蛋！</h2>
          <div className="easter-egg-body">
            <p>感谢你耐心翻到这里 ✿</p>
            <p>期待和你认识！<br/>愿我们都能像自由的麦子，<br/>不羡风，不畏沙🌾</p>
          </div>
          <div className="easter-egg-sign">—— Shixian</div>
        </div>
      </div>
    </div>
  )
}
