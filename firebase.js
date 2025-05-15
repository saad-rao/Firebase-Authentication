// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged , signOut ,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBMOfSXvZ4pKcGut-B0uiUS81cHG4f_WHA",
    authDomain: "login-signup-1f78f.firebaseapp.com",
    projectId: "login-signup-1f78f",
    storageBucket: "login-signup-1f78f.firebasestorage.app",
    messagingSenderId: "338518281827",
    appId: "1:338518281827:web:fa2f7995cfa2186cac7256",
    measurementId: "G-06ZXKD3LBX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  
// console.log(app);

  export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged , signOut, sendPasswordResetEmail }