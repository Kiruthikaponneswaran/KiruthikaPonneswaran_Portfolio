import { useEffect, useState } from 'react'
import { certificates, education } from '../data/portfolio'
import { Icon, Reveal, SectionHead, SmartImage, Tilt } from './ui'

function Lightbox({ cert, onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [onClose])
  return (
    <div className="overlay" onClick={onClose}>
      <div className="lightbox" role="dialog" aria-modal="true" aria-label={cert.title} onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn close" onClick={onClose} aria-label="Close certificate"><Icon name="close" /></button>
        <SmartImage src={cert.image} alt={`${cert.title} certificate`} fallback={cert.title} className="lightbox-img" />
      </div>
    </div>
  )
}

export default function Credentials() {
  const [open, setOpen] = useState(null)
  return (
    <section id="credentials" className="section">
      <div className="container">
        <SectionHead title="Credentials" lead="Certifications and the education behind them." />
        <div className="cert-grid">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <Tilt className="card cert" max={5}>
                <button className="cert-img" onClick={() => setOpen(c)} aria-label={`View ${c.title} certificate`}>
                  <SmartImage src={c.image} alt="" fallback={c.title} />
                  <span className="zoom"><Icon name="expand" /></span>
                </button>
                <div className="cert-body">
                  <h3>{c.title}</h3>
                  <p>{c.issuer}</p>
                  {c.url && (
                    <a className="link" href={c.url} target="_blank" rel="noreferrer">
                      Verify credential <Icon name="external" size={14} />
                    </a>
                  )}
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="edu">
          <h3>Education</h3>
          <ul>
            {education.map((e) => (
              <li key={e.title}>
                <div>
                  <strong>{e.title}</strong>
                  {e.place && <span>{e.place}</span>}
                </div>
                <div className="edu-right">
                  {e.period && <span>{e.period}</span>}
                  <span>{e.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      {open && <Lightbox cert={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
