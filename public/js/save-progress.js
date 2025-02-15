// public/js/save-progress.js
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const db = getFirestore();

// Guardar progreso
async function saveProgress(userId, progress) {
  await setDoc(doc(db, "users", userId), { progress });
}

// Obtener progreso
async function getProgress(userId) {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().progress;
  }
  return null;
}