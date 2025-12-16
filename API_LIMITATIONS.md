# Google Places API Limitations

## Review Fetching Limitation

The Google Places API has a **hard limit of 5 reviews** per request. This is a limitation imposed by Google and cannot be bypassed.

### Current Implementation

1. **Static Reviews**: We have manually extracted **73 real reviews** from your Google Maps listing and stored them in `lib/real-google-reviews.ts`
2. **Display Count**: The website shows **250 total reviews** (the real count from your Google Maps)
3. **Live Updates**: When you configure the Google API key, the system will fetch the **5 most recent reviews** every 2 minutes

### Why Only 5 Reviews from API?

Google Places API only provides access to the 5 most recent reviews through their API. To get all reviews, you would need to:

1. Use Google My Business API (requires business verification)
2. Manually scrape reviews (against Terms of Service)
3. Use our current solution: manually extracted real reviews

### Current Solution Benefits

- **73 Real Reviews**: All manually extracted from your actual Google Maps listing
- **Accurate Data**: Real reviewer names, ratings, and review text
- **Real Stats**: Shows 4.9 rating and 250 total reviews
- **Live New Reviews**: Any new review on Google Maps will appear in the top 5 when API is configured

### What Happens When API is Configured?

When you add `GOOGLE_API_KEY`, the system will:
1. Fetch the 5 most recent reviews from Google Maps every 2 minutes
2. Merge them with the 73 static reviews
3. Display the newest review at the top
4. Show accurate total count of 250 reviews

### To Enable Live Sync

Add to your `.env.local`:
\`\`\`
GOOGLE_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=ChIJW8VE5XR6AjoRwJKzLXHVLwU
\`\`\`

The website will continue working perfectly with the 73 extracted real reviews until API is configured.
