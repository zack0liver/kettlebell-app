// ==================== EXERCISE DATABASE ====================
const EXERCISES = [
  // Swings
  { id:'kb_swing', name:'Kettlebell Swing', category:'swing', equipment:'kettlebell', difficulty:'beginner',
    primary:['glutes','hamstrings'], secondary:['core','lower_back','shoulders','forearms'],
    desc:'The hinge, not the squat — drive your hips back explosively then snap them forward to send the bell floating to chest height. Glutes and hamstrings do the heavy lifting while your core locks everything in place.' },
  { id:'kb_swing_1h', name:'One-Hand Swing', category:'swing', equipment:'kettlebell', difficulty:'intermediate',
    primary:['glutes','hamstrings'], secondary:['core','lower_back','shoulders','forearms','obliques'],
    desc:'Same hip-hinge power as the two-hand swing, but now one arm holds the bell while the other fights to keep your torso from spiraling. Your obliques and lats quietly pick up a second job.' },
  { id:'kb_swing_alt', name:'Alternating Swing', category:'swing', equipment:'kettlebell', difficulty:'intermediate',
    primary:['glutes','hamstrings'], secondary:['core','lower_back','shoulders','forearms'],
    desc:'At the top of each swing you hand the bell off mid-air like a hot potato — sounds casual, but your grip, core, and shoulders are working every single pass.' },

  // Squats
  { id:'kb_goblet', name:'Goblet Squat', category:'squat', equipment:'kettlebell', difficulty:'beginner',
    primary:['quads','glutes'], secondary:['core','hamstrings'],
    desc:'Hold the bell by the horns at chest height and squat until your elbows graze your inner thighs. The front-loaded weight pulls you forward, so your core works overtime just to keep you upright.' },
  { id:'kb_sumo', name:'Sumo Squat', category:'squat', equipment:'kettlebell', difficulty:'beginner',
    primary:['quads','glutes','hip_flexors'], secondary:['core','hamstrings'],
    desc:'Wide stance, toes out, bell hanging between your legs — then sit straight down like royalty. The extra hip width recruits more inner thigh and glute than a standard squat.' },
  { id:'kb_cossack', name:'Cossack Squat', category:'squat', equipment:'kettlebell', difficulty:'advanced',
    primary:['quads','glutes','hip_flexors'], secondary:['core','hamstrings','calves'],
    desc:'A side-to-side squat that takes your hips somewhere they\'ve likely never been — one leg drops deep while the other extends straight. Demands serious hip flexor and adductor range of motion, and will expose every tightness you\'ve been ignoring.' },
  { id:'kb_front_squat', name:'Front Rack Squat', category:'squat', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes'], secondary:['core','shoulders','traps'],
    desc:'The bell rests on your forearm in the rack position, meaning your shoulder and upper back must stay vertical the entire squat or the bell wins. Legs and core, plus a crash course in positional strength.' },

  // Presses
  { id:'kb_press', name:'Overhead Press', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','triceps'], secondary:['core','chest'],
    desc:'From the rack, press the bell straight overhead until your arm is locked out and your bicep brushes your ear. The shoulder complex drives the lift while your core braces to keep any back arch from sneaking in.' },
  { id:'kb_push_press', name:'Push Press', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','triceps','quads'], secondary:['core','glutes'],
    desc:'A slight leg dip loads the drive, then your legs punch upward to give the bell a head start — your shoulders finish the job overhead. More weight than a strict press, same finishing position.' },
  { id:'kb_floor_press', name:'Floor Press', category:'press', equipment:'kettlebell', difficulty:'beginner',
    primary:['chest','triceps'], secondary:['shoulders'],
    desc:'The floor\'s built-in stop removes the bottom stretch of a bench press, forcing your triceps and chest to work from a dead start. Easier on the shoulders too, since your elbows can\'t drop below parallel.' },
  { id:'kb_bottoms_up', name:'Bottoms-Up Press', category:'press', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','forearms'], secondary:['core','triceps'],
    desc:'The bell is flipped upside down and balanced on your fist — press it overhead without dropping it. Your wrist, forearm, and rotator cuff scramble to stabilize the load the entire way up.' },

  // Pulls / Rows
  { id:'kb_row', name:'Single-Arm Row', category:'pull', equipment:'kettlebell', difficulty:'beginner',
    primary:['lats','biceps'], secondary:['core','forearms','traps'],
    desc:'Brace on a bench or your thigh, then pull the bell from full arm extension to your hip. Your lat is the prime mover; your bicep and forearm are happy passengers.' },
  { id:'kb_gorilla_row', name:'Gorilla Row', category:'pull', equipment:'kettlebell', difficulty:'intermediate',
    primary:['lats','biceps'], secondary:['core','forearms','traps','lower_back'],
    desc:'Both bells on the floor in a wide hip hinge — row one while the other anchors you, then switch. The alternating rhythm creates a constant anti-rotation demand that standard rows never touch.' },
  { id:'kb_high_pull', name:'High Pull', category:'pull', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','traps','hamstrings'], secondary:['glutes','core','biceps','forearms'],
    desc:'Explode the bell out of a swing and redirect the momentum upward, driving your elbow high past your ear. Traps and posterior shoulder get a power stimulus that standard rows simply can\'t deliver.' },
  { id:'kb_upright_row', name:'Upright Row', category:'pull', equipment:'kettlebell', difficulty:'beginner',
    primary:['shoulders','traps'], secondary:['biceps','forearms'],
    desc:'Pull the bell straight up along your body until your elbows reach shoulder height. Your mid-deltoids and upper traps feel every inch — keep your wrists below your elbows throughout.' },

  // Core
  { id:'kb_turkish', name:'Turkish Get-Up', category:'core', equipment:'kettlebell', difficulty:'advanced',
    primary:['core','shoulders'], secondary:['glutes','quads','triceps','hip_flexors','obliques'],
    desc:'The world\'s longest single rep — from flat on your back to standing with the bell overhead, then every step reversed. Every joint, stabilizer, and balance reflex you own gets tested before you set it down.' },
  { id:'kb_windmill', name:'Windmill', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['obliques','shoulders'], secondary:['hamstrings','hip_flexors','core'],
    desc:'Hold the bell overhead and hinge sideways until your free hand touches the floor while the bell stays locked above you. Your obliques, rotator cuff, and hamstrings negotiate a three-way deal the whole way down.' },
  { id:'kb_halo', name:'Halo', category:'core', equipment:'kettlebell', difficulty:'beginner',
    primary:['shoulders','core'], secondary:['triceps','forearms'],
    desc:'Circle the bell slowly around your head while keeping your torso completely still. Your shoulders and core work in constant opposition to keep the rotation smooth and controlled.' },
  { id:'kb_russian_twist', name:'Russian Twist (KB)', category:'core', equipment:'kettlebell', difficulty:'beginner',
    primary:['obliques','abs'], secondary:['hip_flexors'],
    desc:'Feet off the floor if you dare, torso tilted back, swinging the bell side to side past each hip. Your obliques are doing most of the work; your hip flexors are just complaining about it.' },
  { id:'kb_pullover', name:'KB Pullover', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['lats','abs'], secondary:['chest','triceps'],
    desc:'Lie flat and arc the bell from your chest up over your head toward the floor, then pull it back. Your lats get a full stretch-to-contraction sweep while your abs fight to keep your lower back from leaving the mat.' },
  { id:'kb_figure8', name:'Figure 8', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['core','obliques'], secondary:['forearms','quads','glutes'],
    desc:'Pass the bell between and around your legs in a continuous figure-8 pattern while staying in a deep hip hinge. Your core and obliques brace the whole time while your forearms question every life choice.' },

  // Carries
  { id:'kb_farmer', name:'Farmer Carry', category:'carry', equipment:'kettlebell', difficulty:'beginner',
    primary:['forearms','traps'], secondary:['core','shoulders','calves'],
    desc:'Pick up heavy bells and walk. Your grip, traps, and core are bracing for every step while your gait tries not to look like a penguin. One of the best bang-for-your-time full-body exercises there is.' },
  { id:'kb_rack_carry', name:'Rack Carry', category:'carry', equipment:'kettlebell', difficulty:'intermediate',
    primary:['core','shoulders'], secondary:['forearms','biceps','calves'],
    desc:'Bell resting on your forearm in the rack position as you walk — your core fights lateral tilt on every step and your shoulder stabilizes the load at chest height. Your calves also do more than they expected.' },
  { id:'kb_overhead_carry', name:'Overhead Carry', category:'carry', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','core'], secondary:['triceps','forearms','calves','traps'],
    desc:'Walk with the bell locked overhead and arm straight. Your rotator cuff, core, and glutes team up to keep the bell from drifting and your spine from folding with every step.' },
  { id:'kb_suitcase', name:'Suitcase Carry', category:'carry', equipment:'kettlebell', difficulty:'beginner',
    primary:['obliques','forearms'], secondary:['core','traps','calves'],
    desc:'One bell at your side like an actual suitcase — except you\'re not allowed to lean toward it. Your obliques on the unloaded side work hard to keep your torso upright the entire walk.' },

  // Complexes / Dynamic
  { id:'kb_clean', name:'Kettlebell Clean', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['hamstrings','glutes','forearms'], secondary:['core','biceps','shoulders','traps'],
    desc:'Swing the bell and guide it into the rack position in one smooth arc — no banging the forearm. Your hips snap forward first, then your arm redirects the momentum into a clean, quiet catch.' },
  { id:'kb_snatch', name:'Kettlebell Snatch', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','hamstrings','glutes'], secondary:['core','traps','forearms','quads'],
    desc:'The bell travels from below your hips to a locked-out position overhead in one fluid motion. Ballistic, technical, and humbling until the timing clicks — then it\'s the most satisfying rep in kettlebell training.' },
  { id:'kb_clean_press', name:'Clean & Press', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','hamstrings','glutes'], secondary:['core','triceps','forearms','traps'],
    desc:'Hip drive delivers the bell to the rack, then your shoulder takes it the rest of the way overhead in one continuous sequence. Two movements, one tempo, every muscle involved.' },
  { id:'kb_thruster', name:'Thruster', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','shoulders','glutes'], secondary:['core','triceps','hamstrings'],
    desc:'Squat with the bell at your shoulder, then use the upward leg drive to launch it overhead without pausing between squat and press. Your lungs will file a formal complaint around rep 6.' },
  { id:'kb_lunge', name:'KB Lunge', category:'complex', equipment:'kettlebell', difficulty:'beginner',
    primary:['quads','glutes'], secondary:['hamstrings','core','calves'],
    desc:'Step forward into a deep lunge with the bell at your side or in the rack. One quad gets the bulk of the burn on the way down; your glute powers the push back to standing.' },
  { id:'kb_deadlift', name:'KB Deadlift', category:'complex', equipment:'kettlebell', difficulty:'beginner',
    primary:['hamstrings','glutes','lower_back'], secondary:['core','forearms','quads'],
    desc:'Hinge at the hips, grip the bell on the floor, then drive through your heels until your hips lock out fully. Your hamstrings and glutes are the engine; your lower back is bracing, not lifting.' },
  { id:'kb_single_dl', name:'Single-Leg Deadlift', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['hamstrings','glutes'], secondary:['core','lower_back','calves'],
    desc:'Stand on one leg, hinge forward with the bell hanging, and let your free leg float behind as a counterbalance. Every small balance stabilizer on the standing leg works overtime to keep you from tipping.' },

  // Mat / Bodyweight
  { id:'mat_plank', name:'Plank', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['abs','core'], secondary:['shoulders','glutes'],
    desc:'Hold a rigid push-up position without moving — sounds easy until thirty seconds in. Your abs, obliques, and glutes co-contract to keep your spine from sagging like a hammock.' },
  { id:'mat_side_plank', name:'Side Plank', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['obliques'], secondary:['shoulders','core','hip_flexors'],
    desc:'Balance on one forearm and the side of one foot, body rigid. Your obliques are working at a steep mechanical disadvantage — one of the most effective lateral core exercises per second of effort.' },
  { id:'mat_hollow', name:'Hollow Body Hold', category:'mat', equipment:'mat', difficulty:'intermediate',
    primary:['abs','hip_flexors'], secondary:['core'],
    desc:'Lie on your back, lower back pressed into the floor, arms overhead, legs just above it — and hold. Gymnasts build their entire strength foundation from this position; you\'ll feel why.' },
  { id:'mat_deadbug', name:'Dead Bug', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['abs','core'], secondary:['hip_flexors'],
    desc:'On your back, extend opposite arm and leg while keeping your lower back pinned to the floor — then switch. Anti-extension core training at its most sneaky; looks easy, exposes every weakness.' },
  { id:'mat_glute_bridge', name:'Glute Bridge', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['glutes'], secondary:['hamstrings','core'],
    desc:'Lie on your back, feet flat, and drive your hips to the ceiling until your knees, hips, and shoulders form a straight line. Your glutes do the work; your hamstrings assist; your hip flexors finally take a break.' },
  { id:'mat_bird_dog', name:'Bird Dog', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['core','lower_back'], secondary:['glutes','shoulders'],
    desc:'From hands and knees, extend your opposite arm and leg without rotating your hips. A masterclass in anti-rotation and spinal stability — your lower back holds everything level while your shoulder and glute do the reaching.' },
  { id:'mat_mountain_climber', name:'Mountain Climbers', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['core','hip_flexors'], secondary:['shoulders','quads','calves'],
    desc:'Start in a plank and drive your knees toward your chest in rapid alternation. Your hip flexors and core are scrambling, your shoulders are holding the plank, and your cardio system shows up uninvited.' },
  { id:'mat_superman', name:'Superman Hold', category:'mat', equipment:'mat', difficulty:'beginner',
    primary:['lower_back','glutes'], secondary:['hamstrings','traps'],
    desc:'Lie face-down and lift your arms, chest, and legs off the floor simultaneously. Your posterior chain — lower back, glutes, and hamstrings — contracts hard to fight gravity from every direction.' },

  // Legs (additional)
  { id:'kb_split_squat', name:'Split Squat', category:'squat', equipment:'kettlebell', difficulty:'beginner',
    primary:['quads','glutes'], secondary:['hamstrings','core'],
    desc:'One foot forward, one back, lower until your rear knee nearly touches the floor. The stationary stance removes balance from the equation so your front quad and glute have no excuses.' },
  { id:'kb_lateral_lunge', name:'Lateral Lunge', category:'squat', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes','hip_flexors'], secondary:['hamstrings','core'],
    desc:'Step out wide to one side and drop into a single-leg squat, keeping the other leg straight. Your inner thighs and hip flexors stretch at the bottom while your glute powers the push back to center.' },
  { id:'kb_step_up', name:'Step-Up', category:'squat', equipment:'kettlebell', difficulty:'beginner',
    primary:['quads','glutes'], secondary:['hamstrings','calves','core'],
    desc:'Drive through your heel on an elevated surface to lift yourself up. Whichever leg is on the box owns the entire rep — quad, glute, and hamstring doing full unilateral duty with no help from the back foot.' },
  { id:'kb_curtsy_lunge', name:'Curtsy Lunge', category:'squat', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes'], secondary:['hip_flexors','core'],
    desc:'Step one foot diagonally behind you and lower into a lunge — like a curtsy, but heavier and far less graceful. The cross-behind pattern shifts emphasis to the outer glute and hip abductors in a way standard lunges miss.' },
  { id:'kb_bulgarian_split', name:'Bulgarian Split Squat', category:'squat', equipment:'kettlebell', difficulty:'advanced',
    primary:['quads','glutes'], secondary:['hamstrings','core','calves'],
    desc:'Rear foot elevated on a bench, front foot forward, lower until your front thigh is parallel. The elevated rear leg amplifies the stretch and the demand on your front quad and glute — and there\'s nowhere to hide.' },
  { id:'kb_squat_jump', name:'Squat Jump (KB)', category:'squat', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes','calves'], secondary:['hamstrings','core'],
    desc:'Squat down then explode into a jump, landing softly and cycling straight back down. Your quads and calves generate the power; your landing absorbs the impact through your whole lower chain; your lungs log the overtime.' },
  { id:'kb_pistol_squat', name:'Pistol Squat', category:'squat', equipment:'kettlebell', difficulty:'advanced',
    primary:['quads','glutes','hip_flexors'], secondary:['hamstrings','calves','core'],
    desc:'A one-legged squat all the way to the floor and back up with the other leg extended forward. Demands quad strength, hip flexor flexibility, ankle mobility, and enough balance to make your ego check the mirror.' },
  { id:'kb_calf_raise', name:'Calf Raise (KB)', category:'squat', equipment:'kettlebell', difficulty:'beginner',
    primary:['calves'], secondary:['quads'],
    desc:'Stand with bells at your sides and rise onto your toes as high as possible, then lower with control. The added load forces your gastrocnemius and soleus to work through a fuller range than bodyweight alone.' },

  // Arms
  { id:'kb_bicep_curl', name:'KB Bicep Curl', category:'arms', equipment:'kettlebell', difficulty:'beginner',
    primary:['biceps'], secondary:['forearms'],
    desc:'The classic — bell hanging from your grip, curl it to your shoulder and lower with control. The offset center of mass creates a different moment arm than a dumbbell, making the bottom half noticeably harder.' },
  { id:'kb_tricep_ext', name:'KB Tricep Extension', category:'arms', equipment:'kettlebell', difficulty:'beginner',
    primary:['triceps'], secondary:['shoulders'],
    desc:'Hold the bell overhead by the handle and lower it behind your head, then press back up. Your long head of the tricep gets the full stretch at the bottom — an angle barbells and cables struggle to replicate.' },
  { id:'kb_crush_curl', name:'Crush Curl', category:'arms', equipment:'kettlebell', difficulty:'intermediate',
    primary:['biceps','forearms'], secondary:['chest'],
    desc:'Hold the bell by its sides and squeeze hard throughout the curl. The constant lateral press engages your pecs while your biceps and forearms handle the curl — two muscles taxed for the price of one movement.' },
  { id:'kb_skull_crusher', name:'KB Skull Crusher', category:'arms', equipment:'kettlebell', difficulty:'intermediate',
    primary:['triceps'], secondary:['chest','shoulders'],
    desc:'Lie on your back, press the bell over your face and lower it toward your forehead by bending only at the elbows. Triceps get a deep stretch at the bottom; the name is just motivation to maintain control.' },
  { id:'kb_hammer_curl', name:'Hammer Curl (KB)', category:'arms', equipment:'kettlebell', difficulty:'beginner',
    primary:['biceps','forearms'], secondary:[],
    desc:'Curl with a neutral (thumb-up) grip instead of supinated — hits your brachialis and forearm extensors more than a standard curl and builds the kind of arm thickness that looks earned.' },

  // Chest (additional)
  { id:'kb_sa_floor_press', name:'Single-Arm Floor Press', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['chest','triceps'], secondary:['shoulders','core'],
    desc:'One bell, one arm pressing from the floor — the uneven load forces your core to resist rotation the entire set. Your chest and tricep do the pressing while your obliques do the stabilizing.' },
  { id:'kb_push_up', name:'KB Push-Up', category:'press', equipment:'kettlebell', difficulty:'beginner',
    primary:['chest','triceps'], secondary:['shoulders','core'],
    desc:'Hands on the kettlebell handles raises you slightly off the floor for added range of motion. The rounded handles also recruit more shoulder stabilizer activation than flat-hand push-ups.' },
  { id:'kb_chest_fly', name:'KB Chest Fly', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['chest'], secondary:['shoulders'],
    desc:'Lie flat and arc the bells from overhead down to shoulder level with a slight elbow bend. Your pecs are under a full stretch at the bottom — the same reason bodybuilders love cables for this movement.' },
  { id:'kb_close_grip_press', name:'Close-Grip Floor Press', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['triceps','chest'], secondary:['shoulders'],
    desc:'Press two bells with hands close together and elbows tucked — your triceps handle more of the load than a wide-grip press. Clean movement for building pressing strength without stressing the shoulders.' },

  // Shoulders (additional)
  { id:'kb_lateral_raise', name:'Lateral Raise', category:'press', equipment:'kettlebell', difficulty:'beginner',
    primary:['shoulders'], secondary:['traps'],
    desc:'Arms slightly bent, raise the bells out to shoulder height and lower with control. Your medial deltoid drives the movement — the tempo on the descent is where the real work happens.' },
  { id:'kb_front_raise', name:'Front Raise', category:'press', equipment:'kettlebell', difficulty:'beginner',
    primary:['shoulders'], secondary:['chest','core'],
    desc:'Raise the bell straight in front of you to shoulder height and lower with control. Your anterior deltoid is the engine here — it\'s a smaller muscle and will remind you of that fact around rep 10.' },
  { id:'kb_arnold_press', name:'Arnold Press', category:'press', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','triceps'], secondary:['chest','core'],
    desc:'Start with bells in front of your shoulders palms facing you, then rotate palms outward as you press overhead. The rotation recruits the front and medial deltoid before the standard press portion even begins.' },
  { id:'kb_shrug', name:'KB Shrug', category:'pull', equipment:'kettlebell', difficulty:'beginner',
    primary:['traps'], secondary:['shoulders','forearms'],
    desc:'Bells at your sides, elevate your shoulders straight up toward your ears then lower slowly. The traps run from your neck to your mid-spine and this is the most direct way to load them.' },
  { id:'kb_reverse_fly', name:'Bent-Over Reverse Fly', category:'pull', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','traps'], secondary:['lats','core'],
    desc:'Hinged forward with bells hanging, raise both arms out to your sides until they reach shoulder height. Your rear deltoids and lower traps are the target — the muscles most people never train and everyone can tell they don\'t.' },

  // Back (additional)
  { id:'kb_renegade_row', name:'Renegade Row', category:'pull', equipment:'kettlebell', difficulty:'advanced',
    primary:['lats','core'], secondary:['biceps','forearms','shoulders'],
    desc:'Push-up position with a bell under each hand, row one while the other keeps you planted. Your core fights rotation with every pull — think of it as a plank that also rows.' },
  { id:'kb_bent_row', name:'KB Bent-Over Row', category:'pull', equipment:'kettlebell', difficulty:'beginner',
    primary:['lats','traps'], secondary:['biceps','forearms','lower_back'],
    desc:'Hinge forward, bells hanging, and row both to your hips simultaneously. A bilateral row that loads the lats and middle traps hard — keeping your back flat throughout is 80% of the exercise.' },

  // Core / Abs (additional)
  { id:'kb_sit_up', name:'KB Sit-Up', category:'core', equipment:'kettlebell', difficulty:'beginner',
    primary:['abs'], secondary:['hip_flexors'],
    desc:'Hold the bell at your chest or extend it overhead as you sit up from flat. The added load shifts your balance point and recruits the abs differently than bodyweight alone.' },
  { id:'kb_side_bend', name:'KB Side Bend', category:'core', equipment:'kettlebell', difficulty:'beginner',
    primary:['obliques'], secondary:['core'],
    desc:'Bell in one hand at your side, hinge laterally toward it then return. Your obliques on the opposite side are the active movers — and one side always works harder, so choose load accordingly.' },
  { id:'kb_plank_pull', name:'Plank Pull-Through', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['core','obliques'], secondary:['shoulders','lats'],
    desc:'In a plank, reach under your body to drag the bell from one side to the other. Your core and obliques resist the rotation caused by each pull while your shoulders hold the plank — anti-rotation training with arms.' },
  { id:'kb_woodchop', name:'KB Woodchop', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['obliques','core'], secondary:['shoulders','glutes'],
    desc:'A diagonal movement from one hip up to the opposite shoulder, mimicking a chopping arc. Your obliques generate the rotation; your shoulders and glutes add power at the endpoints.' },
  { id:'kb_leg_raise', name:'KB Leg Raise', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['abs','hip_flexors'], secondary:['core'],
    desc:'Lying on your back with the bell above your chest for counterbalance, raise your straight legs to vertical and lower with control. Your abs must resist the pull of your legs through the entire descent.' },
  { id:'kb_v_up', name:'KB V-Up', category:'core', equipment:'kettlebell', difficulty:'advanced',
    primary:['abs','hip_flexors'], secondary:['core'],
    desc:'Lie flat then simultaneously raise your straight legs and your arms holding the bell toward each other, meeting in the middle. Both hip flexors and abs contract maximally with no rest at the bottom.' },
  { id:'kb_plank_drag', name:'Plank Drag', category:'core', equipment:'kettlebell', difficulty:'intermediate',
    primary:['core','obliques'], secondary:['shoulders'],
    desc:'In a high plank, drag the bell across the floor from one side to the other, reaching under your body with the opposite arm. A slow, deliberate anti-rotation challenge with a taxing reach component.' },
  { id:'kb_crunch', name:'KB Crunch', category:'core', equipment:'kettlebell', difficulty:'beginner',
    primary:['abs'], secondary:['core'],
    desc:'Hold the bell at your chest and perform a classic crunch — upper back off the floor, lower back stays down. The added load creates resistance at the top where bodyweight crunches typically go slack.' },

  // Cardio / Conditioning
  { id:'kb_swing_high', name:'KB Swing (High Rep)', category:'cardio', equipment:'kettlebell', difficulty:'beginner',
    primary:['glutes','hamstrings'], secondary:['core','shoulders','forearms'],
    desc:'Everything you know from the regular swing, done for long sets that turn your posterior chain into a furnace. High-rep swings are conditioning as much as strength — your heart rate will confirm this.' },
  { id:'kb_burpee', name:'KB Burpee', category:'cardio', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','chest','core'], secondary:['shoulders','triceps','glutes'],
    desc:'A standard burpee but you land with hands on the kettlebell handles and add a push-up at the bottom. Six movements per rep — squat, jump back, push-up, jump forward, clean, jump up — no mercy.' },
  { id:'kb_man_maker', name:'Man Maker', category:'cardio', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','chest','quads'], secondary:['core','triceps','lats'],
    desc:'Row, row, push-up, clean, thruster — all in one continuous rep with no rest between movements. Named appropriately; leaves absolutely nothing on the table.' },
  { id:'kb_long_cycle', name:'Long Cycle', category:'cardio', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','hamstrings','glutes'], secondary:['core','triceps','quads'],
    desc:'Clean and jerk in continuous competition-style reps for time or volume. The benchmark of kettlebell sport endurance — you\'re performing two ballistic movements back-to-back without setting the bell down.' },
  { id:'kb_half_snatch', name:'Half Snatch', category:'cardio', equipment:'kettlebell', difficulty:'intermediate',
    primary:['shoulders','hamstrings'], secondary:['glutes','core','forearms'],
    desc:'Like a full snatch but the bell is lowered back to the rack position instead of swinging down. More shoulder work than the full snatch, less technique — a solid bridge between the clean and the full snatch.' },
  { id:'kb_jump_squat', name:'KB Jump Squat', category:'cardio', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes','calves'], secondary:['core','hamstrings'],
    desc:'Hold the bell at your chest, squat to parallel, then explode off the floor. Your quads and calves generate the power; the landing absorbs through your whole lower chain; and your lungs log the overtime.' },

  // Full Body / Complexes (additional)
  { id:'kb_clean_jerk', name:'Clean & Jerk', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','hamstrings','glutes'], secondary:['core','triceps','quads'],
    desc:'Clean the bell to the rack then drive it overhead with a leg dip and aggressive lockout. The complete expression of lower-body power transferred to overhead strength — the gold standard in kettlebell sport.' },
  { id:'kb_jerk', name:'KB Jerk', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','triceps'], secondary:['core','quads','glutes'],
    desc:'Start from the rack and use two leg dips to drive the bell overhead with maximum efficiency. The timing of the double dip is everything — your legs generate the power so your shoulder barely has to press.' },
  { id:'kb_bent_press', name:'Bent Press', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['shoulders','obliques'], secondary:['triceps','lats','core'],
    desc:'Hold the bell overhead and corkscrew your torso sideways until you\'re nearly horizontal, then stand back up. Your obliques, lat, and shoulder work a long diagonal that you simply won\'t feel anywhere else.' },
  { id:'kb_double_clean', name:'Double Clean', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['hamstrings','glutes','forearms'], secondary:['core','biceps','traps'],
    desc:'Two bells simultaneously cleaned to the rack position — twice the grip demand, twice the hip snap, twice the coordination challenge. Your forearms develop an opinion immediately.' },
  { id:'kb_tactical_lunge', name:'Tactical Lunge', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes'], secondary:['hamstrings','core','shoulders'],
    desc:'A lunge combined with a kettlebell pass — the bell passes between your legs as you step through. Requires timing, core control, and lower-body strength simultaneously, with a grip penalty for losing the rhythm.' },
  { id:'kb_deck_squat', name:'Deck Squat', category:'complex', equipment:'kettlebell', difficulty:'advanced',
    primary:['quads','glutes','core'], secondary:['hamstrings','hip_flexors'],
    desc:'Squat all the way down until you roll back onto your spine, then use momentum and leg drive to roll back up to standing. Your quads fire maximally from a full squat-to-stand and your core controls every inch of the roll.' },
  { id:'kb_squat_press', name:'Squat to Press', category:'complex', equipment:'kettlebell', difficulty:'intermediate',
    primary:['quads','glutes','shoulders'], secondary:['core','triceps'],
    desc:'Squat down with the bell at your shoulder, then drive upward and let your leg power flow directly into a shoulder press overhead. The full kinetic chain from feet to fist in one smooth transition.' },

  // Slam Ball
  { id:'sb_overhead_slam', name:'Overhead Slam', category:'cardio', equipment:'slam_ball', difficulty:'beginner',
    primary:['shoulders','core'], secondary:['lats','quads','glutes'],
    desc:'Raise the ball overhead then throw it at the floor as hard as possible. Your shoulders and core load on the way up; the entire front-to-back chain explodes on the way down — pure power with a very satisfying impact.' },
  { id:'sb_rotational_slam', name:'Rotational Slam', category:'cardio', equipment:'slam_ball', difficulty:'intermediate',
    primary:['obliques','core'], secondary:['shoulders','glutes'],
    desc:'Rotate to one side to load, then drive the ball into the floor with a full-body rotational throw. Your obliques and core generate the force; your shoulders execute the slam; the ground receives all of it.' },
  { id:'sb_squat_slam', name:'Squat to Slam', category:'complex', equipment:'slam_ball', difficulty:'intermediate',
    primary:['quads','glutes','shoulders'], secondary:['core','hamstrings'],
    desc:'Squat down with the ball, then explode up and slam it overhead into the floor in one continuous sequence. Combines the power of a hip drive with the aggression of an overhead throw — legs and upper body seamlessly linked.' },
  { id:'sb_wall_ball', name:'Wall Ball', category:'cardio', equipment:'slam_ball', difficulty:'beginner',
    primary:['quads','shoulders'], secondary:['glutes','core','calves'],
    desc:'Squat down with the ball, then drive up and throw it to a target on the wall — catch and repeat without pause. Your legs load the throw, your shoulders release it, and the cycle keeps your heart rate elevated the entire set.' },
  { id:'sb_russian_twist', name:'SB Russian Twist', category:'core', equipment:'slam_ball', difficulty:'beginner',
    primary:['obliques','abs'], secondary:['hip_flexors','core'],
    desc:'The density of a slam ball makes each rotation meaningfully heavier than a bodyweight twist. Obliques and abs drive the rotation while your hip flexors stabilize — harder than it looks, which is the whole point.' },

  // Medicine Ball
  { id:'mb_russian_twist', name:'MB Russian Twist', category:'core', equipment:'medicine_ball', difficulty:'beginner',
    primary:['obliques','abs'], secondary:['hip_flexors'],
    desc:'Sit with feet elevated, ball at your chest, and rotate side to side through your full range. The density of a medicine ball lets you hold the load away from your body, increasing the lever arm and the demand on your obliques.' },
  { id:'mb_woodchop', name:'MB Wood Chop', category:'core', equipment:'medicine_ball', difficulty:'intermediate',
    primary:['obliques','core'], secondary:['shoulders','glutes'],
    desc:'Drive the ball diagonally from hip level to the opposite shoulder in a chopping arc. Obliques generate the rotation; shoulders deliver the ball — more controlled than a slam ball but more dynamic than a dumbbell.' },
  { id:'mb_chest_pass', name:'MB Chest Pass', category:'press', equipment:'medicine_ball', difficulty:'beginner',
    primary:['chest','triceps'], secondary:['shoulders','core'],
    desc:'Explosively pass the ball from your chest from a standing or kneeling position. Your pecs, triceps, and shoulders generate the throw — a ballistic pressing movement that trains power you can\'t get from a slow bench press.' },
  { id:'mb_squat', name:'MB Squat', category:'squat', equipment:'medicine_ball', difficulty:'beginner',
    primary:['quads','glutes'], secondary:['core','hamstrings'],
    desc:'Hold the ball at chest height and squat to parallel. The front load keeps your torso upright and your quads honest — great for teaching squat mechanics and an effective weighted variation in its own right.' },
  { id:'mb_crunch', name:'MB Crunch', category:'core', equipment:'medicine_ball', difficulty:'beginner',
    primary:['abs'], secondary:['core','hip_flexors'],
    desc:'Hold the ball overhead or at your chest as you crunch up. The weight shifts the moment arm and increases the load on your upper abs throughout the movement — more honest than a bodyweight crunch by a fair margin.' },
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


const GEAR_ICONS = {
  kettlebell: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="22" r="8"/><path d="M11 16 L11 12 Q11 8 16 8 Q21 8 21 12 L21 16"/></svg>`,
  mat: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="5" cy="13" r="3"/><line x1="8" y1="14" x2="28" y2="14"/><line x1="11" y1="14" x2="11" y2="22"/><line x1="16" y1="14" x2="16" y2="22"/><line x1="28" y1="14" x2="28" y2="22"/><rect x="3" y="22" width="26" height="3" rx="1.5"/></svg>`,
  slam_ball: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="19" cy="19" r="11"/><line x1="3" y1="2" x2="8" y2="7"/><line x1="1" y1="7" x2="7" y2="13"/><line x1="1" y1="12" x2="6" y2="17"/></svg>`,
  medicine_ball: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="16" cy="16" r="12"/><path d="M10 6 Q16 14 22 6"/><path d="M10 26 Q16 18 22 26"/></svg>`,
};

const WEEKLY_WORKOUTS = [
  { name:'Full Body Blitz', focus:'Full Body', duration:20,
    exercises:[{id:'kb_swing',sets:3,reps:'12'},{id:'kb_goblet',sets:3,reps:'10'},{id:'kb_press',sets:3,reps:'8'},{id:'kb_row',sets:3,reps:'10'},{id:'mat_plank',sets:3,reps:'30s'}] },
  { name:'Posterior Power', focus:'Posterior Chain', duration:20,
    exercises:[{id:'kb_deadlift',sets:4,reps:'8'},{id:'kb_swing',sets:3,reps:'15'},{id:'kb_bent_row',sets:3,reps:'10'},{id:'mat_glute_bridge',sets:3,reps:'15'},{id:'kb_farmer',sets:3,reps:'40s'}] },
  { name:'Upper Body Strength', focus:'Upper Body', duration:25,
    exercises:[{id:'kb_press',sets:4,reps:'8'},{id:'kb_row',sets:4,reps:'10'},{id:'kb_floor_press',sets:3,reps:'10'},{id:'kb_bicep_curl',sets:3,reps:'12'},{id:'kb_tricep_ext',sets:3,reps:'12'},{id:'kb_shrug',sets:3,reps:'15'}] },
  { name:'Leg Day', focus:'Lower Body', duration:25,
    exercises:[{id:'kb_goblet',sets:4,reps:'12'},{id:'kb_deadlift',sets:3,reps:'10'},{id:'kb_lunge',sets:3,reps:'10'},{id:'kb_split_squat',sets:3,reps:'10'},{id:'mat_glute_bridge',sets:3,reps:'15'},{id:'kb_calf_raise',sets:3,reps:'20'}] },
  { name:'Core Crusher', focus:'Core', duration:20,
    exercises:[{id:'kb_turkish',sets:2,reps:'3'},{id:'mat_plank',sets:3,reps:'45s'},{id:'kb_russian_twist',sets:3,reps:'20'},{id:'kb_woodchop',sets:3,reps:'10'},{id:'kb_windmill',sets:3,reps:'8'}] },
  { name:'Conditioning Circuit', focus:'Conditioning', duration:20,
    exercises:[{id:'kb_swing',sets:4,reps:'20'},{id:'kb_goblet',sets:3,reps:'15'},{id:'kb_clean',sets:3,reps:'8'},{id:'kb_thruster',sets:3,reps:'8'},{id:'kb_burpee',sets:3,reps:'10'}] },
  { name:'Strength & Flow', focus:'Full Body', duration:30,
    exercises:[{id:'kb_clean_press',sets:3,reps:'6'},{id:'kb_deadlift',sets:4,reps:'6'},{id:'kb_gorilla_row',sets:3,reps:'10'},{id:'kb_goblet',sets:3,reps:'10'},{id:'kb_swing',sets:3,reps:'15'},{id:'mat_bird_dog',sets:3,reps:'10'}] },
  { name:'Carry & Stabilize', focus:'Carries & Core', duration:20,
    exercises:[{id:'kb_farmer',sets:3,reps:'40s'},{id:'kb_rack_carry',sets:3,reps:'30s'},{id:'kb_overhead_carry',sets:3,reps:'20s'},{id:'kb_suitcase',sets:3,reps:'30s'},{id:'mat_plank',sets:3,reps:'45s'}] },
  { name:'Swing & Snatch', focus:'Posterior Chain', duration:25,
    exercises:[{id:'kb_swing',sets:4,reps:'15'},{id:'kb_swing_1h',sets:3,reps:'10'},{id:'kb_snatch',sets:3,reps:'5'},{id:'kb_deadlift',sets:3,reps:'8'},{id:'mat_glute_bridge',sets:3,reps:'15'}] },
  { name:'Press & Pull', focus:'Upper Body', duration:25,
    exercises:[{id:'kb_press',sets:4,reps:'8'},{id:'kb_renegade_row',sets:3,reps:'8'},{id:'kb_push_press',sets:3,reps:'8'},{id:'kb_high_pull',sets:3,reps:'10'},{id:'kb_tricep_ext',sets:3,reps:'12'}] },
  { name:'Hip Hinge Focus', focus:'Posterior Chain', duration:20,
    exercises:[{id:'kb_deadlift',sets:4,reps:'8'},{id:'kb_single_dl',sets:3,reps:'8'},{id:'kb_swing',sets:3,reps:'15'},{id:'kb_gorilla_row',sets:3,reps:'10'},{id:'mat_superman',sets:3,reps:'10'}] },
  { name:'Squat Variations', focus:'Lower Body', duration:25,
    exercises:[{id:'kb_goblet',sets:4,reps:'12'},{id:'kb_front_squat',sets:3,reps:'8'},{id:'kb_split_squat',sets:3,reps:'10'},{id:'kb_bulgarian_split',sets:3,reps:'8'},{id:'kb_cossack',sets:2,reps:'8'}] },
];

// ==================== APP STATE ====================
let currentWorkout = []; // [{exercise, sets, reps, weight}]
let selectedFocus = new Set(['full']);
let selectedDuration = 20;
let buildMode = 'quick';
let circuitMode = false;
let logFilter = 'all';
let diagramFilter = 'current';
let heatmapDays = 7;
let selectedEquipment = new Set(['kettlebell', 'mat']); // gear shelf state for Generate
let equipmentFilter = 'all'; // equipment chip filter for Manual Build

// Timer state
let timerInterval = null;
let timerSeconds = 0;
let timerPaused = false;
let logDuration = 0;
let timerCurrentEx = 0;
let timerExAllotments = [];
let timerExStartSec = 0;

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
  const s = getSettings();
  const diff = s.difficulty || 'intermediate';
  const allowed = diff === 'beginner' ? ['beginner']
    : diff === 'intermediate' ? ['beginner','intermediate']
    : ['beginner','intermediate','advanced'];
  const extraEq = s.extraEquipment || [];
  return EXERCISES.filter(ex => {
    if (!allowed.includes(ex.difficulty)) return false;
    if (ex.equipment === 'slam_ball' && !extraEq.includes('slam_ball')) return false;
    if (ex.equipment === 'medicine_ball' && !extraEq.includes('medicine_ball')) return false;
    return true;
  });
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
  initGearShelf();
  renderEquipChips();
}

