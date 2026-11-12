import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const {
  PORT = 5000,
  ALLOWED_ORIGIN = '',
  TO_EMAIL,
  RESEND_API_KEY,
  FROM_EMAIL = 'Portfolio <onboarding@resend.dev>',
} = process.env

if (!RESEND_API_KEY || !TO_EMAIL) {
  console.warn('Set RESEND_API_KEY and TO_EMAIL, otherwise messages cannot be sent.')
}

const app = express()
app.set('trust proxy', 1) // behind Render/Railway proxies, so req.ip is the visitor
app.use(express.json({ limit: '10kb' }))

const origins = ALLOWED_ORIGIN.split(',').map((s) => s.trim()).filter(Boolean)
app.use(cors({ origin: origins.length ? [...origins, 'http://localhost:5173'] : true }))

// Tiny in-memory rate limit: 5 messages per IP per 15 minutes
const hits = new Map()
const limited = (ip) => {
  const now = Date.now()
  const list = (hits.get(ip) || []).filter((t) => now - t < 15 * 60 * 1000)
  list.push(now)
  hits.set(ip, list)
  return list.length > 5
}

const clean = (s, max) => String(s ?? '').trim().slice(0, max)
const emailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)

app.get('/', (_req, res) => res.send('Portfolio contact server is running.'))
app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.post('/api/contact', async (req, res) => {
  const body = req.body || {}
  if (body.website) return res.json({ ok: true }) // honeypot: bots fill hidden fields
  if (limited(req.ip)) return res.status(429).json({ error: 'Too many messages. Try again later.' })

  const name = clean(body.name, 100)
  const email = clean(body.email, 150)
  const message = clean(body.message, 4000)
  if (!name || !emailOk(email) || !message) {
    return res.status(400).json({ error: 'Name, a valid email and a message are required.' })
  }
  if (!RESEND_API_KEY || !TO_EMAIL) return res.status(500).json({ error: 'Server is not configured.' })

  try {
    // Resend's HTTPS API: works on free hosts that block SMTP ports
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        text: `${message}\n\n---\nFrom: ${name} <${email}>`,
      }),
      signal: AbortSignal.timeout(15000),
    })
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text())
      return res.status(502).json({ error: 'Could not send the message.' })
    }
    res.json({ ok: true })
  } catch (err) {
    console.error('Send failed:', err.message)
    res.status(502).json({ error: 'Could not send the message.' })
  }
})

app.listen(PORT, () => console.log(`Contact server listening on port ${PORT}`))
