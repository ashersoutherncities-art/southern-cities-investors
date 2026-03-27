# Southern Cities Investors

Professional real estate acquisitions website for Southern Cities Investors - the acquisitions/investment division of Southern Cities Enterprises.

## 🏢 About

Southern Cities Investors specializes in:
- Off-market property acquisitions
- Distressed property purchases
- Creative real estate deals
- Fast cash closings (7-30 days)
- Any condition, as-is purchases

## 🎨 Brand

- **Colors:** Navy (#1a2744), Gold (#d4a843), White
- **Location:** Charlotte, NC
- **Contact:** 
  - Phone: (704) 299-2742
  - Email: investors@developthesouth.com

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages (static export)
- **Address Autocomplete:** Google Places API

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## 🏗️ Build

```bash
npm run build
```

This generates a static export in the `out/` directory, optimized for GitHub Pages.

## 🌐 Deployment

The site automatically deploys to GitHub Pages on push to `main` branch via GitHub Actions.

**Live URL:** https://ashersoutherncities-art.github.io/southern-cities-investors/

## 📋 Features

- ✅ Responsive mobile-first design
- ✅ SEO optimized for "sell house fast Charlotte" queries
- ✅ Property submission form with Google Places autocomplete
- ✅ Investor partnership opportunities section
- ✅ Testimonials and track record display
- ✅ Contact form and business information
- ✅ Fast loading, static export
- ✅ Bold, confident, trustworthy design

## 🔧 Configuration

### Google Maps API

To enable address autocomplete:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Places API
3. Replace `YOUR_GOOGLE_MAPS_API_KEY` in `app/layout.tsx` with your actual key

### GitHub Pages Setup

1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment

## 📁 Project Structure

```
southern-cities-investors/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── HowItWorks.tsx       # Process steps
│   ├── WhatWeBuy.tsx        # Property types
│   ├── ForInvestors.tsx     # Investor opportunities
│   ├── PropertyForm.tsx     # Property submission form
│   ├── WhySellToUs.tsx      # Benefits section
│   ├── TrackRecord.tsx      # Stats and acquisitions
│   ├── Testimonials.tsx     # Client testimonials
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer with links
├── public/
│   └── .nojekyll            # GitHub Pages config
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions deployment
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json             # Dependencies

```

## 📝 License

© 2026 Southern Cities Investors. All rights reserved.

---

**Note:** We are not realtors acting in a brokerage capacity. We are direct property buyers making cash offers on properties.
