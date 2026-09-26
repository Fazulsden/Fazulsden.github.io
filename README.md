# fazulsden.github.io

Portfolio of **Fazul Al Rehman** — offensive security researcher and bug bounty hunter.

**Live: [fazulsden.github.io](https://fazulsden.github.io)** · served by GitHub Pages.

## Structure

- `index.html` — the whole site (hero, findings, research, skills, about, contact)
- `assets/css/style.css` — one stylesheet, dark terminal theme, design tokens on `:root`
- `assets/js/main.js` — mobile nav + reveal-on-scroll, no framework, no build step
- `assets/cv/` — the phone-redacted CV
- `.nojekyll` — serve `_`-prefixed paths untouched

## Where the content comes from

This is the **public** copy. Its content is generated from a private sibling hub
(`~/Desktop/Projects/Portfolio`). Facts, and how much of each finding may be said in public,
live in that hub's `02-research/findings.md`. **Edit there, then update here.**

The findings section follows responsible-disclosure practice: targets under active or
coordinated disclosure are shown by sector and severity only. Do not add a real
organisation name, or any reproduction detail, without checking the finding's Public level
in the hub first.

## Local preview

```bash
python -m http.server 8080   # from this folder, then open http://localhost:8080
```

## Deploy

Push to `main`. GitHub Pages serves from the repo root and deploys in about a minute. For a
user site the repo must be named `Fazulsden.github.io`.

## Updating the CV on the site

Rebuild it in the hub (`bash 01-identity/cv/build.sh`), then copy **only** the public copy:

```bash
cp ../../01-identity/cv/public/Fazul-Al-Rehman-CV.pdf assets/cv/
git add assets/cv && git commit -m "Update CV" && git push
```
