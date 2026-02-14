# CineBox → A24 Labs Portfolio Piece

## Design Transformation Summary

This document outlines the comprehensive design upgrade to transform CineBox into an A24-worthy portfolio piece for the February 2026 designer interview.

---

## Core A24 Design Principles Applied

### 1. **Restraint Over Flourish**
- Removed unnecessary gradients and effects
- Simplified animations (200-300ms transitions only)
- Every element serves a purpose
- Intentional negative space throughout

### 2. **Editorial Typography**
- **Generous line heights**: 1.7-1.8 for body text
- **Hierarchical weight contrast**: Light (400) headings, medium (500) for emphasis
- **Wide tracking on labels**: 0.15em+ uppercase
- **Hierarchy through scale + space**, not color

### 3. **Confident Minimalism**
- Pure black (#000) background
- White/gray palette with subtle opacity variations
- Borders: 1px, rgba(255,255,255,0.08)
- Let imagery speak (design doesn't compete)

### 4. **Film-Specific Details**
- ✅ Aspect ratio badges (2.39:1, 1.19:1, etc.)
- ✅ Director/DP credits always visible
- ✅ Frame timestamps (00:45:12)
- ✅ Monospaced type for technical data

### 5. **Considered Interactions**
- Hover states: Subtle opacity changes (0.85)
- Transitions: 200ms (instant feeling)
- Loading states: Skeleton screens (NOT spinners)
- Micro-animations: Only for clarity

---

## Files Modified

### 1. `/src/index.css`
**Typography System:**
```css
h1 { font-size: 68px; font-weight: 400; }
h2 { font-size: 32px; font-weight: 500; }
h3 { font-size: 20px; font-weight: 500; }
p  { font-size: 15px; line-height: 1.7; }
.label { font-size: 10px; tracking: 0.15em; }
```

**New Components:**
- `.aspect-ratio-badge` - Top-right film metadata
- `.timestamp-badge` - Bottom-left timecode
- `.scene-card` - Film frame cards with hover
- `.skeleton` - Loading states with pulse animation
- `.tag` - Genre/metadata tags
- `.scroll-indicator` - Homepage scroll hint

**Micro-interactions:**
- Subtle lift on hover (`translateY(-2px)`)
- Image zoom on card hover (`scale(1.02)`)
- Button opacity transitions (200ms)

### 2. `/src/views/Home.tsx`
**Hero Section:**
- Full-screen hero (`min-h-screen`)
- Subtle video background (opacity: 0.4)
- Radial gradient vignette overlay
- Light font weight (400) for h1
- Wide-tracked CTAs (0.15em)
- Scroll indicator with animated arrow

**Social Proof:**
- Reduced opacity (0.3)
- Smaller, tracked type (11px, 0.1em)
- Minimal, doesn't compete with hero

### 3. `/src/views/Browse.tsx`
**Main Viewer:**
- **Aspect ratio badge** on images
- **Timestamp badge** (visible on hover)
- **Film credits** with DP name
- Generous spacing for readability

**Filmstrip Sidebar:**
- Increased width (180px → 200px)
- Added film title + director below each thumbnail
- Timestamp badge on hover
- Better visual hierarchy

### 4. `/src/views/StudioMatch.tsx`
**Complete Redesign:**
- **Breadcrumb navigation** (10px uppercase)
- **Large, light headings** (48px, font-weight: 400)
- **Generous spacing** (mb-16 instead of mb-8)
- **Editorial layout** with 1.8 line-height

**Studio Cards:**
- **Large match percentage** (56px, font-light)
- **Elegant progress bar** (2px height, white)
- **Icon-based insights** (circles with check/x)
- **Subtle borders** (white/15 for strong, white/5 for weak)
- **Editorial recommendation text** (1.7 line-height)

**Actions:**
- Wide-tracked buttons (0.15em)
- Consistent padding (px-10 py-4)
- Subtle hover states (bg-white/5)

### 5. `/src/data/a24-scenes.ts`
**Interface Updates:**
```typescript
interface FilmScene {
  cinematographer?: string  // NEW
  aspectRatio?: string      // NEW
  // ... existing fields
}
```

**Data Enrichment:**
- Moonlight: James Laxton (DP), 2.39:1
- The Lighthouse: Jarin Blaschke, 1.19:1
- Hereditary: Pawel Pogorzelski, 2.00:1
- Midsommar: Pawel Pogorzelski, 2.00:1
- Blade Runner 2049: Roger Deakins, 2.39:1

---

## What A24 Will Notice

### 1. **Film Literacy**
- DP credits show you understand cinematography
- Aspect ratios show technical awareness
- Monospaced timestamps feel professional

### 2. **Typographic Restraint**
- No font sizes chosen arbitrarily
- Clear hierarchy (68px → 32px → 20px → 15px)
- Wide tracking on labels (editorial magazines)

### 3. **Confident Minimalism**
- No gradients, no shadows, no effects
- Pure black/white with opacity variations
- Design doesn't scream—it whispers

### 4. **Attention to Detail**
- Hover states on timestamps
- Skeleton screens instead of spinners
- Subtle card lifts (translateY(-2px))
- Icon sizes consistent (3.5px × 3.5px)

### 5. **Editorial Layout**
- Studio Match feels like a magazine spread
- Generous line-height (1.7-1.8)
- Intentional negative space
- Breadcrumb navigation (uppercase, tracked)

---

## Remaining Enhancements (Optional)

### High Impact:
1. **Add more DP data** to all 100+ films
2. **Aspect ratio badges** on all Browse thumbnails
3. **Camera/lens metadata** (ARRI Alexa, Panavision)
4. **Film stock references** (Kodak Vision3 500T)

### Medium Impact:
5. **Custom fonts** (GT America, Suisse Int'l)
6. **Hover video previews** (GIF/WebM on card hover)
7. **PDF export** with branded template
8. **Keyboard shortcuts** (←/→ to navigate frames)

### Polish:
9. **Loading skeleton screens** on Browse
10. **Smooth page transitions** (fade in/out)
11. **Focus states** for accessibility
12. **Print stylesheet** for PDF export

---

## Success Criteria

When A24 designers review this, they should think:

> "This person gets it. They understand:
> - Editorial design (generous spacing, typography)
> - Film language (DPs, aspect ratios, technical specs)
> - Restraint (no unnecessary flourish)
> - Craft (every detail considered)
> - Taste (feels like an A24 site)"

---

## Technical Stack

- **React** (functional components)
- **TypeScript** (type-safe)
- **Tailwind CSS** (utility-first)
- **Custom CSS** (index.css for A24 aesthetics)
- **Lucide Icons** (minimal, consistent)

---

## Next Steps

1. **Test all interactions** (hover, click, transitions)
2. **Add more DP/aspect ratio data** (30-40 key films)
3. **Screenshot key pages** for portfolio presentation
4. **Deploy to Vercel** with custom domain
5. **Prepare case study** explaining design decisions

---

**Timeline:** 3-5 days for complete polish
**Deliverable:** Portfolio-ready site that demonstrates A24-level taste

---

## File Paths (for reference)

```
/Users/renaise/a24-labs-spec/src/index.css
/Users/renaise/a24-labs-spec/src/views/Home.tsx
/Users/renaise/a24-labs-spec/src/views/Browse.tsx
/Users/renaise/a24-labs-spec/src/views/StudioMatch.tsx
/Users/renaise/a24-labs-spec/src/data/a24-scenes.ts
```

All changes committed to: **A24 Labs Spec** redesign (Feb 2026)
