# Instructions to Create CineBox Feature Assessment Database in Notion

Since the MCP API is having formatting issues, here's how to create this manually:

## Step 1: Create New Database
1. Go to your Studio Artifice workspace in Notion
2. Navigate to the same parent page as "Projects" (ID: 2cd08ee1-658c-80fe-9430-d38adf575366)
3. Click "+ New database" and name it "CineBox Feature Assessment"

## Step 2: Create Properties

Delete default properties except "Name" and rename "Name" to "Feature". Then add these properties:

1. **Category** (Select)
   - Options: LAB (blue), STAGE (purple), Both (green)

2. **Status** (Select)
   - Options: ✅ Works (green), ⚠️ Partial (yellow), ❌ Doesn't Work (red)

3. **Timeline** (Select)
   - Options: V1 (3mo) (green), V2 (6mo) (blue), V3 (12mo) (orange), Series A (18mo+) (red)

4. **Complexity** (Select)
   - Options: Low (green), Medium (yellow), High (orange), Very High (red)

5. **Cost to Build** (Text)

6. **Reality Check** (Text - Long format)

7. **Moat Strength** (Select)
   - Options: Strong (green), Medium (yellow), Weak (orange), None (gray)

8. **Dependencies** (Multi-select)
   - Options: Custom AI (red), Expert Labeling (orange), Third-party API (blue), Infrastructure (purple), Manual Curation (pink)

9. **Unit Economics** (Select)
   - Options: Profitable (green), Break-even (yellow), Negative (red)

## Step 3: Import Data

Copy and paste the data from /tmp/cinebox_database.md into the new database.

Alternatively, I can create a CSV file you can import directly.
