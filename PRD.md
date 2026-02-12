# CineBox PRD
**Product Requirements Document**

---

## Product Vision

**CineBox: Collaborative scene visualization with the framing of art mode on Samsung Frame.**

Transform cinematic moments into displayable art. Users visualize, curate, and share A24 scenes in ambient gallery mode—celebrating independent cinema as living artwork for your space.

---

## 1. The Product

### 1.1 Core Concept
**Frame TV for A24 Scenes**

Just as Samsung's Frame displays art when idle, CineBox displays curated cinematic moments. It bridges the gap between streaming (passive consumption) and collecting (active curation), positioning film stills as displayable art.

### 1.2 What It Is
- **Digital gallery** for A24 film scenes and stills
- **Ambient display mode** that rotates curated moments
- **Mood board generator** powered by AI (scene → visual interpretation)
- **Social curation platform** for discovering trending scenes

### 1.3 What It's Not
- NOT a streaming service
- NOT a video player
- NOT a social network (though it has social features)
- NOT comprehensive (focuses on A24 aesthetic)

---

## 2. Target Audience

### Primary
**Cinephile Decorators** (25-40)
- Film enthusiasts who value aesthetics
- Live in small urban apartments
- Curate their living spaces intentionally
- Follow A24 on social media
- Own or aspire to own Frame TV / digital displays

### Secondary
**Creative Professionals** (25-35)
- Designers, directors, cinematographers
- Use film references for mood boards
- Need visual inspiration libraries
- Value tactile, editorial tools

### Tertiary
**A24 Superfans**
- Collect A24 merchandise
- Attend screenings and events
- Engage with A24's cultural positioning
- Value brand affiliation

---

## 3. Jobs to Be Done

### Primary Job
> "When I want to make my living space feel more cultured, I want to display art that reflects my taste in film, so that my environment feels personally curated."

### Supporting Jobs
1. **Mood Board Creation**: Generate visual inspiration for creative work
2. **Discovery**: Find new A24 films through iconic scenes
3. **Social Signaling**: Display taste through curated gallery
4. **Ambient Enhancement**: Transform screens from idle → artful

---

## 4. Core Features

### 4.1 Gallery Mode (Frame TV Mode)
**The Main Experience**

- **Auto-Rotate Display**
  - Scenes cycle every 30-60 seconds
  - Smooth crossfade transitions
  - No UI chrome (pure imagery)

- **Ambient Adaptation**
  - Brightness adjusts to room lighting
  - Borders/matting for "framed" effect
  - Film grain overlay option

- **Scene Metadata**
  - Subtle overlay: Film title, director, year
  - Appears on hover/pause
  - Minimal, non-intrusive

- **Collections**
  - Curate personal galleries
  - Themes: "Moody Interiors," "Coastal Scenes," "Urban Isolation"
  - Save favorites, share collections

### 4.2 Scene Generator (AI Mood Board)
**Creative Tool**

- Input: Text description of a scene
- Output: 4 AI-generated interpretations in A24 style
- Style transfer: "35mm film grain, muted colors, contemplative atmosphere"
- Social feature: See how others visualized the same scene

### 4.3 Trending Scenes
**Discovery Feed**

- Most-remixed scenes this week
- Curated by A24 aesthetic
- One-click add to personal gallery
- Metadata: Film source, director, year

### 4.4 Display Settings
**Customization**

- Mat frame styles (black, white, natural wood)
- Aspect ratios (16:9, 4:3, 2.35:1 anamorphic)
- Grain intensity
- Crossfade speed
- Metadata visibility

---

## 5. User Flow

### First-Time User
1. **Landing** → See hero scene in gallery mode
2. **Prompt** → "Describe a scene" (onboarding through creation)
3. **Generate** → AI creates 4 interpretations
4. **Save** → Add favorites to personal gallery
5. **Discover** → Browse trending scenes
6. **Gallery Mode** → Switch to ambient display

