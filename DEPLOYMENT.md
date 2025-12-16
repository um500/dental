# Deployment Guide - Shree Dental Clinic Website

Complete step-by-step deployment instructions for all major platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository (optional but recommended)
- Domain name (optional for custom domain)
- Google API credentials configured

## Table of Contents

1. [Vercel Deployment](#vercel-deployment-recommended)
2. [Netlify Deployment](#netlify-deployment)
3. [Custom Server Deployment](#custom-server-deployment)
4. [Environment Variables](#environment-variables)
5. [Post-Deployment Checklist](#post-deployment-checklist)

---

## Vercel Deployment (Recommended)

Vercel is the easiest and fastest way to deploy Next.js applications.

### Method 1: GitHub Integration (Recommended)

1. **Push Code to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/shree-dental-clinic.git
   git push -u origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration

3. **Configure Environment Variables**
   - Click "Environment Variables"
   - Add all variables from `.env.local`:
     \`\`\`
     GOOGLE_API_KEY=your_api_key
     GOOGLE_PLACE_ID=your_place_id
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=shreedentalclinic804@gmail.com
     SMTP_PASS=your_password
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     NEXT_PUBLIC_APP_URL=https://shreedentalhealth.com
     \`\`\`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live!

5. **Custom Domain**
   - Go to Settings → Domains
   - Add: `shreedentalhealth.com`
   - Update DNS records as instructed
   - SSL certificate auto-generated

### Method 2: Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
\`\`\`

---

## Netlify Deployment

1. **Build Command Setup**
   
   Add to `package.json`:
   \`\`\`json
   {
     "scripts": {
       "build": "next build",
       "export": "next export"
     }
   }
   \`\`\`

2. **Create `netlify.toml`**
   \`\`\`toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   \`\`\`

3. **Deploy via Netlify CLI**
   \`\`\`bash
   # Install Netlify CLI
   npm i -g netlify-cli
   
   # Login
   netlify login
   
   # Deploy
   netlify deploy --prod
   \`\`\`

4. **Or Deploy via Git**
   - Go to [netlify.com](https://netlify.com)
   - "New site from Git"
   - Connect GitHub repository
   - Build settings auto-detected
   - Add environment variables
   - Deploy

---

## Custom Server Deployment

### DigitalOcean / AWS / Railway / Render

1. **Server Requirements**
   - Node.js 18+
   - 1GB RAM minimum
   - 10GB storage
   - Ubuntu 20.04+ / Debian

2. **SSH into Server**
   \`\`\`bash
   ssh root@your-server-ip
   \`\`\`

3. **Install Node.js**
   \`\`\`bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   node --version  # Should show v18.x
   \`\`\`

4. **Install PM2 (Process Manager)**
   \`\`\`bash
   sudo npm install -g pm2
   \`\`\`

5. **Clone Repository**
   \`\`\`bash
   cd /var/www
   git clone https://github.com/yourusername/shree-dental-clinic.git
   cd shree-dental-clinic
   \`\`\`

6. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

7. **Create Environment File**
   \`\`\`bash
   nano .env.local
   # Paste your environment variables
   # Save: Ctrl+X, Y, Enter
   \`\`\`

8. **Build Application**
   \`\`\`bash
   npm run build
   \`\`\`

9. **Start with PM2**
   \`\`\`bash
   pm2 start npm --name "shree-dental" -- start
   pm2 save
   pm2 startup
   \`\`\`

10. **Setup Nginx Reverse Proxy**
    \`\`\`bash
    sudo apt install nginx
    sudo nano /etc/nginx/sites-available/shreedentalhealth.com
    \`\`\`
    
    Add configuration:
    \`\`\`nginx
    server {
        listen 80;
        server_name shreedentalhealth.com www.shreedentalhealth.com;
    
        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    \`\`\`
    
    Enable site:
    \`\`\`bash
    sudo ln -s /etc/nginx/sites-available/shreedentalhealth.com /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    \`\`\`

11. **Setup SSL with Let's Encrypt**
    \`\`\`bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d shreedentalhealth.com -d www.shreedentalhealth.com
    \`\`\`

12. **Auto-restart on Reboot**
    \`\`\`bash
    pm2 startup
    pm2 save
    \`\`\`

---

## Environment Variables

### Required Variables

\`\`\`env
# Google Places API (for reviews)
GOOGLE_API_KEY=your_google_places_api_key
GOOGLE_PLACE_ID=your_google_place_id

# Application URL
NEXT_PUBLIC_APP_URL=https://shreedentalhealth.com
\`\`\`

### Optional Variables

\`\`\`env
# Email Service (for appointment/review notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=shreedentalclinic804@gmail.com
SMTP_PASS=your_app_specific_password

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXXX

# Database (if using)
DATABASE_URL=mongodb://localhost:27017/shree-dental
# or
DATABASE_URL=postgresql://user:password@localhost:5432/shree_dental
\`\`\`

### How to Get API Keys

**Google Places API:**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project
3. Enable "Places API"
4. Create API key
5. Restrict to Places API only

**Gmail App Password:**
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. App Passwords → Generate
4. Use generated password in SMTP_PASS

---

## Post-Deployment Checklist

### 1. Test All Pages
- [ ] Home page loads correctly
- [ ] Services page displays all services
- [ ] Doctor page shows information
- [ ] Reviews page fetches Google reviews
- [ ] Contact page form works
- [ ] Appointment booking works

### 2. Test Features
- [ ] Navigation menu works on mobile
- [ ] Google Maps integration loads
- [ ] Review submission works
- [ ] Appointment form submits
- [ ] Email notifications sent
- [ ] Real-time review updates work

### 3. SEO Verification
- [ ] Visit `/sitemap.xml` - Should load
- [ ] Visit `/robots.txt` - Should load
- [ ] Check meta tags with View Source
- [ ] Test on [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console

### 4. Performance Testing
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Target: 90+ score
- [ ] Test on mobile devices
- [ ] Test different browsers

### 5. Mobile Testing
- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Test responsive breakpoints
- [ ] Test touch interactions

### 6. Analytics Setup
- [ ] Google Analytics tracking code works
- [ ] Meta Pixel tracking works
- [ ] Test event tracking (appointments, reviews)

### 7. Security
- [ ] HTTPS enabled (green padlock)
- [ ] Environment variables not exposed
- [ ] API routes protected
- [ ] No console errors in production

### 8. DNS Configuration
\`\`\`
A Record:    @      → Server IP
A Record:    www    → Server IP
CNAME:       www    → shreedentalhealth.com
\`\`\`

### 9. Monitoring Setup
- [ ] Setup uptime monitoring (UptimeRobot, Pingdom)
- [ ] Setup error tracking (Sentry)
- [ ] Setup Google Search Console
- [ ] Setup Google My Business

---

## Troubleshooting

### Build Fails
\`\`\`bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
\`\`\`

### Port Already in Use
\`\`\`bash
# Find process
lsof -i :3000
# Kill process
kill -9 PID
\`\`\`

### PM2 Not Starting
\`\`\`bash
# Check logs
pm2 logs shree-dental
# Restart
pm2 restart shree-dental
\`\`\`

### Nginx Errors
\`\`\`bash
# Check configuration
sudo nginx -t
# View error logs
sudo tail -f /var/log/nginx/error.log
\`\`\`

---

## Maintenance

### Update Deployment
\`\`\`bash
cd /var/www/shree-dental-clinic
git pull origin main
npm install
npm run build
pm2 restart shree-dental
\`\`\`

### Backup Database
\`\`\`bash
# MongoDB
mongodump --db shree-dental --out /backups/$(date +%Y%m%d)

# PostgreSQL
pg_dump shree_dental > /backups/backup_$(date +%Y%m%d).sql
\`\`\`

### Monitor Logs
\`\`\`bash
# PM2 logs
pm2 logs

# Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
\`\`\`

---

## Support

For deployment issues:
- Email: shreedentalclinic804@gmail.com
- Phone: +91 9471373777
