# CineBox MVP Execution Plan
## 14-Day Build to Fundable ($50k ARR in 60 Days)

**Strategy:** Vertical-first (films only), visual dataset moat, $49/mo premium positioning

---

## Week 1: Foundation & Dataset (Days 1-7)

### Day 1-2: Tech Stack Decision & Setup

**Decision Point: Ship Speed vs. Control**

#### Option A: Full-Stack (Next.js + Supabase)
**Pros:**
- Full control over features
- Scalable to 10k+ users
- Custom matching algorithm
- Better for Series A fundraising

**Cons:**
- 10-14 days to MVP
- More complex deployment
- Higher technical risk

**Stack:**
- Next.js 14 (App Router) + TypeScript
- Supabase (auth, PostgreSQL, storage)
- Stripe (subscriptions)
- Cloudflare R2 (image storage)
- Vercel (hosting)

#### Option B: No-Code (Softr + Airtable)
**Pros:**
- Ship in 3-5 days
- Proven templates
- Lower technical risk
- Can migrate later

**Cons:**
- Limited customization
- Scaling issues at 1k+ users
- Harder to build custom matching
- Less impressive for investors

**Stack:**
- Softr (frontend + auth)
- Airtable (database)
- Stripe (via Memberstack)
- Airtable Attachments (images)

**RECOMMENDATION: Option B for MVP, migrate to A at $10k MRR**

Rationale: Speed to market > perfection. Prove demand in 14 days, rebuild with code when validated.

---

### Day 3-5: Visual Dataset Curation (THE MOAT)

**Goal:** 200 indie films × 10-20 frames = 2,000-4,000 tagged frames

#### Film Selection Criteria:
- A24: 60 films (2012-2025)
- Neon: 30 films
- Annapurna: 25 films
- MUBI: 25 films
- Bleecker Street: 20 films
- IFC Films: 20 films
- Focus Features: 20 films

#### Frame Selection (per film):
- 10-20 key frames representing:
  - Opening shot
  - Character introductions
  - Visual motifs (2-3 frames)
  - Climactic scenes
  - Signature cinematography (3-5 frames)
  - Memorable locations

#### Tagging Schema (Cinematography-Specific):

**1. Genre (primary)**
- Drama, Horror, Thriller, Comedy, Romance, Sci-Fi, Folk Horror, Coming-of-age

**2. Budget Tier**
- Micro (<$500k)
- Low ($500k-$2M)
- Mid ($2M-$10M)
- High ($10M+)

**3. Themes (multi-select)**
- Identity, Family, Trauma, Isolation, Grief, Power, Sexuality, Religion, Class, Nature

**4. Visual Style (composition)**
- Rule of thirds
- Symmetrical
- Centered
- Leading lines
- Depth (shallow/deep)
- Negative space

**5. Color Palette**
- Warm (oranges, yellows)
- Cool (blues, teals)
- Muted/desaturated
- High saturation
- Monochrome
- Neon/vibrant
- Natural/earthy

**6. Lighting**
- Natural light
- Three-point
- Low-key (high contrast)
- High-key (soft/flat)
- Practical lights
- Colored gels

**7. Shot Type**
- Wide/establishing
- Medium
- Close-up
- Extreme close-up
- Over-shoulder
- Dutch angle

**8. Camera Movement**
- Static
- Dolly/tracking
- Steadicam
- Handheld
- Crane
- Drone

**9. Mood**
- Intimate
- Tense
- Playful
- Melancholic
- Eerie
- Romantic
- Mysterious
- Violent

**10. Studio Outcome**
- Studio that funded it
- Budget (actual)
- Box office/outcome
- Festival history (Sundance, Cannes, etc.)

#### Data Structure (Airtable Schema):

**Films Table:**
- Film Title (single line)
- Director (single line)
- Year (number)
- Studio (single select: A24, Neon, etc.)
- Budget (number)
- Genre (multi-select)
- Themes (multi-select)
- Logline (long text)
- Festival History (long text)
- Box Office (number)

