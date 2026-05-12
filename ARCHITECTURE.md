# ARCHITECTURE.md — Project Lisbon

Last updated: 2026-05-12 (REQ-001: global styles)

---

## Directory Structure

```
lisbon/
├── src/
│   ├── app.css              # Global styles (Tailwind import, @font-face, CSS custom properties, dark theme)
│   ├── app.d.ts             # SvelteKit type declarations
│   ├── app.html             # HTML shell
│   ├── lib/
│   │   ├── assets/          # Static assets imported by components (favicon)
│   │   └── index.ts         # Lib barrel export
│   └── routes/
│       ├── +layout.svelte   # Root layout (imports app.css)
│       └── +page.svelte     # Landing page (will hold the full clone)
├── static/
│   └── fonts/                # Self-hosted fonts (Inter Tight, Geist Mono woff2)
├── svelte.config.js         # SvelteKit config (adapter)
├── vite.config.ts           # Vite config (SvelteKit + Tailwind plugins)
├── package.json
└── tsconfig.json
```

---

## Dependency Graph

```
app.html
  └── +layout.svelte (root layout)
        ├── app.css (Tailwind global styles)
        └── +page.svelte (landing page)
              ├── $lib/components/* (future: header, hero, carousel, FAQ, footer)
              └── $lib/assets/* (images, fonts)

vite.config.ts
  ├── @sveltejs/kit/vite (SvelteKit plugin)
  └── @tailwindcss/vite (Tailwind CSS plugin)

svelte.config.js
  └── @sveltejs/adapter-vercel (runtime: nodejs22.x)

app.css
  ├── @import "tailwindcss" (Tailwind v4 base)
  ├── @font-face (Inter Tight + Geist Mono, variable woff2)
  ├── :root CSS custom properties (light theme colors)
  ├── .dark overrides (dark theme colors)
  ├── @theme registration (Tailwind utility mapping)
  └── body base styles (font, bg, text color)
```

**External dependencies (future):**
- Supabase JS client -> Supabase (Frankfurt) for email storage
- Resend SDK -> Resend API for confirmation emails
- These will be server-side only (SvelteKit form actions / API routes)

---

## Data Flow

Current state: static scaffold, no data flow.

**Target state (Phase 4):**
```
User submits email form
  -> SvelteKit form action (+page.server.ts)
    -> Validate email + consent checkbox
    -> INSERT into Supabase waitlist table (email, consent, timestamp)
    -> Call Resend API to send confirmation email
    -> Return success/error to client
  -> Client shows toast notification
  -> Waitlist counter reads from Supabase (count query)
```

---

## Blast Radius Map

| File/Area | What depends on it | Risk if changed |
|-----------|-------------------|-----------------|
| app.css | Every component via +layout.svelte | Global style breakage across all sections |
| +layout.svelte | Every route | Layout/style changes affect entire site |
| vite.config.ts | Build pipeline | Build failure, Tailwind stops compiling |
| svelte.config.js | Deploy target | Deployment breaks if adapter misconfigured |
| +page.svelte | Nothing (leaf) | Low risk, isolated to landing page content |
| $lib/components/* (future) | +page.svelte | Scoped to individual sections |
| static/fonts/* | app.css @font-face declarations | Broken font rendering if paths change |
| static/* | Direct URL references | Broken images/assets if paths change |

---

## Known Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| provoque.ai domain inspect 403 | Low | Vercel API permissions quirk — domain serves correctly but `vercel domains inspect` returns 403 from company account |
