# Future Enhancement Prototypes

Standalone, self-contained prototypes for planned enhancements. **None of these are wired into the live app yet** — open each `.html` directly in a browser to preview. They exist to validate an approach before committing to integration.

## `muscle-glow-prototype.html` — Enhancement #13 (Revamp muscle diagrams)
Glowing, "lit-from-within" muscle-activation figure, **front view only**, built as 100% inline SVG (no raster images).

- **Technique:** per-muscle radial gradients (hot cream center → deep orange edge) + a stacked `feGaussianBlur` bloom filter for the halo spilling onto the dark body. Left-side geometry defined once in `<defs>` and mirrored via `<use transform="scale(-1,1)">`.
- **Interactivity preserved:** each region keeps its `id` / `data-muscle` / class; a click handler cycles states to prove the tap-a-muscle feature still works.
- **Status: not final — needs more work.** See open items in `../ENHANCEMENTS.md` under #13.

## `swing-timer-prototype.html` — Enhancement #2 (Timer exercise illustrations)
Approved 2-pose animation approach shown in a mock workout-timer card. The kettlebell swing crossfades between a hinge-back and a stand-tall pose on a ~1.4s loop.

- **Technique:** two `<g>` pose groups in one 140×140 SVG, opposed CSS opacity keyframe animations with short holds at each extreme; feet planted at identical coords and equal limb lengths so it reads as one figure moving.
- **Status: approach approved.** Timer integration tracked under #2 in `../ENHANCEMENTS.md`.

## `exercise-animations-prototype.html` — Enhancement #2 (all 10 exercises)
The remaining 10 exercises animated in the approved swing style, laid out as a labeled grid: goblet, press, row, turkish, deadlift, lunge, farmer, curl, plank, glute bridge. Same 2-pose crossfade technique (lunge uses a 3-pose sequence; isometric holds use a subtle micro-movement).

- **Status: good-enough for now, two flagged for future polish** — the Lunge and Bent-Over Row are approved as-is but marked for later refinement (see #2 next-steps in `../ENHANCEMENTS.md`). Not yet wired into the timer.
