import { Fragment, useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, FileText } from 'lucide-react'

const LINK_ICON = { github: Github, 'file-text': FileText }

const renderCell = (cell) => (
  typeof cell === 'string'
    ? cell.split(/([↑↓])/g).map((seg, i) => (
        seg === '↑' || seg === '↓'
          ? <span key={i} className="t-arrow">{seg}</span>
          : seg
      ))
    : cell
)

// 行内标记：[[重点]] → 红色手绘下划线
const richInline = (text) =>
  text.split(/(\[\[[^\]]+?\]\])/g).map((seg, i) => {
    if (seg.startsWith('[[') && seg.endsWith(']]')) {
      return <mark key={i} className="hl-ru">{seg.slice(2, -2)}</mark>
    }
    return <Fragment key={i}>{seg}</Fragment>
  })

// 块级文本：\n 分行渲染为短句
const RichBlock = ({ text }) => (
  text.split('\n').filter((l) => l.trim()).map((line, i) => (
    <p key={i} className="rich-line">{richInline(line.trim().replace(/^·\s*/, ''))}</p>
  ))
)

// 行内文本：\n → <br/>（用于 setup 键值等不适合分块的场景）
const richBreaks = (text) =>
  text.split('\n').map((line, i, arr) => (
    <Fragment key={i}>{richInline(line)}{i < arr.length - 1 && <br />}</Fragment>
  ))