**Frames Table:**
- Frame ID (auto-number)
- Film (linked to Films)
- Image (attachment)
- Timestamp (text)
- Composition (multi-select)
- Color Palette (multi-select)
- Lighting (multi-select)
- Shot Type (multi-select)
- Camera Movement (multi-select)
- Mood (multi-select)
- Notes (long text)

#### Sourcing Strategy:

**Day 3: Image Acquisition**
- TMDB API (free, high-res stills)
- Manual screencaps for films not on TMDB
- Store in Cloudflare R2 or Airtable

**Day 4: Metadata Compilation**
- IMDb for budget/outcome data
- The Numbers for box office
- Studio websites for development exec info

**Day 5: Tagging Sprint**
- Manually tag all 2,000+ frames
- Use Airtable forms for speed
- Quality check: Each frame has 8+ tags

---

### Day 6-7: Core Product Build

**If using Softr + Airtable:**

#### User Auth & Profiles
- Softr login (email/password)
- Filmmaker profile form:
  - Name
  - Email
  - Film school (if any)
  - Previous projects
  - Instagram/Vimeo

#### Project Upload Flow
1. Create project (title, logline, genre, budget, director profile)
2. Upload visual references (10-50 frames)
3. Tag project (themes, tone, influences, target studios)
4. Set status (concept, development, pitching, funded)

#### LAB (Visual Reference Library)
- Grid view of 200 films
- Filter by studio, genre, budget, themes
- Click film → see 10-20 frames
- Frame detail view with full metadata

#### Studio Matching Engine (V1 Algorithm)
Simple scoring based on:
1. Genre match (30% weight)
2. Budget tier match (25% weight)
3. Themes overlap (25% weight)
4. Visual style similarity (20% weight)

Output:
- "47 similar projects found"
- "12 funded by A24, 8 by Neon, 3 by Netflix"
- "67% historical match with A24"
- Studio contact info (development execs)

#### Payments Integration
- Stripe checkout via Memberstack
- $49/mo subscription
- 7-day free trial
- Student discount (50% off = $24.50/mo)

---

## Week 2: Launch Prep & Marketing (Days 8-14)

### Day 8-9: Marketing Site

**Landing Page (Invite-Only Positioning):**

**Hero:**
> "The Film Reference Library for Indie Filmmakers"
> Browse 200 A24/Neon/Annapurna-funded projects.
> Upload your project. Find your studio match.

**Value Props:**
1. Visual Reference Library (200 curated films, 2,000+ frames)
2. Studio Matching Engine (find where your film fits)
3. Project Tracker (organize your development process)

**Social Proof:**
- "Used by Sundance directors"
- "200 films analyzed"
- "2,000+ cinematography frames"

**CTA:**
- "Start 7-Day Free Trial" ($49/mo after)
- "Student? Get 50% off"

**Pricing Page:**
- Individual: $49/mo (7-day trial)
- Student: $24.50/mo (verify .edu email)
- Team: $149/mo (3 users) - V2

**About/How It Works:**
1. Browse LAB (200 curated films)
2. Upload your project + visual references
3. Get studio matches + contact info
4. Track your development process

---

### Day 10-11: Content Strategy

**Goal:** Build legitimacy + SEO before launch

#### Blog Posts (3-5 pieces):
1. "How A24 Picks Films: 12 Visual Patterns in Their Catalog"
2. "The Budget Tiers of Indie Film: What Gets Made at $500k vs $5M"
3. "Neon vs A24 vs Annapurna: Studio Visual DNA Breakdown"
4. "How to Pitch Your Film: What Development Execs Actually Want"
5. "200 Indie Films Analyzed: Genre, Budget, and Outcome Data"

#### Studio Profiles (Launch Content):
- A24: Visual style guide (60 films analyzed)
- Neon: What they fund (themes, directors, budgets)
- Annapurna: Drama-first, auteur-driven
- MUBI: International, slow cinema
- Bleecker Street: Literary adaptations, prestige dramas

---

### Day 12-13: Testing & Polish

**User Testing:**
- 5 filmmaker friends test upload flow
- Check for bugs in payment flow
- Validate studio matching output

