# Visual Changes: Before → After

## Homepage Hero

### BEFORE:
```
- Standard hero layout
- Video at full opacity (distracting)
- Medium font weights (500)
- 13px buttons with standard tracking
- Social proof too prominent
```

### AFTER (A24-WORTHY):
```
- Full-screen hero (min-h-screen)
- Video at 40% opacity (subtle background)
- Light font weight (400) for elegance
- 11px buttons with 0.15em tracking (editorial)
- Scroll indicator with animated arrow
- Radial gradient vignette overlay
- Social proof at 30% opacity (whisper, don't shout)
```

**Typography:**
- H1: 68px, font-weight 400, tracking -0.02em
- Body: 16px, line-height 1.8, white/65 opacity
- Buttons: 11px uppercase, tracking 0.15em

---

## Browse View - Main Viewer

### BEFORE:
```
- Basic film title
- Director/year only
- No cinematographer credits
- No aspect ratio info
- Standard image display
```

### AFTER (FILM-LITERATE):
```
+ Film title (20px, medium)
+ Director • DP: [Name] • Year • Studio
+ Aspect ratio badge (top-right of image)
+ Timestamp badge (bottom-left, shows on hover)
+ "1.19:1 Aspect Ratio" subtitle
```

**Example:**
```
The Lighthouse
Robert Eggers • DP: Jarin Blaschke • 2019 • A24
1.19:1 ASPECT RATIO

[Image with badges:]
  [2.39:1]  ← top-right
  [00:45:12] ← bottom-left (hover)
```

---

## Browse View - Filmstrip Sidebar

### BEFORE:
```
- Image thumbnails only
- Ring on active (too bold)
- Opacity states only
```

### AFTER (METADATA-RICH):
```
+ Image thumbnail
+ Film title (10px, below)
+ Director • Year (9px, white/50)
+ Timestamp badge on hover
- Subtle ring on active (1px white)
```

**Card Structure:**
```
┌────────────┐
│   Image    │ ← Aspect ratio 4:3
│ [00:23:45] │ ← Timestamp (hover)
└────────────┘
Moonlight        ← 10px, white
Barry Jenkins • 2016  ← 9px, white/50
```

---

## Studio Match Results

### BEFORE:
```
- Small heading (42px)
- Standard underline accent
- Compact spacing
- Basic match percentage
- Standard bullet lists
- Generic recommendation text
```

### AFTER (EDITORIAL LAYOUT):
```
+ Breadcrumb (10px uppercase, tracked)
+ Large light heading (48px, font-weight 400)
+ Generous spacing (mb-16)
+ Huge match percentage (56px, font-light)
+ Elegant 2px progress bar
+ Icon-based insights (circles)
+ Editorial recommendation (1.7 line-height)
```

**Card Hierarchy:**
```
┌─────────────────────────────────────┐
│                                     │
│  A24                        89%     │ ← 32px + 56px
│  ━━━━━━━━━━━━━━━━━━━━━            │ ← 2px bar
│                                     │
│  Funded 12 of 47 similar projects  │ ← 15px, 1.8 lh
│  • 26% acceptance rate              │
│                                     │
│  ◉ Strong match for folk horror     │ ← Icons
│  ◉ Funds first-time directors       │
│  ◯ Budget slightly high             │
│                                     │
│  ──────────────────────────────     │
│                                     │
│  RECOMMENDATION                     │ ← 9px uppercase
│  Submit to A24 first. This is your  │ ← 15px, 1.7 lh
│  strongest match.                   │
│                                     │
│  Contact: submissions@a24films.com  │ ← 12px, white/40
│  Best window: Sept-Nov (pre-Sundance)│
│                                     │
└─────────────────────────────────────┘
```

---

## Typography System

### Font Sizes (Hierarchical Scale):
```
h1:    68px  (font-weight: 400, tracking: -0.02em)
h2:    32px  (font-weight: 500, tracking: -0.01em)
h3:    20px  (font-weight: 500)
h4:    14px  (font-weight: 500)

p:     15px  (line-height: 1.7)
large: 18px  (line-height: 1.8)
small: 13px  (line-height: 1.6)

label: 10px  (uppercase, tracking: 0.15em)
mono:  11px  (monospace family)
```

### Line Heights (Generous, Editorial):
```
Headings: 1.1 - 1.4
Body:     1.7
Large:    1.8
```

### Letter Spacing (Intentional):
```
Headings:   -0.02em to -0.01em (tight)
Body:       0 (default)
Labels:     0.15em - 0.2em (wide)
Buttons:    0.15em (wide, editorial)
```

---

## Color Palette

### BEFORE (Too Many Grays):
```
#999999
#666666
#333333
rgba(255,255,255,0.3)
rgba(255,255,255,0.08)
```

