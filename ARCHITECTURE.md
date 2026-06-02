# ARCHITECTURE.md — Project Lisbon

Last updated: 2026-06-02 (Ines — REQ-009 Resend integration)

---

## Directory Structure

```
lisbon/
├── src/
│   ├── app.css              # Global styles (Tailwind v4 import, @font-face, CSS custom properties, light/dark themes, @theme registration)
│   ├── app.d.ts             # SvelteKit type declarations
│   ├── app.html             # HTML shell + Turnstile script tag (REQ-007)
│   ├── lib/
│   │   ├── assets/
│   │   │   └── favicon.svg
│   │   ├── server/
│   │   │   ├── supabase.ts        # Supabase clients — anon (INSERT) + service role via getSupabaseAdmin() (SELECT/UPDATE) (REQ-007, REQ-008)
│   │   │   └── resend.ts          # Resend client — sendVerificationEmail(email, token), hello@provoque.ai (REQ-009)
│   │   └── index.ts            # Lib barrel export
│   └── routes/
│       ├── +layout.svelte      # Root layout — imports app.css
│       ├── +page.svelte        # Landing page — email signup form, differentiated success message (REQ-007, REQ-009)
│       ├── +page.ts            # Page config — prerender=true (REQ-007)
│       ├── verify/
│       │   ├── +page.server.ts # Server load — token lookup, 48h expiry, status flip, token nullification (REQ-008)
│       │   └── +page.svelte    # Verify confirmation page — success/error/expired (REQ-008)
│       └── api/
│           └── signup/
│               └── +server.ts  # POST handler — validate, Turnstile, honeypot, Supabase INSERT, app-generated token, Resend email, resend_status update (REQ-007, REQ-009)
├── static/
│   └── fonts/
│       ├── inter-tight-variable.woff2   # Google Fonts — Inter Tight variable
│       └── geist-mono-variable.woff2    # Google Fonts — Geist Mono variable
├── supabase/
│   ├── config.toml                                    # Supabase project config (from supabase init)
│   ├── .gitignore                                     # Supabase-generated ignores
│   └── migrations/
│       └── 20260601000000_create_waitlist.sql          # REQ-006: waitlist table + RLS policies
├── svelte.config.js        # SvelteKit config — adapter-vercel (nodejs22.x), prerender /privacy handler (REQ-007)
├── vite.config.ts          # Vite config — SvelteKit + @tailwindcss/vite plugins
├── package.json
└── tsconfig.json
```

---

## Dependency Graph

```
app.html (Turnstile script)
  └── +layout.svelte (root layout)
        ├── app.css (Tailwind v4 global styles)
        ├── $lib/assets/favicon.svg
        │
        ├── routes/+page.svelte (landing page — signup form)
        │     ├── +page.ts (prerender=true)
        │     └── fetch('/api/signup') on submit
        │           └── routes/api/signup/+server.ts (POST handler)
        │                 ├── Cloudflare Turnstile API (server-side token verification)
        │                 └── $lib/server/supabase.ts (anon key client)
        │                       └── Supabase INSERT (waitlist table)
        │
        └── routes/verify/+page.server.ts (verify endpoint — REQ-008)
              └── $lib/server/supabase.ts (service role client via getSupabaseAdmin())
                    └── Supabase SELECT + UPDATE (waitlist table)
```

**External dependencies:**
- Supabase (Frankfurt, eu-central-1) — waitlist table live (REQ-006). Linked via CLI (`supabase link --project-ref wsfpdmdoobvanjewyhkl`)
- Supabase JS client (`@supabase/supabase-js`, REQ-007/008/009) — server-side only. Anon client for INSERT, service role client for SELECT/UPDATE (verify + resend_status)
- Resend SDK (`resend`, REQ-009) — server-side only, confirmation emails from hello@provoque.ai

---

## Data Flow

Current state: Email signup form live (REQ-007). Page prerendered. Form POST hits API route → Supabase INSERT.

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

**Current data flow (REQ-007):**
```
User submits signup form (+page.svelte)
  -> fetch POST /api/signup (JSON body: email, consent_flag, honeypot, turnstile_token)
    -> Honeypot check (filled = silent success, reject bot)
    -> Consent check (must be true)
    -> Email validation (regex + length <= 320)
    -> Turnstile server-side verification (POST to Cloudflare siteverify)
    -> Supabase INSERT via anon key with app-generated verification_token (Prefer: return=minimal)
      -> Duplicate email (23505) -> "Already signed up"
    -> Send confirmation email via Resend (decoupled — D9)
      -> Success: update resend_status='sent' via service role
      -> Failure: update resend_status='failed' via service role
    -> Return JSON { success: true, emailSent: boolean }
  -> Client displays "Check your email to confirm" (email sent) or "You're on the list!" (email failed)
```

**Verify flow (REQ-008):**
```
User clicks verify link in email (or manual URL)
  -> GET /verify?token=<uuid> (+page.server.ts load function)
    -> getSupabaseAdmin() — service role client (bypasses RLS)
    -> SELECT from waitlist WHERE verification_token = token
    -> If not found -> "Invalid or expired verification link."
    -> If status = 'confirmed' -> "Already confirmed." (dead code — token nullified on confirm)
    -> If created_at > 48 hours ago -> "Expired."
    -> UPDATE status='confirmed', verification_token=NULL
    -> "Your email has been confirmed. Welcome to Provoque."
```

**Remaining Phase 4 flow:**
```
  -> REQ-010: Privacy policy page at /privacy
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
| svelte.config.js | Deploy target + prerender config | Deployment breaks if adapter misconfigured. Prerender /privacy handler (REQ-007) |
| +page.svelte (landing) | Signup form UI | Form breakage, user can't sign up |
| +page.ts | Prerender config | If removed, page becomes server-rendered (performance impact at scale) |
| api/signup/+server.ts | Form submissions | Signup breaks entirely. Depends on: supabase.ts, Turnstile API, env vars |
| verify/+page.server.ts | Email verification | Verify link breaks. Depends on: supabase.ts (service role), SUPABASE_SERVICE_ROLE_KEY |
| src/lib/server/supabase.ts | api/signup/+server.ts, verify/+page.server.ts | All Supabase operations break. Anon client: PUBLIC_SUPABASE_URL + PUBLIC_SUPABASE_ANON_KEY. Service role: SUPABASE_SERVICE_ROLE_KEY |
| app.html (Turnstile script) | All routes load script | Turnstile widget rendering. Removal breaks CAPTCHA on signup form |
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
