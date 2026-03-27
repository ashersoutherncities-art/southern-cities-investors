# Setup Instructions for Southern Cities Investors Website

## Quick Start (5 minutes)

### 1. GitHub Repository Setup

```bash
cd southern-cities-investors
git init
git add .
git commit -m "Initial commit: Southern Cities Investors website"
git branch -M main
git remote add origin https://github.com/ashersoutherncities-art/southern-cities-investors.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to: https://github.com/ashersoutherncities-art/southern-cities-investors/settings/pages
2. Under "Source", select: **GitHub Actions**
3. Save

The site will automatically deploy on the next push!

### 3. Google Maps API (Optional but Recommended)

For address autocomplete in the property form:

1. Go to: https://console.cloud.google.com/
2. Create a new project or select existing
3. Enable "Places API"
4. Create API credentials (API Key)
5. Restrict the key to your domain for security
6. Open `app/layout.tsx`
7. Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual key

**Without Google Maps API:** The form will still work, but users will need to manually type the full address.

### 4. Form Submission Backend (Production)

The current form logs to console. For production, you'll need:

**Option A: Email Integration (Simplest)**
- Use a service like FormSpree, Netlify Forms, or Web3Forms
- Update form action in `components/PropertyForm.tsx`

**Option B: Custom API (Recommended)**
- Build API endpoint to receive form data
- Store in database (Airtable, Supabase, PostgreSQL)
- Send email notifications
- Update form submission handler in `components/PropertyForm.tsx`

**Option C: Google Sheets Integration**
- Use Google Sheets as backend via Apps Script
- Simple and free
- Good for MVP phase

### 5. Update Contact Email (if needed)

Current email: `investors@developthesouth.com`

To change:
- Search and replace in all files
- Update in: `components/Contact.tsx`, `components/Footer.tsx`, `README.md`

### 6. Add Property Images (Optional)

Replace placeholder images in:
- `components/TrackRecord.tsx` - Recent acquisitions
- Add actual before/after photos
- Add property images to `/public/images/`

### 7. Customize Content

**Testimonials:** Update with real client testimonials in `components/Testimonials.tsx`

**Stats:** Update acquisition numbers in `components/TrackRecord.tsx`

**Sister Companies:** Update links in `components/Footer.tsx`

## Testing Locally

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

## Building for Production

```bash
npm run build
```

This creates optimized static files in the `out/` directory.

## Deployment

**Automatic:** Push to `main` branch triggers GitHub Actions deployment.

**Manual:** Upload `out/` directory contents to any static hosting.

## SEO Optimization

The site is pre-configured for SEO:
- Meta tags for "sell house fast Charlotte"
- Semantic HTML structure
- Fast loading (static export)
- Mobile responsive

**Next Steps:**
1. Add Google Analytics
2. Submit sitemap to Google Search Console
3. Add Schema.org structured data
4. Create blog content for SEO

## Troubleshooting

**Build fails:** Check Node.js version (requires v18+)

**GitHub Actions fails:** Ensure repository has Pages enabled

**Address autocomplete not working:** Check Google Maps API key and Places API is enabled

**Images not loading:** Check basePath in `next.config.js` matches repository name

## Support

Questions? Contact: dariuswalton906@gmail.com

---

**Estimated setup time:** 5-10 minutes (excluding optional features)

**Live URL:** https://ashersoutherncities-art.github.io/southern-cities-investors/
