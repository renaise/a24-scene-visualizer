# CineBox: Films Vertical-First MVP
## Complete Execution Package for 14-Day Build to $50k ARR

**Last Updated:** February 13, 2026
**Status:** Ready to Execute
**Timeline:** 7 days (no-code) or 14 days (full-stack)

---

## What Is This?

This is the **complete execution package** for building CineBox MVP with the new vertical-first strategy.

**Old Strategy (A24 Labs Spec):**
- Consumer product (browse film stills, save to collections, gallery mode)
- Print commerce ($35-150 per print)
- Freemium model ($5/mo)
- Target: Film enthusiasts with Frame TVs

**NEW Strategy (Vertical-First with Visual Dataset Moat):**
- **B2B SaaS for filmmakers** (project tracker + studio matching)
- **Visual dataset accumulation** (200 films → 30k frames in 6 months)
- **Premium positioning** ($49/mo, serious users only)
- **Dataset moat** (expands to games/ads in Year 2-3)
- **Target:** $50k ARR in 60 days → fundable for pre-seed ($500k raise)

---

## The Core Insight

**The product is NOT the features. The product IS the dataset.**

- Week 1: Ship MVP (simple matching)
- Month 1-6: Accumulate data (2,500 curated + 30k user-generated frames)
- Year 2: Train proprietary visual AI (better than CLIP for cinematography)
- Year 3: Expand to games/ads with same visual intelligence
- Year 5: Exit to Adobe/Blackmagic ($100M-500M on dataset + AI models)

**The moat compounds. The earlier you start accumulating, the bigger the advantage.**

---

## Document Overview

### Read These in Order:

1. **README_NEW_STRATEGY.md** (this file)
   - Overview of new strategy
   - Which documents to read
   - Quick decision framework

2. **START_HERE.md**
   - Immediate action items (Day 1-7)
   - Complete checklist
   - Week 1-4 roadmap

3. **DECISION_MATRIX.md**
   - No-code vs full-stack comparison
   - Choose your path (7 days vs 14 days)
   - Recommendation: No-code (Softr + Airtable)

4. **TECH_STACK_DECISION.md**
   - Deep dive on pros/cons
   - Cost analysis
   - When to migrate from no-code to full-stack

5. **EXECUTION_PLAN.md**
   - Full 14-day roadmap (Days 1-14)
   - Week 2-4 growth strategy
   - Month 2-6 scaling plan
   - Fundraising timeline

6. **DATASET_STRATEGY.md**
   - The moat (visual dataset accumulation)
   - 200 films to curate (full list)
   - Tagging schema
   - Growth to 300k frames (Year 1-3)

7. **AIRTABLE_SETUP_GUIDE.md**
   - Complete Airtable base structure
   - Copy-paste table schemas
   - Matching algorithm script
   - Connect to Softr

### Optional (Reference):

8. **PRD-V2.md** (old consumer strategy, ignore for MVP)
9. **cinebox_feature_assessment.md** (feature complexity analysis)
10. **BUILD_SUMMARY.md** (previous prototype build notes)

---

## Quick Start (10-Minute Version)

### If you have 10 minutes right now:

1. **Read:** DECISION_MATRIX.md (5 min)
2. **Decide:** No-code (7 days) or Full-stack (14 days)
3. **Act:** Execute Day 1 tasks from START_HERE.md (Today, 4 hours)

**Day 1 Tasks:**
- Sign up: Softr ($49/mo) + Airtable ($20/mo) + Stripe (free)
- Buy domain: cinebox.app ($12/yr)
- Post hiring ad: Film school job boards (2 students @ $25/hr)
- Start film list: Curate 60 A24 films
- Get TMDB API key: themoviedb.org/settings/api

**Then:** Follow START_HERE.md for Days 2-7.

---

## The Decision (Choose Now)

### Path A: No-Code (Softr + Airtable) - RECOMMENDED

**Timeline:** 7 days to launch

**Pros:**
- Ship in 7 days (vs 14-21 for code)
- Zero dev time (focus on dataset)
- Cheaper ($1,320 total, $70/mo)
- Easy iterations (no code changes)

