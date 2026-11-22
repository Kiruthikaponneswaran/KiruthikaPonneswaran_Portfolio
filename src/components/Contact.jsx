import { useState } from 'react'
import { profile } from '../data/portfolio'
import { Icon, Reveal, SectionHead } from './ui'

const API = import.meta.env.VITE_CONTACT_API

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', text: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!API) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus({ state: 'ok', text: 'Your email app should open with the message ready to send.' })
      return
    }
    setStatus({ state: 'sending', text: 'Sending your message' })
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setForm({ name: '', email: '', message: '' })
      setStatus({ state: 'ok', text: 'Message sent. I will reply within two working days.' })
    } catch {
      setStatus({ state: 'error', text: `The message did not send. Please email ${profile.email} directly.` })
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
              <button className="btn" type="submit" disabled={status.state === 'sending'}>
                <Icon name="send" size={18} /> Send message
              </button>
              <p className={`form-status ${status.state}`} role="status">{status.text}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
