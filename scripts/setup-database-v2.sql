-- Drop existing table if it exists (for clean setup)
DROP TABLE IF EXISTS public.email_subscriptions CASCADE;

-- Create the email_subscriptions table with proper structure
CREATE TABLE public.email_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT true NOT NULL,
  source TEXT DEFAULT 'hero-form',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create indexes for better performance
CREATE INDEX idx_email_subscriptions_email ON public.email_subscriptions(email);
CREATE INDEX idx_email_subscriptions_created_at ON public.email_subscriptions(created_at DESC);
CREATE INDEX idx_email_subscriptions_active ON public.email_subscriptions(is_active);

-- Enable Row Level Security
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Allow reading active subscriptions" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Allow authenticated updates" ON public.email_subscriptions;
DROP POLICY IF EXISTS "Allow authenticated deletes" ON public.email_subscriptions;

-- Allow anyone to insert (for the subscription form)
CREATE POLICY "Allow public inserts" ON public.email_subscriptions
  FOR INSERT WITH CHECK (true);

-- Allow reading active subscriptions (public access)
CREATE POLICY "Allow reading active subscriptions" ON public.email_subscriptions
  FOR SELECT USING (is_active = true);

-- Create policy to allow service role to read all subscriptions
CREATE POLICY "Allow service role reads" ON public.email_subscriptions
  FOR SELECT USING (true);

-- Create policy to allow service role to update subscriptions
CREATE POLICY "Allow service role updates" ON public.email_subscriptions
  FOR UPDATE USING (true);

-- Create policy to allow service role to delete subscriptions
CREATE POLICY "Allow service role deletes" ON public.email_subscriptions
  FOR DELETE USING (true);

-- Create or replace function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS handle_email_subscriptions_updated_at ON public.email_subscriptions;

-- Create trigger to automatically update the updated_at column
CREATE TRIGGER handle_email_subscriptions_updated_at
  BEFORE UPDATE ON public.email_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Insert a test record to verify everything works
INSERT INTO public.email_subscriptions (email, source) 
VALUES ('test@example.com', 'setup-test')
ON CONFLICT (email) DO NOTHING;

-- Verify the table was created correctly
SELECT 
  table_name, 
  column_name, 
  data_type, 
  is_nullable, 
  column_default
FROM information_schema.columns 
WHERE table_name = 'email_subscriptions' 
  AND table_schema = 'public'
ORDER BY ordinal_position;
