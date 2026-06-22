-- Fix 2: Allow re-signup for unverified emails
-- Add superseded_at column, replace email UNIQUE with partial index

ALTER TABLE public.waitlist ADD COLUMN superseded_at timestamptz;

-- Drop the existing email unique constraint
ALTER TABLE public.waitlist DROP CONSTRAINT waitlist_email_key;

-- Create partial unique index: only one active (non-superseded) row per email
CREATE UNIQUE INDEX waitlist_email_active_idx ON public.waitlist (email) WHERE superseded_at IS NULL;

-- Track resend attempts per row (Fix 3)
ALTER TABLE public.waitlist ADD COLUMN resend_count integer NOT NULL DEFAULT 0;
