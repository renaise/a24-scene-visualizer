# Airtable Setup Guide for CineBox
## Complete Base Structure (Copy-Paste Ready)

**Time to complete:** 30 minutes

---

## Step 1: Create New Base

1. Go to airtable.com
2. Click "Create a base"
3. Choose "Start from scratch"
4. Name: "CineBox Database"
5. Icon: 🎬 (film camera emoji)

---

## Step 2: Create Tables

You'll create 6 tables. Delete the default "Table 1" after you're done.

---

### Table 1: Films

**Purpose:** Curated indie films (200 total)

#### Fields:

1. **Film ID** (Formula, auto-generated)
   - Formula: `RECORD_ID()`
   - Used for linking to other tables

2. **Title** (Single line text)
   - Example: "Moonlight"

3. **Director** (Single line text)
   - Example: "Barry Jenkins"

4. **Year** (Number)
   - Format: Integer
   - Example: 2016

5. **Studio** (Single select)
   - Options:
     - A24
     - Neon
     - Annapurna
     - MUBI
     - Bleecker Street
     - IFC Films
     - Focus Features
     - Other

6. **Budget Tier** (Single select)
   - Options:
     - Micro (<$500k)
     - Low ($500k-$2M)
     - Mid ($2M-$10M)
     - High ($10M+)
     - Unknown

7. **Budget Actual** (Number)
   - Format: Currency (USD)
   - Example: 1500000 (for $1.5M)

8. **Genre** (Multiple select)
   - Options:
     - Drama
     - Horror
     - Thriller
     - Comedy
     - Romance
     - Sci-Fi
     - Fantasy
     - Documentary
     - Western
     - Coming-of-age
     - Folk Horror
     - Psychological

9. **Themes** (Multiple select)
   - Options:
     - Identity
     - Family
     - Trauma
     - Isolation
     - Grief
     - Power
     - Sexuality
     - Religion
     - Class
     - Nature
     - Violence
     - Memory
     - Addiction
     - Immigration
     - LGBTQ

10. **Logline** (Long text)
    - Example: "A young African-American man grapples with his identity and sexuality while experiencing the physical and emotional abuse of his drug-addicted mother and the harsh realities of growing up poor and Black in Miami."

11. **Festival History** (Long text)
    - Example: "Winner: Best Picture (Academy Awards 2017), Premiered at Telluride Film Festival 2016"

12. **Box Office** (Number)
    - Format: Currency (USD)
    - Example: 65000000 (for $65M)

13. **Frame Count** (Count field, linked to Frames table)
    - Automatically counts frames linked to this film

14. **Poster URL** (URL)
    - Example: https://image.tmdb.org/t/p/original/poster.jpg

15. **Created** (Created time)
    - Auto-generated

---

### Table 2: Frames

**Purpose:** Individual cinematography frames from curated films (2,500 total)

#### Fields:

1. **Frame ID** (Formula, auto-generated)
   - Formula: `RECORD_ID()`

2. **Film** (Link to Films table)
   - Allow linking to multiple records: No
   - Click to select film from dropdown

3. **Image** (Attachment)
   - Upload JPG (500KB-2MB each)

4. **Timestamp** (Single line text)
   - Example: "00:23:45" (23 minutes, 45 seconds)

5. **Composition** (Multiple select)
   - Options:
     - Rule of thirds
     - Symmetrical
     - Centered
     - Leading lines
     - Depth (shallow focus)
     - Depth (deep focus)
     - Negative space
     - Dutch angle
     - Overhead
     - Low angle
     - High angle

6. **Color Palette** (Multiple select)
   - Options:
     - Warm (oranges, yellows)
     - Cool (blues, teals)
     - Muted/Desaturated
     - High saturation
     - Monochrome (B&W)
     - Neon/Vibrant
     - Natural/Earthy
     - Pastel
     - Dark/Shadows
     - Bright/Overexposed

