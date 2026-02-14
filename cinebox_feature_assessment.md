# CineBox Feature Assessment Database

## Database Schema

**Properties:**
1. Feature (title)
2. Category (select: LAB, STAGE, Both)
3. Status (select: ✅ Works, ⚠️ Partial, ❌ Doesn't Work)
4. Timeline (select: V1 (3mo), V2 (6mo), V3 (12mo), Series A (18mo+))
5. Complexity (select: Low, Medium, High, Very High)
6. Cost to Build (text)
7. Reality Check (rich text)
8. Moat Strength (select: Strong, Medium, Weak, None)
9. Dependencies (multi-select: Custom AI, Expert Labeling, Third-party API, Infrastructure, Manual Curation)
10. Unit Economics (select: Profitable, Break-even, Negative)

---

## Database Entries

### 1. Frame-level Visual Search
- **Category:** LAB
- **Status:** ⚠️ Partial
- **Timeline:** V1 (3mo)
- **Complexity:** Medium
- **Cost to Build:** $10k-20k (CLIP integration + vector DB)
- **Reality Check:** Works at ~70% accuracy with CLIP. Won't understand cinematography like promised without custom models. Good enough for MVP but not DP-grade precision.
- **Moat Strength:** Medium
- **Dependencies:** Third-party API
- **Unit Economics:** Profitable

### 2. Personal Reference Library
- **Category:** LAB
- **Status:** ✅ Works
- **Timeline:** V1 (3mo)
- **Complexity:** Low
- **Cost to Build:** $2k-5k (basic CRUD)
- **Reality Check:** Straightforward CRUD operations. No technical risk.
- **Moat Strength:** Weak
- **Dependencies:** (none)
- **Unit Economics:** Profitable

### 3. AI Pitch Deck Generation
- **Category:** STAGE
- **Status:** ⚠️ Partial
- **Timeline:** V2 (6mo)
- **Complexity:** Medium
- **Cost to Build:** $15k-30k (NLP + template system)
- **Reality Check:** It's keyword matching + layout automation, NOT intelligent scene understanding. Can extract scene headings and keyword match, but won't understand "tense confrontation in brutalist architecture." Still valuable as automated layout tool.
- **Moat Strength:** Weak
- **Dependencies:** Third-party API, Manual Curation
- **Unit Economics:** Profitable

### 4. PDF Mood Board Export
- **Category:** LAB
- **Status:** ✅ Works
- **Timeline:** V1 (3mo)
- **Complexity:** Low
- **Cost to Build:** $2k-5k (jsPDF integration)
- **Reality Check:** Mature libraries exist. No technical risk.
- **Moat Strength:** None
- **Dependencies:** (none)
- **Unit Economics:** Profitable

### 5. Real-time Multiplayer Editing
- **Category:** STAGE
- **Status:** ⚠️ Partial
- **Timeline:** V3 (12mo)
- **Complexity:** Very High
- **Cost to Build:** $100k-200k (CRDT, WebSockets, infrastructure)
- **Reality Check:** Basic shared state works (5-10 sec lag). True Figma-level multiplayer requires 6-12 months eng work + ongoing infrastructure costs. Ship basic version in V2, real-time in V3.
- **Moat Strength:** Medium
- **Dependencies:** Infrastructure
- **Unit Economics:** Break-even

### 6. Shot List Builder
- **Category:** STAGE
- **Status:** ✅ Works
- **Timeline:** V1 (3mo)
- **Complexity:** Low
- **Cost to Build:** $5k-10k (spreadsheet + attachments)
- **Reality Check:** Just UI work. Spreadsheet with ability to attach frames from LAB.
- **Moat Strength:** Weak
- **Dependencies:** (none)
- **Unit Economics:** Profitable

### 7. Frame Comments & Annotations
- **Category:** Both
- **Status:** ✅ Works
- **Timeline:** V1 (3mo)
- **Complexity:** Low
- **Cost to Build:** $5k-10k (comment system)
- **Reality Check:** Standard feature. Database + UI for comments.
- **Moat Strength:** Weak
- **Dependencies:** (none)
- **Unit Economics:** Profitable

### 8. Team Workspaces & Permissions
- **Category:** Both
- **Status:** ✅ Works
- **Timeline:** V2 (6mo)
- **Complexity:** Medium
- **Cost to Build:** $20k-40k (auth system + billing)
- **Reality Check:** Standard auth/permissions. Adds operational overhead (user management, billing per team).
- **Moat Strength:** Medium
- **Dependencies:** (none)
- **Unit Economics:** Profitable

### 9. Runway API Integration
- **Category:** STAGE
- **Status:** ⚠️ Partial
- **Timeline:** V2 (6mo)
- **Complexity:** Medium
- **Cost to Build:** $10k integration + usage costs
- **Reality Check:** WORKS but unit economics don't work at $19/mo unlimited. Runway charges $0.10-0.50 per generation. Must cap at 10 gens/month for Pro or charge usage-based pricing. Cannot offer unlimited at flat rate.
- **Moat Strength:** Weak
- **Dependencies:** Third-party API
- **Unit Economics:** Negative (if unlimited), Profitable (if capped)

### 10. Advanced Search Filters (Composition/Lighting)
- **Category:** LAB
- **Status:** ⚠️ Partial
- **Timeline:** Series A (18mo+)
- **Complexity:** Very High
- **Cost to Build:** $500k+ (custom CV models, expert labeling)
- **Reality Check:** Color extraction works (easy). Shot type trainable ($50k). Composition/lighting analysis requires custom models + expert cinematographers to label training data ($100k-500k). NOT realistic for V1-2. Start with manual tags, train simple models over time.
- **Moat Strength:** Strong (when built)
- **Dependencies:** Custom AI, Expert Labeling
- **Unit Economics:** Profitable (long-term)

### 11. Cinematography-Specific AI Models
- **Category:** Both
- **Status:** ❌ Doesn't Work (V1)
- **Timeline:** Series A (18mo+)
- **Complexity:** Very High
- **Cost to Build:** $500k-1M (research team, GPU clusters, labeling)
- **Reality Check:** Requires labeled dataset (expert cinematographers tagging 100k+ frames = $100k-500k labor) + custom model training + researcher + GPU clusters. 12-18 months minimum. This is THE moat but not accessible until Series A funding.
- **Moat Strength:** Strong
- **Dependencies:** Custom AI, Expert Labeling
- **Unit Economics:** Profitable (long-term)

### 12. Visual Similarity Search (Color)
- **Category:** LAB
- **Status:** ✅ Works
- **Timeline:** V1 (3mo)
- **Complexity:** Low
- **Cost to Build:** $5k-10k (OpenCV, color-thief)
- **Reality Check:** Color palette extraction is Computer Vision 101. Works perfectly.
- **Moat Strength:** None
- **Dependencies:** (none)
- **Unit Economics:** Profitable

---

## Summary Stats

- **V1 Features (3mo):** 7 features
- **V2 Features (6mo):** 3 features
- **V3 Features (12mo):** 1 feature
- **Series A Features (18mo+):** 2 features

**Status Breakdown:**
- ✅ Works: 5 features
- ⚠️ Partial: 6 features
- ❌ Doesn't Work: 1 feature (V1 timeframe)

**Unit Economics:**
- Profitable: 10 features
- Break-even: 1 feature
- Negative: 1 feature (if unlimited Runway)

**Moat Strength:**
- Strong: 2 features
- Medium: 3 features
- Weak: 5 features
- None: 2 features
