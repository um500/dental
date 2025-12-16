# Google Places API Setup Guide

Your website will automatically fetch new Google Maps reviews when you configure the Google Places API.

## Current Status

The website is currently showing **real reviews extracted from your Google Maps listing** (static data). To enable **automatic real-time sync** of new reviews posted on Google Maps, follow these steps:

## Step 1: Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Places API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create API Key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key

## Step 2: Configure Environment Variables

Add these to your Vercel project environment variables:

\`\`\`env
GOOGLE_API_KEY=your_google_api_key_here
GOOGLE_PLACE_ID=ChIJW8VE5XR6AjoRwJKzLXHVLwU
\`\`\`

**Your Place ID is already configured**: `ChIJW8VE5XR6AjoRwJKzLXHVLwU`

## Step 3: Deploy

After adding the environment variables:
1. Redeploy your Vercel project
2. The website will automatically start fetching live reviews from Google Maps
3. New reviews will appear within 1-2 minutes

## How It Works

Once configured:
- Website polls Google Places API every **1 minute**
- New reviews posted on Google Maps appear automatically
- Reviews are cached for 2 minutes to optimize API usage
- Manual refresh button forces immediate sync

## Testing

1. Add the environment variables in Vercel
2. Redeploy the project
3. Check browser console for logs:
   - `[v0] ✅ Successfully cached X Google reviews` = Working!
   - `[v0] ⚠️ Google API key not configured` = Need to add API key

## Without API Key

The website will continue to work with the 73+ real reviews already extracted from your Google Maps listing. However, new reviews posted on Google Maps won't automatically appear until you configure the API.

## Support

If you need help setting up the Google Places API, check the [official documentation](https://developers.google.com/maps/documentation/places/web-service/get-api-key).
