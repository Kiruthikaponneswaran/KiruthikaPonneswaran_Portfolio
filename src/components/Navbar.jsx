import { useState } from 'react'
import { profile } from '../data/portfolio'
import { useScrollProgress, useScrollSpy } from '../hooks'
import { Icon } from './ui'

const LINKS = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['credentials', 'Credentials'],
  ['contact', 'Contact'],
]
const IDS = ['home', ...LINKS.map(([id]) => id)]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(IDS)
  const progress = useScrollProgress()

  return (
    <header className="nav">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label="Back to top">
          <span>{profile.initials}</span>
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn-small" href={`${import.meta.env.BASE_URL}${profile.resume}`} target="_blank" rel="noreferrer">
            <Icon name="download" size={16} /> Resume
          </a>
        </nav>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
