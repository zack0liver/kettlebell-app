// ==================== DATA LAYER ====================
// Abstracts persistence: localStorage when signed out, Firestore when signed in.

let currentUser = null;
let cachedLogs = null;
let cachedSaved = null;
let cachedSettings = null;
let dataLoaded = false;

// ==================== AUTH STATE ====================
const GATED_TABS = ['saved', 'log', 'insights'];

function isSignedIn() {
  return currentUser !== null;
}

function updateAuthUI() {
  const signInBtn = document.getElementById('auth-signin-btn');
  const signOutBtn = document.getElementById('auth-signout-btn');

  if (currentUser) {
    signInBtn.style.display = 'none';
    signOutBtn.style.display = '';
  } else {
    signInBtn.style.display = '';
    signOutBtn.style.display = 'none';
  }
  updateAuthGates();
}

function updateAuthGates() {
  const signedIn = isSignedIn();
  GATED_TABS.forEach(tab => {
    const gate = document.getElementById('auth-gate-' + tab);
    const content = document.getElementById(tab + '-content');
    if (gate) gate.style.display = signedIn ? 'none' : 'block';
    if (content) content.style.display = signedIn ? '' : 'none';
  });
}

// ==================== AUTH ACTIONS ====================
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch(err => {
    // Fallback to redirect for mobile Safari
    if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
      auth.signInWithRedirect(provider);
    } else {
      console.error('Sign-in error:', err);
      showToast('Sign-in failed');
    }
  });
}

function signOutUser() {
  auth.signOut().then(() => {
    showToast('Signed out');
  });
}

// ==================== AUTH STATE LISTENER ====================
auth.onAuthStateChanged(async function(user) {
  const wasSignedIn = currentUser !== null;
  currentUser = user;
  updateAuthUI();

  if (user) {
    // Show loading state
    GATED_TABS.forEach(tab => {
      const content = document.getElementById(tab + '-content');
      if (content) content.innerHTML = '<div class="auth-loading"></div>' + content.innerHTML;
    });

    await loadUserData(user.uid);

    // Remove loading spinners
    document.querySelectorAll('.auth-loading').forEach(el => el.remove());

    // Check for local data to migrate
    if (!wasSignedIn) {
      checkMigration();
    }

    if (!wasSignedIn) showToast('Signed in!');

    // Refresh visible tab
    refreshCurrentTab();
  } else {
    cachedLogs = null;
    cachedSaved = null;
    cachedSettings = null;
    dataLoaded = false;

    if (wasSignedIn) {
      refreshCurrentTab();
    }
  }
});

function refreshCurrentTab() {
  const activeTab = document.querySelector('.nav-btn.active');
  if (!activeTab) return;
  const tab = activeTab.dataset.tab;
  if (tab === 'saved' && typeof renderSavedWorkouts === 'function') renderSavedWorkouts();
  if (tab === 'log' && typeof renderLog === 'function') renderLog();
  if (tab === 'insights' && typeof renderInsights === 'function') renderInsights();
  // Reload settings into the form
  if (typeof loadSettings === 'function') loadSettings();
}

// ==================== FIRESTORE DATA LOADING ====================
async function loadUserData(uid) {
  try {
    const [settingsSnap, logsSnap, savedSnap] = await Promise.all([
      db.collection('users').doc(uid).collection('settings').doc('preferences').get(),
      db.collection('users').doc(uid).collection('logs').get(),
      db.collection('users').doc(uid).collection('saved').get()
    ]);

    cachedSettings = settingsSnap.exists ? settingsSnap.data() : {};
    cachedLogs = logsSnap.docs.map(d => d.data());
    cachedSaved = savedSnap.docs.map(d => d.data());
    dataLoaded = true;
  } catch (err) {
    console.error('Failed to load user data:', err);
    showToast('Failed to load data');
    cachedSettings = {};
    cachedLogs = [];
    cachedSaved = [];
    dataLoaded = true;
  }
}

// ==================== STORAGE FUNCTIONS ====================
function getWorkoutLogs() {
  if (isSignedIn() && cachedLogs !== null) return cachedLogs;
  try { return JSON.parse(localStorage.getItem('kf_logs') || '[]'); }
  catch { return []; }
}

function saveWorkoutLogs(logs) {
  if (isSignedIn()) {
    cachedLogs = logs;
    saveLogsToFirestore(logs);
  } else {
    localStorage.setItem('kf_logs', JSON.stringify(logs));
  }
}

function getSettings() {
  if (isSignedIn() && cachedSettings !== null) return cachedSettings;
  try {
    return JSON.parse(localStorage.getItem('kf_settings') || '{}');
  } catch { return {}; }
}

function saveSettingsToStorage(s) {
  if (isSignedIn()) {
    cachedSettings = s;
    saveSettingsToFirestore(s);
  } else {
    localStorage.setItem('kf_settings', JSON.stringify(s));
  }
}