**Data Quality Check:**
- All 200 films have 10+ frames
- All frames have 8+ tags
- Studio contact info is current (LinkedIn check)

**Performance:**
- Page load < 3 seconds
- Image optimization
- Mobile responsive

---

### Day 14: Launch Day

**Launch Channels:**

#### Reddit:
- r/Filmmakers (1.2M members)
- r/cinematography (300K)
- r/Screenwriting (2M)
- r/TrueFilm (500K)

**Post Template:**
> "I built a visual reference library for indie filmmakers (200 A24/Neon/Annapurna projects analyzed)"
>
> Hey filmmakers - I spent the last 2 weeks curating a database of 200 indie films that actually got made (A24, Neon, Annapurna, MUBI, etc).
>
> For each film, I pulled 10-20 key frames and tagged them by composition, color, lighting, mood. Then I added metadata: budget, studio, themes, outcome.
>
> You can now upload your project, and it'll tell you which studios funded similar films historically.
>
> It's $49/mo (7-day free trial), but I'm offering 50% off for students.
>
> Link: [cinebox.app]
>
> Would love feedback from this community.

#### Film Twitter/Bluesky:
- Tweet thread breaking down A24's visual DNA
- "I analyzed 60 A24 films. Here's what they fund:"
- Include sample data visualizations
- Link to CineBox in bio

#### Product Hunt:
- Launch on Tuesday or Wednesday
- Title: "CineBox - Visual reference library for indie filmmakers"
- Tagline: "Browse 200 A24/Neon films. Find your studio match."
- Maker story: Built in 14 days, 2,000 frames curated

#### Email Outreach:
- 50 film school professors (ask to share with students)
- 100 Sundance Lab alumni (LinkedIn)
- Film Twitter micro-influencers (500-5k followers)

---

## Success Metrics (End of Week 2)

**Product:**
- ✅ Live at cinebox.app
- ✅ 200 films in database
- ✅ 2,000+ frames tagged
- ✅ Payments working (Stripe)
- ✅ User auth functional
- ✅ Upload flow tested

**Traction (Week 2 goals):**
- 100 signups (free trial starts)
- 10 paid conversions ($490 MRR)
- 500 subreddit upvotes
- 5,000 landing page visits

**Dataset Accumulation:**
- 10 filmmakers upload projects
- 300+ new frames from user uploads
- Start training data for V2 matching

---

## Week 3-4: Filmmaker Acquisition

**Goal:** 100 paying filmmakers ($4,900 MRR) → $50k ARR run-rate

### Acquisition Channels:

#### Film Schools (Direct Outreach):
- NYU Tisch, USC, AFI, Chapman, Columbia, UT Austin
- Student discount (50% off = easy yes)
- Target: 50 student customers = $1,225 MRR

#### Sundance/SXSW Alumni:
- LinkedIn search: "Sundance Lab"
- Personal outreach: "I built this for filmmakers like you"
- Offer: First month free for feedback
- Target: 20 professional customers = $980 MRR

#### Film Twitter:
- Sponsored posts with micro-influencers
- "I used CineBox to find my A24 match" testimonials
- Target: 30 organic signups = $1,470 MRR

---

## Week 5-6: B2B Pivot (First Enterprise Customer)

**Hypothesis:** Film schools/production companies will pay $500-2k/mo for team access

### Target Customers:
1. **Film Schools** - Library database for students
2. **Production Companies** - Reference library for development
3. **Film Commissions** - Support local filmmakers

### Pricing:
- Team Plan: $149/mo (3 users)
- School Plan: $499/mo (unlimited students)
- Enterprise: Custom (production companies)

### Outreach Strategy:
- Email film school deans
- Demo: "Visual reference library for your students"
- Offer: Free pilot semester

**Target:** 1 school customer = $499/mo = +$6k ARR

---

## Week 7-8: Fundraising Prep

**Traction Needed for Pre-Seed ($500k):**
- $10k MRR (200 customers @ $49/mo)
- or $50k ARR run-rate
- 1,000+ total signups
- 10,000+ frames in dataset (including user uploads)