7. **Lighting** (Multiple select)
   - Options:
     - Natural light
     - Three-point lighting
     - Low-key (high contrast)
     - High-key (soft/flat)
     - Practical lights
     - Colored gels
     - Silhouette
     - Backlit
     - Candlelight
     - Fluorescent

8. **Shot Type** (Multiple select)
   - Options:
     - Wide/Establishing
     - Medium shot
     - Close-up
     - Extreme close-up
     - Over-the-shoulder
     - Two-shot
     - POV
     - Insert

9. **Camera Movement** (Multiple select)
   - Options:
     - Static
     - Dolly/Tracking
     - Steadicam
     - Handheld
     - Crane
     - Drone
     - Pan
     - Tilt
     - Zoom

10. **Mood** (Multiple select)
    - Options:
      - Intimate
      - Tense
      - Playful
      - Melancholic
      - Eerie
      - Romantic
      - Mysterious
      - Violent
      - Peaceful
      - Chaotic
      - Nostalgic
      - Dreamlike

11. **Notes** (Long text)
    - Example: "Opening shot, establishes Miami setting, naturalistic lighting creates intimacy"

12. **Tag Count** (Formula)
    - Formula: `LEN(Composition&"")+LEN({Color Palette}&"")+LEN(Lighting&"")+LEN({Shot Type}&"")+LEN({Camera Movement}&"")+LEN(Mood&"")`
    - Purpose: Quality control (must have 8+ tags)

13. **Created** (Created time)

---

### Table 3: Projects

**Purpose:** User-uploaded filmmaker projects

#### Fields:

1. **Project ID** (Formula)
   - Formula: `RECORD_ID()`

2. **User Email** (Email)
   - Links to Softr user account
   - Auto-filled by Softr

3. **Title** (Single line text)
   - Example: "The Last Lighthouse Keeper"

4. **Logline** (Long text)
   - Max 3 sentences

5. **Genre** (Multiple select)
   - Same options as Films table

6. **Budget Tier** (Single select)
   - Same options as Films table

7. **Themes** (Multiple select)
   - Same options as Films table

8. **Target Studios** (Multiple select)
   - Same options as Films → Studio

9. **Status** (Single select)
   - Options:
     - Concept
     - Development
     - Pitching
     - Funded
     - In Production
     - Completed

10. **Director Name** (Single line text)

11. **Director Bio** (Long text)
    - Max 200 words

12. **Director Instagram** (URL)

13. **Director Vimeo** (URL)

14. **Frame Count** (Count, linked to Project Frames)

15. **Match Score** (Lookup from Studio Matches table)
    - Shows best match percentage

16. **Recommended Studios** (Lookup from Studio Matches)

17. **Created** (Created time)

18. **Updated** (Last modified time)

---

### Table 4: Project Frames

**Purpose:** User-uploaded reference frames

#### Fields:

1. **Frame ID** (Formula)
   - Formula: `RECORD_ID()`

2. **Project** (Link to Projects table)
   - Allow linking to multiple: No

3. **Image** (Attachment)

4. **Composition** (Multiple select)
   - Same options as Frames table

5. **Color Palette** (Multiple select)
   - Same options as Frames table

6. **Mood** (Multiple select)
   - Same options as Frames table

7. **Notes** (Long text)

8. **Created** (Created time)

---

### Table 5: Studio Matches

**Purpose:** Store matching results for each project

#### Fields:

1. **Match ID** (Formula)
   - Formula: `RECORD_ID()`

2. **Project** (Link to Projects table)
   - Allow linking to multiple: No

3. **Matched Films** (Link to Films table)
   - Allow linking to multiple: Yes
   - Links to top 10-20 similar films

4. **Match Score** (Number)
   - Format: Percentage (0-100%)
   - Calculated by Airtable automation (see below)

5. **Genre Match %** (Number)
   - Percentage of genre overlap

6. **Budget Match** (Checkbox)
   - True if same budget tier

7. **Theme Match %** (Number)
   - Percentage of theme overlap

8. **Visual Match %** (Number)
   - Percentage of visual tag overlap (composition + color + mood)

