# Md Al Momen — Portfolio

Personal portfolio website. Static site, no build step.

## Files

- `index.html` — markup
- `styles.css` — styling (editorial / academic notebook aesthetic)
- `script.js` — nav scroll state + reveal animations
- `netlify.toml` — Netlify config (caching, security headers)

## Deploy to Netlify

### Option 1: Drag & drop (fastest)

1. Go to https://app.netlify.com/drop
2. Drag the entire folder into the drop zone
3. Done — your site is live

### Option 2: Connect a Git repo (recommended)

1. Push this folder to a GitHub repo (e.g. `al-momen663/portfolio`)
2. In Netlify dashboard → **Add new site → Import an existing project**
3. Pick your repo, leave build command empty, publish directory `.`
4. Deploy

### Option 3: Netlify CLI

```bash
npm install -g netlify-cli
cd portfolio
netlify deploy --prod
```

## Custom domain

In Netlify dashboard → **Domain settings** → add your custom domain (e.g. `mdalmomen.com`). Netlify provides free SSL automatically.

## Updating content

All content is in `index.html`. To update:

- **Projects**: search for `<!-- Other projects -->` and edit cards
- **Experience**: search for `<ol class="timeline">`
- **Contact info**: search for `id="contact"`

## Adding your résumé PDF

Put your résumé file as `MD-AL-MOMEN-Resume.pdf` in this folder. The nav "Résumé" link already points to it.

## Customization

- **Accent color**: edit `--accent` in `styles.css` (line ~16)
- **Fonts**: change the Google Fonts link in `index.html` and the `--font-display`/`--font-body` variables in `styles.css`
