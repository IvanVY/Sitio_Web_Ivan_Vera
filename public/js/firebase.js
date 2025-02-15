// public/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

let firebaseConfig = null;

async function loadFirebaseConfig() {
  const response = await fetch('/firebase-config');
  firebaseConfig = await response.json();
  initializeFirebase();
}

function initializeFirebase() {
  if (firebaseConfig) {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Exporta las funciones necesarias a variables globales
    window.auth = auth;
    window.GoogleAuthProvider = GoogleAuthProvider;
    window.GithubAuthProvider = GithubAuthProvider;
    window.signInWithPopup = signInWithPopup;
    window.onAuthStateChanged = onAuthStateChanged.bind(auth); // Asigna al contexto correcto
  }
}

loadFirebaseConfig();