### Returning User
1. **Auto-start Gallery Mode** → Displays saved collection
2. **Add New** → Generate or discover scenes
3. **Curate** → Organize collections by mood
4. **Share** → Export collection link

---

## 6. Technical Architecture

### 6.1 Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS 4
- **AI Generation**: Fal.ai (Flux Schnell)
- **Hosting**: Cloudflare Pages
- **Database**: (Future) Supabase for user collections

### 6.2 Performance
- Progressive blur on image load
- Lazy loading for gallery
- Preload next scene in rotation
- Optimize for 4K displays

### 6.3 Data Model
```typescript
Scene {
  id: string
  imageUrl: string
  prompt: string
  filmSource?: {
    title: string
    director: string
    year: number
  }
  metadata: {
    aspectRatio: string
    mood: string[]
  }
  stats: {
    views: number
    saves: number
    remixes: number
  }
}

Collection {
  id: string
  name: string
  userId: string
  scenes: Scene[]
  settings: DisplaySettings
}
```

---

## 7. Association Strategy

### 7.1 A24 Partnership Opportunity
**Why This Benefits A24:**

1. **Brand Extension**: Extends A24 beyond streaming into lifestyle
2. **Discovery Engine**: Drives interest in catalog films
3. **Cultural Capital**: Positions A24 films as "displayable art"
4. **Data Insights**: Which scenes resonate? Which films trend?
5. **Merchandise Synergy**: Frame TV partnerships, physical prints

**Partnership Model:**
- Official A24 scene library access
- Co-branded "A24 x CineBox" positioning
- Revenue share on premium collections
- Cross-promotion on A24 social channels

### 7.2 Samsung Frame TV Integration
**Distribution Partnership**

- Pre-installed app on Frame TV
- "Art Mode" preset for A24 scenes
- Smart Things integration
- Joint marketing campaign

### 7.3 Positioning Statement

**Tagline:**
> "Collaborative scene visualization with the framing of art mode on Samsung Frame."

**One-Liner:**
> "CineBox turns your screen into a gallery of cinematic moments. Visualize, curate, and display A24 scenes like art in your living space."

**Category**: Collaborative Gallery / Ambient Display
**Comparison**:
- Pinterest (static images) : CineBox (cinematic scenes)
- Spotify (music) : CineBox (film moments)
- Frame TV Art Mode (paintings) : CineBox (A24 scenes)

---

## 8. Success Metrics

### North Star Metric
**Scenes Displayed Per Day** (engagement + ambient usage)

### Supporting Metrics
1. **Gallery Mode Adoption**: % users who enable ambient display
2. **Collection Size**: Avg scenes saved per user
3. **Session Duration**: Time spent in gallery mode
4. **Social Engagement**: Remix rate, trending scenes CTR
5. **Discovery Rate**: % users who explore film sources

### Business Metrics (Future)
- Premium subscription conversion (access to full A24 library)
- Frame TV app downloads
- Partnership revenue (A24, Samsung)

---

## 9. Roadmap

### V1 - MVP (Current)
- [x] Scene generator (AI mood boards)
- [x] Trending scenes feed
- [x] Dark A24 aesthetic
- [x] Progressive blur effects
- [x] Basic save functionality

### V2 - Gallery Mode
- [ ] Full-screen ambient display
- [ ] Auto-rotate with customizable timing
- [ ] Mat frame options
- [ ] Pause on hover with metadata
- [ ] Collections organization

### V3 - Social
- [ ] User profiles
- [ ] Shared collections
- [ ] Collaborative mood boards
- [ ] Community-curated galleries

### V4 - Integration
- [ ] **Letterboxd Pipeline** (see Section 14)
- [ ] Frame TV app
- [ ] Apple TV app
- [ ] Desktop screensaver
- [ ] Official A24 scene library

### V5 - Monetization
- [ ] Premium A24 scenes library
- [ ] Physical print marketplace
- [ ] Custom framing service
- [ ] Director commentary on scenes

---

## 10. Design Principles

