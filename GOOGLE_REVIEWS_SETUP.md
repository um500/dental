# Google Reviews Integration Setup Guide

This guide will help you set up real-time Google Reviews integration for Shree Dental Clinic website.

## Overview

The website automatically fetches and displays real Google Maps reviews using the Google Places API. Reviews are cached for 5 minutes to optimize API usage and reduce costs.

## Features

✅ Real-time Google Reviews synchronization  
✅ Automatic caching (5-minute intervals)  
✅ Fallback to demo reviews when API is not configured  
✅ Server-Sent Events (SSE) for live updates  
✅ Manual refresh button  
✅ Automatic background polling every 5 minutes  

## Setup Instructions

### Step 1: Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Library**
4. Search for **"Places API"** and enable it
5. Go to **APIs & Services** → **Credentials**
6. Click **Create Credentials** → **API Key**
7. Copy your API key

### Step 2: Restrict Your API Key (Important for Security)

1. Click on your API key to edit it
2. Under **API restrictions**, select **Restrict key**
3. Select **Places API** from the dropdown
4. Under **Application restrictions**, you can:
   - Select **HTTP referrers** and add your domain: `https://www.shreedentalhealth.com/*`
   - Or select **IP addresses** for server-side restriction

### Step 3: Get Your Google Place ID

The Place ID for Shree Dental Clinic is already configured:

\`\`\`
ChIJW8VE5XR6AjoRwJKzLXHVLwU
\`\`\`

**How to verify or find your Place ID:**

1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for "Shree Dental Clinic, Kestopur, Kolkata"
3. Click on the marker and copy the Place ID
4. Verify it matches: `ChIJW8VE5XR6AjoRwJKzLXHVLwU`

### Step 4: Configure Environment Variables

1. Create a `.env.local` file in the root directory
2. Add your Google API credentials:

\`\`\`bash
GOOGLE_API_KEY=AIza...your_actual_api_key_here
GOOGLE_PLACE_ID=ChIJW8VE5XR6AjoRwJKzLXHVLwU
\`\`\`

3. **Never commit** the `.env.local` file to Git (it's already in .gitignore)

### Step 5: Deploy to Vercel

1. Go to your Vercel dashboard
2. Navigate to your project → **Settings** → **Environment Variables**
3. Add the following variables:
   - `GOOGLE_API_KEY` = Your API key
   - `GOOGLE_PLACE_ID` = `ChIJW8VE5XR6AjoRwJKzLXHVLwU`
4. Redeploy your application

## Testing Locally

\`\`\`bash
# Install dependencies
npm install

# Create .env.local file with your credentials
echo "GOOGLE_API_KEY=your_key_here" > .env.local
echo "GOOGLE_PLACE_ID=ChIJW8VE5XR6AjoRwJKzLXHVLwU" >> .env.local

# Run development server
npm run dev

# Visit http://localhost:3000/reviews
\`\`\`

## How It Works

### Caching Strategy

\`\`\`typescript
// Reviews are cached for 5 minutes
let reviewsCache: any[] = []
let lastFetchTime = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
\`\`\`

- First request fetches from Google API
- Subsequent requests within 5 minutes use cached data
- After 5 minutes, fresh data is fetched
- Reduces API calls and improves performance

### API Endpoints

**GET /api/reviews**
- Fetches all reviews (Google + Website submissions)
- Returns review stats (average rating, total count, percentage)
- Auto-caches Google reviews

**GET /api/reviews/stream**
- Server-Sent Events endpoint
- Pushes new website reviews in real-time
- Maintains keep-alive connection

**POST /api/reviews**
- Accepts website review submissions
- Emails user with Google Maps review link
- Stores in temporary database

### Frontend Auto-Refresh

\`\`\`typescript
// Auto-refresh every 5 minutes
const refreshInterval = setInterval(() => {
  fetchReviews(true)
}, 5 * 60 * 1000)
\`\`\`

## Fallback Mode

If API credentials are not configured, the website automatically displays **demo reviews** with realistic data:

- 6 sample reviews
- 5-star ratings
- Indian names and contexts
- Realistic timestamps

This ensures the website looks complete even during development.

## API Pricing

Google Places API pricing (as of 2024):

- **Place Details**: $17 per 1,000 requests
- **Monthly free tier**: $200 credit (~11,700 requests)

With 5-minute caching:
- Max requests per day: 288 (every 5 minutes)
- Monthly requests: ~8,640
- **Well within free tier** ✅

## Troubleshooting

### Reviews Not Showing

**Check 1: API Key**
\`\`\`bash
# Test your API key
curl "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJW8VE5XR6AjoRwJKzLXHVLwU&fields=reviews&key=YOUR_API_KEY"
\`\`\`

**Check 2: Environment Variables**
\`\`\`bash
# Verify .env.local exists
cat .env.local

# Check Vercel environment variables
vercel env ls
\`\`\`

**Check 3: Browser Console**
- Open DevTools → Console
- Look for `[v0]` prefixed logs
- Check for API errors

**Check 4: API Quota**
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Navigate to **APIs & Services** → **Dashboard**
- Check Places API usage

### Common Errors

**Error: API key not valid**
- Verify API key is correct
- Check API restrictions
- Ensure Places API is enabled

**Error: REQUEST_DENIED**
- Enable Places API in Google Cloud Console
- Check billing is enabled (even for free tier)

**Error: INVALID_REQUEST**
- Verify Place ID is correct
- Check API fields parameter

## Security Best Practices

1. **Restrict API Key**: Always restrict by HTTP referrer or IP
2. **Environment Variables**: Never commit API keys to Git
3. **Rate Limiting**: Consider adding rate limiting to /api/reviews
4. **Caching**: Current 5-minute cache is optimal
5. **Monitoring**: Monitor API usage in Google Cloud Console

## Support

For issues or questions:
- Email: shreedentalclinic804@gmail.com
- Phone: +91 9471373777

## Additional Resources

- [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
