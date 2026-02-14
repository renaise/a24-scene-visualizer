# CineBox MVP: Decision Matrix
## Make This Decision Right Now

---

## The Question

**Do you want to ship in 7 days or 21 days?**

---

## Path A: No-Code (Softr + Airtable)

### Timeline
**7 DAYS TO LAUNCH**

- Day 1: Setup (Softr + Airtable + Stripe) - 4 hours
- Day 2-4: Curate dataset (200 films, 2,500 frames) - 30 hours + hire help
- Day 5-6: Build product (Softr pages) - 12 hours
- Day 7: Launch (Reddit, Twitter, Product Hunt)

### Investment
- **Time:** 46 hours (you) + 50 hours (hired help)
- **Money:** $1,320 one-time + $70/mo ongoing
  - Softr: $49/mo
  - Airtable: $20/mo
  - Film students: $1,250 (one-time)
  - Domain: $12/yr

### What You Get
✅ Live product in 7 days
✅ 200 films, 2,500 tagged frames
✅ User auth, payments, uploads all working
✅ Mobile responsive (built-in)
✅ Zero coding required

### What You Don't Get
❌ Custom matching algorithm (limited to Airtable formulas)
❌ Visual AI similarity (can't do CLIP embeddings)
❌ API access (Airtable has rate limits)
❌ Scalability past 1,000 users
❌ Impressive tech stack for investors

### Exit Strategy
- Rebuild with Next.js at $10k MRR
- Migration cost: $10k-20k
- Timeline: 2-3 weeks (while no-code runs)
- Users don't churn (seamless transition)

---

## Path B: Full-Stack (Next.js + Supabase)

### Timeline
**14-21 DAYS TO LAUNCH**

- Day 1-3: Setup (Next.js + Supabase + Stripe) - 16 hours
- Day 4-6: Curate dataset (less time than Path A) - 20 hours
- Day 7-12: Build features (auth, upload, matching, payments) - 40 hours
- Day 13-14: Testing + polish - 8 hours
- Day 14 (or 21): Launch

### Investment
- **Time:** 84 hours (you) or $5k-10k (contractor)
- **Money:** $50/mo ongoing
  - Vercel: $20/mo
  - Supabase: $25/mo
  - Cloudflare R2: $5/mo
  - Domain: $12/yr

### What You Get
✅ Full control (custom matching algorithm)
✅ Scalable to 10k+ users
✅ Vector search ready (add AI in V2)
✅ Better performance (optimized queries)
✅ Impressive for investors
✅ No migration needed

### What You Don't Get
❌ Fast launch (14-21 days vs 7)
❌ More bugs (code = debugging)
❌ Less time for dataset curation
❌ Harder to iterate quickly

### Exit Strategy
- No migration needed
- Scale directly to 10k+ users
- Add AI features in V2

---

## Side-by-Side Comparison

| Criteria | No-Code (Path A) | Full-Stack (Path B) |
|----------|------------------|---------------------|
| **Launch Speed** | 7 days | 14-21 days |
| **Your Time** | 46 hours | 84 hours |
| **Upfront Cost** | $1,320 | $0 (or $5k-10k contractor) |
| **Monthly Cost** | $70 | $50 |
| **Coding Required** | None | Significant |
| **Matching Algorithm** | Simple (Airtable formulas) | Custom (full control) |
| **User Limit** | 1,000 | 10,000+ |
| **Visual AI** | Not possible | Possible (V2) |
| **Iteration Speed** | Fast (no code changes) | Slower (code changes) |
| **Migration Cost** | $10k-20k (later) | $0 (none needed) |
| **Investor Appeal** | Low (but traction > tech) | High |
| **Focus on Dataset** | High (more time) | Medium (less time) |

---

## The Moat Is the Dataset, Not the Code

### What Matters Most:
1. **2,500 curated frames** with expert tags
2. **200 films** with metadata (budget, studio, outcome)
3. **User uploads** accumulating (30k frames by Month 6)

### What Matters Least:
1. Tech stack (Softr vs Next.js)
2. Custom algorithm (simple matching works for MVP)
3. Visual AI (not needed until Year 2)

---

## Recommendation: Path A (No-Code)

### Why:

**1. Speed Wins**
- 7 days vs 21 days = 2 weeks of extra feedback
- Faster feedback = faster iteration
- Launch on Feb 20 vs Mar 6

**2. Capital Efficiency**
- $1,320 total to validate
- If it fails, you lost 7 days (not 21)
- If it works, $10k-20k migration cost is trivial

**3. Dataset Focus**
- 46 hours (you) vs 84 hours (code)
- 38 extra hours = 1,500 more frames tagged
- The moat is the data, not the tech

**4. Proven Precedent**
- Airbnb: Started on Wordpress
- Stripe: First website was static HTML
- Notion: Started as no-code tool (Coda)
- Traction > Tech Stack (for pre-seed)

**5. De-Risk**
- Prove demand first (100 signups = validation)
- Then invest in engineering ($10k-20k rebuild)
- Easier to raise Series A with revenue ($10k MRR)

---

## Counter-Argument: When to Choose Path B

### Choose Full-Stack If:

1. **You're a developer** (or have dev on team)
   - Building Next.js is fast for you (7-10 days)
   - No learning curve
   - Enjoy coding

2. **You need custom algorithm** (Day 1)
   - Weighted scoring (30/25/25/20) is critical
   - Simple tag matching isn't good enough
   - Users will notice difference

3. **You plan to scale fast** (1k+ users in Month 1)
   - Airtable will break
   - Can't afford migration downtime
   - Need API access from Day 1

4. **You want to impress technical investors**
   - Pitching to a16z, Sequoia (technical diligence)
   - They care about tech stack
   - "Built on Softr" = red flag for them

5. **You have 3 weeks** (not 1 week)
   - Not in a rush
   - Can afford slower launch
   - Want to build it right the first time

**If 3+ of these are true → Choose Path B (Full-Stack)**

---

## Decision Framework

### Ask Yourself:

1. **Can you code?**
   - Yes, fluently → Path B (you can ship Next.js in 10 days)
   - No, or rusty → Path A (don't learn while building MVP)

2. **How fast do you need validation?**
   - ASAP (within 2 weeks) → Path A
   - I have 1 month → Path B

3. **What's your budget?**
   - <$2k → Path A (no-code)
   - $5k-10k → Path B (hire contractor)

4. **What's your moat?**
   - Dataset (curated frames) → Path A (more time for curation)
   - Algorithm (custom matching) → Path B (need code control)

5. **What's your fundraising timeline?**
   - Pre-seed in 3 months → Path A (traction matters, not tech)
   - Series A in 6 months → Path B (technical diligence matters)

---

## My Call: Path A (No-Code)

### Execute This:

**Week 1:**
1. Sign up: Softr + Airtable + Stripe (today)
2. Hire: 2 film students @ $25/hr (tomorrow)
3. Curate: 200 films, 2,500 frames (Days 2-4)
4. Build: Softr pages (Days 5-6)
5. Launch: Reddit + Twitter + Product Hunt (Day 7)

**Week 2-4:**
- Get 100 signups
- Convert 20 to paid ($980 MRR)
- Prove demand

**Month 2-3:**
- Hit $10k MRR (200 users)
- Rebuild in Next.js ($10k-20k)
- Unlock scaling to 10k+ users

**Month 6:**
- Hit $25k MRR
- Raise $500k pre-seed
- Expand to games vertical

---

## What If You're Still Unsure?

### Do Both (Hybrid):

**Week 1: Start with Path A (No-Code)**
- Build Softr MVP in 7 days
- Launch, get feedback

**Week 2: Start Path B (Full-Stack) in Parallel**
- While no-code runs, build Next.js version
- 2-3 weeks, you have both
- Migrate users if/when Next.js is ready

**Benefit:**
- Fast validation (7 days)
- Full-stack ready (21 days)
- Zero downtime

**Cost:**
- Your time: 130 hours total (46 + 84)
- Money: $1,320 + $50/mo
- But you have optionality

---

## The Real Question

**What do you want to prove in Week 1?**

### Option 1: Prove Demand (Path A)
- "Will filmmakers pay $49/mo for this?"
- Launch fast, get signups, measure conversions
- Tech doesn't matter yet

### Option 2: Prove Technical Depth (Path B)
- "Can I build a custom matching algorithm?"
- Show investors you can code
- Demand doesn't matter yet (build it and they will come)

**For pre-seed fundraising: Prove demand first.**

**For Series A fundraising: Prove tech depth.**

You're pre-seed → Path A.

---

## Final Checklist

### Choose Path A If:
- [ ] You want to launch in 7 days
- [ ] You prioritize dataset over tech
- [ ] You're non-technical (or don't want to code)
- [ ] You want to validate demand first
- [ ] You're okay migrating later ($10k-20k)
- [ ] Your moat is the data (not the algorithm)

### Choose Path B If:
- [ ] You're a developer (or have budget for one)
- [ ] You need custom algorithm from Day 1
- [ ] You plan to scale to 10k+ users in Year 1
- [ ] You want technical depth for investors
- [ ] You want to avoid migration costs
- [ ] You can afford 14-21 day timeline

---

## Make the Decision

**Write this down:**

> "I choose Path ____ (A or B) because _____________."

**Then execute. No second-guessing.**

---

## Immediate Next Steps (Based on Your Choice)

### If You Chose Path A (No-Code):

**Today (4 hours):**
1. Sign up: Softr.io, Airtable.com, Stripe.com
2. Buy domain: cinebox.app
3. Post hiring ad: NYU Tisch, USC, AFI job boards
4. Start film list: Curate 60 A24 films
5. Get TMDB API key: themoviedb.org/settings/api

**Tomorrow (8 hours):**
1. Set up Airtable base (Films, Frames, Projects tables)
2. Set up Softr (connect to Airtable, custom domain)
3. Connect Stripe (create subscription product)
4. Onboard hired students (send them tagging guide)
5. Start curating: Source 50 films from TMDB API

**See START_HERE.md for full Day 1-7 checklist.**

---

### If You Chose Path B (Full-Stack):

**Today (4 hours):**
1. Create Next.js app: `npx create-next-app@latest cinebox`
2. Sign up: Supabase.com, Stripe.com
3. Buy domain: cinebox.app
4. Set up .env.local (Supabase + Stripe keys)
5. Create database schema (see EXECUTION_PLAN.md)

**Tomorrow (8 hours):**
1. Set up Supabase Auth (login, signup)
2. Create Films and Frames tables (PostgreSQL)
3. Build landing page (Next.js)
4. Set up Stripe subscriptions (webhook)
5. Test: Signup → Login → Dashboard

**See EXECUTION_PLAN.md for full Day 1-14 timeline.**

---

## Questions? Stuck?

**Re-read:**
- START_HERE.md (action items)
- TECH_STACK_DECISION.md (pros/cons)
- EXECUTION_PLAN.md (full roadmap)
- DATASET_STRATEGY.md (the moat)

**Or:** Just start. You can always pivot.

---

## Remember

**The dataset is the moat. Not the tech stack.**

- Path A: Ships faster, more time for dataset
- Path B: Better tech, less time for dataset

**Choose speed. Ship in 7 days.**

Then iterate based on real user feedback.

---

**Now decide. Then execute.**

You have 7 days (Path A) or 14 days (Path B).

Timer starts... now.