9. **Recommended Studios** (Multiple select)
   - Top 3 studios based on matched films
   - Options: Same as Films → Studio

10. **Studio Contact Info** (Long text)
    - Development exec names + emails
    - Populated manually (or via separate Studio Contacts table)

11. **Created** (Created time)

---

### Table 6: Studio Contacts (Optional, for V2)

**Purpose:** Development exec contact info

#### Fields:

1. **Studio** (Single select)
   - Same options as Films → Studio

2. **Exec Name** (Single line text)
   - Example: "Sarah Johnson"

3. **Title** (Single line text)
   - Example: "VP of Development"

4. **Email** (Email)

5. **Submission Window** (Long text)
   - Example: "Open submissions year-round. Prefers email pitch with logline + director bio."

6. **Notes** (Long text)

7. **Last Updated** (Last modified time)

---

## Step 3: Create Views

### Films Table Views:

1. **All Films** (Grid view)
   - Default view
   - Shows all films

2. **By Studio** (Grouped view)
   - Group by: Studio
   - Sort by: Year (descending)

3. **A24 Only** (Filtered view)
   - Filter: Studio = "A24"
   - Sort by: Year (descending)

4. **Missing Frames** (Filtered view)
   - Filter: Frame Count < 10
   - Purpose: Quality control (ensure all films have 10+ frames)

---

### Frames Table Views:

1. **All Frames** (Gallery view)
   - Card size: Large
   - Card preview: Image
   - Card fields: Film, Timestamp, Tag Count

2. **By Film** (Grouped view)
   - Group by: Film
   - Useful for seeing all frames for one film

3. **Missing Tags** (Filtered view)
   - Filter: Tag Count < 8
   - Purpose: Quality control

---

### Projects Table Views:

1. **All Projects** (Grid view)
   - Default view

2. **By Status** (Grouped view)
   - Group by: Status

3. **By User** (Grouped view)
   - Group by: User Email

4. **Recent** (Filtered view)
   - Filter: Created (in the last 30 days)
   - Sort by: Created (descending)

---

## Step 4: Matching Algorithm (Airtable Automation)

**Goal:** When a project is created, automatically find matched films.

### Automation Setup:

1. Go to Automations tab
2. Click "Create automation"
3. Name: "Match Project to Films"

**Trigger:**
- When record created in Projects table

**Actions:**

**Action 1: Find Matched Films (Script)**

Since Airtable formulas can't do complex matching, we use a script.

**Script:**

```javascript
// Get the project record
let inputConfig = input.config();
let projectId = inputConfig.projectId;

// Fetch the project
let projectTable = base.getTable("Projects");
let projectRecord = await projectTable.selectRecordAsync(projectId);

let projectGenres = projectRecord.getCellValue("Genre") || [];
let projectThemes = projectRecord.getCellValue("Themes") || [];
let projectBudgetTier = projectRecord.getCellValue("Budget Tier");

// Fetch all films
let filmsTable = base.getTable("Films");
let filmsQuery = await filmsTable.selectRecordsAsync({
    fields: ["Title", "Genre", "Themes", "Budget Tier", "Studio"]
});

let matches = [];

for (let film of filmsQuery.records) {
    let filmGenres = film.getCellValue("Genre") || [];
    let filmThemes = film.getCellValue("Themes") || [];
    let filmBudgetTier = film.getCellValue("Budget Tier");

    // Calculate match score
    let genreOverlap = projectGenres.filter(g => filmGenres.includes(g)).length;
    let genreScore = projectGenres.length > 0 ? (genreOverlap / projectGenres.length) * 30 : 0;

    let budgetScore = projectBudgetTier === filmBudgetTier ? 25 : 0;

    let themeOverlap = projectThemes.filter(t => filmThemes.includes(t)).length;
    let themeScore = projectThemes.length > 0 ? (themeOverlap / projectThemes.length) * 25 : 0;

    // Visual match (simplified for V1, will be 20% in full version)
    let visualScore = 10; // Placeholder for now

    let totalScore = genreScore + budgetScore + themeScore + visualScore;

    if (totalScore >= 30) { // Only include matches above 30%
        matches.push({
            filmId: film.id,
            score: totalScore,
            genreMatch: genreScore,
            budgetMatch: budgetScore,
            themeMatch: themeScore
        });
    }
}

// Sort by score
matches.sort((a, b) => b.score - a.score);

// Take top 20
let topMatches = matches.slice(0, 20);

// Create Studio Matches record
let matchesTable = base.getTable("Studio Matches");
await matchesTable.createRecordAsync({
    "Project": [{id: projectId}],
    "Matched Films": topMatches.map(m => ({id: m.filmId})),
    "Match Score": topMatches[0]?.score || 0,
    "Genre Match %": topMatches[0]?.genreMatch || 0,
    "Budget Match": topMatches[0]?.budgetMatch > 0,
    "Theme Match %": topMatches[0]?.themeMatch || 0
});

console.log(`Matched ${topMatches.length} films for project ${projectId}`);
```