function kettlebellPath(cx, cy, r) {
  const a = 52 * Math.PI / 180;
  const lx = cx - r * Math.sin(a);
  const ly = cy - r * Math.cos(a);
  const rx = cx + r * Math.sin(a);
  const handleH = r * 0.5;
  const cornerR = Math.min(r * 0.13, 9);
  const topY = ly - handleH;
  return [
    `M ${lx.toFixed(1)} ${ly.toFixed(1)}`,
    `L ${lx.toFixed(1)} ${(topY + cornerR).toFixed(1)}`,
    `Q ${lx.toFixed(1)} ${topY.toFixed(1)} ${(lx + cornerR).toFixed(1)} ${topY.toFixed(1)}`,
    `L ${(rx - cornerR).toFixed(1)} ${topY.toFixed(1)}`,
    `Q ${rx.toFixed(1)} ${topY.toFixed(1)} ${rx.toFixed(1)} ${(topY + cornerR).toFixed(1)}`,
    `L ${rx.toFixed(1)} ${ly.toFixed(1)}`,
    `A ${r} ${r} 0 1 1 ${lx.toFixed(1)} ${ly.toFixed(1)}`,
    'Z'
  ].join(' ');
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

    labels += `<text x="${cx}" y="${labelY}" text-anchor="middle" fill="${textColor}" font-size="${fontSize}" font-weight="${fontWeight}" style="cursor:pointer" onclick="toggleOwnedWeight(${w})">${formatWt(w)}</text>`;
  });

  const svg = `<svg class="kb-nest-svg" viewBox="0 0 ${svgW} ${svgH}" width="100%" style="max-width:260px;margin:0 auto;display:block">${shapes}${labels}</svg>`;
  document.getElementById('owned-weights').innerHTML = svg;

  // Preferred weight chips
  document.getElementById('preferred-weight').innerHTML = owned.map(w =>
    `<div class="weight-chip ${preferred === w ? 'preferred' : ''}" onclick="setPreferredWeight(${w})">${formatWt(w)}</div>`
  ).join('');

  // Extra equipment toggles
  const extraEq = s.extraEquipment || [];
  const extraEquipEl = document.getElementById('extra-equipment-toggles');
  if (extraEquipEl) {
    const sbCount = EXERCISES.filter(e => e.equipment === 'slam_ball').length;
    const mbCount = EXERCISES.filter(e => e.equipment === 'medicine_ball').length;
    extraEquipEl.innerHTML = [
      { id:'slam_ball', name:'Slam Ball', count:sbCount },
      { id:'medicine_ball', name:'Medicine Ball', count:mbCount }
    ].map(eq => {
      const active = extraEq.includes(eq.id);
      return `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--surface2);border-radius:8px;border:1px solid ${active ? 'var(--accent)' : 'var(--border)'};margin-bottom:6px">
        <div>
          <div style="font-size:13px;font-weight:600;color:${active ? 'var(--accent)' : 'var(--text)'}">${eq.name}</div>
          <div style="font-size:11px;color:var(--text2)">${eq.count} exercises</div>
        </div>
        <div class="eq-toggle${active ? ' active' : ''}" onclick="toggleExtraEquipment('${eq.id}')">${active ? 'On' : 'Off'}</div>
      </div>`;
    }).join('');
  }
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

