# Deployment Guide for Mg_gemini

## Vercel Deployment Instructions

### Option 1: Web Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Select your `Niranjan266/new` repository
5. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./Mg_new`
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install && npx prisma generate`
   - **Output Directory**: `.next`

6. Add Environment Variables:
   - `DATABASE_URL`: Your PostgreSQL database connection string
   - `NEXTAUTH_SECRET`: Generated auth secret (use `openssl rand -base64 32`)
   - `AUTH_URL`: Your Vercel domain (e.g., `https://your-project.vercel.app`)
   - `AUTH_GOOGLE_ID`: Your Google OAuth client ID
   - `AUTH_GOOGLE_SECRET`: Your Google OAuth client secret

7. Click "Deploy" and wait for the build to complete

### Option 2: CLI Deployment

```bash
cd /workspaces/new/Mg_new

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

When prompted:
- Confirm setup and deployment
- Choose the existing project or create a new one
- Set environment variables as listed above

## Required Environment Variables

```
DATABASE_URL=postgresql://user:password@host/database
NEXTAUTH_SECRET=generated_secret_here
AUTH_URL=https://your-deployed-url.vercel.app
AUTH_GOOGLE_ID=your_google_oauth_id
AUTH_GOOGLE_SECRET=your_google_oauth_secret
```

## After Deployment

1. Update `AUTH_URL` in Vercel settings to match your actual deployment URL
2. Verify the app is running at your deployed URL
3. Test login functionality with Google OAuth
4. Check database connections are working

## Troubleshooting

If you encounter a 404 error:
- Ensure the root directory is set to `./Mg_new`
- Check that all environment variables are properly set
- Review Vercel build logs for errors

If you see database connection errors:
- Verify `DATABASE_URL` is correct
- Ensure your PostgreSQL database is accessible from Vercel
- Check Prisma migrations are up to date