**Cons:**
- Limited matching algorithm (Airtable formulas)
- Can't scale past 1,000 users
- Need to rebuild later ($10k-20k at $10k MRR)

**Best For:**
- Non-technical founders
- Speed to market (validate demand first)
- Dataset focus (the moat)

**Read:** AIRTABLE_SETUP_GUIDE.md → START_HERE.md

---

### Path B: Full-Stack (Next.js + Supabase)

**Timeline:** 14-21 days to launch

**Pros:**
- Full control (custom matching)
- Scalable (10k+ users)
- No migration later
- Better for investors (technical depth)

**Cons:**
- Slower (14-21 days)
- More bugs (code = debugging)
- Less time for dataset

**Best For:**
- Technical founders (can code)
- Need custom algorithm Day 1
- Plan to scale fast (1k+ users Month 1)

**Read:** EXECUTION_PLAN.md → TECH_STACK_DECISION.md

---

## My Recommendation: Path A (No-Code)

### Why:

**1. The Moat Is the Data, Not the Code**
- 200 films × 12 frames = 2,400 curated frames (Day 1)
- 1,000 users × 30 frames = 30,000 user-generated frames (Month 6)
- This dataset is irreplaceable. The tech stack is not.

**2. Speed Wins**
- 7 days to launch = 2 weeks of extra feedback
- Faster iterations = better product-market fit
- Launch Feb 20 vs Mar 6 (14 days earlier)