### AFTER (Systematic Opacity):
```
white         (headings)
white/90      (strong body)
white/80      (body text)
white/65      (muted body)
white/50      (metadata)
white/40      (subtle labels)
white/30      (social proof)
white/15      (borders, strong)
white/10      (borders, medium)
white/8       (borders, subtle)
white/5       (backgrounds)
```

---

## Spacing System (10px Grid)

```
Gap sizes:
- 3px   (icon gaps)
- 4px   (tight metadata)
- 8px   (standard spacing)
- 12px  (medium spacing)
- 16px  (section spacing)
- 24px  (large gaps)
- 48px  (very large)
- 96px  (section breaks)
```

---

## Micro-Interactions

### Hover States:
```
Cards:   translateY(-2px), border: white/15
Images:  scale(1.02), 400ms
Buttons: opacity: 0.85, translateY(-1px)
Tags:    bg: white/8, border: white/12
```

### Transitions:
```
All:     200ms (fast, instant feeling)
Images:  400ms (smooth zoom)
Bars:    1000ms ease-out (dramatic reveal)
```

### Loading States:
```
Skeleton screens (NOT spinners):
- Gradient pulse animation
- 1.5s infinite loop
- bg: white/3 → white/6 → white/3
```

---

## Film-Specific Badges

### Aspect Ratio Badge:
```css
position: absolute;
top: 12px; right: 12px;
padding: 4px 8px;
background: rgba(0,0,0,0.8);
backdrop-filter: blur(10px);
font-size: 9px;
text-transform: uppercase;
letter-spacing: 0.1em;
```

### Timestamp Badge:
```css
position: absolute;
bottom: 12px; left: 12px;
font-family: monospace;
font-size: 10px;
opacity: 0;  /* Shows on hover */
transition: opacity 200ms;
background: rgba(0,0,0,0.7);
padding: 4px 8px;
backdrop-filter: blur(10px);
```

---

## Button Styles

### Primary (White):
```
bg: white
text: black
padding: 16px 48px
font-size: 11px
uppercase
tracking: 0.15em
hover: opacity 0.85
```

### Secondary (Outlined):
```
bg: transparent
text: white
border: 1px solid white/30
padding: 16px 48px
font-size: 11px
uppercase
tracking: 0.15em
hover: bg white/8
```

### Tertiary (Subtle):
```
bg: white/8
text: white
padding: 16px 48px
font-size: 11px
uppercase
tracking: 0.15em
hover: bg white/12
```

---

## Data Enrichment

### Films with Full Metadata (10 added):

1. **Moonlight** - James Laxton, 2.39:1
2. **Hereditary** - Pawel Pogorzelski, 2.00:1
3. **Midsommar** - Pawel Pogorzelski, 2.00:1
4. **The Lighthouse** - Jarin Blaschke, 1.19:1
5. **EEAAO** - Larkin Seiple, 2.39:1
6. **Lady Bird** - Sam Levy, 1.85:1
7. **The Witch** - Jarin Blaschke, 1.66:1
8. **Uncut Gems** - Darius Khondji, 2.39:1
9. **Ex Machina** - Rob Hardy, 2.35:1
10. **Blade Runner 2049** - Roger Deakins, 2.39:1
11. **In the Mood for Love** - Christopher Doyle, 1.66:1

---

## What Makes This A24-Worthy?

### 1. Film Literacy
- DP credits (shows cinematography knowledge)
- Aspect ratios (technical awareness)
- Timestamps (professional detail)

### 2. Typographic Restraint
- Clear hierarchy (68 → 32 → 20 → 15)
- Generous line heights (1.7-1.8)
- Wide tracking on labels (0.15em+)

### 3. Editorial Layout
- Intentional negative space
- Magazine-quality spacing
- Subtle, considered details

### 4. Confident Minimalism
- Pure black (#000)
- White with opacity variations
- No gradients, shadows, or effects
- Design whispers, doesn't shout

### 5. Considered Interactions
- 200ms transitions (instant)
- Skeleton screens (not spinners)
- Subtle hover states (2px lift)
- Purposeful animations only

---

## File Changes Summary

```
Modified: 5 files
Lines changed: ~300
New components: 8 (badges, skeleton, tags, etc.)
Data enriched: 11 films with DP + aspect ratio
```

**Files:**
1. `/src/index.css` - Typography + components
2. `/src/views/Home.tsx` - Hero redesign
3. `/src/views/Browse.tsx` - Film metadata
4. `/src/views/StudioMatch.tsx` - Editorial layout
5. `/src/data/a24-scenes.ts` - DP + aspect ratios

---

**Result:** A portfolio piece that demonstrates A24-level taste, film literacy, and design craft.
