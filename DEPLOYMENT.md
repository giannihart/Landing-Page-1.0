# Deployment Guide

This guide ensures successful deployment of the Sidebar Website project.

## Pre-Deployment Checklist

### 1. Dependencies
All required dependencies are specified in `package.json`:

**Core Dependencies:**
- `@supabase/supabase-js` - Database integration
- `next` - React framework
- `react` & `react-dom` - React library
- `lucide-react` - Icons
- `zod` - Schema validation
- `framer-motion` - Animations
- `next-themes` - Theme switching

**UI Dependencies:**
- `@radix-ui/*` - UI primitives
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - CSS utilities
- `tailwindcss-animate` - CSS animations

### 2. Environment Variables
Required environment variables:
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
\`\`\`

### 3. Database Setup
1. Create Supabase project
2. Run `scripts/setup-database-v2.sql` in Supabase SQL Editor
3. Verify table creation at `/db-status`

### 4. File Structure
All required files are present:
- ✅ `lib/supabase.ts` - Database client with all exports
- ✅ `components/ui/*` - All UI components
- ✅ `app/*` - Next.js app router pages
- ✅ Configuration files (tailwind, postcss, next, typescript)

## Deployment Steps

### Vercel Deployment
1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
\`\`\`bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
\`\`\`

## Troubleshooting

### Common Issues

**1. Missing Dependencies**
\`\`\`bash
npm install
\`\`\`

**2. TypeScript Errors**
- Check `tsconfig.json` configuration
- Verify all imports have correct paths
- Ensure all UI components are properly exported

**3. Supabase Connection Issues**
- Verify environment variables
- Check database setup at `/db-status`
- Run database setup script if needed

**4. Build Failures**
- Check for missing exports in `lib/supabase.ts`
- Verify all imported components exist
- Check for TypeScript type errors

### Verification Commands
\`\`\`bash
# Type check
npx tsc --noEmit

# Lint check
npm run lint

# Build check
npm run build
\`\`\`

## Post-Deployment Verification

1. Visit homepage - email collection should work
2. Check `/db-status` - all tests should pass
3. Test email subscription flow
4. Verify responsive design on mobile

## Support

If deployment issues persist:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Test database connection at `/db-status`
4. Review this deployment guide

## File Dependencies Map

\`\`\`
lib/supabase.ts
├── exports: supabase, supabaseAdmin, testDatabaseConnection
├── used by: app/actions/email-actions.ts
├── used by: app/db-status/page.tsx
└── used by: components/ui/email-collection.tsx

components/ui/
├── button.tsx (used throughout)
├── input.tsx (email forms)
├── card.tsx (layout components)
├── alert.tsx (notifications)
├── table.tsx (admin dashboard)
└── badge.tsx (status indicators)
\`\`\`

All dependencies are properly configured and all required files are present for successful deployment.
