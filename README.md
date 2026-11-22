# Kiruthika Ponneswaran | Portfolio

React + Vite portfolio with a black and gold theme. Node powers the build and an optional contact-form server.

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

## 5. Contact form

GitHub Pages hosts static files only, so a Node server cannot run there.

- **Default (no setup):** the form opens the visitor's email app with the message filled in.
- **With the Node server (optional):** deploy `/server` to Render, Railway or Fly.io, copy
  `server/.env.example` to `server/.env`, then set `VITE_CONTACT_API` (copy `.env.example` to `.env`,
  or add a repository variable of the same name for the GitHub Actions build) to
  `https://<your-server>/api/contact`. Run it locally with `cd server && npm install && npm start`.
