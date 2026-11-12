import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/portfolio'
import { Icon, Reveal, SectionHead, SmartImage, Tilt } from './ui'

function Modal({ project: p, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [onClose])

  const blocks = [
    ['My role', p.role],
    ['The challenge', p.challenge],
    ['How I solved it', p.solution],
    ['The result', p.outcome],
  ].filter(([, text]) => text)

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="icon-btn close" onClick={onClose} aria-label="Close case study">
          <Icon name="close" />
        </button>
        <SmartImage src={p.image} alt={`${p.title} screenshot`} fallback={p.title} className="modal-img" />
        <div className="modal-body">
          <p className="meta">{[p.kind, p.period, p.team && `Team: ${p.team}`].filter(Boolean).join('  |  ')}</p>
          <h3 id="modal-title">{p.title}</h3>
          {blocks.map(([h, t]) => (
            <section key={h}><h4>{h}</h4><p>{t}</p></section>
          ))}
          <ul className="chips small">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          {(p.links.github || p.links.live) && (
            <div className="modal-links">
              {p.links.live && (
                <a className="btn" href={p.links.live} target="_blank" rel="noreferrer">
                  <Icon name="external" size={18} /> Live demo
                </a>
              )}
              {p.links.github && (
                <a className="btn btn-ghost" href={p.links.github} target="_blank" rel="noreferrer">
                  <Icon name="github" size={18} /> Source code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead title="Projects" lead="Select a project to read the challenge, the approach and the result." />
        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}>
              <Tilt
                className="card project"
                role="button"
                tabIndex={0}
                aria-label={`Open case study: ${p.title}`}
                onClick={() => setOpen(p)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setOpen(p))}
              >
                <div className="thumb">
                  <SmartImage src={p.image} alt="" fallback={p.title} />
                  <span className="kind">{p.kind}</span>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <ul className="chips small">
                    {p.stack.slice(0, 4).map((s) => <li key={s}>{s}</li>)}
                    {p.stack.length > 4 && <li>+{p.stack.length - 4}</li>}
                  </ul>
                  <span className="more"><Icon name="expand" size={16} /> Read case study</span>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
      {open && <Modal project={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
