# Tech Stack Decision Matrix
## No-Code vs Full-Stack for CineBox MVP

**TL;DR: Start with No-Code (Softr + Airtable), migrate to Next.js at $10k MRR.**

---

## Option A: No-Code (Softr + Airtable + Stripe)

### Pros:
✅ **Ship in 7 days** (vs 14-21 days for code)
✅ **Zero dev time** (you focus on dataset curation)
✅ **$70/mo cost** (cheap to validate)
✅ **Built-in auth** (Softr handles login/signup)
✅ **Visual builder** (no code = less bugs)
✅ **Proven templates** (film database, membership sites)
✅ **Easy iterations** (change UI in minutes)
✅ **Airtable = spreadsheet** (familiar, non-technical)

### Cons:
❌ **Scaling limits** (struggles at 1,000+ users)
❌ **Customization limits** (can't build complex matching algorithm)
❌ **No vector search** (can't do AI similarity in V1)
❌ **Airtable API rate limits** (5 req/sec)
❌ **Less impressive for investors** (but traction > tech stack)
❌ **Migration cost later** ($10k-20k to rebuild in code)

### Tech Stack:
- **Frontend:** Softr (membership site builder)
- **Database:** Airtable (spreadsheet-style database)
- **Auth:** Softr (built-in email/password)
- **Payments:** Stripe (via Memberstack or Softr native)
- **Image Storage:** Airtable Attachments (or Cloudflare R2)
- **Hosting:** Softr (included)
- **Domain:** Custom domain via Softr

### Cost Breakdown:
- Softr: $49/mo (Professional plan - custom domain + payments)
- Airtable: $20/mo (Plus plan - 10,000 records)
- Stripe: 2.9% + $0.30 per transaction
- Domain: $12/yr
- **Total: $70/mo + Stripe fees**

### Timeline:
- **Day 1:** Set up Softr + Airtable + Stripe
- **Day 2-4:** Curate 200 films + 2,500 frames
- **Day 5-6:** Build pages (LAB, Project Upload, Matches)
- **Day 7:** Launch MVP

---

## Option B: Full-Stack (Next.js + Supabase + Stripe)

### Pros:
✅ **Full control** (custom matching algorithm)
✅ **Scalable** (handles 10k+ users easily)
✅ **Vector search** (can add AI similarity in V2)
✅ **Better performance** (optimized queries)
✅ **More impressive** (shows technical depth)
✅ **No migration needed** (built to scale from Day 1)
✅ **API-first** (easy to add mobile app later)

### Cons:
❌ **14-21 days to ship** (vs 7 days for no-code)
❌ **More bugs** (code = debugging time)
❌ **Higher complexity** (auth, payments, deployment)
❌ **Harder to iterate** (code changes take time)
❌ **Requires dev skills** (or hire contractor)
❌ **Less time for dataset** (building tech vs curating content)

### Tech Stack:
- **Frontend:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** Supabase (PostgreSQL + Auth + Storage)
- **Payments:** Stripe (subscriptions + webhooks)
- **Image Storage:** Cloudflare R2 (or Supabase Storage)
- **Hosting:** Vercel (frontend) + Supabase (backend)
- **Domain:** Custom via Vercel

### Cost Breakdown:
- Vercel: $20/mo (Pro plan - custom domain + analytics)
- Supabase: $25/mo (Pro plan - more storage + better performance)
- Cloudflare R2: $5/mo (100GB images)
- Stripe: 2.9% + $0.30 per transaction
- Domain: $12/yr
- **Total: $50/mo + Stripe fees**

### Timeline:
- **Day 1-3:** Set up Next.js + Supabase + Stripe
- **Day 4-6:** Curate dataset (less time than Option A)
- **Day 7-12:** Build features (auth, upload, matching, payments)
- **Day 13-14:** Testing + polish
- **Day 14 (or 21):** Launch MVP

---

## Feature Comparison

| Feature | No-Code (Softr) | Full-Stack (Next.js) |
|---------|----------------|---------------------|
| **User Auth** | ✅ Built-in (email/password) | ⚠️ Build yourself (Supabase Auth) |
| **Film Database** | ✅ Airtable (grid view, filters) | ⚠️ Build UI (PostgreSQL + React) |
| **Project Upload** | ✅ Form builder (drag & drop) | ⚠️ Build form + file upload |
| **Image Storage** | ✅ Airtable Attachments | ⚠️ Set up R2/Supabase Storage |
| **Payments** | ✅ Stripe (via Memberstack) | ⚠️ Build checkout + webhooks |
| **Studio Matching** | ⚠️ Simple formulas (limited) | ✅ Custom algorithm (full control) |
| **Mobile Responsive** | ✅ Built-in | ⚠️ Build yourself (Tailwind) |
| **Search/Filter** | ✅ Airtable views | ⚠️ Build filtering UI |
| **Admin Dashboard** | ✅ Airtable (built-in) | ⚠️ Build admin panel |
| **Analytics** | ⚠️ Google Analytics only | ✅ Custom events (Vercel Analytics) |
| **API Access** | ⚠️ Airtable API (rate limited) | ✅ Full REST API |
| **Vector Search** | ❌ Not possible | ✅ Possible (pgvector in V2) |
| **Custom Domain** | ✅ Easy (Softr settings) | ✅ Easy (Vercel settings) |
| **SEO** | ⚠️ Limited (Softr meta tags) | ✅ Full control (Next.js metadata) |
| **Performance** | ⚠️ Slower (Airtable API) | ✅ Faster (optimized queries) |

---

## Decision Framework

### Choose No-Code If:
- You can ship in 7 days (vs 14-21)
- You prioritize dataset over tech
- You're non-technical (or want to avoid coding)
- You want to validate demand first
- You're okay migrating later ($10k-20k cost)
- You expect <1,000 users in first 3 months

### Choose Full-Stack If:
- You have dev skills (or budget for contractor)
- You need custom matching algorithm (complex scoring)
- You plan to scale to 10k+ users in Year 1
- You want investors to see technical depth
- You want to avoid migration costs later
- You can afford 14-21 day timeline

---

## Recommended Path: Hybrid Approach

### Phase 1: No-Code MVP (Week 1-4)
**Goal:** Validate demand, get first 100 users, $5k MRR

**Build:**
- Softr + Airtable + Stripe
- 200 films, 2,500 frames
- Simple tag-based matching (Airtable formulas)
- $49/mo pricing

**Timeline:** 7 days to launch

**Metrics to Hit:**
- 100 signups (free trial)
- 20 paid conversions ($980 MRR)
- 1,000 landing page visits

---

### Phase 2: Full-Stack Migration (Month 2-3)
**Trigger:** $5k-10k MRR (100-200 paying users)

**Rebuild:**
- Next.js + Supabase
- Migrate Airtable data to PostgreSQL
- Build custom matching algorithm
- Add user-generated uploads (not possible in Airtable at scale)

**Timeline:** 2-3 weeks (while no-code version runs)

**Cost:** $10k-20k (contractor or your time)

**Benefits:**
- Unlock vector search (AI similarity)
- Handle 1,000+ users
- Faster performance
- Better investor pitch

---

### Phase 3: AI Features (Month 4-6)
**Trigger:** $25k MRR (500 users) + Series A raise

**Add:**
- Vector search (pgvector)
- Visual similarity (CLIP embeddings)
- Custom cinematography classifier
- API for third-party integrations

**Cost:** Included in Series A budget ($500k raise)

---

## The Verdict

### Start with No-Code (Option A)

**Reasoning:**

1. **Speed to Market**
   - 7 days vs 14-21 days
   - Get feedback faster
   - Iterate based on real users

2. **Dataset > Tech**
   - The moat is the data, not the code
   - You can rebuild tech in 2 weeks
   - You can't rebuild 2,500 curated frames quickly

3. **Capital Efficiency**
   - $70/mo vs $50/mo (negligible difference)
   - No dev time = zero labor cost
   - Prove demand before investing in code

4. **De-Risk**
   - If no one signs up, you wasted 7 days (not 21)
   - If people pay, you have proof → raise money → rebuild

5. **Investor Precedent**
   - Airbnb: Started on Wordpress
   - Stripe: First website was static HTML
   - Traction > Tech Stack (for pre-seed)

**Migration Cost Is Worth It:**
- Rebuild at $10k MRR = $10k-20k cost
- But you'll have proof of demand
- Easier to raise Series A with revenue

---

## Implementation Plan (No-Code MVP)

### Day 1: Setup (4 hours)

#### Softr:
1. Sign up for Softr Professional ($49/mo)
2. Choose "Membership Site" template
3. Connect to Airtable (create base)
4. Set up custom domain (cinebox.app)

#### Airtable:
1. Create base: "CineBox Database"
2. Create tables:
   - Films (title, director, year, studio, budget, genre, themes)
   - Frames (film_id, image, tags, timestamp)
   - Users (Softr auto-creates)
   - Projects (user_id, title, logline, genre, budget, status)
   - Project Frames (project_id, image, tags)
   - Studio Matches (project_id, matched_films, score)

#### Stripe:
1. Create Stripe account
2. Set up subscription product:
   - Individual: $49/mo (7-day trial)
   - Student: $24.50/mo (50% off coupon)
3. Connect to Softr (Memberstack or native integration)

---

### Day 2-4: Dataset Curation (30 hours)

See DATASET_STRATEGY.md for full plan.

**Summary:**
- 200 films selected
- 2,500 frames acquired (TMDB API + screencaps)
- All frames tagged (8+ tags each)
- Uploaded to Airtable

**Delegation:**
- Hire 2 film students ($25/hr × 25 hrs each = $1,250)
- You: Oversee quality, curate A24/Neon priority films

---

### Day 5-6: Product Build (12 hours)

#### Pages to Build in Softr:

1. **Landing Page** (public)
   - Hero: "Visual Reference Library for Indie Filmmakers"
   - Features: LAB, Studio Matching, Project Tracker
   - CTA: "Start Free Trial"
   - Pricing: $49/mo (7-day trial)

2. **Login/Signup** (public)
   - Softr built-in auth
   - Email/password only (no social for MVP)

3. **LAB (Film Database)** (logged-in only)
   - Airtable grid view
   - Filters: Studio, Genre, Budget Tier, Themes
   - Click film → see frames
   - Click frame → full-size view + metadata

4. **Project Upload** (logged-in only)
   - Form: Title, Logline, Genre, Budget, Themes, Status
   - File upload: 10-50 frames (Airtable attachments)
   - Tag frames: Composition, Color, Mood

5. **Studio Matches** (logged-in only after upload)
   - Show matched films (Airtable formula)
   - Score breakdown (genre, budget, themes, visual)
   - Studio recommendations (A24, Neon, etc.)
   - Contact info (development exec emails)

6. **Dashboard** (logged-in)
   - My Projects (list view)
   - Saved Films (favorites from LAB)
   - Account Settings (billing, profile)

---

### Day 7: Launch Prep (4 hours)

#### Marketing Site:
- Pricing page (clear $49/mo, 7-day trial, 50% student discount)
- About page (mission, team, why we built this)
- How It Works (3 steps: Browse → Upload → Match)

#### Content:
- 1 blog post: "How A24 Picks Films: Visual DNA Analysis"
- Studio profiles: A24, Neon, Annapurna (PDF downloads)

#### Launch Checklist:
- [ ] Custom domain live (cinebox.app)
- [ ] Stripe checkout tested (test mode)
- [ ] User flow tested (signup → upload → match)
- [ ] 200 films in LAB (verify)
- [ ] Analytics set up (Google Analytics 4)
- [ ] Social accounts created (Twitter, Instagram)
- [ ] Reddit post drafted
- [ ] Product Hunt submission ready

---

## Softr + Airtable Matching Algorithm (V1)

Since Airtable doesn't support complex code, we use **formulas and linked records**.

### Airtable Schema:

**Films Table:**
- Title (single line)
- Studio (single select)
- Genre (multiple select): Drama, Horror, Thriller, etc.
- Themes (multiple select): Identity, Family, Trauma, etc.
- Budget Tier (single select): Micro, Low, Mid, High

**Projects Table:**
- User (link to Users)
- Title (single line)
- Genre (multiple select)
- Themes (multiple select)
- Budget Tier (single select)

**Studio Matches Table:**
- Project (link to Projects)
- Matched Films (lookup from Films based on logic below)
- Match Score (formula)

### Matching Logic (Airtable Formula):

```
// Genre Match (count overlapping genres)
LEN({Project Genre}) > 0 AND
LEN(ARRAYJOIN(ARRAYINTERSECT({Project Genre}, {Film Genre}))) > 0

// Budget Match (exact match)
{Project Budget Tier} = {Film Budget Tier}

// Theme Match (count overlapping themes)
LEN({Project Themes}) > 0 AND
LEN(ARRAYJOIN(ARRAYINTERSECT({Project Themes}, {Film Themes}))) > 0
```

**Limitations:**
- Can't weight scores (no 30/25/25/20 weighting)
- Can't analyze visual similarity (no image processing)
- Can't rank by score (Airtable sorts alphabetically)

**Workaround:**
- Use filters: "Genre Match = TRUE" + "Budget Match = TRUE"
- Sort by number of theme overlaps (manual count field)
- Good enough for MVP → rebuild in Next.js for V2

---

## Full-Stack Alternative (If You Choose Option B)

If you decide to go full-stack, here's the quick-start guide:

### Day 1: Setup

```bash
# Create Next.js app
npx create-next-app@latest cinebox --typescript --tailwind --app

# Install dependencies
cd cinebox
npm install @supabase/supabase-js stripe
npm install -D @types/node

# Set up Supabase project (supabase.com)
# Get API keys from dashboard

# Create .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

### Database Schema (Supabase SQL):

See EXECUTION_PLAN.md for full schema.

### File Structure:

```
/app
  /auth/login
  /auth/signup
  /dashboard
  /lab
  /project/new
  /project/[id]
  /api/stripe/webhook
  /api/projects/create
  page.tsx (landing page)
  layout.tsx
/components
  /FilmGrid.tsx
  /FrameViewer.tsx
  /ProjectUpload.tsx
  /StudioMatches.tsx
/lib
  /supabase.ts
  /stripe.ts
  /matching.ts
```

### Timeline:
- Day 1-2: Setup (Next.js, Supabase, Stripe)
- Day 3: Auth (login, signup, protected routes)
- Day 4-5: Database (schema, seed data)
- Day 6-7: LAB (film grid, frames, filters)
- Day 8-9: Project Upload (form, file upload)
- Day 10-11: Studio Matching (algorithm)
- Day 12-13: Payments (Stripe checkout)
- Day 14: Testing + Launch

**Complexity: 3x more work than Softr, but you own the code.**

---

## Final Recommendation

### Week 1: Ship with Softr + Airtable

**Why:**
- 7-day launch (vs 14-21)
- Focus on dataset (the moat)
- Validate demand first
- Low cost ($70/mo)

**Accept:**
- Limited matching algorithm (V1)
- Can't scale past 1,000 users
- Will need to rebuild later

---

### Month 2-3: Rebuild with Next.js + Supabase (If Validated)

**Trigger:** $5k-10k MRR (100-200 users)

**Why:**
- Proven demand
- Have cash to hire contractor (or time to build)
- Users won't churn (they're already paying)

**Cost:** $10k-20k rebuild

---

**Ship fast. Validate. Then scale.**

No-code for speed → Full-stack for scale → AI for moat.
