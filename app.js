// ==================== EXERCISE DATABASE ====================
const EXERCISES = [
  // Swings
  { id:'kb_swing', name:'Kettlebell Swing', category:'swing', equipment:'kettlebell', difficulty:'beginner',
    primary:['glutes','hamstrings'], secondary:['core','lower_back','shoulders','forearms'] },
  { id:'kb_swing_1h', name:'One-Hand Swing', category:'swing', equipment:'kettlebell', difficulty:'intermediate',
    primary:['glutes','hamstrings'], secondary:['core','lower_back','shoulders','forearms','obliques'] },
  { id:'kb_swing_alt', name:'Alternating Swing', category:'swing', equipment:'kettlebell', difficulty:'intermediate',
    primary:['glutes','hamstrings'], secondary:['core','lower_back','shoulders','forearms'] },

  // Squats
  { id:'kb_goblet', name:'Goblet Squat', category:'squat', equipment:'kettlebell', difficulty:'beginner',
    primary:['quads','glutes'], secondary:['core','hamstrings'] },
  { id:'kb_sumo', name:'Sumo Squat', category:'squat', equipment:'kettlebell', difficulty:'beginner',
    primary:['quads','glutes','hip_flexors'], secondary:['core','hamstrings'] },
  { id:'kb_cossack', name:'Cossack Squat', category:'squat', equipment:'kettlebell', difficulty:'advanced',
    primary:['quads','glutes','hip_flexors'], secondary:['core','hamstrings','calves'] },
  { id:'kb_front_squat', name:'Front Rack Squat', category:'squat', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes'], secondary:['core','shoulders','traps'] },

  // Presses
  { id:'kb_press', name:'Overhead Press', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','triceps'], secondary:['core','chest'] },
  { id:'kb_push_press', name:'Push Press', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','triceps','quads'], secondary:['core','glutes'] },
  { id:'kb_floor_press', name:'Floor Press', category:'press', equipment:'kettlebell', difficulty:'beginner',
    primary:['chest','triceps'], secondary:['shoulders'] },
  { id:'kb_bottoms_up', name:'Bottoms-Up Press', category:'press', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','forearms'], secondary:['core','triceps'] },

  // Pulls / Rows
  { id:'kb_row', name:'Single-Arm Row', category:'pull', equipment:'kettlebell', difficulty:'beginner',
    primary:['lats','biceps'], secondary:['core','forearms','traps'] },
  { id:'kb_gorilla_row', name:'Gorilla Row', category:'pull', equipment:'kettlebell', difficulty:'intermediate',
    primary:['lats','biceps'], secondary:['core','forearms','traps','lower_back'] },
  { id:'kb_high_pull', name:'High Pull', category:'pull', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','traps','hamstrings'], secondary:['glutes','core','biceps','forearms'] },
  { id:'kb_upright_row', name:'Upright Row', category:'pull', equipment:'kettlebell', difficulty:'beginner',
    primary:['shoulders','traps'], secondary:['biceps','forearms'] },

  // Core
  { id:'kb_turkish', name:'Turkish Get-Up', category:'core', equipment:'kettlebell', difficulty:'advanced',
    primary:['core','shoulders'], secondary:['glutes','quads','triceps','hip_flexors','obliques'] },
  { id:'kb_windmill', name:'Windmill', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['obliques','shoulders'], secondary:['hamstrings','hip_flexors','core'] },
  { id:'kb_halo', name:'Halo', category:'core', equipment:'kettlebell', difficulty:'beginner',
    primary:['shoulders','core'], secondary:['triceps','forearms'] },
  { id:'kb_russian_twist', name:'Russian Twist (KB)', category:'core', equipment:'kettlebell', difficulty:'beginner',
    primary:['obliques','abs'], secondary:['hip_flexors'] },
  { id:'kb_pullover', name:'KB Pullover', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['lats','abs'], secondary:['chest','triceps'] },
  { id:'kb_figure8', name:'Figure 8', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['core','obliques'], secondary:['forearms','quads','glutes'] },

  // Carries
  { id:'kb_farmer', name:'Farmer Carry', category:'carry', equipment:'kettlebell', difficulty:'beginner',
    primary:['forearms','traps'], secondary:['core','shoulders','calves'] },
  { id:'kb_rack_carry', name:'Rack Carry', category:'carry', equipment:'kettlebell', difficulty:'intermediate',
    primary:['core','shoulders'], secondary:['forearms','biceps','calves'] },
  { id:'kb_overhead_carry', name:'Overhead Carry', category:'carry', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','core'], secondary:['triceps','forearms','calves','traps'] },
  { id:'kb_suitcase', name:'Suitcase Carry', category:'carry', equipment:'kettlebell', difficulty:'beginner',
    primary:['obliques','forearms'], secondary:['core','traps','calves'] },

  // Complexes / Dynamic
  { id:'kb_clean', name:'Kettlebell Clean', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['hamstrings','glutes','forearms'], secondary:['core','biceps','shoulders','traps'] },
  { id:'kb_snatch', name:'Kettlebell Snatch', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','hamstrings','glutes'], secondary:['core','traps','forearms','quads'] },
  { id:'kb_clean_press', name:'Clean & Press', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','hamstrings','glutes'], secondary:['core','triceps','forearms','traps'] },
  { id:'kb_thruster', name:'Thruster', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','shoulders','glutes'], secondary:['core','triceps','hamstrings'] },
  { id:'kb_lunge', name:'KB Lunge', category:'complex', equipment:'kettlebell', difficulty:'beginner',
    primary:['quads','glutes'], secondary:['hamstrings','core','calves'] },
  { id:'kb_deadlift', name:'KB Deadlift', category:'complex', equipment:'kettlebell', difficulty:'beginner',
    primary:['hamstrings','glutes','lower_back'], secondary:['core','forearms','quads'] },
  { id:'kb_single_dl', name:'Single-Leg Deadlift', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['hamstrings','glutes'], secondary:['core','lower_back','calves'] },

  // Mat / Bodyweight
  { id:'mat_plank', name:'Plank', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['abs','core'], secondary:['shoulders','glutes'] },
  { id:'mat_side_plank', name:'Side Plank', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['obliques'], secondary:['shoulders','core','hip_flexors'] },
  { id:'mat_hollow', name:'Hollow Body Hold', category:'mat', equipment:'mat', difficulty:'intermediate',
    primary:['abs','hip_flexors'], secondary:['core'] },
  { id:'mat_deadbug', name:'Dead Bug', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['abs','core'], secondary:['hip_flexors'] },
  { id:'mat_glute_bridge', name:'Glute Bridge', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['glutes'], secondary:['hamstrings','core'] },
  { id:'mat_bird_dog', name:'Bird Dog', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['core','lower_back'], secondary:['glutes','shoulders'] },
  { id:'mat_mountain_climber', name:'Mountain Climbers', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['core','hip_flexors'], secondary:['shoulders','quads','calves'] },
  { id:'mat_superman', name:'Superman Hold', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['lower_back','glutes'], secondary:['hamstrings','traps'] },

  // Legs (additional)
  { id:'kb_split_squat', name:'Split Squat', category:'squat', equipment:'kettlebell', difficulty:'beginner',
    primary:['quads','glutes'], secondary:['hamstrings','core'] },
  { id:'kb_lateral_lunge', name:'Lateral Lunge', category:'squat', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes','hip_flexors'], secondary:['hamstrings','core'] },
  { id:'kb_step_up', name:'Step-Up', category:'squat', equipment:'kettlebell', difficulty:'beginner',
    primary:['quads','glutes'], secondary:['hamstrings','calves','core'] },
  { id:'kb_curtsy_lunge', name:'Curtsy Lunge', category:'squat', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes'], secondary:['hip_flexors','core'] },
  { id:'kb_bulgarian_split', name:'Bulgarian Split Squat', category:'squat', equipment:'kettlebell', difficulty:'advanced',
    primary:['quads','glutes'], secondary:['hamstrings','core','calves'] },
  { id:'kb_squat_jump', name:'Squat Jump (KB)', category:'squat', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes','calves'], secondary:['hamstrings','core'] },
  { id:'kb_pistol_squat', name:'Pistol Squat', category:'squat', equipment:'kettlebell', difficulty:'advanced',
    primary:['quads','glutes','hip_flexors'], secondary:['hamstrings','calves','core'] },
  { id:'kb_calf_raise', name:'Calf Raise (KB)', category:'squat', equipment:'kettlebell', difficulty:'beginner',
    primary:['calves'], secondary:['quads'] },

  // Arms
  { id:'kb_bicep_curl', name:'KB Bicep Curl', category:'arms', equipment:'kettlebell', difficulty:'beginner',
    primary:['biceps'], secondary:['forearms'] },
  { id:'kb_tricep_ext', name:'KB Tricep Extension', category:'arms', equipment:'kettlebell', difficulty:'beginner',
    primary:['triceps'], secondary:['shoulders'] },
  { id:'kb_crush_curl', name:'Crush Curl', category:'arms', equipment:'kettlebell', difficulty:'intermediate',
    primary:['biceps','forearms'], secondary:['chest'] },
  { id:'kb_skull_crusher', name:'KB Skull Crusher', category:'arms', equipment:'kettlebell', difficulty:'intermediate',
    primary:['triceps'], secondary:['chest','shoulders'] },
  { id:'kb_hammer_curl', name:'Hammer Curl (KB)', category:'arms', equipment:'kettlebell', difficulty:'beginner',
    primary:['biceps','forearms'], secondary:[] },

  // Chest (additional)
  { id:'kb_sa_floor_press', name:'Single-Arm Floor Press', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['chest','triceps'], secondary:['shoulders','core'] },
  { id:'kb_push_up', name:'KB Push-Up', category:'press', equipment:'kettlebell', difficulty:'beginner',
    primary:['chest','triceps'], secondary:['shoulders','core'] },
  { id:'kb_chest_fly', name:'KB Chest Fly', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['chest'], secondary:['shoulders'] },
  { id:'kb_close_grip_press', name:'Close-Grip Floor Press', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['triceps','chest'], secondary:['shoulders'] },

  // Shoulders (additional)
  { id:'kb_lateral_raise', name:'Lateral Raise', category:'press', equipment:'kettlebell', difficulty:'beginner',
    primary:['shoulders'], secondary:['traps'] },
  { id:'kb_front_raise', name:'Front Raise', category:'press', equipment:'kettlebell', difficulty:'beginner',
    primary:['shoulders'], secondary:['chest','core'] },
  { id:'kb_arnold_press', name:'Arnold Press', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','triceps'], secondary:['chest','core'] },
  { id:'kb_shrug', name:'KB Shrug', category:'pull', equipment:'kettlebell', difficulty:'beginner',
    primary:['traps'], secondary:['shoulders','forearms'] },
  { id:'kb_reverse_fly', name:'Bent-Over Reverse Fly', category:'pull', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','traps'], secondary:['lats','core'] },

  // Back (additional)
  { id:'kb_renegade_row', name:'Renegade Row', category:'pull', equipment:'kettlebell', difficulty:'advanced',
    primary:['lats','core'], secondary:['biceps','forearms','shoulders'] },
  { id:'kb_bent_row', name:'KB Bent-Over Row', category:'pull', equipment:'kettlebell', difficulty:'beginner',
    primary:['lats','traps'], secondary:['biceps','forearms','lower_back'] },

  // Core / Abs (additional)
  { id:'kb_sit_up', name:'KB Sit-Up', category:'core', equipment:'kettlebell', difficulty:'beginner',
    primary:['abs'], secondary:['hip_flexors'] },
  { id:'kb_side_bend', name:'KB Side Bend', category:'core', equipment:'kettlebell', difficulty:'beginner',
    primary:['obliques'], secondary:['core'] },
  { id:'kb_plank_pull', name:'Plank Pull-Through', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['core','obliques'], secondary:['shoulders','lats'] },
  { id:'kb_woodchop', name:'KB Woodchop', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['obliques','core'], secondary:['shoulders','glutes'] },
  { id:'kb_leg_raise', name:'KB Leg Raise', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['abs','hip_flexors'], secondary:['core'] },
  { id:'kb_v_up', name:'KB V-Up', category:'core', equipment:'kettlebell', difficulty:'advanced',
    primary:['abs','hip_flexors'], secondary:['core'] },
  { id:'kb_plank_drag', name:'Plank Drag', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['core','obliques'], secondary:['shoulders'] },
  { id:'kb_crunch', name:'KB Crunch', category:'core', equipment:'kettlebell', difficulty:'beginner',
    primary:['abs'], secondary:['core'] },

  // Cardio / Conditioning
  { id:'kb_swing_high', name:'KB Swing (High Rep)', category:'cardio', equipment:'kettlebell', difficulty:'beginner',
    primary:['glutes','hamstrings'], secondary:['core','shoulders','forearms'] },
  { id:'kb_burpee', name:'KB Burpee', category:'cardio', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','chest','core'], secondary:['shoulders','triceps','glutes'] },
  { id:'kb_man_maker', name:'Man Maker', category:'cardio', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','chest','quads'], secondary:['core','triceps','lats'] },
  { id:'kb_long_cycle', name:'Long Cycle', category:'cardio', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','hamstrings','glutes'], secondary:['core','triceps','quads'] },
  { id:'kb_half_snatch', name:'Half Snatch', category:'cardio', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','hamstrings'], secondary:['glutes','core','forearms'] },
  { id:'kb_jump_squat', name:'KB Jump Squat', category:'cardio', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes','calves'], secondary:['core','hamstrings'] },

  // Full Body / Complexes (additional)
  { id:'kb_clean_jerk', name:'Clean & Jerk', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','hamstrings','glutes'], secondary:['core','triceps','quads'] },
  { id:'kb_jerk', name:'KB Jerk', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','triceps'], secondary:['core','quads','glutes'] },
  { id:'kb_bent_press', name:'Bent Press', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','obliques'], secondary:['triceps','lats','core'] },
  { id:'kb_double_clean', name:'Double Clean', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['hamstrings','glutes','forearms'], secondary:['core','biceps','traps'] },
  { id:'kb_tactical_lunge', name:'Tactical Lunge', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes'], secondary:['hamstrings','core','shoulders'] },
  { id:'kb_deck_squat', name:'Deck Squat', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['quads','glutes','core'], secondary:['hamstrings','hip_flexors'] },
  { id:'kb_squat_press', name:'Squat to Press', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes','shoulders'], secondary:['core','triceps'] },
];

const MUSCLE_NAMES = {
  chest:'Chest', shoulders:'Shoulders', abs:'Abs', obliques:'Obliques',
  biceps:'Biceps', triceps:'Triceps', forearms:'Forearms', quads:'Quads',
  hamstrings:'Hamstrings', glutes:'Glutes', calves:'Calves', hip_flexors:'Hip Flexors',
  lats:'Lats', traps:'Traps', lower_back:'Lower Back', core:'Core'
};

const MUSCLE_TO_SVG = {
  chest: ['front-chest-l','front-chest-r'],
  shoulders: ['front-shoulder-l','front-shoulder-r','back-reardelt-l','back-reardelt-r'],
  abs: ['front-abs'],
  obliques: ['front-oblique-l','front-oblique-r'],
  biceps: ['front-bicep-l','front-bicep-r'],
  triceps: ['back-tricep-l','back-tricep-r'],
  forearms: ['front-forearm-l','front-forearm-r','back-forearm-l','back-forearm-r'],
  quads: ['front-quad-l','front-quad-r'],
  hamstrings: ['back-ham-l','back-ham-r'],
  glutes: ['back-glute-l','back-glute-r'],
  calves: ['front-calf-l','front-calf-r','back-calf-l','back-calf-r'],
  hip_flexors: ['front-hipflexor-l','front-hipflexor-r'],
  lats: ['back-lat-l','back-lat-r'],
  traps: ['back-traps','back-traps-r'],
  lower_back: ['back-lowerback'],
  core: ['front-abs']
};

// ==================== APP STATE ====================
let currentWorkout = []; // [{exercise, sets, reps, weight}]
let selectedFocus = new Set(['full']);
let selectedDuration = 20;
let buildMode = 'quick';
let circuitMode = false;
let calendarMonth = new Date();
let selectedLogDate = null;
let heatmapDays = 7;

// Timer state
let timerInterval = null;
let timerSeconds = 0;
let timerPaused = false;
let timerCurrentEx = 0;
let timerExAllotments = [];

// ==================== SETTINGS ====================
const ALL_WEIGHTS = [8,12,16,20,24,28];
const KG_TO_LB = {8:18,12:26,16:35,20:44,24:53,28:62};

function saveSettings() {
  const s = getSettings();
  s.unit = document.getElementById('unit-pref').value;
  saveSettingsToStorage(s);
  renderSettingsChips();
  updatePrefWeightDisplay();
}
function getOwnedWeights() { return getSettings().owned || []; }
function getPreferredWeight() { return getSettings().preferred || null; }

function getAvailableExercises() {
  const diff = getSettings().difficulty || 'intermediate';
  const allowed = diff === 'beginner' ? ['beginner']
    : diff === 'intermediate' ? ['beginner','intermediate']
    : ['beginner','intermediate','advanced'];
  return EXERCISES.filter(ex => allowed.includes(ex.difficulty));
}

function updateDifficultyCount(level) {
  const levels = { beginner: ['beginner'], intermediate: ['beginner','intermediate'], advanced: ['beginner','intermediate','advanced'] };
  const available = EXERCISES.filter(e => levels[level].includes(e.difficulty)).length;
  const total = EXERCISES.length;
  const el = document.getElementById('difficulty-count');
  if (el) el.textContent = `${available} of ${total} exercises available`;
}

function setDifficulty(level) {
  const s = getSettings();
  s.difficulty = level;
  saveSettingsToStorage(s);
  document.querySelectorAll('#difficulty-toggle .toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === level);
  });
  updateDifficultyCount(level);
  if (buildMode === 'manual') renderExerciseList();
}

function openSettings() {
  document.getElementById('settings-modal').classList.add('show');
  const s = getSettings();
  document.getElementById('unit-pref').value = s.unit || 'lb';
  const diff = s.difficulty || 'intermediate';
  document.querySelectorAll('#difficulty-toggle .toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === diff);
  });
  updateDifficultyCount(diff);
  renderSettingsChips();
}
function closeSettings() {
  document.getElementById('settings-modal').classList.remove('show');
  updatePrefWeightDisplay();
}

function kettlebellPath(cx, cy, r) {
  const a = 45 * Math.PI / 180;
  const lx = cx - r * Math.sin(a);
  const ly = cy - r * Math.cos(a);
  const rx = cx + r * Math.sin(a);
  const hh = r * 0.5;
  return `M ${lx.toFixed(1)} ${ly.toFixed(1)} C ${(lx - r * 0.08).toFixed(1)} ${(ly - hh).toFixed(1)}, ${(rx + r * 0.08).toFixed(1)} ${(ly - hh).toFixed(1)}, ${rx.toFixed(1)} ${ly.toFixed(1)} A ${r} ${r} 0 1 1 ${lx.toFixed(1)} ${ly.toFixed(1)} Z`;
}

function renderSettingsChips() {
  const s = getSettings();
  const owned = s.owned || [];
  const preferred = s.preferred || null;
  const unit = s.unit || 'lb';
  const formatWt = (kg) => unit === 'kg' ? `${kg} kg` : `${KG_TO_LB[kg]} lb`;

  // --- Nested kettlebell SVG ---
  const svgW = 300, svgH = 300;
  const cx = svgW / 2, cy = svgH * 0.52;
  const maxR = 118, minR = 22;
  const n = ALL_WEIGHTS.length;
  const reversed = [...ALL_WEIGHTS].reverse(); // 48 down to 8

  let shapes = '';
  let labels = '';

  reversed.forEach((w, i) => {
    const r = maxR - (maxR - minR) * (i / (n - 1));
    const isOwned = owned.includes(w);
    const path = kettlebellPath(cx, cy, r);

    const fill = isOwned ? 'rgba(255,107,53,0.13)' : 'rgba(255,255,255,0.02)';
    const stroke = isOwned ? 'var(--accent)' : 'var(--border)';
    const sw = isOwned ? 2.2 : 1;

    shapes += `<path d="${path}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" onclick="toggleOwnedWeight(${w})" />`;

    // Place weight label at bottom of each ring
    const bottomY = cy + r;
    const nextR = i < n - 1 ? maxR - (maxR - minR) * ((i + 1) / (n - 1)) : 0;
    const nextBottomY = cy + nextR;
    const labelY = (bottomY + nextBottomY) / 2 + 3.5;
    const textColor = isOwned ? 'var(--accent)' : 'var(--text2)';
    const fontSize = i === n - 1 ? 10 : 8.5;
    const fontWeight = isOwned ? 700 : 500;

    labels += `<text x="${cx}" y="${labelY}" text-anchor="middle" fill="${textColor}" font-size="${fontSize}" font-weight="${fontWeight}" style="pointer-events:none">${formatWt(w)}</text>`;
  });

  const svg = `<svg class="kb-nest-svg" viewBox="0 0 ${svgW} ${svgH}" width="100%" style="max-width:260px;margin:0 auto;display:block">${shapes}${labels}</svg>`;
  document.getElementById('owned-weights').innerHTML = svg;

  // Preferred weight chips (unchanged)
  document.getElementById('preferred-weight').innerHTML = owned.map(w =>
    `<div class="weight-chip ${preferred === w ? 'preferred' : ''}" onclick="setPreferredWeight(${w})">${formatWt(w)}</div>`
  ).join('');
}

function toggleOwnedWeight(w) {
  const s = getSettings();
  const owned = s.owned || [];
  const idx = owned.indexOf(w);
  if (idx >= 0) owned.splice(idx, 1); else owned.push(w);
  owned.sort((a,b) => a-b);
  s.owned = owned;
  if (!owned.includes(s.preferred)) s.preferred = owned[0];
  saveSettingsToStorage(s);
  renderSettingsChips();
}

function setPreferredWeight(w) {
  const s = getSettings();
  s.preferred = w;
  saveSettingsToStorage(s);
  renderSettingsChips();
}

function updatePrefWeightDisplay() {
  const s = getSettings();
  const unit = s.unit || 'lb';
  const w = s.preferred;
  const el = document.getElementById('pref-weight-display');
  if (!el) return;
  if (!w) { el.textContent = 'None — select in Settings'; return; }
  el.textContent = unit === 'kg' ? `${w} kg` : `${KG_TO_LB[w]} lb`;
}

// ==================== WORKOUT TIMER ====================
function startWorkoutTimer() {
  if (currentWorkout.length === 0) return;
  timerSeconds = 0;
  timerPaused = false;
  timerCurrentEx = 0;

  const totalSec = selectedDuration * 60;

  if (circuitMode) {
    // In circuit mode, timerCurrentEx tracks the current round (0-indexed)
    const numRounds = parseInt(currentWorkout[0].sets) || 3;
    timerExAllotments = Array(numRounds).fill(Math.round(totalSec / numRounds));
  } else {
    // Standard mode: per-exercise time allotments
    const totalSets = currentWorkout.reduce((s,item) => s + (parseInt(item.sets)||3), 0);
    timerExAllotments = currentWorkout.map(item => {
      const sets = parseInt(item.sets) || 3;
      return Math.round((sets / totalSets) * totalSec);
    });
  }

  // Show fullscreen overlay with fade-in
  const overlay = document.getElementById('timer-fullscreen');
  overlay.classList.add('show');
  requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('visible')));

  updateTimerDisplay();
  renderTimerProgress();

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!timerPaused) {
      timerSeconds++;
      updateTimerDisplay();
    }
  }, 1000);
}

function getCircuitRoundLabel(roundIdx) {
  const ordinals = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
  return roundIdx < ordinals.length ? `${ordinals[roundIdx]} Set` : `Set ${roundIdx + 1}`;
}

function updateTimerDisplay() {
  const min = Math.floor(timerSeconds / 60);
  const sec = timerSeconds % 60;
  document.getElementById('fs-clock').textContent =
    `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

  if (circuitMode) {
    // Circuit mode: show round label + all exercises
    const numRounds = parseInt(currentWorkout[0].sets) || 3;
    document.getElementById('fs-exercise-name').textContent = getCircuitRoundLabel(timerCurrentEx);

    const allotSec = timerExAllotments[timerCurrentEx] || 0;
    const allotMin = Math.floor(allotSec / 60);
    const allotS = allotSec % 60;

    let listHtml = `<div class="fs-circuit-list">`;
    currentWorkout.forEach(item => {
      const repsLabel = item.reps;
      const wtLabel = item.weight === 'BW' ? '' : ` — ${item.weight}`;
      listHtml += `<div><span class="ex-name">${item.exercise.name}</span> <span class="ex-detail">${repsLabel}${wtLabel}</span></div>`;
    });
    listHtml += `</div><div style="margin-top:8px;font-size:12px;color:var(--text2)">~${allotMin}:${String(allotS).padStart(2,'0')} per round</div>`;
    document.getElementById('fs-exercise-detail').innerHTML = listHtml;

    // Up Next
    const upnextEl = document.getElementById('fs-upnext');
    if (timerCurrentEx < numRounds - 1) {
      upnextEl.innerHTML = `Up Next: <strong>${getCircuitRoundLabel(timerCurrentEx + 1)}</strong>`;
    } else {
      upnextEl.innerHTML = `<strong>Last set!</strong>`;
    }
  } else {
    // Standard mode
    if (currentWorkout[timerCurrentEx]) {
      const item = currentWorkout[timerCurrentEx];
      document.getElementById('fs-exercise-name').textContent = item.exercise.name;
      const allotMin = Math.floor(timerExAllotments[timerCurrentEx] / 60);
      const allotSec = timerExAllotments[timerCurrentEx] % 60;
      document.getElementById('fs-exercise-detail').textContent =
        `${item.sets} sets x ${item.reps} reps  |  ~${allotMin}:${String(allotSec).padStart(2,'0')} allotted`;
    }

    // Up Next
    const upnextEl = document.getElementById('fs-upnext');
    if (timerCurrentEx < currentWorkout.length - 1) {
      const nextName = currentWorkout[timerCurrentEx + 1].exercise.name;
      upnextEl.innerHTML = `Up Next: <strong>${nextName}</strong>`;
    } else {
      upnextEl.innerHTML = `<strong>Last exercise!</strong>`;
    }
  }

  document.getElementById('fs-pause-btn').textContent = timerPaused ? 'Resume' : 'Pause';
}

function renderTimerProgress() {
  const bar = document.getElementById('fs-progress');
  const count = circuitMode ? (parseInt(currentWorkout[0].sets) || 3) : currentWorkout.length;
  const dots = [];
  for (let i = 0; i < count; i++) {
    let cls = 'timer-dot';
    if (i < timerCurrentEx) cls += ' done';
    if (i === timerCurrentEx) cls += ' current';
    dots.push(`<div class="${cls}"></div>`);
  }
  bar.innerHTML = dots.join('');
}

function timerTogglePause() { timerPaused = !timerPaused; updateTimerDisplay(); }
function timerNextExercise() {
  const max = circuitMode ? (parseInt(currentWorkout[0].sets) || 3) - 1 : currentWorkout.length - 1;
  if (timerCurrentEx < max) { timerCurrentEx++; renderTimerProgress(); updateTimerDisplay(); }
}
function timerPrevExercise() {
  if (timerCurrentEx > 0) { timerCurrentEx--; renderTimerProgress(); updateTimerDisplay(); }
}

function stopWorkoutTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  const overlay = document.getElementById('timer-fullscreen');
  overlay.classList.remove('visible');
  setTimeout(() => {
    overlay.classList.remove('show');
    if (isSignedIn()) {
      openLogModal();
    } else {
      showToast('Sign in to save workout logs');
    }
  }, 300);
}

// ==================== TAB NAVIGATION ====================
function updateMusclesTabState() {
  const btn = document.querySelector('.nav-btn[data-tab="diagram"]');
  const viewBtn = document.getElementById('view-muscles-btn');
  if (currentWorkout.length === 0) {
    btn.classList.add('disabled');
    if (viewBtn) viewBtn.style.display = 'none';
  } else {
    btn.classList.remove('disabled');
    if (viewBtn) viewBtn.style.display = '';
  }
}

function switchTab(tab) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelector(`.nav-btn[data-tab="${tab}"]`).classList.add('active');
  if (tab === 'saved') renderSavedWorkouts();
  if (tab === 'diagram') updateDiagram();
  if (tab === 'log') renderLog();
  if (tab === 'insights') renderInsights();
}

// ==================== BUILD MODE ====================
function setBuildMode(mode) {
  buildMode = mode;
  const modes = ['quick','manual'];
  document.querySelectorAll('.toggle-group .toggle-btn').forEach((b,i) => {
    b.classList.toggle('active', modes[i]===mode);
  });
  document.getElementById('quick-mode').style.display = mode==='quick' ? 'block' : 'none';
  document.getElementById('manual-mode').style.display = mode==='manual' ? 'block' : 'none';
  if (mode === 'manual') renderExerciseList();
  if (mode === 'quick' && currentWorkout.length === 0) {
    document.getElementById('quick-settings').style.display = 'block';
    document.getElementById('quick-expand-bar').style.display = 'none';
  }
}

function selectFocus(el) {
  const f = el.dataset.focus;
  if (selectedFocus.has(f)) { if (selectedFocus.size > 1) selectedFocus.delete(f); }
  else selectedFocus.add(f);
  document.querySelectorAll('.focus-card').forEach(c => c.classList.toggle('selected', selectedFocus.has(c.dataset.focus)));
}
function selectDuration(el) {
  document.querySelectorAll('.duration-pill').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedDuration = parseInt(el.dataset.dur);
}

// ==================== QUICK GENERATE ====================
function generateWorkout() {
  loadedSavedId = null;
  const s = getSettings();
  const unit = s.unit || 'lb';
  const prefKg = getPreferredWeight();
  const weight = unit === 'kg' ? prefKg : KG_TO_LB[prefKg];
  const focusMap = {
    full: { muscles:['glutes','hamstrings','quads','shoulders','core','lats'], count:{15:4,20:5,30:7,45:9} },
    upper: { muscles:['shoulders','chest','triceps','biceps','lats','traps','forearms'], count:{15:4,20:5,30:6,45:8} },
    lower: { muscles:['glutes','hamstrings','quads','calves','hip_flexors'], count:{15:4,20:5,30:6,45:8} },
    core: { muscles:['abs','obliques','core','lower_back','hip_flexors'], count:{15:4,20:5,30:6,45:8} },
    posterior: { muscles:['glutes','hamstrings','lower_back','lats','traps','calves'], count:{15:4,20:5,30:6,45:8} },
    conditioning: { muscles:['glutes','hamstrings','shoulders','core','quads'], count:{15:5,20:6,30:8,45:10} }
  };
  const targetMuscles = [...new Set([...selectedFocus].flatMap(f => focusMap[f].muscles))];
  const avgCount = Math.round([...selectedFocus].reduce((s,f) => s + (focusMap[f].count[selectedDuration]||5), 0) / selectedFocus.size);
  const targetCount = Math.min(avgCount + (selectedFocus.size > 1 ? 1 : 0), 10);

  // Score exercises by relevance
  let scored = getAvailableExercises().map(ex => {
    let score = 0;
    ex.primary.forEach(m => { if (targetMuscles.includes(m)) score += 3; });
    ex.secondary.forEach(m => { if (targetMuscles.includes(m)) score += 1; });
    if (selectedFocus.has('conditioning') && ['swing','complex','cardio'].includes(ex.category)) score += 2;
    return { exercise: ex, score };
  }).filter(s => s.score > 0).sort((a,b) => b.score - a.score);

  // Pick exercises ensuring variety
  const picked = [];
  const usedCategories = new Set();
  for (const s of scored) {
    if (picked.length >= targetCount) break;
    if (picked.length < targetCount - 1 && usedCategories.has(s.exercise.category)) continue;
    picked.push(s.exercise);
    usedCategories.add(s.exercise.category);
  }
  // Fill remaining if needed
  if (picked.length < targetCount) {
    for (const s of scored) {
      if (picked.length >= targetCount) break;
      if (!picked.includes(s.exercise)) picked.push(s.exercise);
    }
  }

  // Assign sets/reps based on duration
  const isConditioning = selectedFocus.has('conditioning');
  currentWorkout = picked.map(ex => {
    let sets, reps;
    if (ex.equipment === 'mat') {
      sets = selectedDuration >= 30 ? 3 : 2;
      reps = ex.name.includes('Hold') || ex.name.includes('Plank') ? '30s' : '10';
    } else if (isConditioning) {
      sets = selectedDuration >= 30 ? 4 : 3;
      reps = ex.category === 'swing' ? '15' : '10';
    } else {
      sets = selectedDuration >= 30 ? 4 : 3;
      reps = ['swing','complex'].includes(ex.category) ? '12' : '8';
    }
    const wtLabel = unit === 'kg' ? `${weight} kg` : `${weight} lb`;
    return { exercise: ex, sets, reps, weight: ex.equipment === 'mat' ? 'BW' : wtLabel };
  });

  renderCurrentWorkout();

  // Show source subtitle
  const srcEl = document.getElementById('workout-source');
  const focusLabel = [...selectedFocus].map(f => f.charAt(0).toUpperCase() + f.slice(1)).join(' + ');
  srcEl.textContent = currentWorkout.length + ' exercises \u00b7 ' + focusLabel + ' \u00b7 ' + selectedDuration + ' min';
  srcEl.style.display = 'block';

  // Collapse settings to show workout
  document.getElementById('quick-settings').style.display = 'none';
  document.getElementById('quick-expand-summary').textContent = focusLabel + ' \u00b7 ' + selectedDuration + ' min';
  document.getElementById('quick-expand-bar').style.display = 'flex';
  document.getElementById('saved-source-bar').style.display = 'none';
}

// ==================== MANUAL BUILD ====================
function renderExerciseList() {
  const search = (document.getElementById('exercise-search').value || '').toLowerCase();
  const cat = document.getElementById('category-filter').value;
  const sort = (document.getElementById('sort-filter') || {}).value || 'default';
  const filtered = getAvailableExercises().filter(ex => {
    if (cat !== 'all' && ex.category !== cat) return false;
    if (search && !ex.name.toLowerCase().includes(search)) return false;
    return true;
  });
  const diffOrder = {beginner:0, intermediate:1, advanced:2};
  if (sort === 'alpha') filtered.sort((a,b) => a.name.localeCompare(b.name));
  else if (sort === 'difficulty') filtered.sort((a,b) => diffOrder[a.difficulty] - diffOrder[b.difficulty] || a.name.localeCompare(b.name));
  else if (sort === 'equipment') filtered.sort((a,b) => a.equipment.localeCompare(b.equipment) || a.name.localeCompare(b.name));
  const el = document.getElementById('exercise-list');
  el.innerHTML = filtered.map(ex => `
    <div class="exercise-item" onclick="addExercise('${ex.id}')">
      <div class="exercise-info">
        <div class="exercise-name">${ex.name}</div>
        <div class="exercise-muscles">
          <span class="badge ${ex.equipment==='kettlebell'?'badge-kb':'badge-mat'}" style="margin-right:4px">${ex.equipment==='kettlebell'?'KB':'Mat'}</span>
          <span class="badge badge-diff" style="margin-right:4px">${ex.difficulty.charAt(0).toUpperCase()+ex.difficulty.slice(1)}</span>
          ${ex.primary.map(m => MUSCLE_NAMES[m]).join(', ')}
        </div>
      </div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
    </div>
  `).join('');
}
function filterExercises() { renderExerciseList(); }

function addExercise(id) {
  const ex = EXERCISES.find(e => e.id === id);
  if (!ex) return;
  const s = getSettings();
  const unit = s.unit || 'lb';
  const prefKg = getPreferredWeight();
  const wt = unit === 'kg' ? prefKg : KG_TO_LB[prefKg];
  const wtLabel = unit === 'kg' ? `${wt} kg` : `${wt} lb`;
  currentWorkout.push({
    exercise: ex, sets: 3,
    reps: ex.name.includes('Hold') || ex.name.includes('Plank') ? '30s' : '10',
    weight: ex.equipment === 'mat' ? 'BW' : wtLabel
  });
  renderCurrentWorkout();
}

// ==================== CURRENT WORKOUT ====================
function toggleCircuitMode() {
  circuitMode = !circuitMode;
  if (circuitMode && currentWorkout.length > 0) {
    const targetSets = currentWorkout[0].sets;
    currentWorkout.forEach(item => item.sets = targetSets);
  }
  renderCurrentWorkout();
}

function renderCurrentWorkout() {
  const container = document.getElementById('current-workout');
  const list = document.getElementById('workout-exercises');
  if (currentWorkout.length === 0) {
    container.style.display = 'none';
    document.getElementById('workout-source').style.display = 'none';
    updateMusclesTabState();
    return;
  }
  container.style.display = 'block';
  updateMusclesTabState();

  // Update circuit toggle state
  const circToggle = document.getElementById('circuit-toggle');
  const circLabel = document.getElementById('circuit-rounds-label');
  circToggle.classList.toggle('active', circuitMode);
  if (circuitMode) {
    circLabel.style.display = 'inline';
    circLabel.textContent = `${currentWorkout[0].sets} rounds`;
  } else {
    circLabel.style.display = 'none';
  }
  const owned = getOwnedWeights();
  const s = getSettings();
  const unit = s.unit || 'lb';
  const fmtWt = (kg) => unit==='kg' ? `${kg} kg` : `${KG_TO_LB[kg]} lb`;

  list.innerHTML = currentWorkout.map((item, i) => `
    <div class="workout-item" style="position:relative" draggable="true" data-idx="${i}" ontouchstart="dragTouchStart(event,${i})" ontouchmove="dragTouchMove(event)" ontouchend="dragTouchEnd(event,${i})" ondragstart="dragStart(event,${i})" ondragover="dragOver(event)" ondragleave="dragLeave(event)" ondrop="dragDrop(event,${i})" ondragend="dragEnd(event)">
      <div class="drag-handle"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg></div>
      <div class="workout-item-info" style="flex:1;min-width:0">
        <div class="workout-item-name">${item.exercise.name}</div>
      </div>
      <div class="workout-item-controls">
        <div class="val-btn" onclick="openPicker(${i},'sets')"><span>Sets</span>${item.sets}</div>
        <div class="val-btn" onclick="openPicker(${i},'reps')"><span>Reps</span>${item.reps}</div>
        <div class="val-btn" onclick="openPicker(${i},'weight')"><span>Wt</span>${item.weight}</div>
        <button class="remove-btn" onclick="removeItem(${i})">&#215;</button>
      </div>
      <div class="chip-picker" id="picker-${i}"></div>
    </div>
  `).join('');
}

function updateItem(i, field, val) {
  if (field === 'sets') {
    const setVal = parseInt(val) || 1;
    if (circuitMode) {
      currentWorkout.forEach(item => item.sets = setVal);
    } else {
      currentWorkout[i].sets = setVal;
    }
  } else {
    currentWorkout[i][field] = val;
  }
  renderCurrentWorkout();
}
function removeItem(i) { currentWorkout.splice(i, 1); renderCurrentWorkout(); }

let activePicker = null;
function openPicker(i, field) {
  const id = `picker-${i}`;
  // Close if same picker tapped again
  if (activePicker === id) { closePickers(); return; }
  closePickers();
  const picker = document.getElementById(id);
  if (!picker) return;
  activePicker = id;

  const owned = getOwnedWeights();
  const s = getSettings();
  const unit = s.unit || 'lb';
  const fmtWt = (kg) => unit==='kg' ? `${kg} kg` : `${KG_TO_LB[kg]} lb`;
  const item = currentWorkout[i];
  let chips = '';

  const isTimeBased = item.exercise.name.includes('Hold') || item.exercise.name.includes('Plank') || item.exercise.name.includes('Carry');
  if (field === 'sets') {
    chips = [2,3,4,5,6].map(v => `<div class="chip ${item.sets==v?'active':''}" onclick="event.stopPropagation();updateItem(${i},'sets',${v})">${v}</div>`).join('');
  } else if (field === 'reps') {
    const opts = isTimeBased ? ['20s','30s','45s','60s','90s'] : ['5','8','10','12','15','20'];
    chips = opts.map(v => `<div class="chip ${item.reps==v?'active':''}" onclick="event.stopPropagation();updateItem(${i},'reps','${v}')">${v}</div>`).join('');
  } else {
    chips = item.exercise.equipment==='mat' ? '<div class="chip active">BW</div>' :
      owned.map(w => `<div class="chip ${item.weight==fmtWt(w)?'active':''}" onclick="event.stopPropagation();updateItem(${i},'weight','${fmtWt(w)}')">${fmtWt(w)}</div>`).join('');
  }
  picker.innerHTML = chips;
  picker.classList.add('show');
}
function closePickers() {
  if (activePicker) { const el = document.getElementById(activePicker); if (el) el.classList.remove('show'); }
  activePicker = null;
}
document.addEventListener('click', e => { if (!e.target.closest('.val-btn') && !e.target.closest('.chip-picker')) closePickers(); });

// Drag reorder (desktop)
let dragIdx = null;
function dragStart(e, i) { dragIdx = i; e.currentTarget.classList.add('dragging'); }
function dragOver(e) {
  e.preventDefault();
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const midY = rect.top + rect.height / 2;
  el.classList.toggle('drag-over', e.clientY < midY);
  el.classList.toggle('drag-over-bottom', e.clientY >= midY);
}
function dragLeave(e) { e.currentTarget.classList.remove('drag-over', 'drag-over-bottom'); }
function dragDrop(e, i) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over', 'drag-over-bottom');
  if (dragIdx === null) return;
  const rect = e.currentTarget.getBoundingClientRect();
  let dropIdx = e.clientY >= rect.top + rect.height / 2 ? i + 1 : i;
  if (dropIdx > dragIdx) dropIdx--;
  if (dropIdx !== dragIdx) {
    const item = currentWorkout.splice(dragIdx, 1)[0];
    currentWorkout.splice(dropIdx, 0, item);
    renderCurrentWorkout();
  }
}
function dragEnd(e) { dragIdx = null; e.currentTarget.classList.remove('dragging', 'drag-over', 'drag-over-bottom'); }

// Touch drag reorder (mobile)
let touchDragIdx = null, touchClone = null, touchStartY = 0;
function dragTouchStart(e, i) {
  const handle = e.target.closest('.drag-handle');
  if (!handle) return;
  touchDragIdx = i;
  touchStartY = e.touches[0].clientY;
  const el = e.currentTarget;
  el.classList.add('dragging');
}
function dragTouchMove(e) {
  if (touchDragIdx === null) return;
  e.preventDefault();
  const y = e.touches[0].clientY;
  const items = document.querySelectorAll('#workout-exercises .workout-item');
  items.forEach(el => el.classList.remove('drag-over', 'drag-over-bottom'));
  for (const el of items) {
    const rect = el.getBoundingClientRect();
    if (y > rect.top && y < rect.bottom) {
      const midY = rect.top + rect.height / 2;
      el.classList.toggle('drag-over', y < midY);
      el.classList.toggle('drag-over-bottom', y >= midY);
      break;
    }
  }
}
function dragTouchEnd(e, i) {
  if (touchDragIdx === null) return;
  const y = e.changedTouches[0].clientY;
  const items = document.querySelectorAll('#workout-exercises .workout-item');
  let dropIdx = touchDragIdx;
  for (const el of items) {
    const rect = el.getBoundingClientRect();
    if (y > rect.top && y < rect.bottom) {
      const idx = parseInt(el.dataset.idx);
      const midY = rect.top + rect.height / 2;
      dropIdx = y >= midY ? idx + 1 : idx;
      break;
    }
  }
  items.forEach(el => { el.classList.remove('dragging', 'drag-over', 'drag-over-bottom'); });
  if (dropIdx > touchDragIdx) dropIdx--;
  if (touchDragIdx !== dropIdx) {
    const item = currentWorkout.splice(touchDragIdx, 1)[0];
    currentWorkout.splice(dropIdx, 0, item);
    renderCurrentWorkout();
  }
  touchDragIdx = null;
}
function clearWorkout() {
  currentWorkout = [];
  circuitMode = false;
  loadedSavedId = null;
  renderCurrentWorkout();
  document.getElementById('saved-source-bar').style.display = 'none';
  if (buildMode === 'quick') {
    document.getElementById('quick-settings').style.display = 'block';
    document.getElementById('quick-expand-bar').style.display = 'none';
  }
}

function toggleQuickSettings() {
  const settings = document.getElementById('quick-settings');
  const bar = document.getElementById('quick-expand-bar');
  const isHidden = settings.style.display === 'none';
  settings.style.display = isHidden ? 'block' : 'none';
  bar.style.display = isHidden ? 'none' : 'flex';
}

// ==================== MUSCLE DIAGRAM ====================
function updateDiagram() {
  // Clear all
  document.querySelectorAll('.muscle').forEach(m => {
    m.classList.remove('active-primary','active-secondary');
  });

  const hasWorkout = currentWorkout.length > 0;
  document.getElementById('diagram-workout-summary').style.display = hasWorkout ? 'block' : 'none';

  if (!hasWorkout) {
    document.getElementById('muscle-legend').innerHTML = '';
    document.getElementById('diagram-summary-list').innerHTML = '';
    return;
  }

  // Workout summary
  document.getElementById('diagram-summary-list').innerHTML = currentWorkout.map(item =>
    `<div style="display:flex;justify-content:space-between;padding:3px 0;font-size:13px;"><span style="font-weight:600">${item.exercise.name}</span><span style="color:var(--text2)">${item.sets}×${item.reps}</span></div>`
  ).join('');

  // Collect activated muscles
  const primaryMuscles = new Set();
  const secondaryMuscles = new Set();
  currentWorkout.forEach(item => {
    item.exercise.primary.forEach(m => primaryMuscles.add(m));
    item.exercise.secondary.forEach(m => { if (!primaryMuscles.has(m)) secondaryMuscles.add(m); });
  });

  // Apply to SVG
  primaryMuscles.forEach(m => {
    (MUSCLE_TO_SVG[m]||[]).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('active-primary');
    });
  });
  secondaryMuscles.forEach(m => {
    (MUSCLE_TO_SVG[m]||[]).forEach(id => {
      const el = document.getElementById(id);
      if (el && !el.classList.contains('active-primary')) el.classList.add('active-secondary');
    });
  });

  // Build legend
  const legend = document.getElementById('muscle-legend');
  let html = '';
  primaryMuscles.forEach(m => {
    html += `<div class="legend-item"><div class="legend-dot" style="background:var(--primary-muscle)"></div>${MUSCLE_NAMES[m]}</div>`;
  });
  secondaryMuscles.forEach(m => {
    html += `<div class="legend-item"><div class="legend-dot" style="background:var(--secondary-muscle)"></div>${MUSCLE_NAMES[m]}</div>`;
  });
  legend.innerHTML = html;
}

// Muscle click handler
document.addEventListener('click', e => {
  const muscle = e.target.closest('.muscle');
  if (!muscle) return;
  const muscleKey = muscle.dataset.muscle;
  if (!muscleKey || currentWorkout.length === 0) return;

  const exercises = currentWorkout.filter(item =>
    item.exercise.primary.includes(muscleKey) || item.exercise.secondary.includes(muscleKey)
  );

  document.getElementById('popup-muscle-name').textContent = MUSCLE_NAMES[muscleKey] || muscleKey;
  const list = document.getElementById('popup-exercises');
  if (exercises.length === 0) {
    list.innerHTML = '<p style="color:var(--text2);font-size:13px">No exercises in current workout target this muscle.</p>';
  } else {
    list.innerHTML = exercises.map(item => `
      <div style="padding:6px 0;border-bottom:1px solid var(--border)">
        <div style="font-weight:600;font-size:14px">${item.exercise.name}</div>
        <div style="font-size:12px;color:var(--text2)">${item.sets} sets x ${item.reps} reps @ ${item.weight}
          &mdash; <span class="badge badge-${item.exercise.primary.includes(muscleKey)?'primary':'secondary'}">${item.exercise.primary.includes(muscleKey)?'Primary':'Secondary'}</span>
        </div>
      </div>
    `).join('');
  }
  document.getElementById('overlay').classList.add('show');
  document.getElementById('muscle-popup').classList.add('show');
});

function closeMusclePopup() {
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('muscle-popup').classList.remove('show');
}

// ==================== WORKOUT LOGGING ====================
let logStarred = false;
function openLogModal() {
  if (currentWorkout.length === 0) return;
  logStarred = false;
  document.getElementById('star-icon').style.fill = 'none';
  document.getElementById('save-name-group').style.display = 'none';
  document.getElementById('save-name').value = '';
  const now = new Date();
  document.getElementById('log-date').value = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const notesEl = document.getElementById('log-notes');
  if (notesEl) notesEl.value = '';
  const summary = document.getElementById('log-exercise-summary');
  summary.innerHTML = '<label>Exercises</label>' + currentWorkout.map(item =>
    `<div style="font-size:13px;padding:4px 0">${item.exercise.name} &mdash; ${item.sets}x${item.reps} @ ${item.weight}</div>`
  ).join('');
  document.getElementById('log-modal').classList.add('show');
}
function toggleStar() {
  logStarred = !logStarred;
  document.getElementById('star-icon').style.fill = logStarred ? 'var(--accent)' : 'none';
  document.getElementById('save-name-group').style.display = logStarred ? 'block' : 'none';
  if (logStarred) document.getElementById('save-name').focus();
}
function closeLogModal() { document.getElementById('log-modal').classList.remove('show'); }

function saveWorkoutLog() {
  const date = document.getElementById('log-date').value;
  const notesEl = document.getElementById('log-notes');
  const notes = notesEl ? notesEl.value : '';
  if (!date) return;

  const exerciseData = currentWorkout.map(item => ({
    id: item.exercise.id, name: item.exercise.name,
    sets: item.sets, reps: item.reps, weight: item.weight,
    primary: item.exercise.primary, secondary: item.exercise.secondary
  }));

  const log = { id: Date.now().toString(36), date, notes, starred: logStarred, exercises: exerciseData, savedId: loadedSavedId || null };
  const logs = getWorkoutLogs();
  logs.push(log);
  logs.sort((a,b) => b.date.localeCompare(a.date));
  saveWorkoutLogs(logs);

  if (logStarred) {
    const customName = (document.getElementById('save-name').value || '').trim();
    const workoutName = customName || `${formatDate(date)} Workout`;
    const saved = getSavedWorkouts();
    saved.push({ id: Date.now().toString(36), name: workoutName, exercises: exerciseData, created: date });
    saveSavedWorkouts(saved);
  }

  closeLogModal();
  clearWorkout();
  switchTab('log');
}

// ==================== SAVED WORKOUTS ====================
function renderSavedWorkouts() {
  const saved = getSavedWorkouts();
  const list = document.getElementById('saved-list');
  const empty = document.getElementById('saved-empty');
  list.style.display = '';
  if (saved.length === 0) { list.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  const logs = getWorkoutLogs();
  list.innerHTML = saved.map(w => {
    const useCount = countSavedUsage(w.id, logs);
    const useText = useCount === 0 ? 'Never used' : useCount === 1 ? 'Used 1 time' : `Used ${useCount} times`;
    return `
    <div class="card" style="cursor:pointer" onclick="openSavedEdit('${w.id}')">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600">${w.name}</div>
          <div style="font-size:12px;color:var(--text2);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w.exercises.map(e=>e.name).join(', ')}</div>
          <div style="font-size:11px;color:var(--text2);margin-top:2px">${useText}</div>
        </div>
        <button class="btn btn-sm btn-primary" style="margin-left:10px;flex-shrink:0" onclick="event.stopPropagation();loadSavedWorkout('${w.id}')">Load</button>
      </div>
    </div>`;
  }).join('');
}

let loadedSavedId = null;

function loadSavedWorkout(id) {
  const saved = getSavedWorkouts();
  const w = saved.find(s => s.id === id);
  if (!w) return;
  loadedSavedId = id;
  currentWorkout = w.exercises.map(e => {
    const exercise = EXERCISES.find(ex => ex.id === e.id) || {
      id:e.id, name:e.name, category:'complex', equipment:'kettlebell',
      difficulty:'intermediate', primary:e.primary||[], secondary:e.secondary||[]
    };
    return { exercise, sets:e.sets, reps:e.reps, weight:e.weight };
  });
  renderCurrentWorkout();

  // Show source subtitle under Current Workout
  const srcEl = document.getElementById('workout-source');
  srcEl.textContent = w.exercises.length + ' exercises from "' + w.name + '"';
  srcEl.style.display = 'block';

  // Collapse generate settings and show saved source bar
  document.getElementById('quick-settings').style.display = 'none';
  document.getElementById('quick-expand-bar').style.display = 'none';
  document.getElementById('saved-source-name').textContent = w.name;
  document.getElementById('saved-source-bar').style.display = 'flex';

  // Switch to Build tab to show the loaded workout
  switchTab('build');
}

function editLoadedSaved() {
  if (loadedSavedId) {
    switchTab('saved');
    openSavedEdit(loadedSavedId);
  }
}

function toggleSavedList() {
  // No-op — saved workouts now have their own tab
}

function countSavedUsage(savedId, logs) {
  return (logs || getWorkoutLogs()).filter(l => l.savedId === savedId).length;
}

function deleteSaved(id) {
  saveSavedWorkouts(getSavedWorkouts().filter(s => s.id !== id));
  deleteSavedFromFirestore(id);
  renderSavedWorkouts();
}

// ==================== EDIT SAVED WORKOUT ====================
let editingSavedId = null;
let editingSavedExercises = [];

function openSavedEdit(id) {
  const saved = getSavedWorkouts();
  const w = saved.find(s => s.id === id);
  if (!w) return;
  editingSavedId = id;
  editingSavedExercises = w.exercises.map(e => ({...e}));

  document.getElementById('saved-edit-name').value = w.name;
  document.getElementById('saved-edit-notes').value = w.notes || '';

  const logs = getWorkoutLogs();
  const useCount = countSavedUsage(id, logs);
  const useText = useCount === 0 ? 'Never used' : useCount === 1 ? 'Used 1 time' : `Used ${useCount} times`;
  document.getElementById('saved-edit-usage').textContent = useText;

  renderSavedEditExercises();

  document.getElementById('saved-list').style.display = 'none';
  document.getElementById('saved-empty').style.display = 'none';
  document.getElementById('saved-edit').style.display = 'block';
}

function closeSavedEdit() {
  document.getElementById('saved-edit').style.display = 'none';
  document.getElementById('saved-list').style.display = '';
  editingSavedId = null;
  editingSavedExercises = [];
  renderSavedWorkouts();
}

function renderSavedEditExercises() {
  const el = document.getElementById('saved-edit-exercises');
  el.innerHTML = editingSavedExercises.map((e, i) => `
    <div class="workout-item" style="position:relative" draggable="true" data-eidx="${i}"
      ondragstart="editDragStart(event,${i})" ondragover="editDragOver(event)" ondragleave="editDragLeave(event)" ondrop="editDragDrop(event,${i})" ondragend="editDragEnd(event)"
      ontouchstart="editTouchStart(event,${i})" ontouchmove="editTouchMove(event)" ontouchend="editTouchEnd(event,${i})">
      <div class="drag-handle"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg></div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:600">${e.name}</div>
        <div style="font-size:12px;color:var(--text2)">${e.sets}x${e.reps} @ ${e.weight}</div>
      </div>
      <button class="remove-btn" onclick="editRemoveExercise(${i})">&#215;</button>
    </div>
  `).join('');
}

function editRemoveExercise(i) {
  editingSavedExercises.splice(i, 1);
  renderSavedEditExercises();
}

// Drag reorder for edit screen (desktop)
let editDragIdx = null;
function editDragStart(e, i) { editDragIdx = i; e.currentTarget.classList.add('dragging'); }
function editDragOver(e) {
  e.preventDefault();
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const midY = rect.top + rect.height / 2;
  el.classList.toggle('drag-over', e.clientY < midY);
  el.classList.toggle('drag-over-bottom', e.clientY >= midY);
}
function editDragLeave(e) { e.currentTarget.classList.remove('drag-over', 'drag-over-bottom'); }
function editDragDrop(e, i) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over', 'drag-over-bottom');
  if (editDragIdx === null) return;
  const rect = e.currentTarget.getBoundingClientRect();
  let dropIdx = e.clientY >= rect.top + rect.height / 2 ? i + 1 : i;
  if (dropIdx > editDragIdx) dropIdx--;
  if (dropIdx !== editDragIdx) {
    const item = editingSavedExercises.splice(editDragIdx, 1)[0];
    editingSavedExercises.splice(dropIdx, 0, item);
    renderSavedEditExercises();
  }
}
function editDragEnd(e) { editDragIdx = null; e.currentTarget.classList.remove('dragging', 'drag-over', 'drag-over-bottom'); }

// Touch drag reorder for edit screen (mobile)
let editTouchIdx = null;
function editTouchStart(e, i) {
  if (!e.target.closest('.drag-handle')) return;
  editTouchIdx = i;
  e.currentTarget.classList.add('dragging');
}
function editTouchMove(e) {
  if (editTouchIdx === null) return;
  e.preventDefault();
  const y = e.touches[0].clientY;
  const items = document.querySelectorAll('#saved-edit-exercises .workout-item');
  items.forEach(el => el.classList.remove('drag-over', 'drag-over-bottom'));
  for (const el of items) {
    const rect = el.getBoundingClientRect();
    if (y > rect.top && y < rect.bottom) {
      const midY = rect.top + rect.height / 2;
      el.classList.toggle('drag-over', y < midY);
      el.classList.toggle('drag-over-bottom', y >= midY);
      break;
    }
  }
}
function editTouchEnd(e, i) {
  if (editTouchIdx === null) return;
  const y = e.changedTouches[0].clientY;
  const items = document.querySelectorAll('#saved-edit-exercises .workout-item');
  let dropIdx = editTouchIdx;
  for (const el of items) {
    const rect = el.getBoundingClientRect();
    if (y > rect.top && y < rect.bottom) {
      const idx = parseInt(el.dataset.eidx);
      const midY = rect.top + rect.height / 2;
      dropIdx = y >= midY ? idx + 1 : idx;
      break;
    }
  }
  items.forEach(el => { el.classList.remove('dragging', 'drag-over', 'drag-over-bottom'); });
  if (dropIdx > editTouchIdx) dropIdx--;
  if (editTouchIdx !== dropIdx) {
    const item = editingSavedExercises.splice(editTouchIdx, 1)[0];
    editingSavedExercises.splice(dropIdx, 0, item);
    renderSavedEditExercises();
  }
  editTouchIdx = null;
}

function saveSavedEdit() {
  const saved = getSavedWorkouts();
  const w = saved.find(s => s.id === editingSavedId);
  if (!w) return;
  w.name = document.getElementById('saved-edit-name').value.trim() || w.name;
  w.notes = document.getElementById('saved-edit-notes').value.trim();
  w.exercises = editingSavedExercises;
  saveSavedWorkouts(saved);
  closeSavedEdit();
}

function loadFromEdit() {
  loadSavedWorkout(editingSavedId);
  document.getElementById('saved-edit').style.display = 'none';
}

function deleteFromEdit() {
  const id = editingSavedId;
  deleteSaved(id);
  document.getElementById('saved-edit').style.display = 'none';
  editingSavedId = null;
  editingSavedExercises = [];
  renderSavedWorkouts();
}

// ==================== LOG DISPLAY ====================
function renderLog() {
  const logs = getWorkoutLogs();
  renderCalendar(logs);

  const list = document.getElementById('log-list');
  const empty = document.getElementById('log-empty');
  if (logs.length === 0) { list.innerHTML = ''; empty.style.display = 'block'; return; }

  const filtered = selectedLogDate ? logs.filter(l => l.date === selectedLogDate) : logs;
  if (filtered.length === 0) { list.innerHTML = '<div class="empty-state"><p>No workouts on this date</p></div>'; empty.style.display = 'none'; return; }
  empty.style.display = 'none';

  list.innerHTML = filtered.map(log => {
    const totalSets = log.exercises.reduce((s,e) => s + (parseInt(e.sets)||0), 0);
    return `
    <div class="log-entry">
      <div class="log-date">${log.starred?'<svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" stroke-width="2" style="vertical-align:-1px;margin-right:4px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>':''}${formatDate(log.date)}</div>
      <div class="log-exercises">${log.exercises.map(e => e.name).join(', ')}</div>
      <div class="log-stats">
        <span>${log.exercises.length} exercises</span>
        <span>${totalSets} total sets</span>
        ${log.notes ? `<span>${log.notes}</span>` : ''}
      </div>
      <div class="log-actions">
        <button class="btn btn-sm btn-secondary" onclick="reloadWorkout('${log.id}')">Reload</button>
        <button class="btn btn-sm btn-danger" onclick="deleteLog('${log.id}')">Delete</button>
      </div>
    </div>`;
  }).join('');
}

function reloadWorkout(logId) {
  const logs = getWorkoutLogs();
  const log = logs.find(l => l.id === logId);
  if (!log) return;
  currentWorkout = log.exercises.map(e => {
    const exercise = EXERCISES.find(ex => ex.id === e.id) || {
      id: e.id, name: e.name, category: 'complex', equipment: 'kettlebell',
      difficulty: 'intermediate', primary: e.primary || [], secondary: e.secondary || []
    };
    return { exercise, sets: e.sets, reps: e.reps, weight: e.weight };
  });
  renderCurrentWorkout();
  switchTab('build');
}

function deleteLog(logId) {
  const logs = getWorkoutLogs().filter(l => l.id !== logId);
  saveWorkoutLogs(logs);
  deleteLogFromFirestore(logId);
  renderLog();
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric', year:'numeric' });
}

// ==================== CALENDAR ====================
function renderCalendar(logs) {
  const el = document.getElementById('calendar');
  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const workoutDates = new Set(logs.map(l => l.date));
  const monthName = calendarMonth.toLocaleDateString('en-US', { month:'long', year:'numeric' });

  let html = `
    <div class="cal-header">
      <button class="btn btn-sm btn-secondary" onclick="changeMonth(-1)">&larr;</button>
      <span style="font-weight:600;font-size:14px">${monthName}</span>
      <button class="btn btn-sm btn-secondary" onclick="changeMonth(1)">&rarr;</button>
    </div>
    <div class="cal-grid">
      <div class="cal-day-label">S</div><div class="cal-day-label">M</div><div class="cal-day-label">T</div>
      <div class="cal-day-label">W</div><div class="cal-day-label">T</div><div class="cal-day-label">F</div><div class="cal-day-label">S</div>
  `;
  for (let i = 0; i < firstDay; i++) html += '<div class="cal-day"></div>';
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday = today.getFullYear()===year && today.getMonth()===month && today.getDate()===d;
    const hasW = workoutDates.has(dateStr);
    const isSel = selectedLogDate === dateStr;
    html += `<div class="cal-day${hasW?' has-workout':''}${isToday?' today':''}${isSel?' selected':''}" onclick="selectLogDate('${dateStr}')">${d}</div>`;
  }
  html += '</div>';
  el.innerHTML = html;
}
function selectLogDate(dateStr) {
  selectedLogDate = selectedLogDate === dateStr ? null : dateStr;
  renderLog();
}
function changeMonth(dir) {
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + dir, 1);
  selectedLogDate = null;
  renderLog();
}

// ==================== INSIGHTS ====================
function renderInsights() {
  const logs = getWorkoutLogs();
  renderTopExercises(logs);
  renderVolumeChart(logs);
  renderHeatmap(logs);
  renderSuggestions(logs);
}

function renderTopExercises(logs) {
  const counts = {};
  logs.forEach(log => log.exercises.forEach(e => { counts[e.name] = (counts[e.name]||0) + 1; }));
  const sorted = Object.entries(counts).sort((a,b) => b[1]-a[1]).slice(0,5);
  const el = document.getElementById('top-exercises');
  if (sorted.length === 0) {
    el.innerHTML = '<li class="empty-state" style="padding:10px"><p>Log workouts to see your top exercises</p></li>';
    return;
  }
  el.innerHTML = sorted.map(([name, count], i) =>
    `<li class="rank-item"><span class="rank-num">${i+1}</span><span style="flex:1">${name}</span><span style="color:var(--text2);font-size:12px">${count}x</span></li>`
  ).join('');
}

function renderVolumeChart(logs) {
  const canvas = document.getElementById('volume-chart');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const W = rect.width, H = rect.height;

  // Get last 8 weeks of data
  const weeks = [];
  const now = new Date();
  for (let i = 7; i >= 0; i--) {
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - (now.getDay() + i*7));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    const startStr = weekStart.toISOString().slice(0,10);
    const endStr = weekEnd.toISOString().slice(0,10);
    const weekLogs = logs.filter(l => l.date >= startStr && l.date <= endStr);
    const totalSets = weekLogs.reduce((s, log) => s + log.exercises.reduce((s2,e) => s2 + (parseInt(e.sets)||0), 0), 0);
    weeks.push({ label: `${weekStart.getMonth()+1}/${weekStart.getDate()}`, count: weekLogs.length, sets: totalSets });
  }

  ctx.clearRect(0,0,W,H);
  const pad = { top:20, right:10, bottom:30, left:35 };
  const chartW = W - pad.left - pad.right;
  const chartH = H - pad.top - pad.bottom;
  const maxSets = Math.max(...weeks.map(w => w.sets), 10);
  const barW = chartW / weeks.length * 0.6;
  const gap = chartW / weeks.length;

  // Grid lines
  ctx.strokeStyle = '#2a2a3e';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + chartH - (chartH * i / 4);
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(W - pad.right, y); ctx.stroke();
    ctx.fillStyle = '#8888a0'; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(Math.round(maxSets * i / 4), pad.left - 5, y + 3);
  }

  // Bars
  weeks.forEach((w, i) => {
    const x = pad.left + i * gap + (gap - barW) / 2;
    const h = (w.sets / maxSets) * chartH;
    const y = pad.top + chartH - h;

    const grad = ctx.createLinearGradient(x, y, x, pad.top + chartH);
    grad.addColorStop(0, '#ff6b35');
    grad.addColorStop(1, '#ff6b3533');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, h, [4,4,0,0]);
    ctx.fill();

    // Workout count on top
    if (w.count > 0) {
      ctx.fillStyle = '#e8e8f0'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(w.count + 'w', x + barW/2, y - 5);
    }

    // Week label
    ctx.fillStyle = '#8888a0'; ctx.font = '10px sans-serif';
    ctx.fillText(w.label, x + barW/2, H - pad.bottom + 15);
  });

  // Y axis label
  ctx.save(); ctx.translate(10, pad.top + chartH/2); ctx.rotate(-Math.PI/2);
  ctx.fillStyle = '#8888a0'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('Total Sets', 0, 0);
  ctx.restore();
}

function renderHeatmap(logs) {
  const container = document.getElementById('heatmap-diagram');
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - heatmapDays);
  const cutoffStr = cutoff.toISOString().slice(0,10);
  const recentLogs = logs.filter(l => l.date >= cutoffStr);

  // Count muscle frequency
  const freq = {};
  recentLogs.forEach(log => {
    log.exercises.forEach(e => {
      (e.primary||[]).forEach(m => { freq[m] = (freq[m]||0) + 2; });
      (e.secondary||[]).forEach(m => { freq[m] = (freq[m]||0) + 1; });
    });
  });

  const maxFreq = Math.max(...Object.values(freq), 1);

  // Clone the SVGs
  container.innerHTML = '';
  ['svg-front','svg-back'].forEach(svgId => {
    const orig = document.getElementById(svgId);
    const clone = orig.cloneNode(true);
    clone.removeAttribute('id');
    clone.querySelectorAll('.muscle').forEach(m => {
      m.classList.remove('active-primary','active-secondary');
      const muscle = m.dataset.muscle;
      if (muscle && freq[muscle]) {
        const intensity = freq[muscle] / maxFreq;
        const alpha = 0.2 + intensity * 0.8;
        m.style.fill = `rgba(255,107,53,${alpha})`;
      }
    });
    const wrap = document.createElement('div');
    wrap.className = 'body-view';
    wrap.appendChild(clone);
    container.appendChild(wrap);
  });
}

function setHeatmapRange(btn, days) {
  document.querySelectorAll('.heatmap-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  heatmapDays = days;
  renderInsights();
}

function renderSuggestions(logs) {
  const el = document.getElementById('suggestions-list');
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 7);
  const cutoffStr = cutoff.toISOString().slice(0,10);
  const recentLogs = logs.filter(l => l.date >= cutoffStr);

  // Find muscles worked recently
  const recentMuscles = new Set();
  recentLogs.forEach(log => {
    log.exercises.forEach(e => {
      (e.primary||[]).forEach(m => recentMuscles.add(m));
    });
  });

  // Find muscles NOT worked
  const allMuscles = Object.keys(MUSCLE_NAMES);
  const neglected = allMuscles.filter(m => !recentMuscles.has(m) && m !== 'core');

  if (neglected.length === 0 && logs.length > 0) {
    el.innerHTML = '<div style="padding:10px;font-size:13px;color:var(--green)">Great coverage! You\'ve hit all muscle groups in the last 7 days.</div>';
    return;
  }
  if (logs.length === 0) {
    el.innerHTML = '<div class="empty-state" style="padding:10px"><p>Log workouts to get suggestions</p></div>';
    return;
  }

  // Find exercises that target neglected muscles
  const suggestions = [];
  const usedIds = new Set();
  neglected.forEach(muscle => {
    const exs = EXERCISES.filter(e => e.primary.includes(muscle) && !usedIds.has(e.id));
    if (exs.length > 0) {
      const ex = exs[Math.floor(Math.random() * exs.length)];
      usedIds.add(ex.id);
      suggestions.push({ exercise: ex, reason: MUSCLE_NAMES[muscle] });
    }
  });

  el.innerHTML = `<div style="font-size:12px;color:var(--text2);margin-bottom:8px">You haven't targeted these muscles in 7+ days:</div>` +
    suggestions.slice(0,5).map(s => `
      <div class="suggestion-item" onclick="addExercise('${s.exercise.id}');switchTab('build')">
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600">${s.exercise.name}</div>
          <div style="font-size:11px;color:var(--text2)">Targets: ${s.reason}</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
      </div>
    `).join('');
}

// ==================== INIT ====================
updatePrefWeightDisplay();
renderExerciseList();
renderLog();
updateMusclesTabState();
