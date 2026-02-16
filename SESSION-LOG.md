# Session Log

## Session 4 — Feb 15, 2026

### Major: Firebase Auth + Firestore Integration
- Split single `index.html` (2494 lines) into 6 files: `index.html`, `style.css`, `auth.css`, `app.js`, `firebase-config.js`, `firebase-sync.js`
- Added Firebase compat SDK via CDN (app, auth, firestore)
- Google Sign-In with popup + redirect fallback for mobile Safari
- Sign In / Sign Out buttons in header (no avatar/name — clean and simple)
- Auth gating on Saved, Log, and Insights tabs — show sign-in prompt when signed out
- Firestore CRUD with in-memory caching for logs, saved workouts, and settings
- Offline persistence enabled (`synchronizeTabs: true`)
- localStorage-to-Firestore migration modal on first sign-in
- End Workout shows toast prompt instead of log modal when signed out

### Bug Fixes
- Generate tab now resets after ending a workout (was staying collapsed)
- Log date defaults to local today instead of UTC (was showing tomorrow at night)
- Core muscle mapping no longer incorrectly highlights obliques on diagram (mapped `core` to `front-abs` instead of `front-oblique`)

### Settings Improvements
- Default unit preference changed to lbs
- Dynamic exercise count below Experience Level toggle ("71 of 86 exercises available")
- Removed static description text, replaced with dynamic count
- Subtitle text added under Kettlebells You Own and Preferred Weight sections
- Compact kettlebell SVG (reduced height/width/margin)

### Enhancements Logged (#17–21)
17. Log page — workout duration + estimated calories burned
18. Insights page — user-customizable card order
19. Workout queue — create and schedule workouts for later
20. Insights charts — sets by muscle group, total weight moved, total time, Apple Watch integration
21. Exercise visibility — show locked exercises grayed out for lower difficulty levels

### Committed & Pushed
- Commit `bc4f617` pushed to `main` on GitHub
- Firebase project: `kettlebell-genie`
- API key restricted to `localhost:8080`, `kettlebell-genie.firebaseapp.com`, `zack0liver.github.io`

---

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
