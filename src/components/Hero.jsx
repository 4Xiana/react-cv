import React, { useEffect, useRef, useState } from 'react'
import horseImg from '../img/2002horse.webp'
import cyclingImg from '../img/cycling.webp'
import enfjImg from '../img/enfj.webp'
import kalarokeImg from '../img/kalaroke.webp'
import movieImg from '../img/movie.webp'
import productImg from '../img/product.webp'
import programImg from '../img/program.webp'
import readImg from '../img/read.webp'
import singlelifeImg from '../img/singlelife.webp'
import scorpioImg from '../img/tianxiezuo.webp'

const tabs = [
  { label: '教育背景', to: '#education', icon: 'ps-i-book', color: 'blue', rotate: -2.5 },
  { label: '实习经历', to: '#internship', icon: 'ps-i-puzzle', color: 'purple', rotate: 2 },
  { label: '研究项目', to: '#projects', icon: 'ps-i-bulb', color: 'green', rotate: -1.8 },
  { label: '联系方式', to: '#contact', icon: 'ps-i-binoculars', color: 'yellow', rotate: 3.2 },
]

const BASE_GAP_PX = 12
const avatarSrc = `${import.meta.env.BASE_URL}hero-avatar.webp`
const N_STICKERS = 10
const MAX_CENTER_GAP = 140
const MIN_START_GAP_V = 40
const MIN_START_GAP_H = 55

const FIXED_ANGLES = [150, 134, 118, 102, 86, -14, -30, -46, -62, -78]

function makeAnglesHorizontal(centerGap) {
  return FIXED_ANGLES.slice()
}

function makeAnglesVertical(centerGap) {
  return makeAnglesHorizontal(centerGap)
}

function detectVerticalLayout(vw, avRect) {
  return vw <= 600
}

const stickerDefs = [
  { src: productImg,    rot: 18,  delay: 110, baseSize: 172 },
  { src: horseImg,      rot: -8,  delay: 85,  baseSize: 176 },
  { src: scorpioImg,    rot: 6,   delay: 55,  baseSize: 184 },
  { src: singlelifeImg, rot: -14, delay: 25,  baseSize: 172 },
  { src: enfjImg,       rot: 10,  delay: 0,   baseSize: 164 },
  { src: programImg,    rot: -16, delay: 0,   baseSize: 168 },
  { src: readImg,       rot: 22,  delay: 25,  baseSize: 160 },
  { src: movieImg,      rot: -10, delay: 55,  baseSize: 176 },
  { src: kalarokeImg,   rot: 16,  delay: 85,  baseSize: 164 },
  { src: cyclingImg,    rot: -6,  delay: 110, baseSize: 168 },
]

function rectEdgeDistance(w, h, angleDeg) {
  if (w <= 0 || h <= 0) return 0
  const rad = (angleDeg * Math.PI) / 180
  const absCos = Math.abs(Math.cos(rad))
  const absSin = Math.abs(Math.sin(rad))
  if (absCos < 1e-6) return h / 2 / absSin
  if (absSin < 1e-6) return w / 2 / absCos
  const dxTan = absSin / absCos
  const rectTan = h / w
  if (dxTan < rectTan) {
    return (w / 2) / absCos
  } else {
    return (h / 2) / absSin
  }
}

