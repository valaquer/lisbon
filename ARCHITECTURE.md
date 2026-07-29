# Lisbon -- Architecture

Last updated: 2026-07-25 (Daksh -- full rebuild from file tree)

---

## Directory Structure

```
lisbon/                                         # Landing page + waitlist signup
├── src/
│   ├── app.css                                 # Tailwind v4, Google Fonts @import (Cormorant, Inter, JetBrains Mono), iA Writer @font-face, @theme tokens, shimmer animation
│   ├── app.d.ts                                # SvelteKit type declarations
│   ├── app.html                                # HTML shell: Turnstile script, dark class, sveltekit-preload-data
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Nav.svelte                      # Wordmark SVG + CTA button
│   │   │   ├── Hero.svelte                     # Sophie full-bleed bg + headline + EmailCapture
│   │   │   ├── EmailCapture.svelte             # Reusable email input + CTA (used in Hero + Footer)
│   │   │   ├── PromiseCard.svelte              # 5 memory-escalation cards, hover-expand, squircle
│   │   │   ├── TrustBar.svelte                 # Glassmorphic 2x3 card, 6 pillars, magenta backlight
│   │   │   ├── TrustFAQ.svelte                 # Trust FAQ accordion section
│   │   │   ├── ChatVignette.svelte             # Phone + desktop chat preview modes
│   │   │   ├── SpotlightSection.svelte         # Character spotlight carousel (Valentina, Jiwoo, Adaeze)
│   │   │   ├── RosterGrid.svelte               # Desktop 6-col + mobile 6-row grid with wings
│   │   │   ├── FlipCounter.svelte              # Animated founding member counter
│   │   │   ├── FoundingMember.svelte           # Founding member signup CTA section
│   │   │   └── Footer.svelte                   # CTA + footer links + watermark
│   │   ├── data/
│   │   │   ├── roster.ts                       # 16 girls (4 rows x 4), RosterGirl type
│   │   │   ├── conversations.ts                # Sophie, Avery, Hina message arrays, ChatMessage type
│   │   │   ├── promise-cards.ts                # 5 cards with heading, body, image, rotation
│   │   │   └── spotlight.ts                    # 3 spotlight girls (Valentina, Jiwoo, Adaeze) with photos + labels
│   │   ├── server/
│   │   │   ├── supabase.ts                     # Two clients: anon (Prefer: return=minimal) + service role via getSupabaseAdmin()
│   │   │   └── resend.ts                       # sendVerificationEmail(): Resend SDK, hello@provoque.ai, 48h expiry link
│   │   ├── utils/
│   │   │   └── squircle.ts                     # Svelte action: figma-squircle clip-path with ResizeObserver
│   │   └── index.ts                            # Lib barrel export
│   └── routes/
│       ├── +layout.svelte                      # Root layout: imports app.css
│       ├── +page.svelte                        # Landing page: all blocks in mockup order
│       ├── +page.ts                            # prerender=true
│       ├── privacy/
│       │   ├── +page.svelte                    # Privacy policy (Art 13 GDPR)
│       │   └── +page.ts                        # prerender=true
│       ├── impressum/
│       │   ├── +page.svelte                    # Impressum (DDG §5)
│       │   └── +page.ts                        # prerender=true
│       ├── verify/
│       │   ├── +page.server.ts                 # Token verify: 48h expiry, superseded check, token nullification, redirect to /?verified=true
│       │   └── +page.svelte                    # Verification status page
│       └── api/
│           ├── signup/
│           │   └── +server.ts                  # POST: honeypot + email validation + Turnstile verify + Supabase INSERT + re-signup supersede + Resend email
│           ├── founding-count/
│           │   └── +server.ts                  # GET: real waitlist count + SEED constant (247) + drift (disabled). Returns { count: total }
│           └── resend-verification/
│               └── +server.ts                  # POST: find pending row, cap at 1 resend, re-send verification email
├── static/
│   ├── fonts/
│   │   ├── iAWriterQuattroV.ttf                # Self-hosted variable TTF
│   │   ├── iAWriterQuattroV-Italic.ttf         # Self-hosted variable TTF (italic)
│   │   ├── JetBrainsMono-500-latin.woff2       # Self-hosted subset
│   │   └── JetBrainsMono-500-latin-ext.woff2   # Self-hosted subset (extended)
│   ├── provoque-wordmark.svg                   # Nav bar wordmark
│   ├── og-image.jpg                            # Open Graph image
│   ├── robots.txt                              # SEO robots
│   ├── sophie-hero-wide.{avif,jpg}             # Hero background (desktop)
│   ├── sophie-*.{avif,jpg}                     # Hero + promise card + spotlight photos (8 variants)
│   ├── avery-*.{avif,jpg}                      # Chat avatar + in-chat selfie (3 variants)
│   ├── hina-*.{avif,jpg}                       # Chat avatar + in-chat selfie (3 variants)
│   ├── valentina-*.{avif,jpg}                  # Spotlight photos (3 variants)
│   ├── jiwoo-*.{avif,jpg}                      # Spotlight photos (3 variants)
│   ├── adaeze-*.{avif,jpg}                     # Spotlight photos (3 variants)
│   ├── nadia-*.{avif,jpg}                      # Roster grid photos (3 variants)
│   ├── sara-*.{avif,jpg}                       # Roster grid photos (2 variants)
│   └── girl-*.{avif,jpg}                       # Generic roster grid photos (4 variants)
├── supabase/
│   ├── config.toml
│   └── migrations/
│       ├── 20260601000000_create_waitlist.sql   # waitlist table, RLS, anon INSERT policy
│       └── 20260622000000_add_superseded.sql    # superseded_at column, partial unique index, resend_count
├── svelte.config.js                            # Vercel adapter (nodejs22.x), runes mode
├── vite.config.ts                              # Vite with Svelte + Tailwind plugins
├── package.json                                # SvelteKit 2.57, Svelte 5.55, Supabase JS, GSAP, Resend, figma-squircle, Vercel Analytics
└── tsconfig.json
```

