import { PROFILE } from '../data/resume'
import imgConnect from '../img/connect.webp'
import imgPoemH from '../img/poem_h.webp'

const ICON_MAP = {
  mail: 'ps-i-mail',
  phone: 'ps-i-phone',
  'message-circle': 'ps-i-chat',
}

const ArrowUp = () => (
  <svg viewBox="0 0 16 16" className="konami-doodle-svg"><path d="M8 2 L8 14 M4 6 L8 2 L12 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const ArrowDown = () => (
  <svg viewBox="0 0 16 16" className="konami-doodle-svg"><path d="M8 2 L8 14 M4 10 L8 14 L12 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const ArrowLeft = () => (
  <svg viewBox="0 0 16 16" className="konami-doodle-svg"><path d="M2 8 L14 8 M6 4 L2 8 L6 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const ArrowRight = () => (
  <svg viewBox="0 0 16 16" className="konami-doodle-svg"><path d="M2 8 L14 8 M10 4 L14 8 L10 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

export default function Contact() {
  return (
    <section className="section contact-section" id="contact" data-theme="red">
      <div className="container">
        <div className="contact-inner">
          <img className="ct-deco ct-deco-poem-h" src={imgPoemH} alt="" aria-hidden="true" loading="lazy" />

          <span className="ct-doodle ct-doodle-heart1">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-heart-fill" /></svg>
          </span>
          <span className="ct-doodle ct-doodle-heart2">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-heart-fill" /></svg>
          </span>
          <span className="ct-doodle ct-doodle-star1">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-star-fill" /></svg>
          </span>
          <span className="ct-doodle ct-doodle-star2">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-star-fill" /></svg>
          </span>
          <span className="ct-doodle ct-doodle-sparkle1">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-sparkle" /></svg>
          </span>
          <span className="ct-doodle ct-doodle-sparkle2">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-sparkle" /></svg>
          </span>
          <span className="ct-doodle ct-doodle-flower">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-flower" /></svg>
          </span>
          <span className="ct-doodle ct-doodle-coffee">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-coffee" /></svg>
          </span>
          <span className="ct-doodle ct-doodle-leaf">
            <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-leaf" /></svg>
          </span>
          <span className="ct-doodle ct-doodle-moon">
            <svg className="ps-doodle" viewBox="0 0 40 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-moon" /></svg>
          </span>

          <div className="konami-scribble" aria-hidden="true" title="try: ↑↑↓↓←→←→baba">
            <ArrowUp/><ArrowUp/><ArrowDown/><ArrowDown/>
            <ArrowLeft/><ArrowRight/><ArrowLeft/><ArrowRight/>
            <span className="k-letter">b</span><span className="k-letter">a</span><span className="k-letter">b</span><span className="k-letter">a</span>
          </div>

          <div className="connect-label reveal">
            <img src={imgConnect} alt="Let's connect!" loading="lazy" />
          </div>
          <div className="contact-pills reveal">
            {PROFILE.contacts.map((c, i) => {
              const iconId = ICON_MAP[c.icon]
              const href = c.href || (c.copy && c.icon === 'phone' ? `tel:${c.copy}` : null)
              const pill = (
                <span
                  className={`ps-pill hero-pill ${c.color || 'blue'}`}
                  style={{ '--r': `${c.rotate || 0}deg` }}
                >
                  <span className="ps-pill-icon">
                    <svg viewBox="0 0 48 48"><use href={`#${iconId}`} /></svg>
                  </span>
                  <span className="ps-pill-text ps-cn">{c.label}</span>
                </span>
              )
              return href ? (
                <a key={i} href={href} className="contact-pill-link" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {pill}
                </a>
              ) : (
                <span key={i} className="contact-pill-link">{pill}</span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
