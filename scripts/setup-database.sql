-- Create the email_subscriptions table
CREATE TABLE IF NOT EXISTS public.email_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT true,
  source TEXT DEFAULT 'hero-form',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_email ON public.email_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_created_at ON public.email_subscriptions(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for the subscription form)
CREATE POLICY "Allow public inserts" ON public.email_subscriptions
  FOR INSERT WITH CHECK (true);

-- Allow reading active subscriptions
CREATE POLICY "Allow reading active subscriptions" ON public.email_subscriptions
  FOR SELECT USING (is_active = true);

-- Create policy to allow authenticated users to read all subscriptions (for admin)
CREATE POLICY "Allow authenticated reads" ON public.email_subscriptions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update subscriptions (for admin)
CREATE POLICY "Allow authenticated updates" ON public.email_subscriptions
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete subscriptions (for admin)
CREATE POLICY "Allow authenticated deletes" ON public.email_subscriptions
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER handle_email_subscriptions_updated_at
  BEFORE UPDATE ON public.email_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();