### 10.1 Visual
1. **Gallery First**: Content over chrome
2. **Editorial Restraint**: Minimal UI, maximal imagery
3. **Cinematic Fidelity**: Respect aspect ratios, grain, color
4. **Dark Elegance**: A24's sophisticated aesthetic

### 10.2 Experience
1. **Ambient by Default**: Auto-play gallery mode
2. **One-Click Curation**: Effortless saving
3. **Non-Intrusive**: Metadata only on interaction
4. **Intentional Pacing**: Slow crossfades, breathing room

### 10.3 Brand
1. **Film as Art**: Elevate scenes to displayable status
2. **Tastemaker Signal**: Curating CineBox = having taste
3. **A24 DNA**: Moody, contemplative, visually striking
4. **Anti-Algorithm**: Human-curated, not infinite scroll

---

## 11. Competitive Landscape

| Product | Category | Strength | Weakness |
|---------|----------|----------|----------|
| **Samsung Frame TV** | Ambient Display | Hardware integration | Limited to static art |
| **Letterboxd** | Film Discovery | Social + logging | No visual display mode |
| **Pinterest** | Mood Boards | Discovery engine | Generic, not cinematic |
| **Behance/Dribbble** | Creative Inspiration | Professional quality | Not film-specific |
| **A24 Shop** | Merchandise | Official A24 | No digital/ambient offering |

**CineBox's Unique Position:**
- Only product combining film discovery + ambient display
- Only A24-focused digital gallery
- Only "Frame TV for cinema" experience

---

## 12. Open Questions

1. **Licensing**: How to secure rights to official A24 stills?
2. **Monetization**: Premium tier? Physical prints? Partnership rev-share?
3. **Hardware**: Build native Frame TV app or web-first?
4. **Community**: UGC scenes or curated-only?
5. **Expansion**: Beyond A24? (Criterion, MUBI, etc.)

---

## 13. Risks & Mitigations

### Risk: Copyright Issues
**Mitigation**: Partner with A24 officially OR use AI-generated scenes only

### Risk: Limited Appeal (Niche Audience)
**Mitigation**: Start niche, expand to broader indie cinema

### Risk: Hardware Dependency (Frame TV)
**Mitigation**: Web-first, multi-device (desktop, tablet, TV apps)

### Risk: Content Staleness
**Mitigation**: Weekly trending updates, new releases, seasonal collections

---

## 14. Letterboxd Integration Pipeline

### 14.1 Concept
**Your Film Taste → Your Gallery**

Connect Letterboxd account to automatically curate CineBox scenes from films you love. Instead of static ratings, display living scenes from your favorite films.

### 14.2 Pipeline Features

#### Import from Letterboxd
**Watchlist → Scene Suggestions**
- OAuth login to Letterboxd
- Import user's 4+ star films
- Generate iconic scenes from those films
- Auto-populate initial gallery

**Favorites → Collections**
- Map Letterboxd lists → CineBox collections
- "Comfort Films" list → "Cozy Scenes" gallery
- "Best Cinematography" → "Visual Moments" collection

**Activity Feed → New Scenes**
- When user logs a film on Letterboxd
- CineBox suggests scenes from that film
- One-click add to gallery

#### Export to Letterboxd
**Collections → Lists**
- Export CineBox collection as Letterboxd list
- "20 Films Behind These Scenes"
- Cross-promote on both platforms

**Scene Sources → Reviews**
- Share scene with film link
- "I loved this moment from [Film]"
- Posts to Letterboxd activity

### 14.3 Social Features

**Friends' Galleries**
- See scenes from friends' top films
- Discover films through visual moments
- "Your friend loved this scene from..."

**Taste Match**
- Compare film overlap
- "You both love The Lighthouse → See Sarah's gallery"
- Visual discovery layer on top of ratings

**Scene Commentary**
- Add Letterboxd-style reviews to specific scenes
- "This shot perfectly captures the isolation theme"
- Timestamped to exact moment

### 14.4 Technical Implementation

