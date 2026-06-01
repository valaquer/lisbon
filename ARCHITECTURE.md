# ARCHITECTURE.md — Project Lisbon

Last updated: 2026-06-01 (Daksh — REQ-006 Supabase waitlist table + RLS)

---

## Directory Structure

```
lisbon/
├── src/
│   ├── app.css              # Global styles (Tailwind v4 import, @font-face, CSS custom properties, light/dark themes, @theme registration)
│   ├── app.d.ts             # SvelteKit type declarations
│   ├── app.html             # HTML shell
│   ├── lib/
│   │   ├── assets/
│   │   │   ├── favicon.svg
│   │   │   ├── logo.webp
│   │   │   ├── Alex_Profile_Picture.png
│   │   │   ├── Emma_Profile_Picture.png
│   │   │   ├── Luna_Profile_Picture.png
│   │   │   ├── Raven_Profile_Picture.png
│   │   │   ├── Raven_Spicy_Picture.png
│   │   │   ├── Sofia_Profile_Picture.png
│   │   │   ├── Sofia_Spicy_Picture.png
│   │   │   ├── Victoria_Profile_Picture.png
│   │   │   ├── Yuki_Profile_Picture.png
│   │   │   └── Zara_Profile_Picture.png
│   │   ├── components/
│   │   │   ├── Header.svelte       # Sticky navbar — logo, nav links (How it works, Features, FAQ, Companions, Blog), Discord CTA, Join Waitlist
│   │   │   ├── Hero.svelte         # Hero section — headline, chat preview, waitlist counter
│   │   │   ├── Companions.svelte   # Features bar + Founding Member card
│   │   │   ├── Journey.svelte      # "Your journey to connection" — 3-step section
│   │   │   ├── Details.svelte      # Core features — Unmatched Memory, Emotional Depth, Beyond Text
│   │   │   ├── MoreFeatures.svelte # "And so much more..." — 6-card grid
│   │   │   ├── FAQ.svelte          # 6 accordion questions/answers
│   │   │   └── Footer.svelte       # Site footer — branding, nav links, social icons, legal links, copyright
│   │   └── index.ts            # Lib barrel export
│   └── routes/
│       ├── +layout.svelte      # Root layout — imports app.css, renders favicon
│       ├── +page.svelte        # Landing page — composes all 8 components
│       ├── blog/
│       │   └── +page.svelte    # Blog index — category tabs (4), 7 post cards, CTA
│       └── companions/
│           ├── +page.svelte    # Companions index — 8 profile cards, 3 features, comparison table, 4 FAQ, CTA
│           └── raven/
│               └── +page.svelte # Raven profile — breadcrumbs, profile image, personality/interests tags, 2 info cards, 3 feature cards, 7-companion gallery
├── static/
│   └── fonts/
│       ├── inter-tight-variable.woff2   # Google Fonts — Inter Tight variable
│       └── geist-mono-variable.woff2    # Google Fonts — Geist Mono variable
├── supabase/
│   ├── config.toml                                    # Supabase project config (from supabase init)
│   ├── .gitignore                                     # Supabase-generated ignores
│   └── migrations/
│       └── 20260601000000_create_waitlist.sql          # REQ-006: waitlist table + RLS policies
├── svelte.config.js        # SvelteKit config — @sveltejs/adapter-vercel (nodejs22.x)
├── vite.config.ts          # Vite config — SvelteKit + @tailwindcss/vite plugins
├── package.json
└── tsconfig.json
```

---

## Dependency Graph

