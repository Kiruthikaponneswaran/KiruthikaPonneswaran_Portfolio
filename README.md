# Kiruthika Ponneswaran | Portfolio

React + Vite portfolio with a royal indigo and gold theme. Node powers the build and an optional contact-form server.

## 1. Run it locally

```bash
npm install
npm run dev          # http://localhost:5173/KiruthikaPonneswaran_Portfolio/
```

## 2. Add your images (exact file names)

| File | What it is |
|------|------------|
| `public/images/profile.jpg` | Your portrait (shown inside the gold crest) |
| `public/images/projects/titan-erp.png` | Titan ERP screenshot |
| `public/images/projects/restaurant-erp.png` | Restaurant ERP screenshot |
| `public/images/projects/chess-platform.png` | AllReal / Sigaram64 screenshot |
| `public/images/projects/booking-system.png` | Restaurant Booking System screenshot |
| `public/images/projects/mini-inventory.png` | Mini Inventory screenshot |
| `public/certificates/python-full-stack.jpg` | Brainery Spot certificate |
| `public/certificates/hackerrank-python-basic.jpg` | HackerRank certificate |
| `public/resume/Kiruthika_Ponneswaran_Resume.pdf` | Resume (Download buttons) |

Until a file exists, the site shows a gold placeholder that prints the exact path it expects.
Prefer different names? Change the paths in `src/data/portfolio.js`.

## 3. Edit content and links

Everything lives in **`src/data/portfolio.js`**: bio, skills, experience, projects, certificates.
- Mini Inventory live demo: fill `links.live` (button appears automatically).
- Certificate verification link: fill `url` on each certificate.

## 4. Deploy to GitHub Pages

`vite.config.js` already uses `base: '/KiruthikaPonneswaran_Portfolio/'`, matching your repo name.

**Option A: one command**
```bash
npm run deploy
```
Then in the repo: Settings > Pages > Deploy from a branch > `gh-pages` / root.

**Option B: automatic on every push** (uses `.github/workflows/deploy.yml`)
Push to `main`, then Settings > Pages > Source: **GitHub Actions**.

Live URL: https://kiruthikaponneswaran.github.io/KiruthikaPonneswaran_Portfolio/

## 5. Contact form (sends real emails)

GitHub Pages hosts static files only, so the small Node server in `/server` runs on a free host
and the form calls it. The server sends mail through Resend's HTTPS API (free hosts block SMTP ports).

1. **Resend:** sign up at resend.com **with kiruthikaponneswaran3027@gmail.com** (the free plan only
   delivers to the address you signed up with), then create an API key.
2. **Render:** push the project to GitHub, then Render > New > Blueprint > pick the repo.
   It reads `render.yaml`. When asked, set `RESEND_API_KEY` (your key) and
   `TO_EMAIL` (kiruthikaponneswaran3027@gmail.com). Check `ALLOWED_ORIGIN` is
   `https://kiruthikaponneswaran.github.io`.
3. Open `https://<your-service>.onrender.com/api/health`. You should see `{"ok":true}`.
4. In the project root create `.env` (copy `.env.example`):
   `VITE_CONTACT_API=https://<your-service>.onrender.com/api/contact`
   then run `npm run deploy`. (If you deploy with GitHub Actions, add the same value as a
   repository variable named `VITE_CONTACT_API` under Settings > Secrets and variables > Actions > Variables.)

Free Render services sleep when idle. The site wakes the server as soon as the page loads, but
the very first message after a long quiet period can take up to a minute.

Without `VITE_CONTACT_API` the form falls back to opening the visitor's email app.