function computeScaleFactor(vw, avRect, pw) {
  const MIN_SCALE = 0.28
  const MAX_SCALE = 1.0
  if (vw <= 0) return 0.5
  const rightMargin = Math.max(22, vw * 0.04)
  const leftMargin = Math.max(22, vw * 0.04)
  const topMargin = 24
  const botMargin = 24
  let availRight = 220
  let availLeft = 220
  let availTop = 220
  let availBot = 260
  if (avRect && vw > 0) {
    availRight = Math.max(20, vw - (avRect.left + avRect.w) - rightMargin)
    availLeft = Math.max(20, avRect.left - leftMargin)
    availTop = Math.max(20, avRect.top - topMargin)
    availBot = Math.max(20, (typeof window !== 'undefined' ? window.innerHeight : 800) - (avRect.top + avRect.h) - botMargin)
  }
  const ref = 220
  const kR = Math.max(0.35, Math.min(1.1, availRight / ref))
  const kL = Math.max(0.35, Math.min(1.1, availLeft / ref))
  const kT = Math.max(0.30, Math.min(1.1, availTop / ref))
  const kB = Math.max(0.35, Math.min(1.1, availBot / ref))
  const spaceK = Math.min(kR, kL, kT, kB)
  const vwK = vw >= 1280 ? 1.0
           : vw >= 1100 ? 0.94
           : vw >= 960  ? 0.88
           : vw >= 780  ? 0.80
           : vw >= 600  ? 0.72
           : vw >= 480  ? 0.64
           :              MIN_SCALE
  return Math.max(MIN_SCALE, Math.min(MAX_SCALE, (spaceK * 0.55 + vwK * 0.45)))
}