**3. Capital Efficiency**
- $1,320 to validate demand (vs $5k-10k for code)
- If it fails, you lost 7 days (not 21)
- If it works, $10k-20k migration is trivial (you'll have revenue)

**4. Proven Precedent**
- Airbnb: Started on Wordpress
- Stripe: Static HTML website
- Notion: No-code tool (Coda) before rebuilding
- **Traction > Tech Stack** (for pre-seed)

**5. You Can Always Rebuild**
- Hit $10k MRR → Rebuild in Next.js (2-3 weeks)
- Seamless migration (users don't churn)
- Now you have cash to hire contractor ($10k-20k)

---

## What You're Building (Week 1)

### Core Product:

1. **LAB (Visual Reference Library)**
   - 200 curated indie films (A24, Neon, Annapurna, MUBI, etc.)
   - 2,500 frames tagged by composition, color, lighting, mood
   - Filter by studio, genre, budget, themes
   - Browse frames, see metadata

2. **Project Tracker**
   - Filmmakers upload their projects
   - Title, logline, genre, budget, themes
   - Upload 10-50 visual reference frames
   - Track status (concept, development, pitching, funded)

3. **Studio Matching Engine**
   - Algorithm matches project to similar funded films
   - Based on genre (30%), budget (25%), themes (25%), visual style (20%)
   - Output: "47 similar projects. 12 got A24, 8 got Neon."
   - Recommendation: "67% match with A24"
   - Contact info: Development exec emails

4. **Payments (Stripe)**
   - $49/mo subscription
   - 7-day free trial
   - 50% student discount ($24.50/mo)

---

## Success Metrics

### Week 2 (Day 14):
- ✅ Product live (cinebox.app)
- ✅ 200 films, 2,500 frames in database
- ✅ 100 signups (free trial)
- ✅ 10 paid conversions ($490 MRR)

### Week 4 (Day 30):
- ✅ 500 signups
- ✅ 50 paid conversions ($2,450 MRR)
- ✅ 1 B2B customer ($499/mo for film school)
- ✅ Total: $2,949 MRR

### Week 8 (Day 60):
- ✅ 1,000 signups
- ✅ 150 paid conversions ($7,350 MRR)
- ✅ 5 B2B customers ($2,495 MRR)
- ✅ **Total: $9,845 MRR (~$118k ARR) → FUNDABLE**

### Week 12 (Day 90):
- ✅ 2,000 signups
- ✅ 300 paid conversions ($14,700 MRR)
- ✅ 10 B2B customers ($4,990 MRR)
- ✅ **Total: $19,690 MRR ($236k ARR) → SERIES A READY**

---

## Investment Required

### No-Code Path (Recommended):

**One-Time Costs:**
- Film students (dataset curation): $1,250 (50 hrs @ $25/hr)
- Domain (cinebox.app): $12/yr
- **Total: $1,262**

**Monthly Costs:**
- Softr Professional: $49/mo
- Airtable Plus: $20/mo
- Stripe fees: 2.9% + $0.30 per transaction
- Google Workspace (email): $6/mo
- **Total: $75/mo + Stripe fees**

**Your Time:**
- Week 1 (setup + dataset): 46 hours
- Week 2-4 (growth): 20 hours/week
- Month 2-3 (scale): 15 hours/week

**Total Cash Needed:** $1,500 (includes 2 months runway)

---

### Full-Stack Path (Alternative):

**One-Time Costs:**
- Domain: $12/yr
- Contractor (optional): $5,000-10,000
- **Total: $12 (if you code) or $5,012 (if hire)**

**Monthly Costs:**
- Vercel Pro: $20/mo
- Supabase Pro: $25/mo
- Cloudflare R2: $5/mo
- Stripe fees: 2.9% + $0.30
- **Total: $50/mo + Stripe fees**

**Your Time:**
- Week 1-2 (build): 84 hours
- Week 3-4 (growth): 20 hours/week
- Month 2-3 (scale): 15 hours/week

**Total Cash Needed:** $500 (if you code) or $10,500 (if hire)

---

## Fundraising Plan

### Month 6: Pre-Seed Raise ($500k-$1M)

**Traction Needed:**
- $10k-25k MRR ($120k-300k ARR)
- 1,000+ total signups
- 200-500 paying users
- 10,000+ frames in dataset (user-generated)
- 2-3 B2B customers (film schools or production cos)

**Pitch:**
> "We're building the visual intelligence layer for film development. Started with filmmakers ($25k MRR in 6 months), expanding to games and advertising in Year 2. The moat is the dataset: 10,000 frames in 6 months → 300k frames in Year 1. This becomes the proprietary visual AI that powers expansion."

**Use of Funds:**
- $200k: Hire 2 engineers (rebuild in Next.js, add AI features)
- $150k: Hire 1 growth marketer (scale to 10k users)
- $100k: Dataset expansion (hire curators, license content)
- $50k: Ops (legal, accounting, insurance)

**Valuation:** $3M-5M post-money (pre-seed standard)

---

## Long-Term Vision (Year 1-5)

### Year 1: Films Vertical ($1M ARR)
- 10,000 filmmaker users @ $49/mo
- 50 film schools @ $499/mo
- 50,000 frames in dataset (curated + user-generated)

### Year 2: Add Games Vertical ($5M ARR)
- 20,000 game artists @ $49/mo
- 100 game studios @ $999/mo
- 200,000 frames (films + games)
- Launch proprietary visual AI (better than CLIP)

### Year 3: Add Advertising Vertical ($15M ARR)
- 10,000 ad agencies @ $99/mo
- 500 enterprise customers @ $2k/mo
- 500,000 frames in dataset
- License API to Adobe, Blackmagic, Frame.io

### Year 5: Exit ($100M-500M)
- Visual intelligence platform (films + games + ads)
- 1M+ tagged frames (proprietary dataset)
- Custom AI models (cinematography-specific)
- Acquisition by Adobe, Blackmagic, Unity, or Epic Games

---

## Risks & Mitigations

### Risk 1: No filmmaker signups
**Mitigation:**
- Lower price to $29/mo
- Add free tier (browse-only)
- Pivot to film schools (B2B)

### Risk 2: Can't curate 200 films in time
**Mitigation:**
- Launch with 100 films (A24 only)
- Use TMDB API (faster than screencaps)
- Hire more students ($2k budget)

### Risk 3: Airtable breaks at scale
**Mitigation:**
- Rebuild in Next.js at $10k MRR
- Takes 2-3 weeks (while no-code runs)

### Risk 4: Studios complain about copyright
**Mitigation:**
- Fair use defense (educational)
- Partner with studios (revenue share)
- Switch to public domain if needed

### Risk 5: Can't raise funding
**Mitigation:**
- Bootstrap to profitability ($1M ARR = $500k profit @ 50% margins)
- No outside funding needed if you hit metrics

---

## FAQ

### Q: Why films first? Why not games?
**A:** Narrower target = faster validation. Filmmakers are easier to reach (Reddit, film schools) than game artists. Once we prove the model with films, we expand to games with same infrastructure.

### Q: Why $49/mo? That's expensive.
**A:** Premium positioning filters for serious users. Film school is $50k/year. If our tool helps you get funded ($2M budget), $49/mo is nothing. Plus, student discount (50% off) for price-sensitive users.

### Q: What if A24/Neon don't want to be in the database?
**A:** This is public data (IMDb, budgets). Fair use for educational/reference. If they complain, we partner (revenue share on B2B sales). Upside: We're driving discovery for their films.

### Q: Why not just build the AI first?
**A:** Can't train AI without data. Need 100k+ labeled frames. That takes 12-18 months + $500k. Instead, we accumulate data via the product (filmmakers upload frames), THEN train AI in Year 2.

### Q: What if someone copies the dataset?
**A:** The images are public. The TAGS are the moat (our expert curation). Plus, we have network effects (more users → more data → better matching → more users). First-mover advantage matters.

### Q: Can I do this part-time?
**A:** Week 1 (build) requires 46 hours (full-time). After launch, you can run it 15-20 hrs/week while maintaining traction. But growth will be slower.

---

## Next Steps (Today)

### Step 1: Make the Decision (5 min)
- Read DECISION_MATRIX.md
- Choose: No-code (7 days) or Full-stack (14 days)
- Write it down: "I choose Path ___"

### Step 2: Execute Day 1 (4 hours)
- Sign up: Softr + Airtable + Stripe
- Buy domain: cinebox.app
- Post hiring ad: Film students
- Start film list: 60 A24 films
- Get TMDB API key

### Step 3: Follow START_HERE.md
- Day 2-4: Curate dataset (with hired students)
- Day 5-6: Build product (Softr pages)
- Day 7: Launch (Reddit, Twitter, Product Hunt)

### Step 4: Commit to Timeline
- Pick launch date (7 days from today)
- Block calendar (46 hours this week)
- Tell someone (accountability)

---

## Resources

### Documents (This Repo):
- START_HERE.md (Day 1-7 checklist)
- DECISION_MATRIX.md (no-code vs full-stack)
- TECH_STACK_DECISION.md (deep dive)
- EXECUTION_PLAN.md (14-day roadmap)
- DATASET_STRATEGY.md (the moat)
- AIRTABLE_SETUP_GUIDE.md (database structure)

### Tools:
- Softr: softr.io
- Airtable: airtable.com
- Stripe: stripe.com
- TMDB API: themoviedb.org/settings/api

### Communities:
- r/Filmmakers (1.2M members)
- r/cinematography (300K)
- Film Twitter: @A24, @neonrated
- Indie Hackers: indiehackers.com

---

## Support

**Questions?** Re-read the relevant document (START_HERE, DECISION_MATRIX, etc.)

**Stuck?** Post in r/Filmmakers or r/SideProject (or ask me)

**Ready to launch?** DM the link when live (I want to see it!)

---

## Final Thoughts

**This is not a 10-year project. This is a 7-day sprint.**

- Week 1: Ship MVP
- Week 2-4: Get 100 users
- Month 2-6: Hit $10k MRR
- Month 6-12: Raise $500k
- Year 2-3: Expand to games/ads
- Year 5: Exit for $100M+

**The dataset compounds. The code does not.**

Start curating today. Ship in 7 days. The rest will follow.

---

**Now go. You have everything you need.**

Read START_HERE.md → Execute Day 1 → Launch in 7 days.

Timer starts now.
