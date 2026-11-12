import { profile, asset } from '../data/portfolio'
import { useTypewriter } from '../hooks'
import { Icon, SmartImage } from './ui'
import Particles from './Particles'

function Crest() {
  return (
    <div className="crest" data-seq style={{ '--i': 2 }}>
      <svg className="crest-ring" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <path id="ringPath" d="M200,200 m-170,0 a170,170 0 1,1 340,0 a170,170 0 1,1 -340,0" />
          <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F1DDA0" />
            <stop offset="1" stopColor="#A27B26" />
          </linearGradient>
        </defs>
        <g className="ring-spin">
          <text className="ring-text" fill="url(#goldStroke)">
            <textPath href="#ringPath" textLength="1060" lengthAdjust="spacing">{profile.ring}</textPath>
          </text>
        </g>
      </svg>
      <svg className="crest-line" viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r="143" pathLength="1" />
        <circle cx="200" cy="200" r="150" pathLength="1" className="thin" />
      </svg>
      <div className="crest-photo">
        <SmartImage src={profile.photo} alt={`Portrait of ${profile.name}`} fallback={profile.initials} />
      </div>
      <svg className="crown" viewBox="0 0 100 62" aria-hidden="true">
        <path pathLength="1" d="M8 54 L4 16 L30 34 L50 6 L70 34 L96 16 L92 54 Z" />
        <circle cx="4" cy="14" r="3.5" /><circle cx="50" cy="5" r="3.5" /><circle cx="96" cy="14" r="3.5" />
        <path d="M10 58 H90" className="band" />
      </svg>
      <div className="badge b1"><strong>10,000+</strong><span>daily ERP users</span></div>
      <div className="badge b2"><strong>Claude + GPT</strong><span>API integrations</span></div>
    </div>
  )
}

export default function Hero() {
  const role = useTypewriter(profile.roles)
  return (
    <section id="home" className="hero">
      <Particles />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="avail" data-seq style={{ '--i': 0 }}>
            <span className="pulse" /> Available immediately in the UAE
          </p>
          <h1 data-seq style={{ '--i': 1 }} aria-label={profile.name}>
            <span className="gold-text">{profile.first}</span>
            <span className="gold-text">{profile.last}</span>
          </h1>
          <p className="role" data-seq style={{ '--i': 2 }} aria-live="off">
            {role}<span className="caret" aria-hidden="true" />
          </p>
          <p className="tagline" data-seq style={{ '--i': 3 }}>{profile.tagline}</p>
          <div className="cta" data-seq style={{ '--i': 4 }}>
            <a className="btn" href="#projects">See my work</a>
            <a className="btn btn-ghost" href={asset(profile.resume)} target="_blank" rel="noreferrer">
              <Icon name="download" size={18} /> Download resume
            </a>
          </div>
          <div className="socials" data-seq style={{ '--i': 5 }}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
            <span className="loc"><Icon name="pin" size={16} /> {profile.location}</span>
          </div>
        </div>
        <Crest />
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About"><i /></a>
    </section>
  )
}
