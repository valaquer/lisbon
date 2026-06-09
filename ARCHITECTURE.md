# ARCHITECTURE.md -- Project Lisbon

Last updated: 2026-06-09 (Daksh -- REQ-016b finesse, Ember build state)

---

## Directory Structure

```
lisbon/
├── src/
│   ├── app.css              # Global styles: Tailwind v4, Google Fonts @import (Cormorant, Inter, JetBrains Mono), iA Writer Quattro @font-face, color tokens via @theme
│   ├── app.d.ts             # SvelteKit type declarations
│   ├── app.html             # HTML shell + Turnstile script tag (REQ-007)
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Nav.svelte           # Wordmark SVG + CTA button, scoped CSS (REQ-013)
│   │   │   ├── Hero.svelte          # Sophie full-bleed bg + headline + EmailCapture (REQ-013)
│   │   │   ├── EmailCapture.svelte  # Reusable email input + CTA button (REQ-013, used in Hero + Footer)
│   │   │   ├── PromiseCard.svelte   # 5 memory-escalation cards, hover-expand, squircle (REQ-014)
│   │   │   ├── TrustBar.svelte      # Glassmorphic 2x3 card, 6 pillars, magenta backlight (REQ-016a)
│   │   │   ├── ChatVignette.svelte  # PLACEHOLDER -- phone + desktop modes (REQ-015 pending)
│   │   │   ├── RosterGrid.svelte    # Desktop 6-col + mobile 6-row grid with wings (REQ-016b)
│   │   │   └── Footer.svelte        # PLACEHOLDER -- CTA + footer links + watermark (REQ-017 pending)
│   │   ├── data/
│   │   │   ├── roster.ts            # 16 girls (4 rows x 4), RosterGirl type (REQ-012)
│   │   │   ├── conversations.ts     # Sophie, Avery, Hina message arrays, ChatMessage type (REQ-012)
│   │   │   └── promise-cards.ts     # 5 cards with heading, body, image, rotation (REQ-012)
│   │   ├── server/
│   │   │   ├── supabase.ts          # Supabase clients -- anon + service role (REQ-007, REQ-008)
│   │   │   └── resend.ts            # Resend client -- sendVerificationEmail (REQ-009)
│   │   └── index.ts                 # Lib barrel export
│   └── routes/
│       ├── +layout.svelte           # Root layout -- imports app.css
│       ├── +page.svelte             # Landing page -- 8 blocks in mockup order (REQ-012)
│       ├── +page.ts                 # prerender=true
│       ├── privacy/
│       │   ├── +page.svelte         # Privacy policy (REQ-010)
│       │   └── +page.ts             # prerender=true
│       ├── verify/
│       │   ├── +page.server.ts      # Token verify, 48h expiry, token nullification (REQ-008)
│       │   └── +page.svelte         # Verify confirmation page (REQ-008)
│       └── api/
│           └── signup/
│               └── +server.ts       # POST: Turnstile + honeypot + Supabase INSERT + Resend (REQ-007, REQ-009)
├── static/
│   ├── fonts/
│   │   ├── iAWriterQuattroV.ttf         # Self-hosted variable TTF
│   │   └── iAWriterQuattroV-Italic.ttf  # Self-hosted variable TTF (italic)
│   ├── provoque-wordmark.svg            # Nav bar wordmark
│   ├── sophie-hero-wide.jpg             # Hero background (desktop)
│   ├── sophie-afj.jpg                   # Hero background (mobile portrait)
│   ├── sophie-af*.jpg, sophie-ah*.jpg, sophie-aj*.jpg  # Promise card photos
│   ├── *-face.jpg                       # Chat avatars (sophie, avery, hina)
│   ├── avery-aec.jpg, hina-agk.jpg     # In-chat selfies
│   ├── valentina-*.jpg, jiwoo-*.jpg, sara-*.jpg, nadia-*.jpg, hina-*.jpg, adaeze-*.jpg, girl-*.jpg  # Roster grid photos
│   └── robots.txt
├── supabase/
│   ├── config.toml
│   └── migrations/
│       └── 20260601000000_create_waitlist.sql  # REQ-006
├── svelte.config.js
├── vite.config.ts
├── package.json
└── tsconfig.json
```

---

## Dependency Graph

