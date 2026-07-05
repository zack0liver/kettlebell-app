# Animation Polish — user feedback (round 2)

Fixes to apply to the batch files in this folder. Keep every non-listed entry byte-identical.
Conventions: viewBox 140, `#e0e0e0` body (2.5 round strokes), `#ff6b35` bell (circle + arched handle) /
ball (plain circle for `sb_`/`mb_`), classes ONLY `pose-a`/`pose-b` (2-pose) or `lunge-a`/`lunge-mid`/`lunge-b`
(3-pose). Feet planted identical across poses; equal limb lengths.

## Removed (done)
- kb_clean_jerk, kb_jerk (complex_a.js), kb_long_cycle (cardio_swing.js) — "don't plan to use often."

## squats.js
- **kb_lateral_lunge** — needs a DEEPER lateral lunge: hip sits much lower and further to the bent side, other leg fully straight. Exaggerate the depth.
- **kb_front_squat** — looks off. FRONT view, bell(s) clearly racked at the shoulders (elbows up in front), squat straight down/up.
- **kb_cossack** — looks off. FRONT view: shift whole body over one deeply-bent leg, the OTHER leg straight out to the side, foot planted wide, torso upright, bell at chest. Make bent/straight contrast obvious.

## press.js
- **kb_push_press** — reads as side view but the two legs aren't aligned (confusing). True SIDE view = draw a SINGLE leg (legs overlap in profile), like the approved row. Keep dip → drive overhead.
- **kb_push_up** — elbow bends at a strange angle. Fix so the push-up bends naturally in SIDE view (upper arm from shoulder, forearm to hand on bell, elbow tracks back/up as body lowers).

## pull_arms.js
- **kb_renegade_row** — make it ALTERNATING: plank on two bells, row one bell up while the other stays planted, then the other side. 3-pose: row right → plank (both down) → row left.
- **kb_shrug** — not pronounced enough. Bigger shoulder elevation (~8-10px up and back down) so it clearly reads.

## mat_carry.js
- **mat_mountain_climber** — looks wrong. Clear SIDE-view straight-arm high plank; one knee drives to the chest, alternating knees. Make plank + driving knee unmistakable.
- **mat_bird_dog** — is correct on all fours (hands + knees) but doesn't read. SIDE view, clearly on hands and knees, extend OPPOSITE arm forward + leg back, return.

## core_a.js
- **kb_russian_twist** — unclear. Seated on floor, torso leaned back ~45°, knees bent/feet up, bell rotates across the body hip-to-hip. 3-pose (left → center → right); make the seated V-torso and the bell crossing obvious.
- **kb_halo** — unclear. Bell must clearly circle AROUND the head: 3-pose bell at one side → behind/top of head → other side, tracing a loop. Body static, only bell+arms move.

## core_b.js
- **sb_russian_twist, mb_russian_twist** — same clarity fix as kb_russian_twist, with a plain ball (no handle).
- **mb_woodchop** — make it more FLUID; first & last poses read well, so simplify to a clean 2-pose (high over one shoulder → low at opposite hip), drop the awkward mid.
- **mb_crunch** — the ball sits on his face. Move ball to the CHEST (or extended above chest), not over the head/face. Clean lying crunch, SIDE view.

## complex_b.js (hand-authored — lower polish)
- **kb_tactical_lunge** — unclear. SIDE-view lunge (like approved lunge); clearly show the bell passed UNDER the front thigh at the bottom (bell beneath the bent front leg, hand reaching under). 3-pose.
- **kb_deck_squat** — unclear. SIDE view 3-pose: stand → squat → roll back onto the back with knees toward chest (clear rounded rolled-back position on the mat), ping-pong back up.

## cardio_swing.js
- **kb_burpee** — unclear what to do with the KB. Make the bell's role obvious: hands planted ON the bell(s) in the plank/push-up. SIDE 3-pose: stand at bell → hands on bell in plank → jump up.
- **kb_man_maker** — plank → standing transition is unclear. SIDE 3-pose with a clear bridging pose: plank on two bells → rise to a squat (bells in hands) → stand tall. Make the floor-to-stand read.
