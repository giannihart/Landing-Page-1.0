# Email Collection System

A Next.js application with Supabase integration for collecting email subscriptions.

## Features

- ✅ Email collection form in hero section
- ✅ Supabase database integration
- ✅ Input validation with Zod
- ✅ Duplicate email handling
- ✅ Admin dashboard for viewing subscriptions
- ✅ CSV export functionality
- ✅ Responsive design

## Setup

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project

2. **Run Database Setup**
   - Copy the SQL from `scripts/setup-database.sql`
   - Paste and run in Supabase SQL Editor

3. **Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials

4. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

5. **Run Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

## Usage

- Visit `/` to see the email collection form
- Visit `/admin` to view subscription data
- Export subscriber data as CSV

## Environment Variables

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
