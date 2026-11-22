import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const { PORT = 5000, ALLOWED_ORIGIN, TO_EMAIL, SMTP_USER, SMTP_PASS } = process.env

app.use(express.json({ limit: '10kb' }))
app.use(cors({ origin: ALLOWED_ORIGIN ? [ALLOWED_ORIGIN, 'http://localhost:5173'] : true }))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: SMTP_USER, pass: SMTP_PASS },
})

// Tiny in-memory rate limit: 5 messages per IP per 15 minutes
const hits = new Map()
const limited = (ip) => {
  const now = Date.now()
  const list = (hits.get(ip) || []).filter((t) => now - t < 15 * 60 * 1000)
  list.push(now)
  hits.set(ip, list)
  return list.length > 5
}

const clean = (s, max) => String(s || '').trim().slice(0, max)
const emailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.post('/api/contact', async (req, res) => {
  if (limited(req.ip)) return res.status(429).json({ error: 'Too many messages. Try again later.' })
  const name = clean(req.body.name, 100)
  const email = clean(req.body.email, 150)
  const message = clean(req.body.message, 4000)
  if (!name || !emailOk(email) || !message) return res.status(400).json({ error: 'Name, valid email and message are required.' })
  try {
    await transporter.sendMail({
      from: `"Portfolio" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: `${name} <${email}>`,
      subject: `Portfolio enquiry from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    })
    res.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err.message)
    res.status(500).json({ error: 'Could not send the message.' })
  }
})

app.listen(PORT, () => console.log(`Contact server running on http://localhost:${PORT}`))