---

## Dependency Graph

### 1. Landing Page Cluster

```
routes/+page.svelte (landing page)
  ├── Nav.svelte (wordmark + CTA)
  ├── Hero.svelte
  │     └── EmailCapture.svelte (visual only on hero -- wired in FoundingMember)
  ├── PromiseCard.svelte (x5, from promise-cards.ts)
  │     └── squircle.ts (Svelte action for clip-path)
  ├── TrustBar.svelte (6 pillars)
  ├── ChatVignette.svelte (Avery phone + Hina desktop, from conversations.ts)
  ├── SpotlightSection.svelte (from spotlight.ts -- Valentina, Jiwoo, Adaeze)
  ├── RosterGrid.svelte (from roster.ts)
  │     └── mobileWings[] (derived from roster.ts, offset-by-5 pattern)
  ├── FlipCounter.svelte → GET /api/founding-count
  ├── FoundingMember.svelte
  │     └── EmailCapture.svelte → POST /api/signup
  ├── TrustFAQ.svelte
  └── Footer.svelte
        └── EmailCapture.svelte (also wired)
```

### 2. Signup + Verification Cluster

```
POST /api/signup (+server.ts)
  ├── honeypot check (silent success if filled)
  ├── email validation (regex + length 320)
  ├── Turnstile verification → challenges.cloudflare.com
  ├── lib/server/supabase.ts (anon client) → waitlist INSERT
  │     └── on duplicate: getSupabaseAdmin() → supersede + re-insert
  └── lib/server/resend.ts → sendVerificationEmail()
        └── Resend API → hello@provoque.ai → user inbox

GET /verify?token=uuid (+page.server.ts)
  └── lib/server/supabase.ts (admin) → SELECT by token
        ├── check: superseded_at, status, 48h expiry
        └── UPDATE: status='confirmed', token=null
              └── redirect → /?verified=true

POST /api/resend-verification (+server.ts)
  └── lib/server/supabase.ts (admin) → SELECT pending row
        ├── if confirmed → already done
        ├── if resend_count >= 1 → cap reached
        └── re-send → lib/server/resend.ts + UPDATE resend_count
```

### 3. Counter Cluster

```
GET /api/founding-count (+server.ts)
  └── lib/server/supabase.ts (admin) → SELECT COUNT(*) FROM waitlist WHERE superseded_at IS NULL
        └── returns { count: SEED(247) + realCount + drift(0) }

FlipCounter.svelte → fetches /api/founding-count → animated digit display
```

### 4. Static Pages Cluster

```
routes/privacy/+page.svelte (prerendered)
routes/impressum/+page.svelte (prerendered)
```

---

## Data Flow

### Signup Flow

```
User submits email → POST /api/signup
  1. Honeypot check (silent success if filled)
  2. Email validation (regex, max 320 chars)
  3. Turnstile verification (server-side siteverify)
  4. Supabase INSERT (waitlist table, anon client)
     - On duplicate (23505): check if confirmed or pending
     - If confirmed → 409 "already signed up"
     - If pending → supersede old row (set superseded_at), insert new row (admin client)
  5. Send verification email via Resend (decoupled from INSERT)
     - Update resend_status to 'sent' or 'failed'
  6. Return { success: true, emailSent: bool }

User clicks verify link → GET /verify?token=uuid
  1. Lookup by verification_token (admin client)
  2. Check superseded_at (link invalidated if re-signed up)
  3. Check status (already confirmed?)
  4. Check 48h expiry
  5. UPDATE status='confirmed', verification_token=null
  6. Redirect to /?verified=true
```