```typescript
// Letterboxd API Integration
interface LetterboxdPipeline {
  // Import
  importWatchlist(): Promise<Film[]>
  importLists(): Promise<List[]>
  syncActivity(): Promise<Activity[]>

  // Export
  exportCollection(collectionId: string): Promise<LetterboxdList>
  shareScene(sceneId: string): Promise<LetterboxdPost>

  // Social
  getFriendsGalleries(): Promise<Gallery[]>
  getTasteMatch(userId: string): Promise<TasteProfile>
}

// Data Flow
Letterboxd 4★+ Films
  → Extract iconic scenes
  → Generate/fetch stills
  → Populate CineBox gallery
```

### 14.5 User Flow

**First-Time Setup**
1. Connect Letterboxd account
2. Import 4+ star films (e.g., 47 films)
3. CineBox generates 3 scenes per film
4. User curates down to favorite 50 scenes
5. Gallery auto-plays on launch

**Ongoing Sync**
1. User logs film on Letterboxd
2. CineBox notification: "New scenes available"
3. Review & add to gallery
4. Gallery stays fresh with taste evolution

### 14.6 Value Proposition

**For Users:**
- Effortless curation (leverages existing Letterboxd data)
- Visual expression of film taste
- Discovery through friends' galleries

**For Letterboxd:**
- New engagement layer (beyond ratings)
- Visual sharing (more shareable than text reviews)
- Drives traffic back to Letterboxd film pages

**For CineBox:**
- Instant personalization (no cold start)
- Social graph bootstrap (Letterboxd friends)
- Content discovery engine

### 14.7 Partnership Opportunity

**Letterboxd x CineBox**
- Official integration partnership
- Cross-promotion to Letterboxd's 10M+ users
- "Display your film taste" campaign
- Revenue share on premium features

**Co-Marketing:**
- "Your Letterboxd, visualized"
- "From ratings to rotating gallery"
- Target: Letterboxd Pro subscribers (already paying for film tools)

### 14.8 Competitive Advantage

**vs. Static Letterboxd Profiles:**
| Feature | Letterboxd | CineBox + Letterboxd |
|---------|------------|---------------------|
| Film logging | ✅ Ratings, reviews | ✅ + Visual scenes |
| Discovery | 📝 Text lists | 🖼️ Visual galleries |
| Social | 👍 Likes, follows | 👀 See friends' scenes |
| Display | 📱 Mobile only | 📺 Ambient TV mode |

**Unique Position:**
- Only visual extension of Letterboxd taste
- Only "Frame TV for your film profile"
- Only ambient display of film history

### 14.9 Metrics

**Pipeline Success:**
- % users who connect Letterboxd
- Avg scenes imported per user
- Retention: 7-day, 30-day after import
- Social: Friends discovered via Letterboxd

**Engagement:**
- Gallery refresh rate (new films → new scenes)
- Cross-platform posting (CineBox → Letterboxd)
- Discovery rate (scenes → film watches)

### 14.10 Roadmap Priority

**Phase 1: Import** (V4)
- OAuth connection
- Import 4+ star films
- Generate scene suggestions
- One-way sync (Letterboxd → CineBox)

**Phase 2: Export** (V5)
- Share scenes to Letterboxd activity
- Export collections as lists
- Two-way sync

**Phase 3: Social** (V6)
- Friends' galleries
- Taste match algorithm
- Scene commentary

---

## Appendix

### References
- [Samsung Frame TV Art Mode](https://www.samsung.com/us/tvs/lifestyle-tvs/the-frame/art-mode/)
- [A24 Films](https://a24films.com/)
- [Framestore VFX](https://www.framestore.com/)
- [ShotDeck Film Stills](https://shotdeck.com)

### Related Docs
- `/Users/renaise/.clawdbot/agents/a24-visualizer/agent/MEMORY.md`
- `/Users/renaise/a24-labs-spec/README.md`

---

**Document Version**: 1.0
**Last Updated**: 2026-02-12
**Owner**: Renaise Kim (agent gawd)
**Status**: Draft → A24 Labs Interview