function getSavedWorkouts() {
  if (isSignedIn() && cachedSaved !== null) return cachedSaved;
  try { return JSON.parse(localStorage.getItem('kf_saved') || '[]'); }
  catch { return []; }
}

function saveSavedWorkouts(w) {
  if (isSignedIn()) {
    cachedSaved = w;
    saveSavedToFirestore(w);
  } else {
    localStorage.setItem('kf_saved', JSON.stringify(w));
  }
}

// ==================== FIRESTORE WRITES ====================
function saveLogsToFirestore(logs) {
  if (!currentUser) return;
  const uid = currentUser.uid;
  const col = db.collection('users').doc(uid).collection('logs');

  // Batch write all logs (replace strategy for simplicity)
  const batch = db.batch();
  logs.forEach(log => {
    const docRef = col.doc(String(log.id));
    batch.set(docRef, log);
  });
  batch.commit().catch(err => console.error('Save logs error:', err));
}

function saveSavedToFirestore(saved) {
  if (!currentUser) return;
  const uid = currentUser.uid;
  const col = db.collection('users').doc(uid).collection('saved');

  const batch = db.batch();
  saved.forEach(s => {
    const docRef = col.doc(String(s.id));
    batch.set(docRef, s);
  });
  batch.commit().catch(err => console.error('Save saved error:', err));
}

function saveSettingsToFirestore(s) {
  if (!currentUser) return;
  db.collection('users').doc(currentUser.uid).collection('settings').doc('preferences')
    .set(s).catch(err => console.error('Save settings error:', err));
}

function deleteLogFromFirestore(id) {
  if (!currentUser) return;
  db.collection('users').doc(currentUser.uid).collection('logs').doc(String(id))
    .delete().catch(err => console.error('Delete log error:', err));
}

function deleteSavedFromFirestore(id) {
  if (!currentUser) return;
  db.collection('users').doc(currentUser.uid).collection('saved').doc(String(id))
    .delete().catch(err => console.error('Delete saved error:', err));
}

// ==================== MIGRATION ====================
function checkMigration() {
  const localLogs = JSON.parse(localStorage.getItem('kf_logs') || '[]');
  const localSaved = JSON.parse(localStorage.getItem('kf_saved') || '[]');
  const localSettings = JSON.parse(localStorage.getItem('kf_settings') || '{}');

  const hasLocalData = localLogs.length > 0 || localSaved.length > 0 || Object.keys(localSettings).length > 0;
  const firestoreEmpty = cachedLogs.length === 0 && cachedSaved.length === 0 && Object.keys(cachedSettings).length === 0;

  if (hasLocalData && firestoreEmpty) {
    const parts = [];
    if (localLogs.length > 0) parts.push(localLogs.length + ' workout log' + (localLogs.length > 1 ? 's' : ''));
    if (localSaved.length > 0) parts.push(localSaved.length + ' saved workout' + (localSaved.length > 1 ? 's' : ''));
    if (Object.keys(localSettings).length > 0) parts.push('your settings');

    document.getElementById('migration-msg').textContent =
      'Found ' + parts.join(', ') + ' on this device. Import to your account?';
    document.getElementById('migration-modal').classList.add('show');
  }
}

async function runMigration() {
  document.getElementById('migration-modal').classList.remove('show');
  showToast('Importing data...');

  try {
    const localLogs = JSON.parse(localStorage.getItem('kf_logs') || '[]');
    const localSaved = JSON.parse(localStorage.getItem('kf_saved') || '[]');
    const localSettings = JSON.parse(localStorage.getItem('kf_settings') || '{}');

    if (localLogs.length > 0) {
      cachedLogs = localLogs;
      await saveLogsToFirestore(localLogs);
    }
    if (localSaved.length > 0) {
      cachedSaved = localSaved;
      await saveSavedToFirestore(localSaved);
    }
    if (Object.keys(localSettings).length > 0) {
      cachedSettings = localSettings;
      await saveSettingsToFirestore(localSettings);
    }

    // Clear localStorage
    localStorage.removeItem('kf_logs');
    localStorage.removeItem('kf_saved');
    localStorage.removeItem('kf_settings');

    showToast('Data imported!');
    refreshCurrentTab();
    if (typeof loadSettings === 'function') loadSettings();
  } catch (err) {
    console.error('Migration error:', err);
    showToast('Import failed');
  }
}

function skipMigration() {
  document.getElementById('migration-modal').classList.remove('show');
  // Clear localStorage so prompt doesn't reappear
  localStorage.removeItem('kf_logs');
  localStorage.removeItem('kf_saved');
  localStorage.removeItem('kf_settings');
}

// ==================== TOAST ====================
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}
