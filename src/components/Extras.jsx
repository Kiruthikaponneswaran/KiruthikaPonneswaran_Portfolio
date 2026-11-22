import { marquee, profile } from '../data/portfolio'
import { Icon } from './ui'

export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <i className="o1" /><i className="o2" /><i className="o3" />
    </div>
  )
}

export function Marquee() {
  const row = (hidden) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {marquee.map((m) => <li key={m}><b>✦</b>{m}</li>)}
    </ul>
  )
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">{row(false)}{row(true)}</div>
    </div>
  )
}

export function HireFloat() {
  return (
    <a className="hire-float" href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="Message Kiruthika on WhatsApp">
      <Icon name="chat" size={20} />
      <span>Hire me on WhatsApp</span>
    </a>
  )
}
