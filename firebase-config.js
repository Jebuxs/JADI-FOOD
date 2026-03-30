// firebase-config.js - Configuración Centralizada JADI-FOOD
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Tu configuración de Firebase extraída de tu consola
const firebaseConfig = {
  apiKey: "AIzaSyAiKhNXzEBgmWzRasdVdbUxfT0WIryoLUg",
  authDomain: "jadi-retaurants.firebaseapp.com",
  projectId: "jadi-retaurants",
  storageBucket: "jadi-retaurants.firebasestorage.app",
  messagingSenderId: "409540206611",
  appId: "1:409540206611:web:f76f20f95848fb77599fe6",
  measurementId: "G-84J6XG6JWS"
};

// Inicialización de servicios
const app = initializeApp(firebaseConfig);

// Exportamos las herramientas para usarlas en index.html y otros archivos
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

// Configuración opcional del proveedor de Google
provider.setCustomParameters({
  prompt: 'select_account'
});
