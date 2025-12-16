# Backend Server Setup Guide

This guide covers setting up the separate Node.js/Express backend server for Shree Dental Clinic.

## Overview

The backend handles:
- Google Reviews API integration
- Appointment booking and storage
- Review submission and email notifications
- Server-Sent Events (SSE) for real-time updates
- Email sending via SMTP

## Architecture

\`\`\`
Frontend (Next.js)  →  Backend API (Express)  →  Google Places API
                    ↓                          ↓
                 Database                  Email Service
\`\`\`

## Quick Start

### Option 1: Integrated with Next.js (Current Setup)

The API routes are already integrated in the Next.js app under `/app/api/`. No separate server needed.

**Pros:**
- Single deployment
- Easier to manage
- Vercel-ready

**Cons:**
- Serverless functions limitations
- Cold starts

### Option 2: Separate Express Server (Production)

For high-traffic or advanced features, run a separate Express server.

## Separate Server Setup

### 1. Create Server Directory

\`\`\`bash
mkdir server
cd server
npm init -y
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install express cors dotenv node-fetch node-cron nodemailer
npm install -D @types/express @types/node @types/cors typescript ts-node nodemon
\`\`\`

### 3. Create Server Files

**server/tsconfig.json**
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
\`\`\`

**server/package.json** (add scripts)
\`\`\`json
{
  "scripts": {
    "dev": "nodemon src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
\`\`\`

### 4. Server Code

**server/src/server.ts**
\`\`\`typescript
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import reviewsRouter from './routes/reviews'
import appointmentsRouter from './routes/appointments'
import { startReviewPolling } from './services/google-reviews'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))
app.use(express.json())

// Routes
app.use('/api/reviews', reviewsRouter)
app.use('/api/appointments', appointmentsRouter)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  
  // Start Google Reviews polling
  startReviewPolling()
})
\`\`\`

**server/src/routes/reviews.ts**
\`\`\`typescript
import { Router } from 'express'
import { getReviews, submitReview, streamReviews } from '../controllers/reviews'

const router = Router()

router.get('/', getReviews)
router.post('/', submitReview)
router.get('/stream', streamReviews)

export default router
\`\`\`

**server/src/services/google-reviews.ts**
\`\`\`typescript
import cron from 'node-cron'

let cachedReviews: any[] = []
let lastFetch: Date | null = null

export async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return []
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    )

    const data = await response.json()

    if (data.result?.reviews) {
      cachedReviews = data.result.reviews.map((review: any) => ({
        id: `google-${review.time}`,
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        date: new Date(review.time * 1000).toISOString(),
        source: 'google',
        avatar: review.profile_photo_url,
      }))
      
      lastFetch = new Date()
    }

    return cachedReviews
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return cachedReviews
  }
}

export function getCachedReviews() {
  return cachedReviews
}

export function startReviewPolling() {
  // Fetch immediately on start
  fetchGoogleReviews()

  // Poll every 5 minutes
  cron.schedule('*/5 * * * *', () => {
    console.log('Polling Google Reviews...')
    fetchGoogleReviews()
  })
}
\`\`\`

### 5. Environment Variables

**server/.env**
\`\`\`env
PORT=5000
FRONTEND_URL=http://localhost:3000

GOOGLE_API_KEY=your_api_key
GOOGLE_PLACE_ID=your_place_id

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=shreedentalclinic804@gmail.com
SMTP_PASS=your_password

DATABASE_URL=mongodb://localhost:27017/shree-dental
\`\`\`

### 6. Run Server

\`\`\`bash
# Development
npm run dev

# Production
npm run build
npm start
\`\`\`

## Database Integration

### MongoDB Setup

\`\`\`typescript
// server/src/config/database.ts
import mongoose from 'mongoose'

export async function connectDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_URL!)
    console.log('Database connected')
  } catch (error) {
    console.error('Database connection error:', error)
    process.exit(1)
  }
}

// server/src/models/Review.ts
import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  author: { type: String, required: true },
  email: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  text: { type: String, required: true },
  source: { type: String, enum: ['google', 'site'], default: 'site' },
  postedOnGoogle: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

export const Review = mongoose.model('Review', reviewSchema)

// server/src/models/Appointment.ts
import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  date: { type: String, required: true },
  time: { type: String, required: true },
  service: { type: String, required: true },
  message: String,
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
})

export const Appointment = mongoose.model('Appointment', appointmentSchema)
\`\`\`

### PostgreSQL Setup

\`\`\`typescript
// server/src/config/database.ts
import { Pool } from 'pg'

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

// server/src/models/queries.ts
export const queries = {
  reviews: {
    findAll: 'SELECT * FROM reviews ORDER BY created_at DESC',
    create: 'INSERT INTO reviews (author, email, rating, text, source) VALUES ($1, $2, $3, $4, $5) RETURNING *'
  },
  appointments: {
    findAll: 'SELECT * FROM appointments ORDER BY created_at DESC',
    create: 'INSERT INTO appointments (name, phone, email, date, time, service, message) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *'
  }
}
\`\`\`

## Email Service Setup

\`\`\`typescript
// server/src/services/email.ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

export async function sendAppointmentEmail(data: any) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: data.email,
    subject: 'Appointment Confirmation - Shree Dental Clinic',
    html: `
      <h1>Appointment Confirmed</h1>
      <p>Dear ${data.name},</p>
      <p>Your appointment has been scheduled for:</p>
      <ul>
        <li>Date: ${data.date}</li>
        <li>Time: ${data.time}</li>
        <li>Service: ${data.service}</li>
      </ul>
    `
  }

  await transporter.sendMail(mailOptions)
}

export async function sendReviewThankYou(data: any) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: data.email,
    subject: 'Thank You for Your Review - Shree Dental Clinic',
    html: `
      <h1>Thank You!</h1>
      <p>Dear ${data.name},</p>
      <p>Thank you for your ${data.rating}-star review!</p>
      <p>Please also post on Google Maps:</p>
      <a href="https://maps.app.goo.gl/AsZ19tucWvQJxFzo8">Post on Google</a>
    `
  }

  await transporter.sendMail(mailOptions)
}
\`\`\`

## Deployment

### Deploy on Render

1. Create `render.yaml`:
\`\`\`yaml
services:
  - type: web
    name: shree-dental-api
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: GOOGLE_API_KEY
        sync: false
      - key: GOOGLE_PLACE_ID
        sync: false
\`\`\`

2. Push to GitHub
3. Connect to Render
4. Add environment variables

### Deploy on Railway

\`\`\`bash
railway login
railway init
railway up
\`\`\`

### Deploy on AWS/DigitalOcean

Same as frontend server deployment, but use port 5000 and proxy API requests.

## Frontend Configuration

Update frontend to use backend API:

\`\`\`typescript
// lib/api-client.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export async function fetchReviews() {
  const response = await fetch(`${API_BASE_URL}/api/reviews`)
  return response.json()
}

export async function submitReview(data: any) {
  const response = await fetch(`${API_BASE_URL}/api/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return response.json()
}
\`\`\`

## Monitoring

\`\`\`bash
# Install PM2
npm install -g pm2

# Start server
pm2 start dist/server.js --name shree-dental-api

# Monitor
pm2 monit

# Logs
pm2 logs shree-dental-api
\`\`\`

## Testing

\`\`\`bash
# Test health endpoint
curl http://localhost:5000/health

# Test reviews endpoint
curl http://localhost:5000/api/reviews

# Test appointment submission
curl -X POST http://localhost:5000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"1234567890","date":"2024-02-01","time":"10:00 AM","service":"Test"}'
