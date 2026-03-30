// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiKhNXzEBgmWzRasdVdbUxfT0WIryoLUg",
  authDomain: "jadi-retaurants.firebaseapp.com",
  projectId: "jadi-retaurants",
  storageBucket: "jadi-retaurants.firebasestorage.app",
  messagingSenderId: "409540206611",
  appId: "1:409540206611:web:f76f20f95848fb77599fe6",
  measurementId: "G-84J6XG6JWS"
};

// Inicializamos Firebase y lo exportamos para que otros archivos lo usen
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
