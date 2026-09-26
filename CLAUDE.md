# Working in this repo

This is the **public** portfolio site. Pushing to `main` deploys it to fazulsden.github.io
via GitHub Pages. Everything here is world-readable and indexed.

## The rules that matter

- **Content comes from the private hub** (`~/Desktop/Projects/Portfolio`), specifically
  `02-research/findings.md` (facts + disclosure level) and `01-identity/` (CV, links, bios).
  Edit there, then update here. Never invent a number or a status on this side.
- **Responsible disclosure is enforced on this page.** A finding is named, or shown only by
  sector, according to its Public level in the hub. `named` may use the real name;
  `anonymised` gets sector + size only; `no` does not appear at all. When in doubt, anonymise.
- **Never publish reproduction detail** — no parameters, endpoints, payloads or step-by-step.
  The site states class, severity, platform and outcome. That's the ceiling.
- **Only the phone-redacted CV** (`01-identity/cv/public/`) may live in `assets/cv/`.

## Technical

- No build step, no framework, no `node_modules`. Plain HTML/CSS/JS. Keep it that way.
- Theme is dark-only; all colors are tokens on `:root` in `assets/css/style.css`.
- `.nojekyll` and the repo name (`Fazulsden.github.io`) must not change, or Pages breaks.
