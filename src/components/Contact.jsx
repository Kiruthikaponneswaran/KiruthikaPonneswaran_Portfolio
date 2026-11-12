import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'
import { Icon, Reveal, SectionHead } from './ui'

const API = import.meta.env.VITE_CONTACT_API
const HEALTH = API ? API.replace(/\/contact\/?$/, '/health') : ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' })
  const [status, setStatus] = useState({ state: 'idle', text: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Free hosts put idle servers to sleep. Ping once on load so it is awake when visitors send.
  useEffect(() => {
    if (HEALTH) fetch(HEALTH).catch(() => {})
  }, [])

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!API) {
      mailtoFallback()
      setStatus({ state: 'ok', text: 'Opening your email app with this message.' })
      return
    }
    setStatus({ state: 'sending', text: 'Sending your message. The first one can take up to a minute.' })
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 60000)
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: ctrl.signal,
      })
      if (res.status === 429) throw new Error('rate')
      if (!res.ok) throw new Error('fail')
      setForm({ name: '', email: '', message: '', website: '' })
      setStatus({ state: 'ok', text: 'Message sent. I will reply within two working days.' })
    } catch (err) {
      setStatus({
        state: 'error',
        text: err.message === 'rate'
          ? 'Too many messages from this device. Please try again later.'
          : `The message did not send. Please try again, or email ${profile.email} directly.`,
      })
    } finally {
      clearTimeout(timer)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead title="Let's work together" lead="I am in Abu Dhabi and can start immediately. Tell me about the role or project." />
        <div className="contact-grid">
          <Reveal className="contact-info">
            <a className="info-row" href={`mailto:${profile.email}`}><Icon name="mail" /><span>{profile.email}</span></a>
            <a className="info-row" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Icon name="phone" /><span>{profile.phone}</span></a>
            <div className="info-row"><Icon name="pin" /><span>{profile.location} ({profile.visa})</span></div>
            <a className="info-row" href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /><span>LinkedIn</span></a>
            <a className="info-row" href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" /><span>GitHub</span></a>
          </Reveal>
          <Reveal delay={120}>
            <form className="card form" onSubmit={submit}>
              <label>Your name
                <input required value={form.name} onChange={set('name')} autoComplete="name" />
              </label>
              <label>Your email
                <input required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
              </label>
              <label>Message
                <textarea required rows={5} value={form.message} onChange={set('message')} />
              </label>
              {/* Honeypot: hidden from people, filled by bots */}
              <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true"
                value={form.website} onChange={set('website')} />
              <button className="btn" type="submit" disabled={status.state === 'sending'}>
                <Icon name="send" size={18} /> {status.state === 'sending' ? 'Sending' : 'Send message'}
              </button>
              <p className={`form-status ${status.state}`} role="status">{status.text}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
