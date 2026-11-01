# Hemangi Bawa — Developer Portfolio

React + Vite, plain CSS, Lucide icons. Single page, dark violet theme.

## Structure
```
├── index.html            SEO meta, fonts
├── public/               favicon.svg, robots.txt, resume.pdf (you add this)
└── src/
    ├── data/portfolio.js ← ALL your content lives here
    ├── hooks/            useReveal (scroll reveal), useTyping (hero typing)
    ├── components/       Navbar, Hero, Terminal, About, Skills, Projects,
    │                     ProjectCard, Experience, Certifications, Contact,
    │                     Footer, BackToTop, Section
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview
```

## Add your resume
Copy your PDF to `public/resume.pdf`. The Resume button downloads it.

## Replace placeholders
Open `src/data/portfolio.js` and search for `TODO` / `YOUR-`:
- `links.email`, `links.linkedin` (GitHub is set to github.com/bawahemangi — check it)
- each project's `repo` link (a `Code (add link)` label shows until you replace `YOUR-...`)
- project `tags` marked TODO (AgriDefenderX, Campus Events, LifeSync): list only what you really used
- add `demo: 'https://...'` only for projects that are actually deployed

Also update the `<title>` and description in `index.html`.

## Deploy on Vercel
1. Push to GitHub: `git init && git add . && git commit -m "portfolio" && git remote add origin <url> && git push -u origin main`
2. vercel.com → Add New → Project → import the repo.
3. Framework preset: Vite (auto-detected). Build: `npm run build`, output: `dist`. Click Deploy.
4. Every push to `main` redeploys. Optionally add a custom domain in Project Settings → Domains.
