import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/resume'
import imgDeco2 from '../img/decoration2.png'

export default function Projects({ onOpenProject }) {
  return (
    <section className="section projects" id="projects" data-theme="blue">
      <div className="container">
        <img className="pj-deco pj-deco-flowers" src={imgDeco2} alt="" aria-hidden="true" />

        <span className="pj-doodle pj-doodle-bulb">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-i-bulb" /></svg>
        </span>
        <span className="pj-doodle pj-doodle-pencil">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-pencil" /></svg>
        </span>
        <span className="pj-doodle pj-doodle-star1">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-star-fill" /></svg>
        </span>
        <span className="pj-doodle pj-doodle-star2">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-star-fill" /></svg>
        </span>
        <span className="pj-doodle pj-doodle-sparkle1">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-sparkle" /></svg>
        </span>
        <span className="pj-doodle pj-doodle-sparkle2">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-sparkle" /></svg>
        </span>
        <span className="pj-doodle pj-doodle-flower">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-flower" /></svg>
        </span>
        <span className="pj-doodle pj-doodle-plane">
          <svg className="ps-doodle" viewBox="0 0 60 48" style={{color:'var(--ink-body)'}}><use href="#ps-plane" /></svg>
        </span>
        <span className="pj-doodle pj-doodle-cloud">
          <svg className="ps-doodle" viewBox="0 0 60 40" style={{color:'var(--ink-body)'}}><use href="#ps-cloud" /></svg>
        </span>
        <span className="pj-doodle pj-doodle-heart">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-heart-fill" /></svg>
        </span>

        <div className="eyebrow reveal">/ 03 — Research</div>
        <h2 className="reveal edu-title"><span className="hl-text">研究项目</span></h2>

        <div className="reveal">
          <div
            className="projects-grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gridAutoRows: 'auto',
            }}
          >
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="project-card"
                onClick={() => onOpenProject(p.id)}
              >
                <svg className="pen-frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <rect x="1.5" y="1.5" width="97" height="97" fill="none" stroke="currentColor" strokeWidth="1.1" rx="2" vectorEffect="non-scaling-stroke" filter="url(#ps-pen-stroke)" />
                  <rect x="1" y="1.2" width="98" height="97.6" fill="none" stroke="currentColor" strokeWidth="0.6" rx="2" vectorEffect="non-scaling-stroke" filter="url(#ps-pen-stroke-2)" />
                  <rect x="1.8" y="1.9" width="96.4" height="96.2" fill="none" stroke="currentColor" strokeWidth="0.55" rx="2" vectorEffect="non-scaling-stroke" filter="url(#ps-pen-stroke-3)" />
                  <rect x="0.8" y="0.9" width="98.4" height="98.2" fill="none" stroke="currentColor" strokeWidth="0.5" rx="2" vectorEffect="non-scaling-stroke" filter="url(#ps-pen-stroke-4)" />
                  <rect x="1.9" y="2" width="96.2" height="96" fill="none" stroke="currentColor" strokeWidth="0.45" rx="2" vectorEffect="non-scaling-stroke" filter="url(#ps-pen-stroke-5)" />
                  <rect x="1.3" y="1.3" width="97.4" height="97.4" fill="none" stroke="currentColor" strokeWidth="0.4" rx="2" vectorEffect="non-scaling-stroke" filter="url(#ps-pen-stroke)" />
                  <rect x="2.1" y="1.7" width="95.8" height="96.6" fill="none" stroke="currentColor" strokeWidth="0.35" rx="2" vectorEffect="non-scaling-stroke" filter="url(#ps-pen-stroke-2)" />
                </svg>
                <div className="proj-visual">
                  <div className="proj-tag-row">
                    <span className="mini-tag">{p.badge}</span>
                  </div>
                  {(p.coverImg || p.visualImg) ? (
                    <img className="proj-visual-img" src={p.coverImg || p.visualImg} alt={`${p.title} 封面图`} loading="lazy" />
                  ) : (
                    <div className={`proj-visual-placeholder ${p.visualClass}`}>{p.visualText}</div>
                  )}
                </div>
                <div className="proj-meta">
                  <h3>{p.title}</h3>
                  <div className="proj-result">{p.result}</div>
                  <div className="proj-tech">
                    {p.tags.map((t, i) => (
                      <span className="chip" key={i}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="proj-hint">
                  <ArrowUpRight size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