**Investor Pitch:**
> "We're building the visual intelligence layer for film development.
> Started with filmmakers ($50k ARR in 60 days), expanding to games and advertising in Year 2.
> The moat is the dataset: 10,000 frames in 60 days → 300k frames in Year 1.
> This becomes the proprietary visual AI that powers expansion."

---

## Technical Architecture (If Full-Stack)

### Option A: Next.js + Supabase

#### Database Schema (Supabase PostgreSQL):

```sql
-- Users table (handled by Supabase Auth)

-- Films table
CREATE TABLE films (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  director TEXT NOT NULL,
  year INTEGER NOT NULL,
  studio TEXT NOT NULL,
  budget_tier TEXT, -- micro, low, mid, high
  budget_actual INTEGER,
  genre TEXT[],
  themes TEXT[],
  logline TEXT,
  festival_history TEXT,
  box_office INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Frames table
CREATE TABLE frames (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  film_id UUID REFERENCES films(id),
  image_url TEXT NOT NULL,
  timestamp TEXT,
  composition TEXT[],
  color_palette TEXT[],
  lighting TEXT[],
  shot_type TEXT[],
  camera_movement TEXT[],
  mood TEXT[],
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User Projects table
CREATE TABLE user_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  logline TEXT,
  genre TEXT[],
  budget_tier TEXT,
  themes TEXT[],
  target_studios TEXT[],
  status TEXT, -- concept, development, pitching, funded
  director_profile JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Project Frames table (user uploads)
CREATE TABLE project_frames (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES user_projects(id),
  image_url TEXT NOT NULL,
  composition TEXT[],
  color_palette TEXT[],
  mood TEXT[],
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Studio Matches table (cache matching results)
CREATE TABLE studio_matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES user_projects(id),
  matched_films JSONB, -- array of film IDs with scores
  match_score DECIMAL,
  recommended_studios TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Subscriptions table (Stripe integration)
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  stripe_customer_id TEXT NOT NULL,
  stripe_subscription_id TEXT,
  plan TEXT, -- individual, student, team
  status TEXT, -- trialing, active, canceled
  trial_end TIMESTAMP,
  current_period_end TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### File Structure:

```
/app
  /auth
    /login
    /signup
  /dashboard
    page.tsx (user projects list)
  /lab
    page.tsx (browse 200 films)
    /[filmId]
      page.tsx (film detail + frames)
  /project
    /new
      page.tsx (upload project flow)
    /[projectId]
      page.tsx (project detail + matches)
  /pricing
    page.tsx
  /api
    /stripe
      /webhook.ts (handle subscriptions)
    /projects
      /create.ts
      /upload-frames.ts
    /matching
      /calculate.ts (matching algorithm)

/components
  /ui (shadcn components)
  /FilmGrid.tsx
  /FrameViewer.tsx
  /ProjectUpload.tsx
  /StudioMatches.tsx

/lib
  /supabase.ts (client)
  /stripe.ts (checkout)
  /matching.ts (algorithm)
```

#### Matching Algorithm (V1 - Simple Scoring):

```typescript
// lib/matching.ts

interface MatchScore {
  filmId: string
  score: number
  breakdown: {
    genreMatch: number
    budgetMatch: number
    themeMatch: number
    visualMatch: number
  }
}

export function calculateStudioMatches(
  userProject: UserProject,
  allFilms: Film[]
): MatchScore[] {
  return allFilms.map(film => {
    // Genre match (30% weight)
    const genreOverlap = intersection(userProject.genre, film.genre).length
    const genreScore = (genreOverlap / userProject.genre.length) * 0.3

    // Budget tier match (25% weight)
    const budgetScore = (userProject.budget_tier === film.budget_tier) ? 0.25 : 0

    // Theme overlap (25% weight)
    const themeOverlap = intersection(userProject.themes, film.themes).length
    const themeScore = (themeOverlap / userProject.themes.length) * 0.25

    // Visual style similarity (20% weight)
    // Compare user's uploaded frames to film's frames
    const visualScore = calculateVisualSimilarity(userProject.frames, film.frames) * 0.2

    const totalScore = genreScore + budgetScore + themeScore + visualScore

    return {
      filmId: film.id,
      score: totalScore,
      breakdown: {
        genreMatch: genreScore,
        budgetMatch: budgetScore,
        themeMatch: themeScore,
        visualMatch: visualScore
      }
    }
  }).sort((a, b) => b.score - a.score)
}