function toggleExtraEquipment(eq) {
  const s = getSettings();
  const extra = s.extraEquipment || [];
  const idx = extra.indexOf(eq);
  if (idx >= 0) extra.splice(idx, 1); else extra.push(eq);
  s.extraEquipment = extra;
  saveSettingsToStorage(s);
  renderSettingsChips();
  renderEquipChips();
  if (buildMode === 'manual') renderExerciseList();
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
  timerExStartSec = 0;

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

  const fsLabel = document.getElementById('fs-label');
  const fsDescPanel = document.getElementById('fs-desc-panel');
  const fsSwipeHint = document.querySelector('.fs-swipe-hint');
  if (circuitMode) {
    // Circuit mode: hide desc panel and swipe hint
    if (fsDescPanel) fsDescPanel.style.visibility = 'hidden';
    if (fsSwipeHint) fsSwipeHint.style.display = 'none';
    fsLabel.innerHTML = '&#x21bb; Circuit Mode';
    fsLabel.classList.add('fs-label-circuit');
    const numRounds = parseInt(currentWorkout[0].sets) || 3;
    document.getElementById('fs-exercise-name').textContent = getCircuitRoundLabel(timerCurrentEx);

    const allotSec = timerExAllotments[timerCurrentEx] || 0;
    const allotMin = Math.floor(allotSec / 60);
    const allotS = allotSec % 60;

    let listHtml = `<div class="fs-circuit-list">`;
    currentWorkout.forEach(item => {
      const repsLabel = item.reps;
      const wtLabel = item.weight === 'BW' ? '' : ` — ${item.weight}`;
      listHtml += `<div><span class="ex-name">${item.exercise.name}</span> <span class="ex-detail">${repsLabel} reps${wtLabel}</span></div>`;
    });
    listHtml += `</div>`;
    document.getElementById('fs-exercise-detail').innerHTML = listHtml;
    const elapsedInRound = timerSeconds - timerExStartSec;
    const remaining = Math.max(0, allotSec - elapsedInRound);
    const remMin = Math.floor(remaining / 60);
    const remS = remaining % 60;
    document.getElementById('fs-exercise-allotment').textContent =
      `${String(remMin).padStart(2,'0')}:${String(remS).padStart(2,'0')} remaining`;

    // Up Next
    const upnextEl = document.getElementById('fs-upnext');
    if (timerCurrentEx < numRounds - 1) {
      upnextEl.innerHTML = `Up Next: <strong>${getCircuitRoundLabel(timerCurrentEx + 1)}</strong>`;
    } else {
      upnextEl.innerHTML = `<strong>Last set!</strong>`;
    }
  } else {
    // Standard mode
    if (fsDescPanel) fsDescPanel.style.visibility = '';
    if (fsSwipeHint) fsSwipeHint.style.display = '';
    fsLabel.textContent = 'Workout Timer';
    fsLabel.classList.remove('fs-label-circuit');
    if (currentWorkout[timerCurrentEx]) {
      const item = currentWorkout[timerCurrentEx];
      document.getElementById('fs-desc-name').textContent = item.exercise.name;
      document.getElementById('fs-desc-text').textContent = item.exercise.desc || '';
      document.getElementById('fs-exercise-name').textContent = item.exercise.name;
      const wtLabel = item.weight === 'BW' ? '' : `  —  ${item.weight}`;
      document.getElementById('fs-exercise-detail').textContent =
        `${item.sets} sets x ${item.reps} reps${wtLabel}`;
      const elapsedInEx = timerSeconds - timerExStartSec;
      const remaining = Math.max(0, timerExAllotments[timerCurrentEx] - elapsedInEx);
      const remMin = Math.floor(remaining / 60);
      const remSec = remaining % 60;
      document.getElementById('fs-exercise-allotment').textContent =
        `${String(remMin).padStart(2,'0')}:${String(remSec).padStart(2,'0')} remaining`;
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
  if (timerCurrentEx < max) {
    timerCurrentEx++; timerExStartSec = timerSeconds;
    document.getElementById('timer-fullscreen').classList.remove('illust-expanded');
    renderTimerProgress(); updateTimerDisplay();
  }
}
function timerPrevExercise() {
  if (timerCurrentEx > 0) {
    timerCurrentEx--; timerExStartSec = timerSeconds;
    document.getElementById('timer-fullscreen').classList.remove('illust-expanded');
    renderTimerProgress(); updateTimerDisplay();
  }
}

// Tap/swipe gestures during workout
(function() {
  let startX = 0, startY = 0;
  document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  document.addEventListener('touchend', e => {
    const overlay = document.getElementById('timer-fullscreen');
    if (!overlay.classList.contains('show')) return;
    const dx = startX - e.changedTouches[0].clientX;
    const dy = startY - e.changedTouches[0].clientY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 20) {
      // Tap: toggle desc panel (ignore taps on buttons)
      if (!circuitMode && !e.target.closest('button')) {
        e.preventDefault();
        overlay.classList.toggle('illust-expanded');
      }
    } else if (Math.abs(dx) > Math.abs(dy) && dx > 50) {
      // Swipe left: next exercise
      timerNextExercise();
    }
  });
})();

function stopWorkoutTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  logDuration = timerSeconds;
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
  // Tab is always enabled — log-based filters work without a current workout
  btn.classList.remove('disabled');
  if (viewBtn) viewBtn.style.display = currentWorkout.length > 0 ? '' : 'none';
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
  if (mode === 'manual') { renderEquipChips(); renderExerciseList(); }
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

  // Score exercises by relevance, filtered to selected equipment
  let scored = getAvailableExercises().filter(ex => selectedEquipment.has(ex.equipment)).map(ex => {
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
    return { exercise: ex, sets, reps, weight: ['mat','slam_ball','medicine_ball'].includes(ex.equipment) ? 'BW' : wtLabel };
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
    if (equipmentFilter !== 'all' && ex.equipment !== equipmentFilter) return false;
    if (cat !== 'all' && ex.category !== cat) return false;
    if (search && !ex.name.toLowerCase().includes(search)) return false;
    return true;
  });
  const diffOrder = {beginner:0, intermediate:1, advanced:2};
  if (sort === 'alpha') filtered.sort((a,b) => a.name.localeCompare(b.name));
  else if (sort === 'difficulty') filtered.sort((a,b) => diffOrder[a.difficulty] - diffOrder[b.difficulty] || a.name.localeCompare(b.name));
  else if (sort === 'equipment') filtered.sort((a,b) => a.equipment.localeCompare(b.equipment) || a.name.localeCompare(b.name));
  const savedExIds = new Set(getSavedWorkouts().flatMap(w => w.exercises.map(e => e.id)));
  const eqBadge = { kettlebell:'badge-kb', mat:'badge-mat', slam_ball:'badge-sb', medicine_ball:'badge-mb' };
  const eqLabel = { kettlebell:'KB', mat:'Mat', slam_ball:'SB', medicine_ball:'MB' };

  const el = document.getElementById('exercise-list');
  el.innerHTML = filtered.map(ex => `
    <div class="exercise-item" onclick="addExercise('${ex.id}')">
      <div class="exercise-info">
        <div class="exercise-name">${savedExIds.has(ex.id) ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" stroke-width="2" style="vertical-align:-1px;margin-right:3px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' : ''}${ex.name}</div>
        <div class="exercise-muscles">
          <span class="badge ${eqBadge[ex.equipment]||'badge-mat'}" style="margin-right:4px">${eqLabel[ex.equipment]||ex.equipment}</span>
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
    weight: ['mat','slam_ball','medicine_ball'].includes(ex.equipment) ? 'BW' : wtLabel
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
function setDiagramFilter(filter) {
  diagramFilter = filter;
  document.querySelectorAll('.diagram-pill').forEach(p =>
    p.classList.toggle('active', p.dataset.filter === filter));
  updateDiagram();
}

function updateDiagram() {
  document.querySelectorAll('.muscle').forEach(m =>
    m.classList.remove('active-primary','active-secondary'));

  const summaryCard = document.getElementById('diagram-workout-summary');
  let exercises = []; // { primary:[], secondary:[] }
  let summaryHtml = '';

  if (diagramFilter === 'current') {
    if (currentWorkout.length === 0) {
      summaryCard.style.display = 'none';
      document.getElementById('muscle-legend').innerHTML = '';
      document.getElementById('diagram-summary-list').innerHTML = '';
      return;
    }
    exercises = currentWorkout.map(item => item.exercise);
    summaryHtml = currentWorkout.map(item =>
      `<div style="display:flex;justify-content:space-between;padding:3px 0;font-size:13px;"><span style="font-weight:600">${item.exercise.name}</span><span style="color:var(--text2)">${item.sets}×${item.reps}</span></div>`
    ).join('');
    summaryCard.style.display = 'block';
  } else {
    const logs = filterLogsByKey(getWorkoutLogs(), diagramFilter);
    if (logs.length === 0) {
      summaryCard.style.display = 'none';
      document.getElementById('muscle-legend').innerHTML = '';
      return;
    }
    exercises = logs.flatMap(log => log.exercises);
    const labels = { all:'all time', week:'this week', month:'this month', starred:'starred workouts' };
    summaryHtml = `<div style="font-size:12px;color:var(--text2)">${logs.length} workout${logs.length !== 1 ? 's' : ''} — ${labels[diagramFilter]}</div>`;
    summaryCard.style.display = 'block';
  }

  document.getElementById('diagram-summary-list').innerHTML = summaryHtml;

  // Aggregate muscles
  const primaryMuscles = new Set();
  const secondaryMuscles = new Set();
  exercises.forEach(ex => {
    (ex.primary || []).forEach(m => primaryMuscles.add(m));
    (ex.secondary || []).forEach(m => { if (!primaryMuscles.has(m)) secondaryMuscles.add(m); });
  });

  primaryMuscles.forEach(m =>
    (MUSCLE_TO_SVG[m]||[]).forEach(id => { const el = document.getElementById(id); if (el) el.classList.add('active-primary'); }));
  secondaryMuscles.forEach(m =>
    (MUSCLE_TO_SVG[m]||[]).forEach(id => { const el = document.getElementById(id); if (el && !el.classList.contains('active-primary')) el.classList.add('active-secondary'); }));

  const legend = document.getElementById('muscle-legend');
  let html = '';
  primaryMuscles.forEach(m => { html += `<div class="legend-item"><div class="legend-dot" style="background:var(--primary-muscle)"></div>${MUSCLE_NAMES[m]}</div>`; });
  secondaryMuscles.forEach(m => { html += `<div class="legend-item"><div class="legend-dot" style="background:var(--secondary-muscle)"></div>${MUSCLE_NAMES[m]}</div>`; });
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
  const durMin = Math.floor(logDuration / 60);
  const durSec = logDuration % 60;
  const durLabel = logDuration > 0
    ? `<div style="font-size:12px;color:var(--text2);margin-bottom:8px">Duration: <strong style="color:var(--text)">${durMin}:${String(durSec).padStart(2,'0')}</strong></div>`
    : '';
  summary.innerHTML = durLabel + '<label>Exercises</label>' + currentWorkout.map(item =>
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

  const log = { id: Date.now().toString(36), date, notes, starred: logStarred, duration: logDuration || null, exercises: exerciseData, savedId: loadedSavedId || null };
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
function filterLogsByKey(logs, key) {
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  if (key === 'starred') return logs.filter(l => l.starred);
  if (key === 'week') {
    const weekStart = new Date(today); weekStart.setDate(today.getDate() - today.getDay());
    return logs.filter(l => l.date >= weekStart.toISOString().slice(0, 10) && l.date <= todayStr);
  }
  if (key === 'month') {
    const monthStr = todayStr.slice(0, 7);
    return logs.filter(l => l.date.slice(0, 7) === monthStr);
  }
  return logs;
}

function filterLogsByPill(logs) { return filterLogsByKey(logs, logFilter); }

function setLogFilter(filter) {
  logFilter = filter;
  document.querySelectorAll('.log-pill').forEach(p => p.classList.toggle('active', p.dataset.filter === filter));
  renderLog();
}

function renderLog() {
  const logs = getWorkoutLogs();
  const list = document.getElementById('log-list');
  const empty = document.getElementById('log-empty');
  if (logs.length === 0) { list.innerHTML = ''; empty.style.display = 'block'; return; }

  const filtered = filterLogsByPill(logs);
  const emptyMessages = { week:'No workouts this week', month:'No workouts this month', starred:'No starred workouts', all:'' };
  if (filtered.length === 0) { list.innerHTML = `<div class="empty-state"><p>${emptyMessages[logFilter] || 'No workouts'}</p></div>`; empty.style.display = 'none'; return; }
  empty.style.display = 'none';

  list.innerHTML = filtered.map(log => {
    const totalSets = log.exercises.reduce((s,e) => s + (parseInt(e.sets)||0), 0);
    const durStr = log.duration > 0
      ? (() => { const m = Math.floor(log.duration/60), s = log.duration%60; return `${m}:${String(s).padStart(2,'0')}`; })()
      : null;
    return `
    <div class="log-entry">
      <div class="log-date">${log.starred?'<svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" stroke-width="2" style="vertical-align:-1px;margin-right:4px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>':''}${formatDate(log.date)}</div>
      <div class="log-exercises">${log.exercises.map(e => e.name).join(', ')}</div>
      <div class="log-stats">
        <span>${log.exercises.length} exercises</span>
        <span>${totalSets} total sets</span>
        ${durStr ? `<span>&#9201; ${durStr}</span>` : ''}
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

// ==================== GEAR SHELF (Generate) ====================
function initGearShelf() {
  const s = getSettings();
  const extraEq = s.extraEquipment || [];
  const saved = (s.lastEquipment || ['kettlebell', 'mat']).filter(eq =>
    eq === 'kettlebell' || eq === 'mat' ||
    (eq === 'slam_ball' && extraEq.includes('slam_ball')) ||
    (eq === 'medicine_ball' && extraEq.includes('medicine_ball'))
  );
  selectedEquipment = new Set(saved.length ? saved : ['kettlebell', 'mat']);
  renderGearShelf();
}

function renderGearShelf() {
  const el = document.getElementById('gear-row');
  if (!el) return;
  const s = getSettings();
  const extraEq = s.extraEquipment || [];
  const items = [
    { id:'kettlebell', label:'Kettlebell' },
    { id:'mat', label:'Mat / BW' },
    ...(extraEq.includes('slam_ball') ? [{ id:'slam_ball', label:'Slam Ball' }] : []),
    ...(extraEq.includes('medicine_ball') ? [{ id:'medicine_ball', label:'Med Ball' }] : []),
  ];
  el.innerHTML = items.map(item => `
    <div class="gear-item${selectedEquipment.has(item.id) ? ' active' : ''}" data-eq="${item.id}" onclick="toggleGearEquipment('${item.id}')">
      ${GEAR_ICONS[item.id]}
      <span>${item.label}</span>
    </div>
  `).join('');
}

function toggleGearEquipment(eq) {
  if (selectedEquipment.has(eq)) {
    if (selectedEquipment.size > 1) selectedEquipment.delete(eq);
  } else {
    selectedEquipment.add(eq);
  }
  const s = getSettings();
  s.lastEquipment = [...selectedEquipment];
  saveSettingsToStorage(s);
  document.querySelectorAll('.gear-item').forEach(el => {
    el.classList.toggle('active', selectedEquipment.has(el.dataset.eq));
  });
}

// ==================== EQUIPMENT CHIPS (Manual Build) ====================
function renderEquipChips() {
  const el = document.getElementById('equip-chips');
  if (!el) return;
  const extraEq = (getSettings().extraEquipment || []);
  const chips = [
    { id:'all', label:'All' },
    { id:'kettlebell', label:'KB' },
    { id:'mat', label:'Mat' },
    ...(extraEq.includes('slam_ball') ? [{ id:'slam_ball', label:'SB' }] : []),
    ...(extraEq.includes('medicine_ball') ? [{ id:'medicine_ball', label:'MB' }] : []),
  ];
  el.innerHTML = chips.map(c => `
    <div class="equip-chip${equipmentFilter === c.id ? ' active' : ''}" data-eq="${c.id}" onclick="setEquipmentFilter('${c.id}')">${c.label}</div>
  `).join('');
}

function setEquipmentFilter(eq) {
  equipmentFilter = eq;
  document.querySelectorAll('.equip-chip').forEach(c => c.classList.toggle('active', c.dataset.eq === eq));
  renderExerciseList();
}

// ==================== WORKOUT OF THE WEEK ====================
function getWeeklyWorkout() {
  const now = new Date();
  const weekNum = Math.floor((now - new Date(now.getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000));
  return WEEKLY_WORKOUTS[weekNum % WEEKLY_WORKOUTS.length];
}

function renderWorkoutOfTheWeek() {
  const el = document.getElementById('wotw-card');
  if (!el) return;
  const wotw = getWeeklyWorkout();
  const weekNum = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000)) + 1;
  el.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
      <div style="flex:1;min-width:0">
        <div style="font-size:10px;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;font-weight:700">&#x2728; Week ${weekNum} Pick</div>
        <div style="font-size:15px;font-weight:700">${wotw.name}</div>
        <div style="font-size:12px;color:var(--text2);margin-top:2px">${wotw.focus} &middot; ~${wotw.duration} min &middot; ${wotw.exercises.length} exercises</div>
      </div>
      <button class="btn btn-sm btn-primary" style="flex-shrink:0" onclick="loadWeeklyWorkout()">Load</button>
    </div>
  `;
}

function loadWeeklyWorkout() {
  const wotw = getWeeklyWorkout();
  const s = getSettings();
  const unit = s.unit || 'lb';
  const prefKg = getPreferredWeight();
  const wt = prefKg ? (unit === 'kg' ? prefKg : KG_TO_LB[prefKg]) : null;
  const wtLabel = wt ? (unit === 'kg' ? `${wt} kg` : `${wt} lb`) : '—';
  loadedSavedId = null;
  currentWorkout = wotw.exercises.map(e => {
    const exercise = EXERCISES.find(ex => ex.id === e.id);
    if (!exercise) return null;
    return { exercise, sets:e.sets, reps:e.reps, weight:['mat','slam_ball','medicine_ball'].includes(exercise.equipment) ? 'BW' : wtLabel };
  }).filter(Boolean);
  renderCurrentWorkout();
  const srcEl = document.getElementById('workout-source');
  srcEl.textContent = `${currentWorkout.length} exercises · ${wotw.focus} · ${wotw.duration} min`;
  srcEl.style.display = 'block';
  document.getElementById('quick-settings').style.display = 'none';
  document.getElementById('quick-expand-bar').style.display = 'none';
  document.getElementById('saved-source-bar').style.display = 'none';
  setBuildMode('quick');
  showToast(`Loaded: ${wotw.name}`);
}

// ==================== INIT ====================
updatePrefWeightDisplay();
initGearShelf();
renderEquipChips();
renderExerciseList();
renderLog();
updateMusclesTabState();
renderWorkoutOfTheWeek();
