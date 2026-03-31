import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    // ... Tus credenciales actuales (apiKey, authDomain, etc.)
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// --- ESTA ES LA CLAVE PARA MANTENER LA SESIÓN ---
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistencia de sesión activada");
  })
  .catch((error) => {
    console.error("Error en persistencia:", error.message);
  });

export { auth, db, provider };
