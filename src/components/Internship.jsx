import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { INTERNSHIPS } from '../data/resume'
import DetailPaperModal from './DetailPaperModal'

import logoBytedance from '../img/bytedance.webp'
import logoJd from '../img/jd.webp'
import logoHuawei from '../img/huawei.webp'
import logoCxmt from '../img/cxmt.webp'
import imgWang from '../img/wang.webp'
import imgDeco1 from '../img/decoration1.webp'
import imgLucky from '../img/lucky.webp'

const LOGO_MAP = {
  bytedance: logoBytedance,
  jd: logoJd,
  huawei: logoHuawei,
  cxmt: logoCxmt,
}

const ITEM_OFFSETS = [
  { mt: 0,   ty: 0,   rot: -0.8, logoRot: 5,  logoDy: -2 },
  { mt: -90, ty: 8,   rot: 0.8,  logoRot: -6, logoDy: -8 },
  { mt: -70, ty: -6,  rot: -0.6, logoRot: 4,  logoDy: 0 },
  { mt: -90, ty: 6,   rot: 0.7,  logoRot: -5, logoDy: -6 },
]

function InternCard({ job, index, onShowDetail }) {
  const [open, setOpen] = useState(false)
  const isLeft = index % 2 === 0
  const logo = LOGO_MAP[job.logo]
  const off = ITEM_OFFSETS[index] || {}

  const itemStyle = {
    marginTop: off.mt ? `${off.mt}px` : undefined,
    zIndex: index + 1,
  }
  const cardStyle = {
    transform: `translateY(${off.ty || 0}px) rotate(${off.rot || 0}deg)`,
  }
  const logoStyle = {
    transform: `rotate(${off.logoRot || 0}deg) translateY(${off.logoDy || 0}px)`,
  }

  return (
    <div
      className={`tl-item ${isLeft ? 'tl-left' : 'tl-right'}`}
      style={itemStyle}
    >
      <div className="tl-dot" />

      <div
        className={`tl-card ${open ? 'tl-card--open' : ''}`}
        style={cardStyle}
      >
        {logo && (
          <img
            className={`tl-logo ${isLeft ? 'tl-logo-left' : 'tl-logo-right'}`}
            src={logo}
            alt={job.company}
            loading="lazy"
            style={logoStyle}
          />
        )}

        <div className="tl-topline">
          <span className="tl-date">{job.date}</span>
        </div>

        <div className="tl-company">
          <span className="tl-company-cn">{job.company}</span>
          <span className="tl-dept-hand">{job.dept}</span>
        </div>

        <div className="tl-role-line">
          <span className="tl-role">{job.role}</span>
          <span className="tl-focus-badge">{job.focus}</span>
        </div>

        <div className="tl-keywords">
          {job.keywords.map((kw, i) => (
            <span className="tl-kw" key={i}>{kw}</span>
          ))}
        </div>

        <p className="tl-summary">{job.summary}</p>

        {job.sections && job.sections.length > 0 && (
          <button
            className="tl-detail-btn"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <>收起详情 <ChevronUp size={14} /></>
            ) : (
              <>查看详情 <ChevronDown size={14} /></>
            )}
          </button>
        )}

        {open && job.sections && job.sections.length > 0 && (
          <div className="tl-detail">
            {job.sections.map((sec, j) => (
              <div className="tl-section" key={j}>
                <div className="tl-section-title">{sec.title}</div>
                <ul className="tl-list">
                  {sec.items.map((item, k) => (
                    <li key={k} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
                {sec.detail && (
                  <button
                    type="button"
                    className="tl-see-doodle"
                    onClick={() => onShowDetail(sec)}
                    aria-label={`查看「${sec.title}」${sec.detail.type === 'html' ? '演示' : '图示'}`}
                  >
                    <svg className="tl-see-icon" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <path
                        d="M12.6 5.6 C16.9 5.3 20 8.5 19.8 12.7 C19.6 16.5 16.7 19.4 12.9 19.3 C9 19.2 6.1 16.2 6.3 12.3 C6.5 8.7 9.1 5.9 12.6 5.6 Z"
                        stroke="currentColor"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.7 17.5 L23 22.9"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22.4 3.4 L23.1 5.1 L24.9 5.8 L23.1 6.5 L22.4 8.2 L21.7 6.5 L19.9 5.8 L21.7 5.1 Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="tl-see-label">
                      {sec.detail.cta || (sec.detail.type === 'html' ? '点我看演示' : '点我看图解')}
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Internship() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="section experience sec-intern" id="internship" data-theme="red">
      <div className="container">
        <span className="tl-doodle tl-doodle-plane">
          <svg className="ps-doodle" viewBox="0 0 60 48" style={{color:'var(--ink-body)'}}><use href="#ps-plane" /></svg>
        </span>
        <span className="tl-doodle tl-doodle-bulb">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-i-bulb" /></svg>
        </span>
        <span className="tl-doodle tl-doodle-star1">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-star-fill" /></svg>
        </span>
        <span className="tl-doodle tl-doodle-star2">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-star-fill" /></svg>
        </span>
        <span className="tl-doodle tl-doodle-coffee">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-coffee" /></svg>
        </span>
        <span className="tl-doodle tl-doodle-leaf">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-leaf" /></svg>
        </span>
        <span className="tl-doodle tl-doodle-flower">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-flower" /></svg>
        </span>
        <span className="tl-doodle tl-doodle-heart">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-heart-fill" /></svg>
        </span>
        <span className="tl-doodle tl-doodle-lightning">
          <svg className="ps-doodle" viewBox="0 0 40 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-lightning" /></svg>
        </span>
        <span className="tl-doodle tl-doodle-check">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-i-check" /></svg>
        </span>

        <img className="tl-deco tl-deco-wang" src={imgWang} alt="" aria-hidden="true" loading="lazy" />
        <img className="tl-deco tl-deco-lucky" src={imgLucky} alt="" aria-hidden="true" loading="lazy" />
        <img className="tl-deco tl-deco-fence" src={imgDeco1} alt="" aria-hidden="true" loading="lazy" />

        <div className="eyebrow reveal">/ 02 — Internship</div>
        <h2 className="reveal edu-title"><span className="hl-text">实习经历</span></h2>

        <div className="tl-wrap reveal">
          <div className="tl-line" />
          {INTERNSHIPS.map((job, i) => (
            <InternCard
              job={job}
              index={i}
              key={i}
              onShowDetail={(sec) => setLightbox({ title: sec.title, detail: sec.detail })}
            />
          ))}
        </div>
      </div>

      <DetailPaperModal data={lightbox} onClose={() => setLightbox(null)} />
    </section>
  )
}
