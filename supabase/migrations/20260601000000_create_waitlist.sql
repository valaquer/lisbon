-- REQ-006: Waitlist table + RLS
-- Schema from Layer 3 (Phase 4 spec, line 118)
-- Amendments from B5.5 contrarian: verification_token, email length check

CREATE TABLE public.waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE CHECK (length(email) <= 320),
  consent_flag boolean NOT NULL DEFAULT false,
  consent_timestamp timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'confirmed')),
  resend_status text NOT NULL DEFAULT 'pending'
    CHECK (resend_status IN ('pending', 'sent', 'failed')),
  verification_token uuid DEFAULT gen_random_uuid() UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Anon can INSERT only, and only with consent=true
-- No SELECT/UPDATE/DELETE policies for anon = no read access
CREATE POLICY "anon_insert_with_consent" ON public.waitlist
  FOR INSERT TO anon
  WITH CHECK (consent_flag = true);

-- Service role bypasses RLS (built-in Supabase behavior)
-- Used by verify endpoint to UPDATE status from pending to confirmed
