# Static HTML Export - Shree Dental Clinic

This is a static HTML/CSS/JavaScript version of the Shree Dental Clinic website for maximum compatibility and simple hosting.

## Files Included

- `index.html` - Home page
- `services.html` - Services page
- `doctor.html` - Doctor page
- `reviews.html` - Reviews page
- `contact.html` - Contact page
- `styles.css` - All styles
- `script.js` - Interactive functionality

## Features

- Pure HTML/CSS/JS (no build process needed)
- Works on any web server
- No dependencies
- SEO optimized with meta tags and JSON-LD
- Mobile responsive
- Fast loading

## Hosting Options

### 1. Netlify Drop
- Go to [app.netlify.com/drop](https://app.netlify.com/drop)
- Drag and drop this folder
- Done! Your site is live

### 2. GitHub Pages
\`\`\`bash
# Create repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/shree-dental.git
git push -u origin main

# Enable GitHub Pages in repository settings
\`\`\`

### 3. Vercel Static
\`\`\`bash
vercel --prod
\`\`\`

### 4. Any Web Host
Upload all files via FTP to your web hosting public_html folder.

### 5. Local Testing
\`\`\`bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
\`\`\`

Visit: http://localhost:8000

## Customization

### Change Clinic Information
Edit the HTML files and update:
- Clinic name
- Address
- Phone number
- Email
- Services
- Doctor information

### Change Colors
Edit `styles.css`:
\`\`\`css
:root {
  --primary: #0066cc;
  --secondary: #00a86b;
  /* ... */
}
\`\`\`

### Add Google Analytics
Add before `</head>` in each HTML file:
\`\`\`html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
\`\`\`

## Dynamic Features

For dynamic features (Google Reviews, appointment booking), use the Next.js version or add backend API calls to `script.js`.

## Support

For questions: shreedentalclinic804@gmail.com