function calculateVisualSimilarity(userFrames: Frame[], filmFrames: Frame[]): number {
  // Simple tag overlap for V1
  const userTags = userFrames.flatMap(f => [
    ...f.composition,
    ...f.color_palette,
    ...f.mood
  ])

  const filmTags = filmFrames.flatMap(f => [
    ...f.composition,
    ...f.color_palette,
    ...f.mood
  ])

  const overlap = intersection(userTags, filmTags).length
  return overlap / userTags.length
}
```

---

## Deployment

### Option A (Next.js):
- Frontend: Vercel
- Database: Supabase (free tier → $25/mo)
- Storage: Cloudflare R2 ($0.015/GB)
- CDN: Vercel Edge Network

### Option B (No-Code):
- Softr: $49/mo (custom domain + auth)
- Airtable: Free tier → $20/mo (10k records)
- Stripe: Direct integration

---

## Cost Breakdown (Month 1)

### Option A (Full-Stack):
- Vercel: $20/mo (Pro plan)
- Supabase: $25/mo (Pro plan for more storage)
- Cloudflare R2: $5/mo (100GB images)
- Stripe: 2.9% + $0.30 per transaction
- Domain: $12/yr
**Total: ~$50/mo + Stripe fees**

### Option B (No-Code):
- Softr: $49/mo
- Airtable: $20/mo
- Stripe: 2.9% + $0.30
- Domain: $12/yr
**Total: ~$70/mo + Stripe fees**

---

## Risk Mitigation

### Risk 1: Can't curate 200 films in 3 days
**Mitigation:**
- Start with 100 films (still compelling)
- Focus on A24 (easier to source)
- Use TMDB API (automated stills)

### Risk 2: No filmmaker signups
**Mitigation:**
- Offer free tier (browse only)
- Lower price to $29/mo
- Student discount (50% off)

### Risk 3: Matching algorithm is too simple
**Mitigation:**
- V1 doesn't need to be perfect
- Filmmakers just want studio contact info
- Improve in V2 with user feedback

### Risk 4: Studios don't want to be matched
**Mitigation:**
- This is public data (IMDb, budgets)
- Positioning: Discovery tool, not guaranteed pitch
- Partner with studios in V2 (official channel)

---

## Next Steps (Choose Your Path)

### Path 1: No-Code (Softr + Airtable) - RECOMMENDED
**Timeline:** 14 days
1. Day 1: Set up Softr + Airtable + Stripe
2. Day 2-4: Curate 200 films (prioritize A24)
3. Day 5-7: Build product (forms, filters, matching)
4. Day 8-10: Marketing site + content
5. Day 11-13: Testing + polish
6. Day 14: Launch (Reddit + Twitter + Product Hunt)

### Path 2: Full-Stack (Next.js + Supabase)
**Timeline:** 14 days (aggressive) or 21 days (realistic)
1. Day 1-3: Set up Next.js + Supabase + Stripe
2. Day 4-6: Curate dataset
3. Day 7-10: Build core features
4. Day 11-13: Marketing + testing
5. Day 14: Launch

---

## Decision Required: Which Path?

**Fast validation:** Option B (No-Code)
**Long-term scalable:** Option A (Full-Stack)

**My Recommendation:** Start with Option B, migrate to Option A at $10k MRR.

**Reasoning:**
- Prove demand in 14 days
- Cheaper to build ($0 dev time)
- Can manually handle <100 users
- Rebuild with code when validated
- Investors care about traction, not tech stack (for pre-seed)

---

**Ready to execute. Awaiting decision on tech stack.**