### Environment Variables

| Variable | Used By | Purpose |
|----------|---------|---------|
| PUBLIC_SUPABASE_URL | supabase.ts | Supabase project URL |
| PUBLIC_SUPABASE_ANON_KEY | supabase.ts | Supabase anon key (RLS-enforced) |
| SUPABASE_SERVICE_ROLE_KEY | supabase.ts (admin) | Bypasses RLS for verify, resend, founding-count |
| TURNSTILE_SECRET_KEY | api/signup | Cloudflare Turnstile server-side verification |
| RESEND_API_KEY | resend.ts | Resend email API |

### Database Schema

```
waitlist
  ├── id: uuid PK
  ├── email: text NOT NULL UNIQUE(partial -- active rows only) CHECK(length <= 320)
  ├── consent_flag: boolean NOT NULL DEFAULT false
  ├── consent_timestamp: timestamptz NOT NULL DEFAULT now()
  ├── status: text NOT NULL DEFAULT 'pending' CHECK('pending' | 'confirmed')
  ├── resend_status: text NOT NULL DEFAULT 'pending' CHECK('pending' | 'sent' | 'failed')
  ├── verification_token: uuid DEFAULT gen_random_uuid() UNIQUE
  ├── superseded_at: timestamptz (NULL = active, set = superseded)
  ├── resend_count: integer NOT NULL DEFAULT 0
  └── created_at: timestamptz NOT NULL DEFAULT now()
  RLS: enabled. anon INSERT only (consent_flag = true)
  Partial unique index: waitlist_email_active_idx ON email WHERE superseded_at IS NULL
```

---

## Blast Radius Map

### Internal Dependencies

| File | Depends On | Depended On By | Risk |
|------|-----------|----------------|------|
| lib/server/supabase.ts | PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY | All API routes, verify | All DB access |
| lib/server/resend.ts | RESEND_API_KEY | api/signup, api/resend-verification | Email delivery |
| app.css | Tailwind v4, Google Fonts CDN | Every component | Global colors, fonts, animations |
| lib/data/roster.ts | — | RosterGrid.svelte | Girl data (16 entries) |
| lib/data/conversations.ts | — | ChatVignette.svelte | Chat preview content |
| lib/data/promise-cards.ts | — | PromiseCard.svelte (x5) | Card text + image paths |
| lib/data/spotlight.ts | — | SpotlightSection.svelte | 3 spotlight girls + photos |
| lib/utils/squircle.ts | figma-squircle | PromiseCard.svelte | Clip-path rendering |
| api/founding-count/+server.ts | supabase.ts (admin) | FlipCounter.svelte | Counter display -- contains SEED=247 |
| static/* images | — | All visual components | Broken images if renamed/moved. AVIF + JPG pairs |

### Cross-Repo Dependencies

| Lisbon File | Depends On (External) | Depended On By (External) |
|-------------|----------------------|---------------------------|
| lib/server/supabase.ts | Supabase project (Frankfurt, Micro) | — |
| lib/server/resend.ts | Resend API + hello@provoque.ai DNS | — |
| api/signup/+server.ts | Cloudflare Turnstile (challenges.cloudflare.com) | — |
| app.css | Google Fonts CDN | — |
| — | Andrea's Ember wireframes | — |
| svelte.config.js | Vercel (adapter-vercel, nodejs22.x) | Houston poller (implicit -- provoque.ai health) |

---

## Known Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| SEED = 247 inflates founding member counter | Active | Code constant in founding-count/+server.ts:4. Boss directed removal (Jul 25) |
| Drift calculation disabled | Low | `const drift = 0` in founding-count. Per Boss directive |
| AVIF + JPG dual format | Reference | All images stored as both. AVIF for modern browsers, JPG fallback. 43→4.2MB savings (Jun 10 REQ) |
| CSS percentage margins vs height | Reference | Affects mask-image gradient calculations and margin-based clipping in RosterGrid |
| No forgot-password flow | Expected | Open item, blocked on email discretion ruling (Boss parked Jul 17) |
| No duplicate signup UX | Expected | Open item, same blocker |
| EmailCapture wiring varies | Reference | Wired to POST /api/signup in FoundingMember and Footer. Visual-only in Hero |
| Resend capped at 1 per email | Design | resend-verification endpoint returns "we'll sort it out" message after first resend |