**Note:** This requires Airtable Scripting (available on Pro plan, $20/mo).

**Alternative (No Scripting):**

If you don't want to pay for Pro:

1. Use Zapier or Make.com (automation tools)
2. Trigger: New record in Projects
3. Action: Find records in Films (with filters)
4. Action: Create record in Studio Matches

**Cost:** Zapier starts at $20/mo for 750 tasks.

**Or:** Do matching manually for MVP (you review each project and add matches by hand). This works for first 50 users.

---

## Step 5: Connect to Softr

1. In Softr, go to Data
2. Click "Connect Airtable"
3. Authorize Airtable access
4. Select base: "CineBox Database"
5. Softr will now show all tables

**Map Tables to Softr Pages:**

- **Landing page:** Static (no Airtable)
- **LAB page:** Films table (List block)
- **Film detail page:** Films table (Details block) + Frames table (Related list)
- **Project upload:** Projects table (Form block)
- **Dashboard:** Projects table (List block, filtered by logged-in user)
- **Studio Matches page:** Studio Matches table (Details block)

---

## Step 6: Seed Data (Test)

Add 5 test films to verify setup:

### Film 1:
- Title: Moonlight
- Director: Barry Jenkins
- Year: 2016
- Studio: A24
- Budget Tier: Mid ($2M-$10M)
- Budget Actual: 1500000
- Genre: Drama, Coming-of-age
- Themes: Identity, LGBTQ, Family
- Logline: "A young African-American man grapples with his identity and sexuality."

### Film 2:
- Title: Hereditary
- Director: Ari Aster
- Year: 2018
- Studio: A24
- Budget Tier: Mid ($2M-$10M)
- Budget Actual: 10000000
- Genre: Horror
- Themes: Family, Trauma, Grief
- Logline: "A grieving family is haunted by tragic and disturbing occurrences."

### Film 3:
- Title: Parasite
- Director: Bong Joon-ho
- Year: 2019
- Studio: Neon
- Budget Tier: Mid ($2M-$10M)
- Budget Actual: 11400000
- Genre: Thriller, Drama
- Themes: Class, Family, Violence
- Logline: "A poor family schemes to become employed by a wealthy family."

### Film 4:
- Title: Her
- Director: Spike Jonze
- Year: 2013
- Studio: Annapurna
- Budget Tier: Mid ($2M-$10M)
- Budget Actual: 23000000
- Genre: Sci-Fi, Romance
- Themes: Isolation, Technology, Love
- Logline: "A lonely writer develops an unlikely relationship with an AI."

### Film 5:
- Title: The Lighthouse
- Director: Robert Eggers
- Year: 2019
- Studio: A24
- Budget Tier: Low ($500k-$2M)
- Budget Actual: 11000000
- Genre: Horror, Psychological
- Themes: Isolation, Madness, Power
- Logline: "Two lighthouse keepers descend into madness on a remote island."

**Then add 3-5 frames for each film** (from TMDB or screencaps).

Test:
1. Does Film detail page show frames?
2. Does matching algorithm work (create test project)?
3. Does Softr display correctly?