function tryRadiusForAngles(pw, ph, tryScale, vw, vh, avRect, angles) {
  const rectW = avRect && avRect.w > 0 ? avRect.w : pw
  const rectH = avRect && avRect.h > 0 ? avRect.h : ph
  const bboxRs = stickerDefs.map((s) => {
    const sw = s.baseSize * tryScale
    const rotRad = Math.abs((s.rot * Math.PI) / 180)
    return (Math.max(sw, sw) / 2) * (Math.cos(rotRad) + Math.sin(rotRad))
  })
  const gapPx = BASE_GAP_PX * Math.max(0.3, tryScale) * 0.7
  const interGapPx = 6 * Math.max(0.4, tryScale)
  const smallScale = tryScale < 0.5
  const vertical = detectVerticalLayout(vw, avRect)
  const topSafePad = vertical ? (smallScale ? 16 : 26) : (smallScale ? 14 : 20)
  const botSafePad = vertical ? (smallScale ? 10 : 14) : (smallScale ? 14 : 20)
  const sideSafePad = vertical ? (smallScale ? 12 : 16) : (smallScale ? 12 : 18)
  const polaroidAbs = avRect
    ? { x: avRect.left, y: avRect.top, w: rectW, h: rectH }
    : { x: 0, y: 0, w: rectW, h: rectH }
  const cx0 = avRect ? (avRect.left + rectW / 2) : (rectW / 2)
  const cy0 = avRect ? (avRect.top + rectH / 2) : (rectH / 2)
  const rads = angles.map(a => (a * Math.PI) / 180)

  function stickerValid(i, R) {
    const rad = rads[i]
    const dirX = Math.cos(rad)
    const dirY = -Math.sin(rad)
    const edgeD = rectEdgeDistance(rectW, rectH, angles[i])
    const bboxR = bboxRs[i]
    const absCos = Math.abs(dirX)
    const absSin = Math.abs(-dirY)
    const rectTan = rectH / rectW
    const rayTan = absSin / (absCos || 1e-6)
    const clearance = rayTan < rectTan
      ? (absCos > 0.001 ? (bboxR + gapPx) / absCos : bboxR + gapPx)
      : (absSin > 0.001 ? (bboxR + gapPx) / absSin : bboxR + gapPx)
    if (R < edgeD + clearance - 0.5) return false
    const cx = cx0 + dirX * R
    const cy = cy0 + dirY * R
    const sxL = cx - bboxR
    const syT = cy - bboxR
    const sxR = cx + bboxR
    const syB = cy + bboxR
    if (sxL < sideSafePad || syT < topSafePad) return false
    if (sxR > vw - sideSafePad || syB > vh - botSafePad) return false
    if (!(polaroidAbs.x >= sxR - 0.5 || polaroidAbs.x + polaroidAbs.w <= sxL + 0.5 ||
          polaroidAbs.y >= syB - 0.5 || polaroidAbs.y + polaroidAbs.h <= syT + 0.5)) {
      return false
    }
    return true
  }

  function interValid(R) {
    for (let i = 0; i < angles.length; i++) {
      const r1 = rads[i]; const cx1 = cx0 + Math.cos(r1) * R; const cy1 = cy0 - Math.sin(r1) * R
      const baseSi = stickerDefs[i].baseSize * tryScale
      const circum1 = baseSi * 0.72
      for (let j = i + 1; j < angles.length; j++) {
        const r2 = rads[j]; const cx2 = cx0 + Math.cos(r2) * R; const cy2 = cy0 - Math.sin(r2) * R
        const baseSj = stickerDefs[j].baseSize * tryScale
        const circum2 = baseSj * 0.72
        const minD = circum1 + circum2 + interGapPx + 14
        const dx = cx1 - cx2, dy = cy1 - cy2
        if (dx * dx + dy * dy < minD * minD - 0.5) return false
      }
    }
    return true
  }

  function allValid(R) {
    for (let i = 0; i < angles.length; i++) {
      if (!stickerValid(i, R)) return false
    }
    if (!interValid(R)) return false
    return true
  }

  let globalMinR = 0
  let globalMaxR = Infinity
  for (let i = 0; i < angles.length; i++) {
    const angleDeg = angles[i]
    const rad = (angleDeg * Math.PI) / 180
    const eD = rectEdgeDistance(rectW, rectH, angleDeg)
    const absCos = Math.abs(Math.cos(rad))
    const absSin = Math.abs(Math.sin(rad))
    const rectTan = rectH / rectW
    const rayTan = absSin / (absCos || 1e-6)
    let clearanceAlong
    if (rayTan < rectTan) {
      clearanceAlong = absCos > 0.001 ? (bboxRs[i] + gapPx) / absCos : bboxRs[i] + gapPx
    } else {
      clearanceAlong = absSin > 0.001 ? (bboxRs[i] + gapPx) / absSin : bboxRs[i] + gapPx
    }
    const minR_i = eD + clearanceAlong
    if (minR_i > globalMinR) globalMinR = minR_i
    const dirX = Math.cos(rad)
    const dirY = -Math.sin(rad)
    const bboxR = bboxRs[i]
    const maxRs = []
    if (dirX > 0.001) maxRs.push((vw - sideSafePad - bboxR - cx0) / dirX)
    if (dirX < -0.001) maxRs.push((sideSafePad + bboxR - cx0) / dirX)
    if (dirY > 0.001) maxRs.push((vh - botSafePad - bboxR - cy0) / dirY)
    if (dirY < -0.001) maxRs.push((topSafePad + bboxR - cy0) / dirY)
    for (const mr of maxRs) {
      if (mr > 0 && mr < globalMaxR) globalMaxR = mr
    }
  }
  if (globalMaxR === Infinity) globalMaxR = globalMinR + 400
  if (globalMinR <= globalMaxR + 1) {
    let lo = globalMinR
    let hi = Math.min(globalMaxR, globalMinR + 500)
    let best = globalMinR
    for (let iter = 0; iter < 32; iter++) {
      const mid = (lo + hi) / 2
      if (allValid(mid)) {
        best = mid
        lo = mid
      } else {
        hi = mid
      }
    }
    return { valid: true, R: best, scale: tryScale }
  }
  return { valid: false }
}

