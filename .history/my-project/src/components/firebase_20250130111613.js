// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // For Firebase Authentication
// import { getAnalytics } from "firebase/analytics"; // Optional if using analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbJ0LWJOG7xecQUhc7-0NGPvu33pYSSAg",
  authDomain: "assignment-f6a48.firebaseapp.com",
  projectId: "assignment-f6a48",
  storageBucket: "assignment-f6a48.firebasestorage.app",
  messagingSenderId: "801572322432",
  appId: "1:801572322432:web:b56f932b3f50b6140f7a65",
  measurementId: "G-SBG6GTP1V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Optional if using analytics
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth };
