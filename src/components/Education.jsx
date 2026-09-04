import { EDUCATION } from '../data/resume'
import zjuSeal from '../img/zju.webp'
import ustcSeal from '../img/ustc.webp'
import idiLogo from '../img/idi.webp'
import iciLogo from '../img/ici.webp'
import driedFlower from '../img/driedflower.webp'
import iciSlogan from '../img/icislogan.webp'
import hiddenAlbum from '../img/hiddenNotForgotten.webp'

const SEALS = [zjuSeal, ustcSeal]
const SEAL_ROT = [-8, -8]
const LOGOS = { idi: idiLogo, ici: iciLogo }

export default function Education() {
  return (
    <section className="section sec-edu" id="education" data-theme="blue">
      <div className="container">
        {/* 背景涂鸦：散落在留白处，层级最低 */}
        <span className="edu-doodle ed-book">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-i-book" /></svg>
        </span>
        <span className="edu-doodle ed-pencil">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-pencil" /></svg>
        </span>
        <span className="edu-doodle ed-star1">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-star-fill" /></svg>
        </span>
        <span className="edu-doodle ed-star2">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-yellow)'}}><use href="#ps-star-fill" /></svg>
        </span>
        <span className="edu-doodle ed-sparkle">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-sparkle" /></svg>
        </span>
        <span className="edu-doodle ed-bulb">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-i-bulb" /></svg>
        </span>
        <span className="edu-doodle ed-heart">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ps-red)'}}><use href="#ps-heart-fill" /></svg>
        </span>
        <span className="edu-doodle ed-check">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-i-check" /></svg>
        </span>
        <span className="edu-doodle ed-paperclip">
          <svg className="ps-doodle" viewBox="0 0 48 48" style={{color:'var(--ink-body)'}}><use href="#ps-paperclip" /></svg>
        </span>

        {/* 右侧留白装饰：真实素材拼贴 */}
        <img className="ed-deco ed-flower" src={driedFlower} alt="" aria-hidden="true" loading="lazy" />
        <img className="ed-deco ed-slogan" src={iciSlogan} alt="" aria-hidden="true" loading="lazy" />
        <img className="ed-deco ed-album" src={hiddenAlbum} alt="" aria-hidden="true" loading="lazy" />

        <div className="eyebrow reveal">/ 01 — Education</div>
        <h2 className="reveal edu-title"><span className="hl-text">教育背景</span></h2>
        <div className="edu-list reveal">
          {EDUCATION.map((edu, i) => (
            <div className="edu-entry" key={i}>
              <img
                className="edu-seal"
                src={SEALS[i]}
                alt=""
                loading="lazy"
                style={{ transform: `rotate(${SEAL_ROT[i]}deg)` }}
              />
              <div className="edu-main">
                <div className="edu-line1">
                  <span className="edu-degree">{edu.degree}</span>
                  <span className="edu-major">{edu.major}</span>
                  <span className="edu-date">{edu.date}</span>
                </div>
                {edu.orgs.map((org, j) => (
                  org.inline ? (
                    <div className="edu-org edu-org-inline" key={j}>
                      {org.inline.map((part, k) => (
                        <a
                          key={k}
                          href={part.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="edu-org-link"
                        >
                          {part.logo && (
                            <span className="edu-org-logo">
                              <img src={LOGOS[part.logo]} alt={part.text} loading="lazy" />
                            </span>
                          )}
                          <span>{part.text}</span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="edu-org" key={j}>
                      {org.logo && (
                        <a href={org.link} target="_blank" rel="noopener noreferrer" className="edu-org-logo">
                          <img src={LOGOS[org.logo]} alt={org.text} loading="lazy" />
                        </a>
                      )}
                      {org.link ? (
                        <a href={org.link} target="_blank" rel="noopener noreferrer" className="edu-org-link">{org.text}</a>
                      ) : (
                        <span>{org.text}</span>
                      )}
                      {org.c9 && <span className="c9-stamp">C9</span>}
                    </div>
                  )
                ))}
                {edu.research && (
                  <div className="edu-research">
                    <span className="edu-research-label">研究方向：</span>
                    <span className="edu-research-body">{edu.research}</span>
                  </div>
                )}
                <div className="edu-tags">
                  {edu.tags.map((tag, j) => (
                    <span className="edu-tag" key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