function computeGlobalRadius(pw, ph, estScale, vw, vh, avRect) {
  const MIN_ACCEPT_SCALE = 0.25
  const vertical = false
  const angles = FIXED_ANGLES.slice()
  let curScale = estScale
  for (let s = 0; s < 40; s++) {
    const result = tryRadiusForAngles(pw, ph, curScale, vw, vh, avRect, angles)
    if (result.valid) {
      result.centerGap = 0
      result.angles = angles
      result.vertical = vertical
      return result
    }
    curScale *= 0.92
    if (curScale < MIN_ACCEPT_SCALE) break
  }
  const fb = tryRadiusForAngles(pw, ph, MIN_ACCEPT_SCALE, vw, vh, avRect, angles)
  if (fb.valid) {
    fb.centerGap = 0
    fb.angles = angles
    fb.vertical = vertical
    return fb
  }
  const cx0 = avRect ? (avRect.left + avRect.w / 2) : (pw / 2)
  const cy0 = avRect ? (avRect.top + avRect.h / 2) : (ph / 2)
  let safeR = 60
  for (let testR = 40; testR < 180; testR += 5) {
    let ok = true
    for (let i = 0; i < angles.length; i++) {
      const rad = (angles[i] * Math.PI) / 180
      const cx = cx0 + Math.cos(rad) * testR
      const cy = cy0 - Math.sin(rad) * testR
      if (cx < 12 || cy < 12 || cx > vw - 12 || cy > vh - 12) { ok = false; break }
    }
    if (ok) safeR = testR
    else break
  }
  return { R: safeR, scale: MIN_ACCEPT_SCALE, centerGap: 0, angles: angles, vertical: vertical }
}

