// ==================== FIREBASE CONFIG ====================
// Fill in your Firebase project config from the Firebase Console:
// Project Settings > General > Your apps > Web app > Config

const firebaseConfig = {
  apiKey: "AIzaSyDyAyV6no-78AfdD1qeUmJKdomfIwUKba0",
  authDomain: "kettlebell-genie.firebaseapp.com",
  projectId: "kettlebell-genie",
  storageBucket: "kettlebell-genie.firebasestorage.app",
  messagingSenderId: "76187922009",
  appId: "1:76187922009:web:4fd27fc7bf4f9c6cc40b48"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Enable offline persistence so writes queue when offline
db.enablePersistence({ synchronizeTabs: true }).catch(err => {
  if (err.code === 'failed-precondition') {
    console.warn('Firestore persistence failed: multiple tabs open');
  } else if (err.code === 'unimplemented') {
    console.warn('Firestore persistence not available in this browser');
  }
});
