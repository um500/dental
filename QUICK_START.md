# Quick Start Guide

## Testing the Website

### 1. Test the API
Visit: `http://localhost:3000/test-api`

This page will show:
- Total reviews count
- Average rating
- All reviews from Google Maps
- Raw API response for debugging

### 2. Check Console Logs
Open browser DevTools (F12) and check the Console tab for:
\`\`\`
[v0] HomePage: Starting to fetch reviews...
[v0] HomePage: Response status: 200
[v0] HomePage: Fetched reviews 73
\`\`\`

### 3. Verify Google Reviews Auto-Update

The system automatically:
1. Fetches Google reviews every 2 minutes
2. Shows new reviews at the top
3. Updates stats in real-time

**Current Status:**
- Using 73 real Google reviews extracted from your clinic
- Reviews are cached for 2 minutes
- To enable live Google API updates, add `GOOGLE_API_KEY` to environment variables

### 4. Add a Website Review

1. Go to `/reviews` page
2. Click "Write a Review" button
3. Fill form and submit
4. Review appears immediately at top
5. User receives email with Google Maps link

### 5. Environment Variables Needed for Live Updates

\`\`\`env
GOOGLE_API_KEY=your_google_places_api_key_here
GOOGLE_PLACE_ID=ChIJW8VE5XR6AjoRwJKzLXHVLwU
\`\`\`

Without API key, the site uses the 73 real reviews as static data.

## Troubleshooting

### Black Screen / 404 Error
1. Check if you're on the right page: `/` (home), `/services`, `/doctor`, `/reviews`, `/contact`
2. Visit `/test-api` to check if API is working
3. Check browser console for errors

### Reviews Not Showing
1. Visit `/test-api` to verify API response
2. Check console for `[v0]` debug messages
3. Verify reviews array is not empty in API response

### New Google Reviews Not Appearing
1. Wait 2 minutes (cache refresh time)
2. Click browser refresh
3. Check if GOOGLE_API_KEY is set (or system uses static data)

## Pages Available

- `/` - Homepage with hero, services, reviews slider
- `/services` - All dental services
- `/doctor` - About Dr. Chanchal
- `/reviews` - Full reviews page with submission form
- `/contact` - Contact info and appointment form
- `/test-api` - API testing page (for debugging)