```
app.html
  └── +layout.svelte (root layout)
        ├── app.css (Tailwind v4 global styles, theme, fonts)
        ├── $lib/assets/favicon.svg
        │
        ├── routes/+page.svelte (landing page)
        │     ├── Header.svelte ── $lib/assets/logo.webp
        │     ├── Hero.svelte
        │     ├── Companions.svelte
        │     ├── Journey.svelte
        │     ├── Details.svelte
        │     ├── MoreFeatures.svelte
        │     ├── FAQ.svelte
        │     └── Footer.svelte
        │
        ├── routes/blog/+page.svelte
        │     ├── Header.svelte
        │     └── Footer.svelte
        │
        ├── routes/companions/+page.svelte
        │     ├── Header.svelte
        │     ├── Footer.svelte
        │     └── $lib/assets/*_Profile_Picture.png (all 8)
        │
        └── routes/companions/raven/+page.svelte
              ├── Header.svelte
              ├── Footer.svelte
              ├── $lib/assets/Raven_Profile_Picture.png
              └── $lib/assets/*_Profile_Picture.png (7 others for gallery)

Shared across all routes: Header.svelte, Footer.svelte
Landing page only: Hero, Companions, Journey, Details, MoreFeatures, FAQ
```

**External dependencies:**
- Supabase (Frankfurt, eu-central-1) — waitlist table live (REQ-006). Linked via CLI (`supabase link --project-ref wsfpdmdoobvanjewyhkl`)
- Supabase JS client (future REQ-007) — server-side only, form action INSERT via anon key
- Resend SDK (future REQ-009) — server-side only, confirmation emails via service role key

---

## Data Flow

Current state: Supabase waitlist table live with RLS. No SvelteKit data flow yet — all frontend content is hardcoded in Svelte components.

**Supabase waitlist table (REQ-006):**
```
waitlist table (public schema, RLS enabled)
├── id: uuid (PK, auto-generated)
├── email: text (UNIQUE, max 320 chars)
├── consent_flag: boolean (NOT NULL, default false)
├── consent_timestamp: timestamptz (NOT NULL, default now())
├── status: text ('pending' | 'confirmed', default 'pending')
├── resend_status: text ('pending' | 'sent' | 'failed', default 'pending')
├── verification_token: uuid (UNIQUE, auto-generated)
└── created_at: timestamptz (NOT NULL, default now())

RLS policies:
├── anon: INSERT only, WITH CHECK (consent_flag = true)
├── anon: no SELECT/UPDATE/DELETE
└── service_role: bypasses RLS (built-in)

Note: INSERT via PostgREST must use Prefer: return=minimal (not return=representation)
      because anon has no SELECT permission for RETURNING clause.
```

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
| app.css | Every component via +layout.svelte | Global style breakage — colors, fonts, theme across all 4 routes |
| +layout.svelte | Every route | Layout/style changes affect entire site |
| Header.svelte | All 4 routes import it | Navbar breakage site-wide — navigation, logo, CTA |
| Footer.svelte | All 4 routes import it | Footer breakage site-wide — legal links, social, copyright |
| vite.config.ts | Build pipeline | Build failure, Tailwind stops compiling |
| svelte.config.js | Deploy target | Deployment breaks if adapter misconfigured |
| +page.svelte (landing) | Imports all 8 section components | Section layout changes affect landing page only |
| blog/+page.svelte | Self-contained | Blog page only — no shared state |
| companions/+page.svelte | Imports all 8 profile images | Companion grid — image path changes break cards |
| companions/raven/+page.svelte | Imports 8 profile images | Raven profile + gallery — image path changes break gallery |
| $lib/assets/*_Profile_Picture.png | companions/+page, companions/raven/+page | Broken images on companion pages if renamed/moved |
| static/fonts/* | app.css @font-face declarations | Broken font rendering across all routes |
| supabase/migrations/* | Remote Supabase DB (via `supabase db push`) | Migration changes require re-push; destructive changes (DROP) lose data |
| supabase/config.toml | Supabase CLI link + push | Wrong project ref = push to wrong DB |

---

## Known Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| provoque.ai domain inspect 403 | Low | Vercel API permissions quirk — domain serves correctly but `vercel domains inspect` returns 403 from company account |
| ARCHITECTURE.md stale after REQ-007 | Resolved | Updated to cover full REQ-001 through REQ-013 state (May 13) |
| Dark mode CSS defined but no toggle | Expected | .dark class exists in app.css — toggle is Phase 3 work |