export default function Hero() {
  const avatarRef = useRef(null)
  const [polaroid, setPolaroid] = useState({ w: 280, h: 370 })
  const [viewport, setViewport] = useState({ w: typeof window !== 'undefined' ? window.innerWidth : 1280, h: typeof window !== 'undefined' ? window.innerHeight : 800 })
  const [avRect, setAvRect] = useState(null)
  const [avatarReady, setAvatarReady] = useState(false)

  useEffect(() => {
    const img = avatarRef.current
    if (img && img.complete && img.naturalWidth > 0) setAvatarReady(true)
  }, [])

  useEffect(() => {
    const img = avatarRef.current
    if (!img) return
    let animationFrame

    const measureViewport = () => {
      setViewport((prev) => {
        const nw = window.innerWidth
        const nh = window.innerHeight
        if (Math.abs(prev.w - nw) < 0.5 && Math.abs(prev.h - nh) < 0.5) return prev
        return { w: nw, h: nh }
      })
    }

    const measure = () => {
      const r = img.getBoundingClientRect()
      if (r.width > 0 && r.height > 0) {
        setPolaroid((prev) => {
          if (
            Math.abs(prev.w - r.width) < 0.5 &&
            Math.abs(prev.h - r.height) < 0.5
          ) {
            return prev
          }
          return { w: r.width, h: r.height }
        })
        setAvRect((prev) => {
          const next = { left: r.left, top: r.top, w: r.width, h: r.height }
          if (prev &&
              Math.abs(prev.left - next.left) < 0.5 &&
              Math.abs(prev.top - next.top) < 0.5 &&
              Math.abs(prev.w - next.w) < 0.5 &&
              Math.abs(prev.h - next.h) < 0.5) return prev
          return next
        })
      }
      measureViewport()
    }

    measure()
    if (img.complete) {
      animationFrame = requestAnimationFrame(measure)
    }
    img.addEventListener('load', measure)

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(measure)
    })
    ro.observe(img)
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrame)
      img.removeEventListener('load', measure)
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure)
      ro.disconnect()
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-stamp">
            <span className="stamp-yr">2027</span>
            <span className="stamp-line" />
            <span className="stamp-txt">AI Product<br />Journal ✿</span>
          </div>

          <span className="hero-doodle d-moon">
            <svg className="ps-doodle" viewBox="0 0 40 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-moon" /></svg>
          </span>
          <span className="hero-doodle d-cloud">
            <svg className="ps-doodle" viewBox="0 0 60 40" style={{color:'var(--ink-body)'}}><use href="#ps-cloud" /></svg>
          </span>
          <span className="hero-doodle d-leaf">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-leaf" /></svg>
          </span>
          <span className="hero-doodle d-sparkle">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-sparkle" /></svg>
          </span>
          <span className="hero-doodle d-star">
            <svg className="ps-doodle" viewBox="0 0 50 50" style={{color:'var(--ps-yellow)'}}><use href="#ps-star" /></svg>
          </span>
          <span className="hero-doodle d-plane">
            <svg className="ps-doodle" viewBox="0 0 60 48" style={{color:'var(--ink-body)'}}><use href="#ps-plane" /></svg>
          </span>
          <span className="hero-doodle d-paperclip">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-paperclip" /></svg>
          </span>
          <span className="hero-doodle d-coffee">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-coffee" /></svg>
          </span>
          <span className="hero-doodle d-flower">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-flower" /></svg>
          </span>
          <span className="hero-doodle d-lightning">
            <svg className="ps-doodle" viewBox="0 0 40 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-lightning" /></svg>
          </span>
          <span className="hero-doodle d-pencil">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-pencil" /></svg>
          </span>
          <span className="hero-doodle d-heart-doodle">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-heart-fill" /></svg>
          </span>
          <span className="hero-doodle d-arrow-doodle">
            <svg className="ps-doodle" viewBox="0 0 100 40" style={{color:'var(--ps-red)'}}><use href="#ps-arrow" /></svg>
          </span>
          <span className="hero-doodle d-bulb-doodle">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-i-bulb" /></svg>
          </span>

          <div className="hero-copy reveal">
            <h1 className="hero-name">
              <span className="h1-line">
                <span className="h1-blue ps-cn" data-text="丁世贤">丁世贤</span>
              </span>
              <span className="h1-line h1-en">
                Shixian Ding.
              </span>
            </h1>
            <div className="hero-intro">
              <p className="intro-line i1">
                学过<mark className="mark-ul">计算机</mark>，也学过<mark className="mark-ul">设计</mark>
              </p>
              <p className="intro-line i2">
                在 AI 刚火的时候，就想当 <mark className="mark-circle">AI 产品经理</mark>
              </p>
              <p className="intro-line i3">
                出发！目标是做出<mark className="mark-ul">真的好用</mark>的产品
              </p>
              <p className="intro-line i4">
                用<mark className="mark-ul">设计思维</mark>和<mark className="mark-ul">技术能力</mark>，解决<mark className="mark-ul">现实问题</mark>
              </p>
            </div>

            <div className="hero-tabs-wrap">
              <div className="hero-tabs">
                {tabs.map((t) => (
                  <a
                    key={t.label}
                    href={t.to}
                    className={`ps-pill ${t.color} hero-pill`}
                    style={{ '--r': `${t.rotate}deg` }}
                  >
                    <span className="ps-pill-icon">
                      <svg viewBox="0 0 48 48"><use href={`#${t.icon}`} /></svg>
                    </span>
                    <span className="ps-pill-text ps-cn">{t.label}</span>
                  </a>
                ))}
              </div>
              <span className="tab-doodle td-heart">
                <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-heart-fill" /></svg>
              </span>
            </div>
          </div>

          <div className="hero-avatar">
            {(() => {
              const estScale = computeScaleFactor(viewport.w, avRect, polaroid.w)
              const result = computeGlobalRadius(polaroid.w, polaroid.h, estScale, viewport.w, viewport.h, avRect)
              const { R, scale: realScale, angles } = result
              return stickerDefs.map((s, i) => {
                const angleDeg = angles[i]
                const rad = (angleDeg * Math.PI) / 180
                const dx = Math.cos(rad) * R
                const dy = -Math.sin(rad) * R
                const scaledSize = s.baseSize * realScale
                return (
                  <img
                    key={i}
                    src={s.src}
                    alt=""
                    className="avatar-sticker"
                    style={{
                      width: scaledSize,
                      '--dx': `${dx}px`,
                      '--dy': `${dy}px`,
                      '--rot': `${s.rot}deg`,
                      '--delay': `${s.delay}ms`,
                    }}
                  />
                )
              })
            })()}
            <img
              ref={avatarRef}
              src={avatarSrc}
              alt="丁世贤"
              className={`avatar-img${avatarReady ? ' is-loaded' : ''}`}
              width={700}
              height={930}
              fetchPriority="high"
              onLoad={() => setAvatarReady(true)}
              onError={() => setAvatarReady(true)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
