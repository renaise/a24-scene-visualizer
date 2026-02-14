# CineBox V1.0 MVP - Deployment Guide

## Overview
CineBox is a visual intelligence platform for film. Search 100+ iconic films by composition, color, and mood. Save frames to collections and export mood boards as PDFs.

## Tech Stack
- **Frontend**: React 19 + TypeScript + Tailwind CSS
- **Build**: Vite 7
- **Hosting**: Cloudflare Pages
- **Features**: Visual search, collections (localStorage), PDF export (jsPDF)

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Cloudflare Pages

### Option 1: Automatic Deployment (Recommended)

```bash
# Deploy to Cloudflare Pages
npm run deploy
```

This will:
1. Build the production version
2. Deploy to Cloudflare Pages using Wrangler
3. Return a deployment URL

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy via Cloudflare Dashboard:
   - Go to Cloudflare Dashboard > Pages
   - Create new project
   - Connect to GitHub repo OR upload `dist` folder
   - Build settings:
     - Build command: `npm run build`
     - Build output: `dist`
     - Node version: 18+

### Option 3: Wrangler CLI

```bash
# Login to Cloudflare
npx wrangler login

# Deploy
npx wrangler pages deploy dist --project-name=cinebox
```

## Environment Configuration

No environment variables needed for MVP. All features run client-side:
- Collections stored in localStorage
- PDF generation happens in browser
- Images loaded from TMDb CDN

## Performance Targets

- Initial load: < 2s
- Interactive: < 3s
- Lighthouse score: > 90

## Post-Deployment Checklist

- [ ] Test search functionality
- [ ] Test visual filters
- [ ] Create a collection
- [ ] Save frames to collection
- [ ] Export collection to PDF
- [ ] Test mobile responsiveness
- [ ] Verify LAB/STAGE toggle
- [ ] Check STAGE "coming soon" page

## Future Enhancements (Beyond MVP)

- User authentication
- Cloud storage for collections
- Advanced vector search with embeddings
- Collaborative collections
- STAGE mode (AI scene generation)
- More films (expand beyond 105 scenes)

## Support

Contact: developer@codexfoundry.com

---

**Made by Renaise © 2026**