```
app.html (Turnstile script)
  └── +layout.svelte (root layout)
        ├── app.css (Tailwind v4, Google Fonts @import, @theme tokens, iA Writer @font-face)
        │
        ├── routes/+page.svelte (landing page -- 8 blocks)
        │     ├── Nav.svelte (wordmark + CTA)
        │     ├── Hero.svelte
        │     │     └── EmailCapture.svelte (visual only -- not wired to backend yet)
        │     ├── PromiseCard.svelte (x5, from promise-cards.ts)
        │     ├── TrustBar.svelte
        │     ├── ChatVignette.svelte (Avery phone + Hina desktop, from conversations.ts)
        │     ├── RosterGrid.svelte (from roster.ts)
        │     │     └── mobileWings[] (derived from roster.ts girls, offset-by-5 pattern)
        │     └── Footer.svelte (placeholder)
        │
        ├── routes/privacy/+page.svelte (REQ-010)
        ├── routes/verify/ (REQ-008)
        │     └── $lib/server/supabase.ts (service role)
        └── routes/api/signup/ (REQ-007, REQ-009)
              ├── $lib/server/supabase.ts (anon key)
              └── $lib/server/resend.ts
```

**External dependencies:**
- Supabase (Frankfurt, eu-central-1) -- waitlist table, Pro plan
- Resend -- confirmation emails from hello@provoque.ai
- Cloudflare Turnstile -- invisible CAPTCHA
- Google Fonts CDN -- Cormorant Garamond, Inter, JetBrains Mono
- GSAP 3.15.0 + ScrollTrigger (npm, not yet used -- REQ-015)

---

## Data Flow

**Page blocks (current state):**
```
+page.svelte renders 8 blocks in order:
  1. Nav (static)
  2. Hero (static + EmailCapture visual)
  3. Promise Cards (5x from promise-cards.ts)
  4. TrustBar (static)
  5. ChatVignette Avery (placeholder -- REQ-015)
  6. RosterGrid (16 girls from roster.ts, desktop 6-col + mobile 6-row with wings)
  7. ChatVignette Hina (placeholder -- REQ-015)
  8. Footer (placeholder -- REQ-017)
```

**Signup flow (REQ-007/008/009, unchanged):**
```
User submits form -> POST /api/signup -> Turnstile verify -> Supabase INSERT -> Resend email
User clicks verify link -> GET /verify?token=uuid -> Supabase SELECT/UPDATE -> confirmed
```

---

## Blast Radius Map

| File/Area | What depends on it | Risk if changed |
|-----------|-------------------|-----------------|
| app.css | Every component via @theme tokens + @import fonts | Global style breakage -- colors, fonts, all 8 blocks |
| +page.svelte | Block ordering, component imports, data passing | Page structure breaks. All blocks affected |
| RosterGrid.svelte | +page.svelte, roster.ts | Grid layout, wing mapping, mask-image gradients. Desktop + mobile are separate DOM blocks |
| roster.ts | RosterGrid.svelte | Girl data (names, images, stats). 16 entries, tiled to 24 for mobile |
| conversations.ts | ChatVignette.svelte (x2) | Chat message content for Avery + Hina |
| promise-cards.ts | PromiseCard.svelte (x5) | Card text + image paths |
| Hero.svelte | +page.svelte | Hero image positioning, EmailCapture placement |
| EmailCapture.svelte | Hero.svelte, Footer.svelte | Form UI (not wired to backend until REQ-018) |
| TrustBar.svelte | +page.svelte | Glassmorphic card, 6 pillars |
| Nav.svelte | +page.svelte | Wordmark + CTA, mobile breakpoint |
| static/* images | All visual components | Broken images if renamed/moved |
| api/signup/+server.ts | Form submissions (future REQ-018) | Signup breaks. Depends on supabase.ts, Turnstile, env vars |
| $lib/server/supabase.ts | api/signup, verify | All Supabase operations |

---

## Known Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| ARCHITECTURE.md was stale from REQ-009 through REQ-016b | Resolved | Updated to Ember build state (Jun 9) |
| ChatVignette.svelte is placeholder | Expected | REQ-015 pending |
| Footer.svelte is placeholder | Expected | REQ-017 pending |
| EmailCapture not wired to backend | Expected | REQ-018 pending |
| CSS percentage margins are relative to containing block WIDTH, not height | Reference | Affects mask-image gradient calculations and margin-based clipping in RosterGrid |