---

## Step 7: Full Dataset Upload

Once test data works, upload full 200 films.

**Options:**

### Option A: Manual Entry (Slow but Accurate)
- You + 2 hired students
- Use Airtable interface (or forms)
- 80 hours total

### Option B: CSV Import (Faster but Requires Prep)
- Create spreadsheet with all film metadata
- Import to Airtable (File → Import)
- Then add frames manually

### Option C: API Script (Fastest for Metadata)
- Use TMDB API to pull metadata
- Script to create Airtable records via API
- Then add frames manually

**Recommended:** Option A for quality control.

---

## Step 8: Quality Control

**Before launch, verify:**

✅ All 200 films have:
- [ ] Title, director, year, studio
- [ ] Genre, themes, budget tier
- [ ] Logline
- [ ] 10+ frames

✅ All 2,500 frames have:
- [ ] Image uploaded
- [ ] Linked to correct film
- [ ] 8+ tags total (composition + color + lighting + shot type + mood)

✅ Tables are connected:
- [ ] Films → Frames (linked records)
- [ ] Projects → Project Frames (linked records)
- [ ] Projects → Studio Matches (automation works)

✅ Softr pages load correctly:
- [ ] LAB shows all 200 films
- [ ] Film detail shows frames
- [ ] Project upload creates record
- [ ] Studio Matches displays results

---

## Tips for Speed

### Use Forms for Data Entry

Create Airtable forms for faster entry:

**Film Entry Form:**
1. Go to Films table
2. Click "Form" view
3. Customize form (reorder fields, add descriptions)
4. Share link with hired students

**Frame Entry Form:**
1. Go to Frames table
2. Create form
3. Include: Film (dropdown), Image (upload), Tags (checkboxes)
4. Students can batch-upload frames

---

### Use Airtable Extensions

**Extensions to Install:**

1. **Page Designer** (built-in)
   - Create PDF exports of studio profiles

2. **Chart** (built-in)
   - Visualize data (films by studio, genre distribution)
   - Use in marketing ("60 A24 films analyzed")

3. **Bulk Edit** (from Airtable Universe)
   - Edit multiple records at once
   - Faster tagging

---

## Common Issues

### Issue 1: Matching Algorithm Not Working
**Cause:** Automation not triggered
**Fix:** Check automation logs, ensure Pro plan is active

### Issue 2: Softr Not Showing Data
**Cause:** Airtable connection broken
**Fix:** Reconnect in Softr → Data settings

### Issue 3: Images Not Loading
**Cause:** File size too large (>5MB)
**Fix:** Compress images before upload (use TinyPNG.com)

### Issue 4: Formula Fields Show Error
**Cause:** Syntax error in formula
**Fix:** Copy-paste formulas exactly as written above

---

## Next Steps

Once Airtable is set up:

1. ✅ Connect to Softr
2. ✅ Build Softr pages (LAB, Upload, Matches)
3. ✅ Test user flow (signup → upload → match)
4. ✅ Add seed data (5 films, 25 frames)
5. ✅ Verify automation works
6. ✅ Upload full dataset (200 films, 2,500 frames)
7. ✅ Quality check (all frames have 8+ tags)
8. ✅ Launch!

---

## Time Breakdown

- **Setup Airtable (Tables + Fields):** 30 min
- **Setup Automation:** 20 min
- **Connect to Softr:** 10 min
- **Add Test Data:** 20 min
- **Test User Flow:** 15 min
- **Upload Full Dataset:** 30-80 hours (delegated)
- **Quality Check:** 4 hours

**Total (you):** ~2 hours setup + 4 hours QC = 6 hours
**Total (hired help):** 50 hours (dataset curation)

---

## Resources

- Airtable Formula Reference: support.airtable.com/docs/formula-field-reference
- Airtable Scripting: support.airtable.com/docs/scripting-overview
- Softr + Airtable Guide: softr.io/integrations/airtable

---

**You're ready. Set up Airtable now, then move to START_HERE.md for Day 1-7 execution.**
