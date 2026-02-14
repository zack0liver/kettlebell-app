# Session Log

## Session 3 — Feb 13, 2026

### Completed
- Renamed app to **Kettle Bell Genie** — subtitle "Your Workouts, On Command"
- Loading a saved workout now shows a collapsed source bar with workout name + "Edit" link (mirrors Generate behavior)
- Clicking "Edit" on loaded saved workout navigates to Saved tab and opens edit screen
- Added sort dropdown to Manual Build (A–Z, Difficulty, Equipment) with difficulty badges on exercise rows
- Created 11 stick-figure SVG exercise illustrations (swing, goblet, press, row, deadlift, lunge, farmer, curl, plank, turkish, glute bridge) — saved to `illustrations/` subfolder, removed from HTML for future refinement
- Attempted red X button repositioning (absolute top-right) — reverted, kept as enhancement

### Uncommitted Changes
- App rename (KettleFit → Kettle Bell Genie)
- Saved workout source bar on Build tab with Edit link
- Sort dropdown + difficulty badges in Manual Build
- Back button on Muscles tab
- Saved Workouts as own bottom nav tab (5 tabs)
- exercises.csv export
- illustrations/ subfolder with 11 SVGs

---

## Session 2 — Feb 13, 2026

### Completed
- Reordered settings modal (Experience Level first with helper text, Unit Preference second, nested kettlebell SVG for weight chips)
- Simplified kettlebell weights to 6 options (8–28 kg / 18–62 lb)
- Empty defaults on first load — no pre-selected weights
- Implemented circuit mode (toggle syncs all exercise sets, timer shows "First Set" / "Second Set" etc. with full exercise list per round)
- All changes pushed to GitHub

### Open Items
- See ENHANCEMENTS.md for 15 planned features
- See BUGS.md for known bugs