export default function ProjectDrawer({ project, onClose }) {
  const [mounted, setMounted] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [zoom, setZoom] = useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      setMounted(true)
      setZoom(null)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true))
      })
      return () => { document.body.style.overflow = '' }
    } else {
      setMounted(false)
      setAnimating(false)
    }
  }, [project])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (zoom) setZoom(null)
        else handleClose()
      }
    }
    if (project) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose, zoom])

  const handleClose = () => {
    if (closeTimer.current) return
    setAnimating(false)
    closeTimer.current = setTimeout(() => {
      setMounted(false)
      closeTimer.current = null
      onClose()
    }, 580)
  }

  if (!project || !mounted) return null

  return (
    <>
      <div className={`drawer-backdrop ${animating ? 'open' : ''}`} onClick={handleClose} />
      <aside className={`drawer ${animating ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="drawer-head">
          <div className="drawer-title">{project.title}</div>
        </div>
        <button className="drawer-close-note" onClick={handleClose} aria-label="Close">
          <svg viewBox="0 0 36 44" className="note-svg">
            <rect x="3" y="2" width="30" height="38" rx="2" fill="#f5eec2" stroke="#2b2295" strokeWidth="1.2" filter="url(#ps-edge-soft)" />
            <rect x="3" y="2" width="30" height="8" rx="2" fill="rgba(200,190,120,0.25)" />
            <line x1="8" y1="16" x2="28" y2="16" stroke="rgba(43,34,149,0.15)" strokeWidth="0.8" />
            <line x1="8" y1="22" x2="28" y2="22" stroke="rgba(43,34,149,0.15)" strokeWidth="0.8" />
            <line x1="8" y1="28" x2="28" y2="28" stroke="rgba(43,34,149,0.15)" strokeWidth="0.8" />
            <path d="M12 15 L 24 31 M 24 15 L 12 31" stroke="#bb3942" strokeWidth="2.2" strokeLinecap="round" filter="url(#ps-edge-soft)" />
          </svg>
        </button>
        <div className="drawer-body">
          {!project.visualImg && (
            <div className={`drawer-hero ${project.visualClass}`}>{project.visualText}</div>
          )}

          {project.subtitle && <p className="drawer-subtitle">{project.subtitle}</p>}

          <div className="drawer-meta">
            <div className="drawer-chips">
              {project.cat.split(' · ').map((c, i) => (
                <span key={i} className="chip">{c}</span>
              ))}
            </div>
            {project.period && <span className="drawer-period">{project.period}</span>}
          </div>

          <div className="drawer-links drawer-links-top">
            {project.links.map((l, i) => {
              const Icon = LINK_ICON[l.icon] || ExternalLink
              return (
                <a key={i} href={l.href} target="_blank" rel="noopener" className="btn-ghost drawer-link">
                  <Icon size={15} /> {l.label}
                </a>
              )
            })}
          </div>

          <div className="drawer-section">
            <h4>研究背景 · Background</h4>
            <RichBlock text={project.problem} />
            {project.bgFigure && (
              <figure className="drawer-figure">
                <img
                  src={project.bgFigure.src}
                  alt={project.bgFigure.caption}
                  className="zoomable-img"
                  onClick={() => setZoom({ src: project.bgFigure.src, caption: project.bgFigure.caption })}
                />
                <figcaption>{richInline(project.bgFigure.caption)}</figcaption>
              </figure>
            )}
          </div>

          <div className="drawer-section">
            <h4>所提方法 · Proposed Method</h4>
            {project.stages ? (
              <>
                {project.visualImg && (
                  <figure className="drawer-figure">
                    <img
                      src={project.visualImg}
                      alt={`${project.title} 方法框架图`}
                      className="zoomable-img"
                      onClick={() => setZoom({ type: 'image', src: project.visualImg, caption: project.frameworkCaption || '图 · 方法框架总览。' })}
                    />
                    <figcaption>{richInline(project.frameworkCaption || '图 · 方法框架总览。')}</figcaption>
                  </figure>
                )}
                {project.video && (
                  <figure className="drawer-figure">
                    <video
                      src={project.video.src}
                      className="drawer-video"
                      preload="metadata"
                      controls
                      playsInline
                    />
                    <figcaption>{richInline(project.video.caption)}</figcaption>
                  </figure>
                )}
                <div className="stage-list">
                  {project.stages.map((s, i) => (
                    <div className="stage-card" key={i}>
                      <div className="stage-no">{s.n}</div>
                      <div className="stage-body">
                        <div className="stage-t">{s.t}<span className="stage-en">{s.en}</span></div>
                        <RichBlock text={s.d} />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <RichBlock text={project.approach} />
            )}
          </div>

          {project.implementation && (
            <div className="drawer-section">
              <h4>系统实现 · Implementation</h4>
              {project.implementation.stack && (
                <div className="impl-stack">
                  <span className="setup-k">技术栈</span>
                  <div className="drawer-chips">
                    {project.implementation.stack.map((s, i) => (
                      <span key={i} className="chip">{s}</span>
                    ))}
                  </div>
                </div>
              )}
              {project.implementation.fig && (
                <figure className="drawer-figure">
                  <img
                    src={project.implementation.fig.src}
                    alt={project.implementation.fig.caption}
                    className="zoomable-img"
                    onClick={() => setZoom({ src: project.implementation.fig.src, caption: project.implementation.fig.caption })}
                  />
                  <figcaption>{richInline(project.implementation.fig.caption)}</figcaption>
                </figure>
              )}
              {project.implementation.video && (
                <figure className="drawer-figure">
                  <video
                    src={project.implementation.video.src}
                    className="drawer-video"
                    preload="metadata"
                    controls
                    playsInline
                  />
                  <figcaption>{richInline(project.implementation.video.caption)}</figcaption>
                </figure>
              )}
              {project.implementation.flows && project.implementation.flows.map((f, i) => (
                <figure className="drawer-figure" key={i}>
                  <img
                    src={f.src}
                    alt={f.caption}
                    className="zoomable-img"
                    onClick={() => setZoom({ src: f.src, caption: f.caption })}
                  />
                  <figcaption>{richInline(f.caption)}</figcaption>
                </figure>
              ))}
            </div>
          )}

          {project.setup && (
            <div className="drawer-section">
              <h4>实验设置 · Setup</h4>
              <ul className="setup-list">
                {project.setup.map((s, i) => (
                  <li key={i}><span className="setup-k">{s.k}</span><span className="setup-v">{richBreaks(s.v)}</span></li>
                ))}
              </ul>
            </div>
          )}

          {(project.tables || project.figures) && (
            <div className="drawer-section">
              <h4>实验结果 · Results</h4>
              {project.tables && project.tables.map((t, ti) => (
                <div className="result-table-wrap" key={ti}>
                  <div className="table-caption">{t.caption}</div>
                  <table className="result-table">
                    <thead>
                      <tr>{t.headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {t.rows.map((r, ri) => (
                        <tr key={ri}>
                          {r.map((cell, ci) => {
                            const hl = t.hlCols
                              ? t.hlCols.includes(ci)
                              : (ti === 0 ? ci >= 2 : ci === 1)
                            return (
                              <td
                                key={ci}
                                className={[ci === 0 ? 'td-dim' : '', hl ? 'td-hl' : ''].filter(Boolean).join(' ')}
                              >
                                {renderCell(cell)}
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {t.note && <p className="table-note">{richInline(t.note)}</p>}
                </div>
              ))}
              {project.figures && project.figures.map((f, i) => (
                <figure className="drawer-figure" key={i}>
                  <img
                    src={f.src}
                    alt={f.caption}
                    className="zoomable-img"
                    onClick={() => setZoom({ src: f.src, caption: f.caption })}
                  />
                  <figcaption>{richInline(f.caption)}</figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className="drawer-section">
            <h4>{project.conclusion ? '结论 · Conclusion' : '结果 · Result'}</h4>
            <RichBlock text={project.conclusion || project.result_long} />
          </div>
        </div>
      </aside>

      {zoom && (
        <div className="img-lightbox" onClick={() => setZoom(null)} role="dialog" aria-modal="true">
          <button className="img-lightbox-close" onClick={() => setZoom(null)} aria-label="Close">
            <svg viewBox="0 0 36 36" className="lb-close-svg">
              <circle cx="18" cy="18" r="15.5" fill="rgba(255,255,255,0.92)" stroke="#bb3942" strokeWidth="1.6" filter="url(#ps-edge-soft)" />
              <path d="M12 12 L 24 24 M 24 12 L 12 24" stroke="#bb3942" strokeWidth="2.4" strokeLinecap="round" filter="url(#ps-edge-soft)" />
            </svg>
          </button>
          <figure className="img-lightbox-fig" onClick={(e) => e.stopPropagation()}>
            <img src={zoom.src} alt={zoom.caption} />
            {zoom.caption && <figcaption>{richInline(zoom.caption)}</figcaption>}
          </figure>
        </div>
      )}
    </>
  )
}
