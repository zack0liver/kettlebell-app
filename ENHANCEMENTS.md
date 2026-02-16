# Future Enhancements

1. Weight progression guidance / strength training with heavier, shorter sets
2. Exercise illustrations during workout timer — 11 stick-figure SVGs saved in `illustrations/` subfolder (swing, goblet, press, row, turkish, plank, deadlift, lunge, farmer, curl, glute bridge). Needs refinement before integrating into timer display. Props include orange mat/bench.
3. Links to external exercise videos
4. User-suggested exercises for the database
5. Better spacing/positioning for the remove (red X) button in workout item rows — tried absolute top-right but felt off, reverted to inline. Needs a better approach.
6. Workout quality scoring — measure muscle balance (push/pull ratio, anterior/posterior coverage), flag gaps, grade overall workout quality with suggestions to improve
7. Insights: Show muscle imbalances — flag if certain muscle groups are consistently underworked across logged workouts
8. ~~Manual Build — sort option for exercise list (alphabetical, by category, by difficulty)~~ DONE — sort dropdown added
9. Manual Build — highlight favorite/saved exercises in the exercise picker
10. ~~Manual Build — auto-sort exercises by equipment type (KB vs. mat/bodyweight)~~ DONE — included in sort dropdown as "Sort: Equipment"
11. Nested kettlebell SVG in Settings — refine the kettlebell silhouette shape and improve tap targets for easier interaction on mobile
12. Workout of the Week — curated/featured workout that rotates weekly
13. Revamp muscle activation diagrams — replace current geometric body SVGs with more anatomically detailed/realistic figures (see mockups/ screenshot for reference). Likely needs illustration software or a proper SVG body template rather than hand-coded paths
14. Settings — equipment inventory: add slam ball / medicine ball toggle alongside kettlebell weights, unlocking slam ball and med ball exercises in the exercise database
15. Affiliate links for recommended equipment (kettlebells, slam balls, mats, etc.)
16. ~~User sign-in and cloud data storage — enable accounts so workout log, saved favorites, and settings sync across devices (currently localStorage only)~~ DONE — Firebase Auth + Firestore implemented
17. Improve Log page — add workout duration (track time from start to end of workout timer) and estimated calories burned per workout
18. Insights page — allow user to reorder/customize the layout of insight cards (Top Exercises, Weekly Volume, Muscle Coverage, Try These Next)
19. Workout queue — create a workout now and schedule it for later today or later in the week, with reminders to complete queued workouts
20. Insights charts — add toggle views for sets by muscle group, total weight moved, and total time; future integration with Apple Watch data (heart rate, calories, activity rings)
21. Exercise visibility by difficulty — indicate to beginner/intermediate users that more exercises exist at higher levels. One idea: in Manual Build search, show locked exercises grayed out with their difficulty badge but don't allow adding them to the workout

---

## Enhancement #16 — Implementation Plan: Firebase Auth + Firestore

### Why Firebase
- CDN script tags only — no build tools, fits single-HTML-file architecture
- Firebase Auth gives Google Sign-In (one tap on mobile), Apple Sign-In can be added later
- Firestore is document-based NoSQL — maps directly onto existing localStorage data shapes
- Free tier is generous (50k reads/day, 20k writes/day, 1 GiB) — more than enough
- Built-in offline persistence and real-time cross-device sync
- No server to manage

### Firestore Data Architecture

```
users/
  {uid}/
    settings/
      preferences              ← single doc
        unit: "kg" | "lb"
        difficulty: "beginner" | "intermediate" | "advanced"
        owned: [8, 12, 16, 20]
        preferred: 16

    logs/
      {logId}                  ← one doc per workout log
        date: "2026-02-14"
        notes: "Felt strong"
        starred: true
        savedId: "abc123" | null
        exercises: [{ id, name, sets, reps, weight, primary, secondary }]

    saved/
      {savedId}                ← one doc per saved workout template
        name: "Push Day"
        notes: "..."
        created: "2026-02-14"
        exercises: [{ id, name, sets, reps, weight, primary, secondary }]
```

### Current localStorage Keys (to migrate)
- `kf_logs` → `users/{uid}/logs/` collection
- `kf_saved` → `users/{uid}/saved/` collection
- `kf_settings` → `users/{uid}/settings/preferences` document

### Implementation Steps
1. Add Firebase SDK scripts (core, auth, firestore) via CDN
2. Add Firebase config object (project ID, API key, etc.)
3. Add sign-in/sign-out UI in Settings tab
4. Replace `getWorkoutLogs()` / `saveWorkoutLogs()` / `getSavedWorkouts()` / `saveSavedWorkouts()` / `getSettings()` with Firestore read/write equivalents
5. One-time localStorage → Firestore migration on first sign-in
6. Firestore security rules: users can only read/write their own `users/{uid}/` subtree
7. Enable Firestore offline persistence (`enablePersistence()`) for offline-first behavior

### Design Decisions
- **Auth:** Google Sign-In first, Apple Sign-In later if needed
- **IDs:** Existing `Date.now().toString(36)` IDs work as Firestore doc IDs
- **Offline:** Firestore offline persistence keeps app working without internet, syncs on reconnect
- **Conflicts:** Last-write-wins for settings; logs/saved are append-mostly so conflicts are unlikely
- **Exercise database:** Stays client-side (static reference data, not user data)
